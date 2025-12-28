import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Brain, Target, Zap, Shield, TrendingUp, Network, Search } from 'lucide-react';

export default function HomePage() {
  const modules = [
    { icon: Target, name: 'Brand Presence', description: 'Track AI mentions across ChatGPT, Gemini, Perplexity' },
    { icon: Search, name: 'Content Quality', description: 'Evaluate depth, accuracy, and AI-friendliness' },
    { icon: Shield, name: 'E-E-A-T Score', description: 'Measure trust and authority signals' },
    { icon: Brain, name: 'Semantic Relevance', description: 'Align content with user intent' },
    { icon: TrendingUp, name: 'Competitive Position', description: 'Benchmark against competitors' },
    { icon: Zap, name: 'Technical SEO', description: 'Optimize for AI crawler accessibility' },
    { icon: Network, name: 'AI Readiness', description: 'Prepare for AI-first search era' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your brand needs to show up in{' '}
            <span className="text-blue-600">AI answers</span>, not just search results
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
            When someone asks ChatGPT or Perplexity about your industry, does your brand get mentioned? 
            We help you understand where you stand and what to fix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/app/dashboard">
              <Button size="lg" className="gap-2 text-base w-full sm:w-auto">
                See how it works <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/platform">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                What we do
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why AI-SEO is Different */}
      <section className="bg-gray-50 py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The game changed
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl">
              People don't click through 10 blue links anymore. They ask AI and get answers. 
              If your brand isn't in those answers, you're invisible.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-6 bg-white">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-3">Old way (Traditional SEO)</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Rank #1 on Google. Get clicks. Hope people convert. Compete with 10 other results.
                </p>
              </Card>
              <Card className="p-4 sm:p-6 border-2 border-blue-600 bg-blue-50">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-3">New way (AI-SEO)</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Get cited by AI models. Be the answer, not a link. Build trust signals AI systems recognize.
                </p>
              </Card>
              <Card className="p-4 sm:p-6 bg-white sm:col-span-2 lg:col-span-1">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-3">Why it matters</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  ChatGPT has 100M+ users. Perplexity processes 500M queries/month. That's where your customers are.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What we actually check
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl">
              Seven different angles on your AI visibility. Each one matters, and we show you exactly where you stand.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Card key={index} className="p-4 sm:p-6 hover:shadow-md transition-shadow">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 mb-3 sm:mb-4" />
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">{module.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{module.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
              How it works
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-base sm:text-lg">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">We gather everything about your brand</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Your content, backlinks, how competitors talk about you, what's already indexed—all of it.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-base sm:text-lg">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">We add context AI models care about</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Semantic relationships, entity connections, trust signals—the stuff that makes AI systems pay attention.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-base sm:text-lg">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">We run it through 7 different checks</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Each module looks at a different angle. You get scores, issues we found, and what's actually working.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-base sm:text-lg">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">You get a clear action plan</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    No vague advice. Specific problems, why they matter, and exactly what to fix first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Want to see where you stand?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Most brands have no idea if they're showing up in AI answers. Takes 2 minutes to find out.
            </p>
            <Link href="/app/dashboard">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Check your AI visibility <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
