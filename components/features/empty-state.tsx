import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';
import Link from 'next/link';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({ title, description, icon, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <Card className="p-12 animate-in fade-in duration-500">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 animate-in zoom-in duration-500 delay-100">
          {icon || <FileQuestion className="w-8 h-8 text-muted-foreground" />}
        </div>
        <h3 className="text-lg font-semibold mb-2 animate-in slide-in-from-bottom duration-500 delay-200">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-md mb-6 animate-in slide-in-from-bottom duration-500 delay-300">{description}</p>
        {actionLabel && actionHref && (
          <Link href={actionHref} className="animate-in slide-in-from-bottom duration-500 delay-400">
            <Button>{actionLabel}</Button>
          </Link>
        )}
      </div>
    </Card>
  );
}
