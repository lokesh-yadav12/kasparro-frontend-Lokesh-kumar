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
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
      {/* Left Sidebar - Module List */}
      <aside className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r bg-white p-4 sm:p-6 overflow-y-auto">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">The 7 checks</h2>
          <p className="text-xs sm:text-sm text-gray-600">
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
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <ModuleDetail module={currentModule} />
      </main>
    </div>
  );
}
