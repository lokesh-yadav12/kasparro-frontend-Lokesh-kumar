import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: number;
  suffix?: string;
  trend?: 'up' | 'down' | 'stable';
  description?: string;
}

export function MetricCard({ title, value, suffix = '', trend, description }: MetricCardProps) {
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  
  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 break-words">
            {value}{suffix}
          </p>
          {description && (
            <p className="text-xs text-gray-500 mt-2">{description}</p>
          )}
        </div>
        
        {trend && (
          <div
            className={cn(
              'p-2 rounded-full flex-shrink-0',
              trend === 'up' && 'bg-green-100 text-green-600',
              trend === 'down' && 'bg-red-100 text-red-600',
              trend === 'stable' && 'bg-gray-100 text-gray-600'
            )}
          >
            <TrendIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        )}
      </div>
    </Card>
  );
}
