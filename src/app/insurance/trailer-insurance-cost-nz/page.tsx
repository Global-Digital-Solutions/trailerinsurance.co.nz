'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { DollarSign, TrendingDown, Calculator, Shield, CheckCircle2, AlertTriangle, Home } from 'lucide-react';

export default function TrailerInsuranceCostPage() {
  const costBreakdown = [
    { trailer: 'Caravan (up to $40k)', min: '$400', max: '$900', factors: 'Size, age, security, usage' },
    { trailer: 'Camper Trailer (up to $25k)', min: '$350', max: '$700', factors: 'Pop-top mechanism, contents, location' },
    { trailer: 'Horse Float', min: '$450', max: '$1000', factors: 'Specialised parts, event travel, equine use' },
    { trailer: 'Boat Trailer', min: '$400', max: '$800', factors: 'Marine exposure, vehicle value, storage' },
    { trailer: 'Box Trailer (up to $10k)', min: '$250', max: '$600', factors: 'Size, security, business/personal use' },
    { trailer: 'Flatbed/Commercial', min: '$500', max: '$1200+', factors: 'Load capacity, commercial use, maintenance' },
    { trailer: 'Car Carrier', min: '$600', max: '$1500+', factors: 'Vehicle weight limits, business use, location' },
    { trailer: 'Enclosed Trailer', min: '$350', max: '$800', factors: 'Contents value, business use, location' },
  ];

  const costFactors = [
    {
      icon: Home,
      title: 'Trailer Value',
      description: 'Higher-value trailers cost more to insure. A $50,000 caravan will have higher premiums than a $15,000 camper trailer.',
    },
    {
      icon: AlertTriangle,
      title: 'Trailer Age and Condition',
      description: 'Older trailers may have higher premiums due to increased repair costs. Well-maintained trailers often qualify for discounts.',
    },
    {
      icon: Shield,
      title: 'Coverage Level',
      description: 'Third-party liability is cheaper than comprehensive. Adding contents cover increases your premium.',
    },
    {
      icon: DollarSign,
      title: 'Excess Amount',
      description: 'Higher excess ($1000+) means lower premiums. Lower excess ($250-$500) means higher premiums.',
    },
    {
      icon: CheckCircle2,
      title: 'Location and Storage',
      description: 'Secure storage (garage, locked compound) commands lower rates than street parking or exposed work sites.',
    },
    {
      icon: TrendingDown,
      title: 'Security Measures',
      description: 'Wheel clamps, coupling locks, and alarm systems can reduce premiums by 10-20%.',
    },
  ];

  const relatedGuides = [
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz' },
    { title: 'Cheap Trailer Insurance', href: '/insurance/cheap-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
    { title: 'Third-Party Liability', href: '/types/third-party-liability' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Trailer Insurance Cost NZ - Pricing Guide',
            description: 'Complete guide to trailer insurance costs in New Zealand with price ranges for different trailer types',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/trailer-insurance-cost-nz',
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
                <span className="text-sm text-white font-medium">Complete Pricing Guide</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Trailer Insurance Cost
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  What You'll Really Pay for Coverage
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Complete breakdown of trailer insurance costs in New Zealand. Learn what affects pricing and how to find the best value for your coverage needs.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Understanding Trailer Insurance Costs in New Zealand</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Trailer insurance costs in New Zealand vary widely depending on your trailer type, value, age, how you use it, and the coverage you choose. There's no single answer to "how much does trailer insurance cost?" because premiums are individually calculated based on risk factors specific to your situation.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Generally, comprehensive trailer insurance ranges from $250-$1500+ annually depending on trailer type and value. Basic third-party liability cover is cheaper, starting around $150-$400 annually. The most expensive policies are for high-value trailers, commercial use, or specialised equipment.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                The good news is that trailer insurance is generally affordable, especially considering what you're protecting. Getting quotes from multiple providers is essential—prices can vary significantly for identical coverage.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Typical Trailer Insurance Costs by Type</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                These ranges are based on typical New Zealand insurance premiums for comprehensive cover. Actual costs vary by individual circumstances, provider, and specific coverage options.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Understanding the Cost Difference Between Coverage Types</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Third-Party Liability vs Comprehensive</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <Link href="/types/third-party-liability" className="text-amber-600 hover:text-amber-700 font-semibold underline">Third-party liability insurance</Link> covers damage you cause to other people's property and vehicles. It doesn't cover your own trailer damage. This is the cheapest option, often $150-$400 annually for basic trailers. However, if your trailer is damaged in an accident, theft, or vandalism, you pay all repair costs out of pocket.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">Comprehensive coverage</Link> includes damage to your own trailer from accidents, theft, vandalism, and weather events. This costs significantly more—typically 2-4 times the third-party liability cost—but provides complete protection. Most valuable trailers and business users choose comprehensive for this security.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Contents Insurance Premiums</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <Link href="/types/contents-cover" className="text-amber-600 hover:text-amber-700 font-semibold underline">Contents insurance</Link> protects the valuable items inside your enclosed trailer—tools, equipment, inventory, materials. The cost depends on what you're insuring. A typical contents limit of $5,000 might add $150-$300 annually to your premium, while a $20,000 contents limit could add $500-$1,000. The higher your declared cargo value, the higher your contents premium.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Trailer Insurance Cost Breakdown by Factor</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trailer Value Impact</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your trailer's declared value is one of the biggest cost factors. Insurance companies use your trailer's value to determine replacement costs in case of total loss. A $60,000 enclosed trailer will have a much higher premium than a $10,000 box trailer. When getting your trailer insured, have an accurate valuation done. Undervaluing your trailer saves premium money now but means you'll be undercompensated if there's a total loss. Overvaluing increases premiums unnecessarily.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trailer Age and Condition Effects</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Older trailers often cost more to insure because repair parts are harder to find and repairs may be more expensive. A well-maintained 10-year-old trailer in excellent condition might have lower premiums than a neglected 5-year-old trailer. Providing documentation of regular maintenance and servicing can help justify lower premiums. Conversely, trailers with poor maintenance records face higher premiums or coverage restrictions.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Usage Type and Frequency</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                How you use your trailer significantly affects cost. Personal recreational use (occasional camping or horse transport) is generally cheaper than commercial business use. Regular business use—daily towing for work—costs more because of higher accident risk. Seasonal use (only during summer holidays) might qualify for discounts. Professional vehicle transport or commercial fleet operations cost the most due to higher liability exposure.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Location and Parking Arrangements</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Where your trailer is parked dramatically affects your premium. Secure storage in a locked garage reduces cost by 15-25% compared to street parking. Trailers parked in high-theft areas (inner-city locations) cost more to insure. Rural areas with lower crime rates often have lower premiums. If you can arrange secure parking at your business premises or use a professional storage facility, the insurance savings will be substantial and compound over years.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Security Measures and Discounts</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Installing approved security equipment can reduce your premium by 5-20% depending on what you install. Wheel clamps and coupling locks (5-10% discount) are basic. Motion sensors, GPS tracking, or alarm systems can earn additional discounts. Reinforced doors or hidden location features might qualify for further reductions. These discounts often offset the security equipment cost within 1-2 years.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Finding the Best Trailer Insurance Price</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Why Prices Vary So Much Between Insurers</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Different insurers assess risk differently and have different claim experiences. An insurer that has had many theft claims in your area might charge higher premiums than one that hasn't. Some specialise in certain trailer types and offer better rates. Others have economies of scale that let them offer competitive pricing. For identical coverage on the same trailer, you might see quotes ranging from $400 to $700 annually. This is why <Link href="/insurance/compare-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">comparing quotes from multiple providers</Link> is essential.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Multi-Policy and Loyalty Discounts</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Bundling your trailer insurance with home, vehicle, or other policies typically saves 10-15%. If you keep your policies with the same insurer for multiple years, loyalty discounts can add another 5-10%. Some insurers offer membership discounts (AA members, for example). These discounts compound—combining a multi-policy discount, loyalty discount, and security discount can reduce your effective cost by 25-35%.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Excess Strategy and Premium Impact</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your excess choice directly affects your premium. A $250 excess might cost $650 annually, while a $1000 excess could be just $550—a 15% saving. Over 5 years, that's $500 in savings. The trade-off is that you'll pay more out of pocket if you claim. For careful operators with excellent safety records and no recent claims, a higher excess often makes financial sense. Calculate your expected claim probability before choosing.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Cost Savings for Specific Trailer Types</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Caravan Insurance Costs</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <Link href="/insurance/caravan-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">Caravan insurance</Link> typically costs $400-$900 annually depending on caravan value and condition. Newer, better-maintained caravans with upgraded security cost less. If you use your caravan only occasionally (less than 30 days annually), you might qualify for seasonal discounts.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Boat Trailer and Horse Float Insurance</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <Link href="/insurance/boat-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">Boat trailer insurance</Link> and horse float insurance are specialised categories with unique risks. <Link href="/insurance/horse-float-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">Horse float coverage</Link> typically costs $450-$1000 depending on facilities and usage. These specialised trailers may be more expensive to insure because fewer insurers cover them and repair specialists are less common.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Commercial and Business Trailer Costs</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <Link href="/types/commercial" className="text-amber-600 hover:text-amber-700 font-semibold underline">Commercial trailer insurance</Link> for flatbeds, car carriers, and enclosed commercial trailers costs more due to higher liability exposure and business use. A commercial enclosed trailer might cost $500-$1200 annually depending on load capacity and usage. However, bulk discounts apply if you insure multiple commercial trailers—fleet insurance for 3+ trailers can reduce the per-unit cost significantly.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Breakdown Table */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Trailer Insurance Cost Ranges</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Trailer Type</th>
                    <th className="px-6 py-4 text-left font-bold">Annual Cost (Min)</th>
                    <th className="px-6 py-4 text-left font-bold">Annual Cost (Max)</th>
                    <th className="px-6 py-4 text-left font-bold">Key Cost Factors</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 border-t border-slate-200'}>
                      <td className="px-6 py-4 font-semibold text-slate-900">{row.trailer}</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">{row.min}</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">{row.max}</td>
                      <td className="px-6 py-4 text-slate-700 text-sm">{row.factors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <p className="text-sm text-slate-700">
                <strong>Note:</strong> These are approximate ranges for comprehensive cover. Actual costs depend on your specific trailer, location, usage, chosen excess, and provider. Get quotes for accurate pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Factors */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What Affects Your Trailer Insurance Cost?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costFactors.map((factor, idx) => {
                const Icon = factor.icon;
                return (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{factor.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{factor.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">How to Reduce Your Trailer Insurance Costs</h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Increase Your Excess',
                  content: 'Choosing a higher excess (e.g., $1000 instead of $500) can reduce your premium by 10-20%. Only do this if you can afford to pay the excess if you claim.',
                },
                {
                  title: 'Bundle Insurance Policies',
                  content: 'Combining home and trailer insurance with the same provider often qualifies you for multi-policy discounts of 10-15%.',
                },
                {
                  title: 'Improve Security',
                  content: 'Installing wheel clamps, coupling locks, alarm systems, or GPS trackers can reduce your premium by 5-15% depending on your provider.',
                },
                {
                  title: 'Park Safely',
                  content: 'Parking in secure locations (garage, locked compound) rather than street parking can lower your premium by 5-10%.',
                },
                {
                  title: 'Maintain Your Trailer',
                  content: 'A well-maintained trailer with documented service history may qualify for discounts and lower premiums.',
                },
                {
                  title: 'Ask About Discounts',
                  content: 'Many insurers offer loyalty discounts, good driver discounts, and membership discounts (AA, motoring clubs). Always ask about available discounts.',
                },
                {
                  title: 'Review Annually',
                  content: 'Insurance rates change yearly. Compare quotes from multiple providers annually to ensure you\'re getting the best current rate.',
                },
                {
                  title: 'Choose the Right Coverage',
                  content: 'You might not need comprehensive cover. Evaluate whether third-party liability alone would be sufficient for your situation and save significantly.',
                },
              ].map((tip, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{tip.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{tip.content}</p>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Get Your Free Trailer Insurance Quote</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Find out exactly how much you'll pay for trailer insurance. Get quotes from multiple NZ providers in just a few minutes.
                </p>
                <p className="text-lg text-slate-700">
                  Our comparison service shows you transparent pricing so you can find the best deal for your needs.
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
