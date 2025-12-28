import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScoreBadge } from './score-badge';
import { AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';
import type { AuditModule } from '@/types';
import { cn } from '@/lib/utils';

interface ModuleDetailProps {
  module: AuditModule;
}

export function ModuleDetail({ module }: ModuleDetailProps) {
  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="animate-in slide-in-from-top duration-500">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
          <h2 className="text-xl sm:text-2xl font-bold">{module.name}</h2>
          <div className="transform transition-all hover:scale-110">
            <ScoreBadge score={module.score} status={module.status} />
          </div>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground">{module.description}</p>
      </div>

      <Separator />

      {/* Key Insights */}
      <Card className="p-4 sm:p-6 animate-in slide-in-from-left duration-500 delay-100 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
          <h3 className="font-semibold text-sm sm:text-base">What's working</h3>
        </div>
        <ul className="space-y-2">
          {module.insights.map((insight, index) => (
            <li 
              key={index} 
              className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 animate-in fade-in duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-green-600 mt-0.5 flex-shrink-0">•</span>
              <span>{insight}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Issues */}
      {module.issues.length > 0 && (
        <Card className="p-4 sm:p-6 animate-in slide-in-from-left duration-500 delay-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
            <h3 className="font-semibold text-sm sm:text-base">Problems we found</h3>
          </div>
          <div className="space-y-4">
            {module.issues.map((issue, index) => (
              <div 
                key={issue.id} 
                className="border-l-4 border-red-200 dark:border-red-900 pl-3 sm:pl-4 animate-in fade-in duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <Badge
                    className={cn(
                      'text-xs transition-all hover:scale-105',
                      issue.severity === 'high' && 'bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-100',
                      issue.severity === 'medium' && 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-100',
                      issue.severity === 'low' && 'bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-100'
                    )}
                  >
                    {issue.severity}
                  </Badge>
                  <span className="font-medium text-xs sm:text-sm">{issue.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{issue.description}</p>
                <p className="text-xs text-muted-foreground/70 italic">Why it matters: {issue.impact}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Recommendations */}
      <Card className="p-4 sm:p-6 animate-in slide-in-from-left duration-500 delay-300 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
          <h3 className="font-semibold text-sm sm:text-base">What to do about it</h3>
        </div>
        <ul className="space-y-3">
          {module.recommendations.map((recommendation, index) => (
            <li 
              key={index} 
              className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 animate-in fade-in duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">{index + 1}.</span>
              <span>{recommendation}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
