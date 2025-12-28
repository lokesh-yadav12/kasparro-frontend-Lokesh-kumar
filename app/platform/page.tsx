import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card } from '@/components/ui/card';
import { ArrowRight, Database, Cpu, FileText } from 'lucide-react';

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Platform Overview
            </h1>
            <p className="text-xl text-gray-600">
              Understanding how Kasparro transforms brand data into AI-SEO intelligence
            </p>
          </div>

          {/* Audit Pipeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              The Audit Pipeline
            </h2>
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Input Assembly</h3>
                    <p className="text-gray-600 mb-3">
                      We collect comprehensive data about your brand's digital footprint
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Website content and structure</li>
                      <li>• Backlink profile and authority signals</li>
                      <li>• Competitor landscape analysis</li>
                      <li>• Existing search rankings and visibility</li>
                      <li>• Structured data and technical SEO elements</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Context Packing</h3>
                    <p className="text-gray-600 mb-3">
                      Raw data is enriched with semantic context and structured for AI analysis
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Entity extraction and relationship mapping</li>
                      <li>• Semantic clustering of content topics</li>
                      <li>• Intent classification for key pages</li>
                      <li>• Trust signal aggregation</li>
                      <li>• Competitive positioning matrix</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Module Analysis & Output</h3>
                    <p className="text-gray-600 mb-3">
                      7 specialized modules evaluate your AI-SEO readiness and generate actionable insights
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Scored assessments (0-100) for each dimension</li>
                      <li>• Specific issues identified with severity levels</li>
                      <li>• Prioritized recommendations for improvement</li>
                      <li>• Competitive benchmarking data</li>
                      <li>• Trend analysis and progress tracking</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* What Data We Consume */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What Data Kasparro Consumes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Brand Assets</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Website content and metadata</li>
                  <li>• Product/service descriptions</li>
                  <li>• Company information and credentials</li>
                  <li>• Author bios and expertise signals</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Technical Data</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Structured data markup (Schema.org)</li>
                  <li>• Site architecture and crawlability</li>
                  <li>• Core Web Vitals and performance</li>
                  <li>• Mobile usability metrics</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Authority Signals</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Backlink profile and quality</li>
                  <li>• Domain authority metrics</li>
                  <li>• Brand mentions across the web</li>
                  <li>• Social proof and reviews</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Competitive Context</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Competitor content strategies</li>
                  <li>• Market positioning analysis</li>
                  <li>• Share of voice in AI responses</li>
                  <li>• Keyword gap analysis</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* What Brands Receive */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What Brands Receive
            </h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Audit Reports</h3>
                  <p className="text-sm text-gray-600">
                    Detailed analysis across 7 modules with scores, insights, and recommendations
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Visibility Dashboard</h3>
                  <p className="text-sm text-gray-600">
                    Real-time tracking of your brand's presence in AI-generated responses
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Actionable Recommendations</h3>
                  <p className="text-sm text-gray-600">
                    Prioritized action items with clear implementation guidance
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Intelligence</h3>
                  <p className="text-sm text-gray-600">
                    Understand how you stack up against competitors in AI search
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                  <p className="text-sm text-gray-600">
                    Monitor improvements over time with trend analysis
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* How It's Different */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How Kasparro Differs from Traditional SEO Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-3">Traditional SEO Tools</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Focus on search engine rankings</li>
                  <li>• Keyword-centric optimization</li>
                  <li>• Link building metrics</li>
                  <li>• Page speed and technical audits</li>
                  <li>• SERP position tracking</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-3">Kasparro (AI-SEO)</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Focus on AI citation frequency</li>
                  <li>• Semantic relevance optimization</li>
                  <li>• Trust and authority signals</li>
                  <li>• AI-readiness assessment</li>
                  <li>• Presence in AI responses tracking</li>
                </ul>
              </Card>
            </div>
            <Card className="p-6 mt-6 bg-blue-50 border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>The Key Difference:</strong> Traditional SEO optimizes for search engines to show your link. 
                AI-SEO optimizes for AI models to cite your brand as the authoritative source in their responses. 
                As users increasingly get answers directly from AI without clicking through, being the cited source 
                becomes more valuable than ranking #1.
              </p>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
