'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import {
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  Shield,
  TrendingDown,
  Handshake,
  Clock,
  Building2,
  FileText,
  Scale,
} from 'lucide-react';

export default function AgreedValuePage() {
  const comparison = [
    {
      aspect: 'How it Works',
      agreedValue: 'You and insurer agree on replacement value upfront, documented in the policy',
      marketValue: 'Settlement based on market value at time of loss, determined after a claim',
    },
    {
      aspect: 'Settlement Speed',
      agreedValue: 'Faster — no need for valuation, claim settles quickly',
      marketValue: 'Slower — insurer must assess market value, may require independent valuation',
    },
    {
      aspect: 'Predictability',
      agreedValue: 'You know exactly what you\'ll receive if total loss occurs',
      marketValue: 'Uncertain — may receive less than expected if market value is lower',
    },
    {
      aspect: 'Documentation',
      agreedValue: 'Requires professional valuation and documentation upfront',
      marketValue: 'No documentation needed — assessed after loss',
    },
    {
      aspect: 'Best For',
      agreedValue: 'Classic trailers, horse floats, specialised equipment, well-maintained older models',
      marketValue: 'Standard caravans, newer trailers, common models',
    },
    {
      aspect: 'Cost',
      agreedValue: 'Slightly higher due to valuation costs and certainty benefit',
      marketValue: 'Lower premiums, but potentially lower settlements',
    },
  ];

  const relatedGuides = [
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Horse Float Insurance', href: '/insurance/horse-float-insurance-nz' },
    { title: 'Camper Trailer Insurance', href: '/insurance/camper-trailer-insurance-nz' },
    { title: 'Trailer Insurance Cost', href: '/insurance/trailer-insurance-cost-nz' },
    { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceProduct',
            name: 'Agreed Value Trailer Insurance',
            description: 'Agreed Value vs Market Value policies explained — choose the settlement method that works for you',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/types/agreed-value',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <DollarSign className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Know Your Payout Value</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Agreed Value Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Fixed Payouts When You Need Them Most
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Choose between agreed value cover (fixed payout amount) and market value cover (current market worth). Understand the difference and pick the right option for your trailer.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Understanding Settlement Methods</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When insuring your trailer, one of the most important decisions you'll make is how to establish its value for insurance purposes. There are two main approaches: agreed value cover and market value cover. Each has advantages and disadvantages, and the right choice depends on your specific situation.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                This decision affects your premium, how quickly claims settle, and most importantly, what you'll receive if your trailer is declared a total loss. Understanding both options helps you choose the approach that gives you the best protection and peace of mind.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What is Agreed Value Cover?</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                With agreed value insurance, you and your insurance company mutually agree on the replacement value of your trailer before any loss occurs. This value is documented in your policy and becomes the fixed amount you'll receive if your trailer is deemed a total loss.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To establish agreed value, you typically provide:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>A professional valuation from an approved valuer</li>
                <li>Recent purchase receipts and documentation</li>
                <li>Photographs of the trailer showing its condition</li>
                <li>Service records demonstrating maintenance</li>
                <li>Details of any recent repairs or upgrades</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Once agreed, this value is locked in for the duration of your policy (usually annual). If your trailer suffers a total loss, you'll receive this agreed value amount (minus your excess) regardless of what the trailer might sell for in the current market. This provides certainty and often results in faster claim settlements.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What is Market Value Cover?</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Market value cover settles claims based on what your trailer would actually sell for in the open market at the time of loss. There's no predetermined value — the settlement amount is determined after you make a claim.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                With market value cover, when you claim for a total loss, your insurer will assess the current market value of your trailer by considering factors such as:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>The trailer's age and make/model</li>
                <li>Actual condition at time of loss</li>
                <li>Comparable sales of similar trailers</li>
                <li>Current market prices for your trailer type</li>
                <li>Mileage and usage history</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Market value cover is simpler to arrange initially — no expensive valuation required. However, settlements can take longer while the insurer determines fair market value, and you might receive less than you expected.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Agreed Value vs Market Value: Key Differences</h2>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 sm:p-8 mb-8">
                <div className="flex gap-4 mb-6">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Real-World Example</h3>
                    <p className="text-slate-700">
                      You own a 2015 caravan you purchased new for $35,000 five years ago. It's well-maintained with an agreed value of $22,000. With agreed value cover, if it's totally damaged, you'll receive $22,000. With market value cover, if similar caravans are selling for $18,000-$20,000, you might only receive $19,000 — leaving you short to replace it.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">When Should You Choose Agreed Value?</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Agreed value cover is particularly valuable for:
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Classic and Vintage Caravans</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Older caravans that are well-maintained can have values that don't follow typical depreciation curves. A 1970s vintage caravan in excellent condition might be worth more to enthusiasts than "market value" calculations suggest. Agreed value ensures you get fair compensation for a unique asset.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Specialised Horse Floats</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Quality horse floats can be expensive and highly specialised. Market value can be difficult to establish for these niche vehicles. An agreed value protects your investment by fixing the replacement cost upfront.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Heavily Customised Trailers</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you've invested significantly in customizations, upgrades, or built-in equipment, market value might not account for these improvements. Agreed value allows you to include the value of custom work.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trailers with Valuable Contents</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your trailer carries high-value equipment or contains expensive built-in appliances, agreed value ensures the full trailer value (including fitted equipment) is protected.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Well-Maintained Older Models</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                An older trailer that's been exceptionally well-maintained might be worth more than depreciating market value suggests. Agreed value locks in fair value for condition.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">When is Market Value Sufficient?</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Market value cover is often appropriate for:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700">
                <li><strong>New caravans:</strong> New models hold closer to market value, making assessment straightforward</li>
                <li><strong>Standard trailers:</strong> Box trailers, flatbeds, and other common trailers with established market values</li>
                <li><strong>Budget trailers:</strong> Lower-cost trailers where valuation costs might exceed the difference in settlement</li>
                <li><strong>Frequently replaced vehicles:</strong> If you plan to replace your trailer within a few years</li>
                <li><strong>Cost-conscious buyers:</strong> Those prioritizing lower premiums over settlement certainty</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">The Claims Process Difference</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Agreed Value Claims</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                With agreed value, the claims process is streamlined. You report the loss, provide proof of ownership and insurance, and the insurer settles based on the pre-agreed value. Since the value is documented in your policy, there's little room for dispute. Most agreed value claims settle within 2-4 weeks.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Market Value Claims</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                With market value claims, after proving your loss, the insurer will assess the market value. They may request independent valuations, check comparable sales, and sometimes negotiate with you about the settlement amount. This process can take 4-8 weeks or longer if there's disagreement about market value.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Cost Comparison</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Agreed value cover typically costs 5-15% more than market value cover. This premium reflects:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>The cost of professional valuation</li>
                <li>Reduced uncertainty and claims complexity for the insurer</li>
                <li>Faster claim settlements</li>
                <li>Greater certainty of the exact amount you'll receive</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For example, if market value cover costs $400 annually, agreed value on the same trailer might cost $440-$460. For valuable trailers, this small premium difference can mean a $3,000-$5,000 difference in your claim settlement.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Getting an Agreed Value</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you decide agreed value is right for you, the process involves:
              </p>

              <ol className="list-decimal list-inside space-y-4 mb-6 text-lg text-slate-700">
                <li><strong>Professional valuation:</strong> Hire an approved valuer to assess your trailer's condition and fair replacement value. Costs range from $150-$400.</li>
                <li><strong>Obtain valuation report:</strong> Provide this to your insurer as proof of the trailer's value.</li>
                <li><strong>Policy documentation:</strong> The agreed value is documented in your insurance policy.</li>
                <li><strong>Annual review:</strong> Some insurers recommend revaluing every 3-5 years, especially if significant work is done.</li>
              </ol>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Depreciation Considerations</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                An important consideration with agreed value is whether you want it to depreciate annually or remain static. Some policies allow "diminishing agreed value" where the agreed amount decreases each year (accounting for normal depreciation). Others keep the agreed value static throughout the policy term.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Discuss this with your insurer when setting up agreed value cover. For newer trailers, diminishing agreed value might be appropriate. For older or classic trailers, static agreed value better protects your investment.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Agreed Value vs Market Value Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base border-collapse">
                <thead className="bg-gradient-to-r from-amber-500 to-orange-600">
                  <tr>
                    <th className="border border-slate-300 p-4 text-left font-bold text-white">Aspect</th>
                    <th className="border border-slate-300 p-4 text-left font-bold text-white">Agreed Value</th>
                    <th className="border border-slate-300 p-4 text-left font-bold text-white">Market Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparison.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border border-slate-300 p-4 font-bold text-slate-900">{item.aspect}</td>
                      <td className="border border-slate-300 p-4 text-slate-700">{item.agreedValue}</td>
                      <td className="border border-slate-300 p-4 text-slate-700">{item.marketValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* NZ Insurers */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Insurers with Agreed Value Options</h2>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA offers agreed value cover for trailers, with valuations from CDHB certified valuers. They provide both static and diminishing agreed value options.
                </p>
                <p className="text-slate-600 text-sm">Flexible agreed value with professional valuation support.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">Mariner Insurance</h3>
                <p className="text-slate-700 mb-4">
                  Mariner specialises in marine and trailer insurance with specialised valuation expertise for boat trailers, caravans, and horse floats.
                </p>
                <p className="text-slate-600 text-sm">Expert valuations for specialist trailers.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State provides agreed value options with quick assessment processes. They work with approved valuers and provide transparent value documentation.
                </p>
                <p className="text-slate-600 text-sm">Streamlined agreed value process.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AMI Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AMI offers market value cover standard, with agreed value as an optional upgrade. Competitive rates for both settlement methods.
                </p>
                <p className="text-slate-600 text-sm">Flexible settlement options at competitive rates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Guide */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">How to Decide: A Quick Decision Guide</h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">Choose Agreed Value If:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Your trailer is valuable ($15,000+) or specialised</li>
                  <li>It's a classic, custom, or heavily upgraded model</li>
                  <li>You want certainty about your settlement amount</li>
                  <li>Claims settlement speed is important to you</li>
                  <li>You have valuable contents or built-in equipment</li>
                  <li>The additional 5-15% premium cost is acceptable</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">Choose Market Value If:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Your trailer is relatively new or standard model</li>
                  <li>It's a lower-value trailer ($5,000-$15,000)</li>
                  <li>You prioritize lower premiums</li>
                  <li>You're comfortable with a valuation assessment process</li>
                  <li>You plan to replace it within a few years</li>
                  <li>Market values for your model are stable and consistent</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Get a Quote with Your Preferred Settlement Method</h2>
                <p className="text-lg text-slate-700 mb-6">
                  When requesting a quote for trailer insurance, you can compare both agreed value and market value options from multiple NZ insurers. Our comparison service makes it easy to see the cost difference and choose what works best for your trailer.
                </p>
                <p className="text-lg text-slate-700">
                  Get personalised quotes in just 2 minutes with no obligation to buy.
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
