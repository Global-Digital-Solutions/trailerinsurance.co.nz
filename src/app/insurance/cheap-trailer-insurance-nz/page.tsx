'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { DollarSign, CheckCircle2, TrendingDown, Shield, Zap, AlertTriangle, Lock, Home } from 'lucide-react';

export default function CheapTrailerInsurancePage() {
  const moneySavingTips = [
    {
      icon: DollarSign,
      title: 'Increase Your Excess',
      description: 'Choosing a higher excess ($800-$1000 instead of $250-$500) can reduce your premium by 15-25%. Only do this if you can afford to pay the excess in a claim.',
      savings: 'Save $75-$200+ per year',
    },
    {
      icon: Home,
      title: 'Park Securely',
      description: 'Parking in a secure, locked facility (garage, locked compound) costs less to insure than street parking or exposed locations. Move your trailer if possible.',
      savings: 'Save $50-$150 per year',
    },
    {
      icon: Lock,
      title: 'Add Security Features',
      description: 'Installing wheel clamps, coupling locks, alarm systems, or GPS trackers can qualify you for insurance discounts of 5-15%.',
      savings: 'Save $25-$100+ per year',
    },
    {
      icon: Shield,
      title: 'Bundle Your Insurance',
      description: 'Combining home, car, and trailer insurance with the same provider often qualifies you for multi-policy discounts of 10-20%.',
      savings: 'Save $100-$300+ per year',
    },
    {
      icon: Zap,
      title: 'Choose Third-Party Liability',
      description: 'If your trailer is older or lower value, third-party liability is significantly cheaper than comprehensive cover. Evaluate if it\'s appropriate for your needs.',
      savings: 'Save $200-$500+ per year',
    },
    {
      icon: CheckCircle2,
      title: 'Maintain Your Trailer',
      description: 'A well-maintained trailer in good condition may qualify for better rates. Keep service records as proof of proper maintenance.',
      savings: 'Save $20-$80 per year',
    },
    {
      icon: TrendingDown,
      title: 'Shop Around Annually',
      description: 'Insurance rates change yearly. Get fresh quotes from multiple providers every 12 months. Loyalty doesn\'t always pay—switching saves money.',
      savings: 'Save $100-$300+ per year',
    },
    {
      icon: AlertTriangle,
      title: 'Ask About All Discounts',
      description: 'Mention good driver record, completed safety courses, club memberships, and any other potentially discountable factors when getting quotes.',
      savings: 'Save $50-$200+ per year',
    },
  ];

  const affordableProviders = [
    {
      name: 'Cove Insurance',
      why: 'Digital-first means lower overheads and competitive pricing. Transparent rates with no hidden fees.',
      rating: 4.3,
    },
    {
      name: 'Tower Insurance',
      why: 'Known for straightforward, competitive pricing. Easy online process keeps costs down.',
      rating: 4.4,
    },
    {
      name: 'State Insurance',
      why: 'Frequent promotions and flexible payment plans make their policies accessible. Good for budget-conscious customers.',
      rating: 4.6,
    },
    {
      name: 'AA Insurance',
      why: 'Competitive rates when bundled. Large volume means better prices. Frequent promotional offers.',
      rating: 4.7,
    },
  ];

  const relatedGuides = [
    { title: 'Trailer Insurance Cost NZ', href: '/insurance/trailer-insurance-cost-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz' },
    { title: 'Third-Party Liability', href: '/types/third-party-liability' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Guide',
            name: 'Cheap Trailer Insurance NZ',
            description: 'Complete guide to finding affordable trailer insurance in New Zealand with money-saving tips and strategies',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/cheap-trailer-insurance-nz',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(/hero-trailer-3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <DollarSign className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Save on Insurance</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cheap Trailer Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Save Hundreds on Your Cover
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Complete guide to finding affordable trailer insurance. Discover money-saving strategies that could save you $200-$500+ annually on your trailer cover.
              </p>

              <Link href="/#quote-form" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5">
                Get Your Quote <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Finding Affordable Trailer Insurance</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Trailer insurance doesn't have to be expensive. By making smart choices about coverage, taking advantage of discounts, and comparing providers, you can significantly reduce what you pay for insurance. Many people overpay for trailer insurance simply because they don't shop around or take advantage of available savings.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The key to cheap trailer insurance isn't necessarily finding the most basic policy—it's finding the best value that matches your actual needs while taking advantage of every available discount and cost-saving strategy.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                This guide walks you through proven strategies to reduce your trailer insurance costs without sacrificing essential protection.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Is Cheap Trailer Insurance Safe?</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Yes—if you do it the right way. There's a difference between cheap insurance and underinsurance. Cheap insurance means finding competitive rates for appropriate coverage. Underinsurance means having inadequate protection, which is risky.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The strategies in this guide help you save money without compromising essential coverage. However, if you can't afford comprehensive cover and your trailer is valuable, it's better to keep it insured with third-party liability than to go uninsured.
              </p>
            </div>
          </div>
        </section>

        {/* Money Saving Tips Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">8 Proven Ways to Cut Your Trailer Insurance Costs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {moneySavingTips.map((tip, idx) => {
                const Icon = tip.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{tip.title}</h3>
                        <p className="text-sm font-semibold text-amber-600">{tip.savings}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{tip.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Affordable Providers */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Insurers Known for Competitive Pricing</h2>

            <div className="space-y-4">
              {affordableProviders.map((provider, idx) => (
                <div key={idx} className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{provider.name}</h3>
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
                      <span className="font-bold text-amber-600">{provider.rating}</span>
                      <span className="text-amber-400">★</span>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{provider.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What NOT to Do */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Cost-Cutting Mistakes to Avoid</h2>

            <div className="space-y-4">
              {[
                {
                  mistake: 'Lying on Your Insurance Application',
                  why: 'Misrepresenting facts (trailer usage, location, value) can void your entire policy. A denied claim costs much more than the premium you tried to save.',
                },
                {
                  mistake: 'Going Completely Uninsured',
                  why: 'You legally need minimum insurance in NZ. Being uninsured risks massive liability, fines, and losing your trailer to a single accident.',
                },
                {
                  mistake: 'Choosing Inadequate Excess',
                  why: 'If your excess is too high ($2000+), you won\'t be able to claim for minor damage. An excess you can\'t afford defeats the purpose of insurance.',
                },
                {
                  mistake: 'Ignoring Essential Coverage',
                  why: 'If your trailer is valuable, skipping comprehensive cover entirely is risky. Third-party is cheaper but leaves you vulnerable.',
                },
                {
                  mistake: 'Not Reviewing Your Policy',
                  why: 'Insurance rates change yearly. Customers who never review overpay compared to those who shop around annually.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-red-200 border-l-4 border-l-red-500">
                  <h3 className="font-bold text-red-700 mb-2">❌ {item.mistake}</h3>
                  <p className="text-slate-700">{item.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Checklist */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Cheap Insurance Optimization Checklist</h2>

            <div className="bg-slate-50 rounded-2xl p-8 space-y-4">
              {[
                'Get quotes from at least 3-5 different providers',
                'Compare the same coverage level across all quotes',
                'Ask about every available discount',
                'Consider bundling home, car, and trailer insurance',
                'Evaluate if third-party cover is sufficient for your needs',
                'Choose an excess you can comfortably afford',
                'Install security features if they qualify for discounts',
                'Ensure trailer is parked securely',
                'Maintain your trailer properly',
                'Review your policy annually for better rates',
                'Ask about loyalty or renewal discounts',
                'Check for membership-based discounts (AA, etc.)',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-amber-300" />
                  <label className="text-slate-700 cursor-pointer flex-1">{item}</label>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Start Saving on Your Trailer Insurance Today</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Get quotes from multiple NZ insurers and discover how much you could save. Our comparison service shows you transparent pricing from all major providers.
                </p>
                <p className="text-lg text-slate-700">
                  Many customers save $200-$500 per year by comparing quotes and taking advantage of discounts they didn't know about.
                </p>
              </div>
              <div>
                <QuoteForm mode="compact" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Related Insurance Guides</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors">
                    {guide.title}
                  </h3>
                  <span className="text-amber-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
    </>
  );
}
