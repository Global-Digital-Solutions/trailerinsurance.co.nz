'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Award, CheckCircle2, Star, TrendingUp, Shield, Clock, DollarSign, Headphones } from 'lucide-react';

export default function BestTrailerInsurancePage() {
  const providers = [
    {
      name: 'AA Insurance',
      icon: Award,
      pros: ['Competitive rates', 'Flexible excess options', 'Large repair network', 'Responsive claims team'],
      coverage: ['Third-party liability', 'Comprehensive cover', 'Contents insurance add-on'],
      rating: 4.7,
    },
    {
      name: 'AMI Insurance',
      icon: Star,
      pros: ['Multi-policy discounts', 'Good customer service', 'Agreed value options', 'Quick claim settlement'],
      coverage: ['Third-party liability', 'Comprehensive cover', 'Mechanical breakdown add-on'],
      rating: 4.5,
    },
    {
      name: 'State Insurance',
      icon: Shield,
      pros: ['24/7 claims support', 'Wide repair network', 'Flexible payment plans', 'Reliable settlement'],
      coverage: ['Third-party liability', 'Comprehensive cover', 'Towing and recovery'],
      rating: 4.6,
    },
    {
      name: 'Tower Insurance',
      icon: TrendingUp,
      pros: ['$25M liability — highest in market', 'Optional contents cover ($5k)', 'Accessories cover up to $5k', 'Transparent pricing'],
      coverage: ['Third-party liability ($25M)', 'Comprehensive cover', 'Optional contents & accessories'],
      rating: 4.4,
    },
  ];

  const comparisonFactors = [
    { factor: 'Premium Price', description: 'Compare annual costs across providers' },
    { factor: 'Excess Flexibility', description: 'Choose excess levels that suit your risk tolerance' },
    { factor: 'Claims Processing', description: 'Fast, efficient claims handling and settlement' },
    { factor: 'Coverage Flexibility', description: 'Customise cover to match your needs' },
    { factor: 'Discounts Available', description: 'Multi-policy, good driver, loyalty discounts' },
    { factor: 'Customer Service', description: '24/7 support and responsive team' },
  ];

  const relatedGuides = [
    { title: 'Trailer Insurance Cost NZ', href: '/insurance/trailer-insurance-cost-nz' },
    { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz' },
    { title: 'Cheap Trailer Insurance', href: '/insurance/cheap-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Third-Party Liability', href: '/types/third-party-liability' },
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ComparisonTable',
            name: 'Best Trailer Insurance NZ',
            description: 'Comprehensive comparison of New Zealand trailer insurance providers including AA Insurance, AMI, State Insurance, and Tower — verified May 2026',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://www.trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://www.trailerinsurance.co.nz/insurance/best-trailer-insurance-nz',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(/hero-trailer-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Top Providers Compared</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Best Trailer Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Compare Top Providers and Get the Best Deal
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Compare New Zealand's leading trailer insurance providers side-by-side. Find the best coverage, pricing, and customer service for your needs.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Finding the Best Trailer Insurance</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                New Zealand has several excellent trailer insurance providers, each with different strengths, coverage options, and pricing. The "best" provider depends on your specific needs, trailer type, and priorities. Some excel at competitive pricing, others at claims support, and some specialise in specific trailer types like boats or caravans.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To find the best trailer insurance for your situation, you need to compare not just premiums but also coverage options, excess flexibility, claims handling, and customer service. Getting quotes from multiple providers is essential—premiums can vary significantly for the same coverage level.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Top Trailer Insurance Providers</h2>

              <p className="text-slate-600 text-sm mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <strong>Note (May 2026):</strong> All five providers below require phone contact to obtain a trailer or caravan insurance quote. No self-serve online quote tools currently exist for standalone trailer insurance in New Zealand.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">AA Insurance — Best Overall</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                AA Insurance is New Zealand's Most Trusted Insurer for 16 consecutive years and offers a dedicated standalone trailer policy — not just a car insurance add-on. Agreed value cover with $20 million third-party liability. Strong nationwide network and responsive claims handling.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Strengths:</strong> Brand trust, agreed value, $20M liability, nationwide repair network. <strong>Best for:</strong> Everyday box and utility trailers, customers who value peace of mind with a name they know.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">AMI Insurance — Best for Caravans</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                AMI (IAG Group) offers two separate products: a dedicated Caravan Insurance policy that includes contents cover, and a separate Trailer Insurance policy. The caravan policy includes excess-free key replacement up to $1,000. $20 million third-party liability on both products.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Strengths:</strong> Separate caravan policy, contents cover included, IAG Group financial strength. <strong>Best for:</strong> Caravan owners, camper trailer users, horse float owners with living quarters.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">State Insurance — Best for Bundling</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                State Insurance (IAG Group) maintains separate policy documents for trailers (SI1058/8) and caravans (SI1057/9). Multi-policy bundling discounts are available for customers who already hold State home or car insurance. Wide repair network backed by IAG.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Strengths:</strong> Multi-policy discounts, IAG Group backing, dedicated policy wordings. <strong>Best for:</strong> Customers already with State for home or car insurance. Via State.co.nz.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Tower Insurance — Best Liability Limit</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Tower offers the highest third-party liability limit in the NZ market at $25 million — the most comprehensive financial protection available if your trailer causes a serious accident. Optional contents cover (up to $5,000) and accessories cover ($2,000–$5,000) are available add-ons. All quotes are arranged by phone.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Strengths:</strong> $25M liability (highest in market), optional contents cover, accessories cover. <strong>Best for:</strong> Maximum liability protection, larger caravans with contents.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Rural &amp; Horse Float Cover</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Horse float and farm trailer owners benefit most from a specialist rural insurer whose advisers understand equestrian events, rural roads, and livestock transport. If you&apos;re insuring a horse float worth $15,000 or more, ask us to match you with a broker who specialises in this area.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Strengths:</strong> Rural expertise, horse float specialists, personalised adviser service. <strong>Best for:</strong> Anyone in the primary sector — horse float owners, farmers, rural lifestyle block owners.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What to Compare When Choosing Trailer Insurance</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">1. Premium Price</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Compare annual costs, but don't choose based on price alone. A cheaper premium might have higher excess or lower coverage limits. Get quotes for the same coverage levels across providers.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">2. Excess Flexibility</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Different providers offer different excess levels. Some have fixed excess, others allow you to choose. Some offer optional zero or low excess for an additional premium. Choose an excess you can comfortably afford if you need to claim.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">3. Coverage Options</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Ensure the provider offers the coverage you need. Can you add contents insurance? Do they offer agreed value? Are add-ons available for specific risks relevant to your trailer type?
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">4. Claims Process</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Look for providers with quick claims processing, 24/7 support, and straightforward processes. Read reviews from actual customers about their claims experience.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">5. Discounts</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Ask about multi-policy discounts (bundling home and trailer insurance), good driver discounts, loyalty discounts, and discounts for security measures. These can reduce your premium by 10-20%.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">6. Customer Service</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Check if the provider offers 24/7 support, phone or online chat. Read customer reviews about service quality. When you need to claim, good customer service matters.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Tips for Getting the Best Trailer Insurance Deal</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Get quotes from at least 3-5 different providers to compare</li>
                <li>Ensure you're comparing the same coverage levels and excess across quotes</li>
                <li>Ask about all available discounts: multi-policy, good driver, security, loyalty</li>
                <li>Consider bundling home and trailer insurance for bigger discounts</li>
                <li>Review your policy annually—rates and options change yearly</li>
                <li>Be honest about your trailer type, usage, and location—misrepresentation voids claims</li>
                <li>Choose an excess you can actually afford if you need to claim</li>
                <li>Check for agreed value options if you have a valuable or specialty trailer</li>
                <li>Read customer reviews and check claims handling experiences</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Provider Comparison Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Top Providers Compared</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {providers.map((provider, idx) => {
                const Icon = provider.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="font-bold text-slate-900">{provider.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{provider.name}</h3>
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-700 mb-2 text-sm">Strengths:</h4>
                      <ul className="space-y-1">
                        {provider.pros.map((pro, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Factors */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Comparison Factors</h2>

            <div className="space-y-4">
              {comparisonFactors.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
                  <DollarSign className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.factor}</h3>
                    <p className="text-slate-700">{item.description}</p>
                  </div>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Find Your Best Trailer Insurance Deal Today</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Use our comparison service to get quotes from multiple top NZ insurers instantly. See which provider offers the best value and coverage for your specific needs.
                </p>
                <p className="text-lg text-slate-700">
                  It takes just a few minutes to get quotes and start comparing coverage options side-by-side.
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
