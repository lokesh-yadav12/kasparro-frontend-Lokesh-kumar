// Simple authentication system
// In production, this would integrate with NextAuth.js or similar

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

// Mock user for demo purposes
const MOCK_USER: User = {
  id: 'user-1',
  email: 'demo@kasparro.com',
  name: 'Demo User',
  role: 'user',
};

// Simulated auth state
let currentUser: User | null = MOCK_USER; // Auto-logged in for demo

export const auth = {
  // Get current user
  getCurrentUser: (): User | null => {
    return currentUser;
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return currentUser !== null;
  },

  // Login (simulated)
  login: async (email: string, password: string): Promise<{ user?: User; error?: string }> => {
    // In production: await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) })
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (email && password) {
      currentUser = MOCK_USER;
      return { user: MOCK_USER };
    }
    
    return { error: 'Invalid credentials' };
  },

  // Logout (simulated)
  logout: async (): Promise<void> => {
    // In production: await fetch('/api/auth/logout', { method: 'POST' })
    currentUser = null;
  },

  // Check if user has access to dashboard
  canAccessDashboard: (): boolean => {
    return auth.isAuthenticated();
  },
};
