'use client';

import { useState, useEffect } from 'react';
import { MetricCard } from '@/components/features/metric-card';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DashboardSkeleton } from '@/components/features/dashboard-skeleton';
import brandsData from '@/data/brands.json';
import snapshotsData from '@/data/snapshots.json';
import type { Brand, BrandSnapshot } from '@/types';

const brands = brandsData as Brand[];
const snapshots = snapshotsData as BrandSnapshot[];

export default function DashboardPage() {
  const [selectedBrandId, setSelectedBrandId] = useState<string>(brands[0].id);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [selectedBrandId]);
  
  const selectedBrand = brands.find(b => b.id === selectedBrandId);
  const snapshot = snapshots.find(s => s.brandId === selectedBrandId);

  if (!selectedBrand || !snapshot) {
    return <DashboardSkeleton />;
  }

  const lastAuditDate = new Date(snapshot.lastAuditDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500 bg-white dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="mb-6 sm:mb-8 animate-in slide-in-from-top duration-500">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Your AI visibility</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Here's where you stand right now</p>
      </div>

      {/* Brand Selector */}
      <Card className="p-4 sm:p-6 mb-6 sm:mb-8 animate-in slide-in-from-left duration-500 delay-100 bg-white dark:bg-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="w-full sm:w-auto">
            <label className="text-sm font-medium mb-2 block text-gray-900 dark:text-white">
              Select Brand
            </label>
            <Select value={selectedBrandId} onValueChange={setSelectedBrandId}>
              <SelectTrigger className="w-full sm:w-[300px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand.id} value={brand.id}>
                    {brand.name} ({brand.domain})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">Industry</p>
            <p className="font-semibold text-gray-900 dark:text-white">{selectedBrand.industry}</p>
          </div>
        </div>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {[
          { delay: 200, component: <MetricCard
            title="AI Visibility Score"
            value={snapshot.aiVisibilityScore}
            suffix="/100"
            trend={snapshot.trend}
            description="How often you show up in AI answers"
          /> },
          { delay: 300, component: <MetricCard
            title="Trust Score"
            value={snapshot.trustScore}
            suffix="/100"
            trend={snapshot.trend}
            description="How credible AI models think you are"
          /> },
          { delay: 400, component: <MetricCard
            title="Keyword Coverage"
            value={snapshot.keywordCoverage}
            suffix="%"
            trend={snapshot.trend}
            description="Target keywords where you appear"
          /> },
          { delay: 500, component: <Card className="p-4 sm:p-6 bg-white dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Last checked</p>
            <p className="text-base sm:text-lg font-semibold break-words text-gray-900 dark:text-white">{lastAuditDate}</p>
          </Card> }
        ].map((item, index) => (
          <div 
            key={index}
            className="animate-in slide-in-from-bottom duration-500"
            style={{ animationDelay: `${item.delay}ms` }}
          >
            {item.component}
          </div>
        ))}
      </div>

      {/* Quick Insights */}
      <Card className="p-4 sm:p-6 animate-in slide-in-from-bottom duration-500 delay-600 bg-white dark:bg-gray-800">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-white">What this means</h2>
        <div className="space-y-3 sm:space-y-4">
          {[
            {
              color: 'bg-green-500 dark:bg-green-400',
              title: 'Your trust signals are solid',
              description: `${snapshot.trustScore}/100 is above average. AI models see you as credible.`
            },
            {
              color: 'bg-yellow-500 dark:bg-yellow-400',
              title: 'Keyword coverage could be better',
              description: `Only ${snapshot.keywordCoverage}% of your target keywords show up in AI responses. There's room to grow here.`
            },
            {
              color: 'bg-blue-500 dark:bg-blue-400',
              title: snapshot.trend === 'up' ? 'Things are moving in the right direction' : snapshot.trend === 'down' ? 'Heads up—visibility is dropping' : 'Holding steady',
              description: snapshot.trend === 'up' 
                ? 'Your recent changes are working. Keep it up.'
                : snapshot.trend === 'down'
                ? 'Something changed recently. Check the audit page to see what happened.'
                : 'No major changes lately. Might be time to push forward.'
            }
          ].map((insight, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 animate-in fade-in duration-300"
              style={{ animationDelay: `${700 + index * 100}ms` }}
            >
              <div className={`w-2 h-2 ${insight.color} rounded-full mt-2 flex-shrink-0`}></div>
              <div>
                <p className="font-medium text-sm sm:text-base text-gray-900 dark:text-white">{insight.title}</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}