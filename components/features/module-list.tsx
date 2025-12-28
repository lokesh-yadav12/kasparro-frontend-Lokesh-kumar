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
              ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]'
              : 'bg-card hover:bg-accent border-border hover:shadow-md'
          )}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <span className={cn(
              "font-medium text-xs sm:text-sm transition-all duration-300",
              selectedModule === key && "font-bold"
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
              selectedModule === key ? 'text-primary-foreground/80' : 'text-muted-foreground'
            )}
          >
            {module.description}
          </p>
        </button>
      ))}
    </div>
  );
}
