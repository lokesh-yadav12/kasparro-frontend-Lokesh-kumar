'use client';

import { useState, useEffect } from 'react';
import { ModuleList } from '@/components/features/module-list';
import { ModuleDetail } from '@/components/features/module-detail';
import { Card } from '@/components/ui/card';
import { api } from '@/lib/api';
import type { AuditData, ModuleKey } from '@/types';
import { AlertCircle, Loader2 } from 'lucide-react';

export default function AuditPage() {
  const [selectedModule, setSelectedModule] = useState<ModuleKey>('brandPresence');
  const [auditData, setAuditData] = useState<AuditData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Load audit data
  useEffect(() => {
    const loadAuditData = async () => {
      setIsLoading(true);
      setError(null);
      
      // Using brand-1 for demo
      const result = await api.getAuditData('brand-1');
      
      if (result.error) {
        setError(result.error);
      } else if (result.data) {
        setAuditData(result.data);
      }
      
      setIsLoading(false);
    };
    
    loadAuditData();
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading audit data...</p>
        </div>
      </div>
    );
  }
  
  if (error || !auditData) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="p-8 max-w-md w-full">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">Failed to load audit data</h2>
            <p className="text-sm text-muted-foreground mb-6">{error || 'No data available'}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Try again
            </button>
          </div>
        </Card>
      </div>
    );
  }
  
  const currentModule = auditData.modules[selectedModule];

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-white dark:bg-gray-900">
      {/* Left Sidebar - Module List */}
      <aside className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 sm:p-6 overflow-y-auto">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">The 7 checks</h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Pick one to see what we found
          </p>
        </div>
        <ModuleList
          modules={auditData.modules}
          selectedModule={selectedModule}
          onSelectModule={setSelectedModule}
        />
      </aside>

      {/* Main Panel - Module Detail */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900">
        <ModuleDetail module={currentModule} />
      </main>
    </div>
  );
}