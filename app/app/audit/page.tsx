'use client';

import { useState } from 'react';
import { ModuleList } from '@/components/features/module-list';
import { ModuleDetail } from '@/components/features/module-detail';
import auditDataJson from '@/data/audit-data.json';
import type { AuditData, ModuleKey } from '@/types';

const auditData = auditDataJson as Record<string, AuditData>;

export default function AuditPage() {
  const [selectedModule, setSelectedModule] = useState<ModuleKey>('brandPresence');
  
  // Using brand-1 data for this demo
  const brandAudit = auditData['brand-1'];
  const currentModule = brandAudit.modules[selectedModule];

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
          modules={brandAudit.modules}
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