'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { BarChart3, CheckCircle2, DollarSign, Shield, TrendingUp, AlertTriangle, Clock } from 'lucide-react';

export default function CompareTrailerInsurancePage() {
  const comparisonSteps = [
    {
      number: 1,
      title: 'Determine Your Coverage Needs',
      description: 'Decide between third-party liability and comprehensive cover. Consider whether you need contents insurance and what excess level suits your situation.',
      details: ['Assess your trailer value', 'Determine coverage type needed', 'Decide on excess amount', 'Consider add-on coverage']
    },
    {
      number: 2,
      title: 'Get Quotes from Multiple Providers',
      description: 'Contact at least 3-5 insurance providers to get quotes. Request the same coverage level from each to enable fair comparison.',
      details: ['AA Insurance', 'AMI Insurance', 'State Insurance', 'Tower Insurance', 'Mariner Insurance']
    },
    {
      number: 3,
      title: 'Compare Key Features',
      description: 'Look beyond just premium price. Compare excess options, coverage limits, claims handling, and customer service quality.',
      details: ['Annual premium cost', 'Excess flexibility', 'Claims process speed', 'Customer service hours', 'Add-on options available']
    },
    {
      number: 4,
      title: 'Check Available Discounts',
      description: 'Ask each provider about discounts. Multi-policy, good driver, security, and loyalty discounts can reduce costs significantly.',
      details: ['Multi-policy bundles', 'Good driver discounts', 'Security measure discounts', 'Loyalty discounts', 'Club membership discounts']
    },
    {
      number: 5,
      title: 'Read Customer Reviews',
      description: 'Check online reviews and testimonials about claims handling and customer service. Real customer experiences matter when you need support.',
      details: ['Check independent reviews', 'Look for claims experience feedback', 'Review customer service ratings', 'Check complaint resolution']
    },
    {
      number: 6,
      title: 'Make Your Decision',
      description: 'Choose the provider that best balances price, coverage, and service for your situation. Don\'t choose based solely on lowest price.',
      details: ['Consider total value', 'Review policy terms carefully', 'Ensure coverage matches needs', 'Purchase your policy']
    },
  ];

  const thirdPartyVsComprehensive = [
    {
      aspect: 'What It Covers',
      thirdParty: 'Damage/injury to third parties only. Does not cover damage to your own trailer.',
      comprehensive: 'Covers damage to your trailer from accidents, theft, weather, and more. Plus third-party cover.'
    },
    {
      aspect: 'Annual Cost',
      thirdParty: '$150-$400 depending on trailer type',
      comprehensive: '$300-$1500+ depending on trailer value and type'
    },
    {
      aspect: 'Best For',
      thirdParty: 'Low-value trailers, basic liability protection, occasional personal use',
      comprehensive: 'Higher-value trailers, frequent use, protection of your investment'
    },
    {
      aspect: 'Excess',
      thirdParty: 'Usually lower excess ($250-$500)',
      comprehensive: 'Flexible excess options ($250-$1000+)'
    },
    {
      aspect: 'Add-ons Available',
      thirdParty: 'Limited add-ons',
      comprehensive: 'Contents, mechanical breakdown, zero excess options'
    },
  ];

  const relatedGuides = [
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Trailer Insurance Cost NZ', href: '/insurance/trailer-insurance-cost-nz' },
    { title: 'Cheap Trailer Insurance', href: '/insurance/cheap-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Third-Party Liability', href: '/types/third-party-liability' },
    { title: 'Contents Insurance Guide', href: '/types/contents-cover' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Guide',
            name: 'Compare Trailer Insurance NZ',
            description: 'Complete guide to comparing trailer insurance providers in New Zealand side-by-side',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/compare-trailer-insurance-nz',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Side-by-Side Comparison</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Compare Trailer Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Find the Best Policy for Your Needs
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Complete guide to comparing trailer insurance providers and policies side-by-side. Learn what to look for and how to find the best value.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Comparing Trailer Insurance Matters</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Trailer insurance premiums vary significantly across New Zealand providers. Two identical trailers with the same coverage could cost anywhere from $400 to $900 annually depending on the insurance company you choose. Getting quotes from multiple providers could save you hundreds of dollars per year. This guide explains what it means to compare insurance policies for trailers that have travelled across New Zealand or are frequently travelling.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Beyond price, different providers offer different coverage options, excess flexibility, claims processes, and customer service. The cheapest option isn't always the best—you need to balance price with service quality and coverage that matches your needs.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                This guide walks you through how to properly compare trailer insurance providers so you find the best option for your specific situation.
              </p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">How to Compare Trailer Insurance in 6 Steps</h2>

            <div className="space-y-6">
              {comparisonSteps.map((step) => (
                <div key={step.number} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 sm:px-8 py-6 flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-xl sm:text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-amber-50 text-sm sm:text-base">{step.description}</p>
                    </div>
                  </div>
                  <div className="px-6 sm:px-8 py-6">
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                          <span className="text-slate-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Third-Party vs Comprehensive */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Third-Party vs Comprehensive: Quick Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                    <th className="px-6 py-4 text-left font-bold">Aspect</th>
                    <th className="px-6 py-4 text-left font-bold">Third-Party Liability</th>
                    <th className="px-6 py-4 text-left font-bold">Comprehensive</th>
                  </tr>
                </thead>
                <tbody>
                  {thirdPartyVsComprehensive.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white border-b' : 'bg-slate-50 border-b'}>
                      <td className="px-6 py-5 font-semibold text-slate-900">{row.aspect}</td>
                      <td className="px-6 py-5 text-slate-700">{row.thirdParty}</td>
                      <td className="px-6 py-5 text-slate-700">{row.comprehensive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Understanding Coverage Types */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Understanding Different Coverage Types</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When comparing trailer insurance policies, understanding the specific coverage types available is crucial. Most NZ insurers offer <Link href="/types/third-party-liability" className="text-amber-600 hover:text-amber-700 font-semibold underline">third-party liability coverage</Link>, which is legally required when your trailer is on public roads. This covers damage you cause to other people's property or injuries to third parties. However, it doesn't protect your own trailer.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">Comprehensive coverage</Link> goes much further by protecting your trailer itself against accidents, theft, weather damage, and other perils. For valuable trailers, this is typically the better choice despite higher premiums. Many insurers also offer <Link href="/types/agreed-value" className="text-amber-600 hover:text-amber-700 font-semibold underline">agreed-value policies</Link> where you and your insurer agree on your trailer's value upfront. This eliminates disputes about trailer value when you make a claim.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Some specialised coverage options include mechanical breakdown protection, <Link href="/types/contents-cover" className="text-amber-600 hover:text-amber-700 font-semibold underline">contents coverage</Link> for items inside your trailer, and roadside assistance for towing and recovery. When comparing quotes, ask each insurer what coverage types they offer and how they differ across price points.
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Comparing Specific Trailer Types</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Different trailer types have different insurance needs and pricing. <Link href="/insurance/caravan-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">Caravan insurance</Link> focuses on fixed structures and residential-style coverage, while <Link href="/insurance/boat-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">boat trailer insurance</Link> specialises in water damage and marine-specific risks. Horse float insurance emphasizes animal safety features, while utility trailers focus on cargo protection.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                When comparing policies, ensure you're looking at quotes for the same trailer type using the same coverage level. Mixing third-party quotes with comprehensive quotes makes comparison impossible. Also disclose any modifications, additional equipment, or changes to how you use your trailer—these affect both premiums and coverage eligibility.
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Excess Options and What They Mean</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The "excess" (also called deductible) is the amount you pay toward each claim. A $500 excess means when you claim, you pay the first $500 and your insurer covers the rest. Choosing a higher excess lowers your annual premium, but increases what you pay if you claim. Choosing a lower excess raises your premium but reduces your out-of-pocket cost per claim.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Some insurers offer flexible excess options where you can adjust your excess for different situations. You might choose a $500 excess for accidental damage but a $250 excess for theft. Compare not just the standard excess but also whether optional excess levels are available and at what cost. A policy with lower base premiums might require a higher excess, making it less attractive overall.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Checklist */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Trailer Insurance Comparison Checklist</h2>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
              {[
                'Premium price (ensure same coverage level)',
                'Excess options and flexibility',
                'Coverage limits and specific inclusions',
                'Claims processing time',
                'Available add-ons (contents, mechanical breakdown)',
                'Discounts available (multi-policy, good driver, etc.)',
                'Customer service availability (24/7?)',
                'Repair network size and quality',
                'Online policy management options',
                'Customer reviews and satisfaction ratings',
                'Payment plan options',
                'Renewal terms and conditions',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-slate-200 last:border-b-0">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer flex-1">
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Common Trailer Insurance Comparison Mistakes</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many people make costly errors when comparing trailer insurance. The biggest mistake is comparing only the annual premium without looking at excess amounts, coverage limits, and extras. A policy costing $50 more annually might be better value if it has lower excess, better claims service, or more comprehensive coverage.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Another common mistake is not disclosing full information about your trailer. If you mention modifications, equipment upgrades, or changes to how you use your trailer, different insurers will quote accordingly. Hiding this information to get a lower quote can backfire if you need to claim—insurers may deny claims if they discover undisclosed information.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many people also forget to ask about discounts. Multi-policy discounts (bundling home, car, and trailer insurance), good driver discounts, security measure discounts, and loyalty rewards can reduce your premium significantly. Make sure you ask each insurer about every discount you might qualify for—don't assume they'll mention them all.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Finally, comparing quotes from only 2-3 providers limits your options. Competition in trailer insurance is strong, and premiums vary significantly. Getting quotes from at least 4-5 providers ensures you're seeing the full market and won't miss better deals. Our <Link href="/faqs" className="text-amber-600 hover:text-amber-700 font-semibold underline">FAQs section</Link> has more tips for getting the best quotes.
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Getting the Most Accurate Quotes</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To get accurate quotes that you can reliably compare, provide consistent information across all providers. Gather these details before requesting quotes: your trailer's make, model, year, and current condition; its agreed value or replacement cost; your primary location and storage arrangement; annual kilometres travelled; any modifications or additions; and how often you actually use the trailer.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Be honest about security measures. Do you have a coupling lock? Wheel clamps? Do you park in a locked garage or outdoor storage? This information significantly affects premiums, especially for theft-prone items. If you use your trailer commercially (even occasionally), disclose this as business use often requires different coverage than personal use.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                After receiving quotes, don't immediately accept the first one. Wait until you have 4-5 quotes to compare. Look for the best value (not necessarily the cheapest), and contact your top 2-3 choices to ask about discounts or coverage adjustments. Some insurers will negotiate or match competitors' pricing. Also check our <Link href="/contact" className="text-amber-600 hover:text-amber-700 font-semibold underline">contact page</Link> to speak with a broker who can help you navigate your options.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Compare Quotes and Find Your Best Deal</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Use our free comparison service to get quotes from multiple NZ insurers instantly. Compare prices, coverage, and features side-by-side.
                </p>
                <p className="text-lg text-slate-700 mb-6">
                  It takes just a few minutes to get transparent quotes and start comparing your options. Our <Link href="/blog" className="text-amber-600 hover:text-amber-700 font-semibold underline">blog has detailed guides</Link> on making the most of your search.
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
