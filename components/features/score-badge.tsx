import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ScoreBadgeProps {
  score: number;
  status: 'excellent' | 'good' | 'needs-improvement' | 'critical';
}

export function ScoreBadge({ score, status }: ScoreBadgeProps) {
  return (
    <Badge
      className={cn(
        'text-sm font-semibold',
        status === 'excellent' && 'bg-green-100 text-green-800 hover:bg-green-100',
        status === 'good' && 'bg-blue-100 text-blue-800 hover:bg-blue-100',
        status === 'needs-improvement' && 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
        status === 'critical' && 'bg-red-100 text-red-800 hover:bg-red-100'
      )}
    >
      {score}/100
    </Badge>
  );
}
