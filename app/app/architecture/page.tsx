import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function ArchitecturePage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">System Architecture</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Understanding how Kasparro processes brand data into AI-SEO intelligence
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="space-y-4 sm:space-y-6">
          {/* Input Assembler */}
          <Card className="p-4 sm:p-6 bg-white dark:bg-gray-800">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Input Assembler</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  Collects and normalizes raw data from multiple sources
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white mb-2">Data Sources</h3>
                    <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Website crawl data</li>
                      <li>• Backlink profiles</li>
                      <li>• Competitor analysis</li>
                      <li>• Search rankings</li>
                      <li>• Technical SEO metrics</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white mb-2">Processing</h3>
                    <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Data validation</li>
                      <li>• Normalization</li>
                      <li>• Deduplication</li>
                      <li>• Quality scoring</li>
                      <li>• Timestamp tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-600 rotate-90" />
          </div>

          {/* Context Pack */}
          <Card className="p-6 bg-white dark:bg-gray-800">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 dark:bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Context Pack</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Enriches raw data with semantic context and relationships
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">Enrichment</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Entity extraction</li>
                      <li>• Semantic clustering</li>
                      <li>• Intent classification</li>
                      <li>• Topic modeling</li>
                      <li>• Relationship mapping</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">Context Building</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Industry context</li>
                      <li>• Competitive landscape</li>
                      <li>• Historical trends</li>
                      <li>• Authority signals</li>
                      <li>• Trust indicators</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-600 rotate-90" />
          </div>

          {/* Audit Modules */}
          <Card className="p-6 bg-white dark:bg-gray-800">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 dark:bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Audit Modules (7 Parallel Analyses)</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Specialized modules evaluate different dimensions of AI-SEO readiness
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Brand Presence</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">AI mention frequency</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Content Quality</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Depth & accuracy</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">E-E-A-T</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Trust signals</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Semantic Relevance</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Intent alignment</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Competitive Position</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Market standing</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Technical SEO</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Crawler accessibility</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 md:col-span-3">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">AI Readiness</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Overall preparedness for AI-first search</p>
                  </div>
                </div>
                <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">Each Module Produces:</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Score (0-100) with status classification</li>
                    <li>• Key insights highlighting strengths</li>
                    <li>• Issues with severity levels and impact analysis</li>
                    <li>• Prioritized recommendations for improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-600 rotate-90" />
          </div>

          {/* Output Surfaces */}
          <Card className="p-6 bg-white dark:bg-gray-800">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 dark:bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Output Surfaces</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Structured data delivered through multiple interfaces
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">Dashboard</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• High-level metrics</li>
                      <li>• Trend visualization</li>
                      <li>• Quick insights</li>
                      <li>• Brand comparison</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">Audit View</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Detailed module reports</li>
                      <li>• Issue tracking</li>
                      <li>• Recommendations</li>
                      <li>• Action prioritization</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">API Endpoints</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Programmatic access</li>
                      <li>• Webhook integrations</li>
                      <li>• Custom reporting</li>
                      <li>• Data exports</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">Reports</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• PDF exports</li>
                      <li>• Executive summaries</li>
                      <li>• Historical comparisons</li>
                      <li>• Stakeholder sharing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* System Characteristics */}
        <Card className="p-6 mt-8 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">System Characteristics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Modular Architecture</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Each audit module operates independently, allowing for parallel processing and 
                easy addition of new analysis dimensions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data-Driven</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All insights, scores, and recommendations are derived from structured data analysis, 
                not subjective assessments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Scalable</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Architecture supports analysis of multiple brands, historical tracking, and 
                competitive benchmarking at scale.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Extensible</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                New data sources, audit modules, and output formats can be added without 
                disrupting existing functionality.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}