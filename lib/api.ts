// API client for Kasparro backend
// This simulates real API calls but is structured for easy backend integration

import type { Brand, BrandSnapshot, AuditData } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Simulated API delay for realistic behavior
const simulateDelay = (ms: number = 300) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Error handling wrapper
async function apiCall<T>(
  endpoint: string,
  options?: RequestInit
): Promise<{ data?: T; error?: string }> {
  try {
    // In production, this would be a real fetch call
    // const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    // if (!response.ok) throw new Error(response.statusText);
    // return { data: await response.json() };
    
    // For now, simulate API call with local data
    await simulateDelay();
    
    // Import data dynamically based on endpoint
    if (endpoint === '/brands') {
      const brands = await import('@/data/brands.json');
      return { data: brands.default as T };
    }
    
    if (endpoint === '/snapshots') {
      const snapshots = await import('@/data/snapshots.json');
      return { data: snapshots.default as T };
    }
    
    if (endpoint.startsWith('/audit/')) {
      const brandId = endpoint.split('/')[2];
      const auditData = await import('@/data/audit-data.json');
      const data = auditData.default as Record<string, AuditData>;
      return { data: data[brandId] as T };
    }
    
    throw new Error('Endpoint not found');
  } catch (error) {
    return { 
      error: error instanceof Error ? error.message : 'An error occurred' 
    };
  }
}

// API methods
export const api = {
  // Get all brands
  getBrands: async (): Promise<{ data?: Brand[]; error?: string }> => {
    return apiCall<Brand[]>('/brands');
  },

  // Get brand by ID
  getBrand: async (id: string): Promise<{ data?: Brand; error?: string }> => {
    const result = await apiCall<Brand[]>('/brands');
    if (result.error) return { error: result.error };
    const brand = result.data?.find(b => b.id === id);
    return brand ? { data: brand } : { error: 'Brand not found' };
  },

  // Get all snapshots
  getSnapshots: async (): Promise<{ data?: BrandSnapshot[]; error?: string }> => {
    return apiCall<BrandSnapshot[]>('/snapshots');
  },

  // Get snapshot by brand ID
  getSnapshot: async (brandId: string): Promise<{ data?: BrandSnapshot; error?: string }> => {
    const result = await apiCall<BrandSnapshot[]>('/snapshots');
    if (result.error) return { error: result.error };
    const snapshot = result.data?.find(s => s.brandId === brandId);
    return snapshot ? { data: snapshot } : { error: 'Snapshot not found' };
  },

  // Get audit data for a brand
  getAuditData: async (brandId: string): Promise<{ data?: AuditData; error?: string }> => {
    return apiCall<AuditData>(`/audit/${brandId}`);
  },
};

// Hook for API calls with loading and error states
export function useApi() {
  return { api };
}
