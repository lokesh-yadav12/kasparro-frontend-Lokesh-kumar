import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              We're building this because we had to
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              The way people find information changed overnight. We're helping brands keep up.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why this matters
            </h2>
            <Card className="p-8 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Search is dead. Not literally, but the way it worked for 20 years? That's over.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                People ask ChatGPT questions now. They use Perplexity instead of Google. And if your brand 
                isn't in those AI answers, you might as well not exist. We built Kasparro to fix that.
              </p>
            </Card>
          </section>

          {/* Product Philosophy */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              How we think about this
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Built for AI from day one
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We didn't take an old SEO tool and slap "AI" on it. We started fresh, thinking about 
                  how AI models actually work—what they look for, what they trust, what makes them cite you.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Show the data, skip the jargon
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  AI-SEO is complicated. Your dashboard shouldn't be. We show you what's broken, why it matters, 
                  and what to do about it. No buzzwords, no fluff.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Fix the system, not just symptoms
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Getting mentioned by AI isn't about one trick. It's about your whole presence—content quality, 
                  technical setup, trust signals, semantic relevance. We look at all of it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Made for people who actually do the work
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  This isn't for executives who want pretty charts. It's for marketers and engineers who need 
                  to know what's wrong and how to fix it. People who care about getting it right.
                </p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Where this is all going
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Look, we all see it happening. Your friends ask ChatGPT instead of Googling. Your coworkers 
                use Perplexity for research. Your kids think typing into a search box is old-fashioned.
              </p>
              <p>
                The shift isn't coming—it's here. And it's fast. ChatGPT hit 100 million users in two months. 
                That's faster than anything in history.
              </p>
              <p>
                Here's what that means for brands: being on page one of Google matters less every day. 
                Being cited by AI models matters more. If ChatGPT recommends your competitor when someone 
                asks about your industry, you just lost a customer. And you didn't even know you were competing.
              </p>
              <p>
                We're building Kasparro because someone needs to help brands figure this out. The rules changed, 
                and most companies don't even realize it yet.
              </p>
            </div>
          </section>

          {/* Why Now */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why we're doing this now
            </h2>
            <Card className="p-6 bg-white dark:bg-gray-800">
              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">ChatGPT: 100M users in 2 months</p>
                  <p className="text-sm">Fastest product adoption ever. Not even close.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Google added AI to search</p>
                  <p className="text-sm">SGE is rolling out. Even Google knows the old way is done.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Perplexity: 500M+ queries per month</p>
                  <p className="text-sm">People are choosing AI-first search. It's not a trend, it's a migration.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Your SEO metrics are lying to you</p>
                  <p className="text-sm">You're ranking #1 but traffic is down? That's because people aren't clicking anymore.</p>
                </div>
              </div>
            </Card>
          </section>

          {/* Team Note */}
          <section>
            <Card className="p-8 bg-gray-50 dark:bg-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Who's building this
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                We're engineers who got tired of watching brands get blindsided by AI. We've built search systems, 
                worked with AI models, and seen how fast this shift is happening.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Kasparro is what we wish existed when we were trying to figure this out ourselves. No BS, 
                no vague promises. Just clear data about where you stand and what to fix.
              </p>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}