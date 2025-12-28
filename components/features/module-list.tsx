'use client';

import { cn } from '@/lib/utils';
import { ScoreBadge } from './score-badge';
import type { AuditModule, ModuleKey } from '@/types';

interface ModuleListProps {
  modules: Record<ModuleKey, AuditModule>;
  selectedModule: ModuleKey;
  onSelectModule: (moduleKey: ModuleKey) => void;
}

export function ModuleList({ modules, selectedModule, onSelectModule }: ModuleListProps) {
  return (
    <div className="space-y-2">
      {(Object.entries(modules) as [ModuleKey, AuditModule][]).map(([key, module]) => (
        <button
          key={key}
          onClick={() => onSelectModule(key)}
          className={cn(
            'w-full text-left p-3 sm:p-4 rounded-lg border transition-all duration-300',
            'transform hover:scale-[1.02] active:scale-[0.98]',
            selectedModule === key
              ? 'bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 shadow-lg scale-[1.02]'
              : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700 hover:shadow-md'
          )}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <span className={cn(
              "font-medium text-xs sm:text-sm transition-all duration-300",
              selectedModule === key ? "font-bold text-white" : "text-gray-900 dark:text-white"
            )}>
              {module.name}
            </span>
            <div className="transform transition-all duration-300">
              <ScoreBadge score={module.score} status={module.status} />
            </div>
          </div>
          <p
            className={cn(
              'text-xs leading-relaxed transition-all duration-300',
              selectedModule === key ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
            )}
          >
            {module.description}
          </p>
        </button>
      ))}
    </div>
  );
}