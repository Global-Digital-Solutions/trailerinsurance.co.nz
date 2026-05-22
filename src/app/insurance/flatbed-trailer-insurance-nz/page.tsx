'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Truck, Shield, AlertTriangle, Zap, CheckCircle2, TrendingUp, Lock, Home } from 'lucide-react';

export default function FlatbedTrailerInsurancePage() {
  const benefits = [
    {
      icon: Truck,
      title: 'Flatbed and Commercial Trailer Coverage',
      description: 'Full protection for flatbed, drop-deck, and commercial trailers designed for heavy-duty work and material transport.',
    },
    {
      icon: Shield,
      title: 'Load Securing System Protection',
      description: 'Coverage for tie-down points, chains, straps, and securing systems that keep loads safe during transport.',
    },
    {
      icon: AlertTriangle,
      title: 'Accidental Damage & Repairs',
      description: 'Protection against collision damage, impact damage, and accidents while towing heavy loads.',
    },
    {
      icon: Zap,
      title: 'Brake and Suspension Systems',
      description: 'Coverage for heavy-duty brakes, air suspension, and components designed for commercial use and heavy loads.',
    },
    {
      icon: Home,
      title: 'Theft and Vandalism Protection',
      description: 'Comprehensive cover against theft of equipment and damage to security features at work sites.',
    },
    {
      icon: TrendingUp,
      title: 'Commercial and Trade Use',
      description: 'Insurance designed for business use covering regular commercial and trade applications.',
    },
  ];

  const relatedGuides = [
    { title: 'Box Trailer Insurance NZ', href: '/insurance/box-trailer-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Trailer Insurance Cost NZ', href: '/insurance/trailer-insurance-cost-nz' },
    { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz' },
    { title: 'Commercial Trailer Coverage', href: '/types/commercial' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceProduct',
            name: 'Flatbed Trailer Insurance NZ',
            description: 'Commercial flatbed trailer insurance in New Zealand for heavy-duty work, material transport, and trade use',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/flatbed-trailer-insurance-nz',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(/hero-trailer-2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Truck className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Commercial Grade Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Flatbed Trailer Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Heavy-Duty Coverage for Trade and Commerce
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Specialist insurance for flatbed and commercial trailers. Comprehensive coverage designed for heavy loads, material transport, and professional use across New Zealand.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Commercial Flatbed Trailers Require Specialist Insurance</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbed and open trailers are workhorses of New Zealand's construction, landscaping, and transport industries. These trailers carry high-value loads, require heavy-duty components, and operate in demanding conditions. Standard personal trailer insurance is inadequate—you need insurance designed for commercial heavy-duty use.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbed trailers face unique risks: heavy loads stress brakes and suspension, exposed cargo attracts theft, and work sites expose equipment to vandalism. Your flatbed is essential to your business operations. Damage or theft can disrupt your work schedule and profitability, making reliable insurance critical.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Insurance providers AA Insurance, AMI, State, Tower, and others offer commercial-grade flatbed policies with coverage appropriate for heavy-duty use. These policies understand the demands of trade and commercial operations.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Comprehensive Flatbed Trailer Coverage</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Deck and Structure Protection</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your flatbed deck, side rails, and structural frame are built for heavy loads. Insurance covers damage to these components from accidents, impacts, overloading incidents, and weather events. Reinforced decking and heavy-duty construction require specialised knowledge to repair properly.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Heavy-Duty Brake Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbed trailers use heavy-duty air brake systems and drum brakes rated for carrying heavy loads. These expensive systems require specialist repair. Insurance covers damage to brake components, air lines, and connections when damaged by accidents or impacts.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Air Suspension and Axles</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Heavy-duty air suspension systems and multiple axles handle the stress of commercial loads. These components are expensive to replace. Insurance covers damage to air springs, dampers, axles, bearings, and suspension connections.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Tie-Down and Load Securing Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbeds have built-in tie-down points, rings, and securing systems to safely transport loads. Insurance covers damage to these securing systems from impacts or wear. Some policies may exclude normal wear but cover accidental damage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Electrical and Lighting Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial trailers have robust electrical systems for lights, backup alarms, and monitoring. Insurance covers damage to wiring, connections, and electrical components when damaged by accidents or weather.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accidental Damage During Towing</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Accidents happen, especially when towing heavy loads on busy roads. If your flatbed is hit, you collide with an obstacle, or accident damage occurs, comprehensive coverage protects you. This includes damage from overturning or jackknifing.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Work Site Security</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbeds parked at work sites or storage facilities are targets for equipment theft. Comprehensive coverage protects against theft of the entire trailer or securing equipment, tools, and materials loaded on the flatbed.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Commercial Flatbed Insurance Considerations</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Declaring Commercial Use</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                You must declare your flatbed for commercial or trade use. Using a personal policy for business purposes voids coverage. Commercial policies are rated for regular business use and have appropriate terms for work site operations.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Load Types and Weight Limits</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Declare the types of loads you typically carry and your trailer's weight rating. Overloading beyond the trailer's capacity may void insurance. If you regularly exceed certain weight limits, your policy rating changes accordingly.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Towing Vehicle Requirements</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your tow vehicle must be suitable for your flatbed and loads. Using an undersized or unsuitable vehicle may void coverage. Ensure your truck or tow vehicle is properly maintained and rated for your typical loads.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Regular Maintenance and Inspection</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial trailers must be well-maintained. Regular brake maintenance, electrical inspection, and structural checks are essential. Insurers may deny claims if poor maintenance contributed to damage.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Top Insurers for Commercial Flatbed Trailers</h2>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA Insurance offers commercial flatbed policies tailored to construction and trade use. They understand commercial operations and provide reliable coverage for heavy-duty work.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State provides commercial trailer insurance with 24/7 claims support ideal for businesses. Their commercial expertise and reliable handling make them a solid choice.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">Tower Insurance</h3>
                <p className="text-slate-700 mb-4">
                  Tower offers competitive commercial trailer policies with flexible terms and good claims support for trade users and construction companies.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Tips for Flatbed Trailer Insurance</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Declare your business use and typical load types honestly</li>
                <li>Maintain your flatbed regularly with documented service history</li>
                <li>Use wheel clamps and couple locks when parked at work sites</li>
                <li>Park in secure, well-lit areas when possible</li>
                <li>Ensure your tow vehicle is suitable and properly maintained</li>
                <li>Don't overload beyond your trailer's rated capacity</li>
                <li>Keep records of major repairs and maintenance performed</li>
                <li>Review your policy annually to ensure coverage matches your operations</li>
                <li>Get competitive quotes from multiple insurers to ensure best pricing</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Common Flatbed Trailer Claims</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Load Shifting and Overturning Incidents</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                One of the most serious flatbed claims involves load shifts or overturning. Improperly secured loads shift during transport, damaging tie-down systems or causing trailer tipping. When properly insured, accidental damage covers impacts from load shifts or overturning incidents. However, insurers may investigate whether load securing was adequate. Proper load securing reduces claim risk and demonstrates responsible operation.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Impact Damage from Collisions</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Collision damage to flatbed trailers can be extensive and expensive. Side impacts, rear-end collisions, or being hit while parked cause structural damage and component breakage. Comprehensive coverage protects against these accidents. Report collisions immediately to police and your insurer. Provide photos of damage, vehicle positions, and witness details. Quick documentation helps claims processing.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Brake System Failures</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Heavy-duty air brake systems are critical for safe flatbed operation. Brake failures can result from accident damage, impact damage, or component wear. Insurance covers damage to brake systems when caused by accidents or impacts, but excludes normal wear and maintenance failures. Optional mechanical breakdown coverage protects against system failures due to wear. Excellent maintenance practices help keep brake systems reliable.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Security Breaches</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbeds parked at work sites are theft targets. Thieves steal securing equipment, chains, or material left on the deck. Comprehensive insurance covers theft. To qualify for theft coverage, use approved security—wheel clamps, couple locks, and ideally tracking devices or alarms. Work site security matters; well-lit, monitored sites have lower theft risk. Report thefts to police immediately.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Cost Factors for Commercial Flatbed Insurance</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Load Types and Weight Ratings</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Insurance premiums vary based on what you carry and how you operate. Carrying heavy construction loads costs more than occasional light haulage. Hazardous materials transport increases premiums significantly. Your trailer's weight rating and typical load weights are critical declarations. Overloading beyond rated capacity increases accident risk and may void insurance. Honest load declarations ensure appropriate premium and coverage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Driver Experience and Qualifications</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Driver qualifications affect flatbed insurance premiums. Drivers with heavy vehicle licenses (if required for your trailer combination), good driving records, and specialised heavy-load training command lower premiums. Inexperienced drivers or those with traffic violations cost more. Some insurers require specific training for high-value load transport. Investing in driver training can reduce premiums and improve safety.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Tow Vehicle Suitability</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your tow vehicle must be suitable for your flatbed and loads. Using an undersized or unsuitable vehicle increases accident risk and may void insurance. Ensure your towing vehicle's gross vehicle weight and brake capacity match your typical loads. Commercial trucks properly rated for heavy towing cost less to insure than passenger vehicles struggling with trailer loads. Equipment matching is important for safety and insurance validity.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Operating Territory and Mileage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Annual mileage affects premiums. High-mileage operations (frequent long-distance hauls) cost more than low-mileage operations. Operating primarily in certain regions may impact rates. Urban delivery routes have different risks than long-haul highway transport. Declaring your typical operating territory and annual kilometers helps insurers assess your actual risk profile and set appropriate premiums.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Choosing Appropriate Flatbed Coverage</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Commercial vs Standard Coverage Requirements</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <Link href="/types/commercial" className="text-amber-600 hover:text-amber-700 font-semibold underline">Commercial flatbed insurance</Link> is mandatory for business use. Standard personal insurance is inadequate for business operations and will be void if you use the trailer for trade. <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">Comprehensive commercial coverage</Link> protects against accidental damage, theft, vandalism, and weather damage—essential for work trailers. Ensure your policy rating matches your actual use.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Load Coverage and Cargo Insurance</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Flatbed insurance typically covers the trailer structure and securing systems. Materials or goods carried on the flatbed may need separate cargo insurance, depending on their value and nature. If you regularly transport high-value cargo, discuss cargo coverage options with your insurer. For construction materials or plant hire, clarify coverage boundaries—what's included in your flatbed policy versus what needs separate cargo cover.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Breakdowns and Recovery Services</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Heavy-duty trailers occasionally need emergency recovery—winching out, towing after breakdowns, or crane assistance. Some insurers include roadside assistance; others charge extra. For commercial operations, roadside assistance is worth considering. Recovery costs for heavy flatbeds can be substantial ($2000-$5000+). Adding recovery coverage provides peace of mind knowing you're covered if mechanical issues occur far from your base.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Local Considerations for Commercial Flatbed Operations</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Regional Operating Patterns and Risks</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Operating patterns vary across New Zealand. Auckland and Wellington commercial operations face urban congestion and theft risks. Regional New Zealand operations may involve remote locations with different weather challenges. South Island routes encounter more severe weather and longer distances. Insurers adjust premiums based on your primary operating regions. Honest declarations about where you regularly operate help insurers assess your specific risks.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Work Site Security and Parking</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Where you park your flatbed overnight affects insurance and security. Parked at secure compounds or locked facilities? Rates are lower. Parked on site or street parking? Rates are higher and theft risk increases. Some insurers require secure parking for overnight storage. Using monitored compound parking, security gates, and well-lit areas reduces theft risk and insurance costs.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Maintenance and Compliance Records</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial flatbeds must meet maintenance standards. Regular brake testing, mechanical inspections, and safety certification (if required) demonstrate responsible operation. Keep detailed maintenance records. Insurers may require maintenance history when assessing claims. Poor maintenance can result in claim denials or premium increases. Professional maintenance management protects your investment and insurance validity.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Finding Competitive Commercial Flatbed Insurance</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <Link href="/compare" className="text-amber-600 hover:text-amber-700 font-semibold underline">Comparing commercial flatbed insurance from multiple providers</Link> ensures you get competitive rates. Different insurers specialise in different sectors—some focus on construction, others on logistics or agriculture. Getting quotes from specialists in your industry often yields better rates than generic insurers.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Review your policy annually. Operating changes, fleet adjustments, or improved safety records may reduce premiums. Some insurers offer performance discounts for claims-free years. Multi-trailer discounts apply if you operate several flatbeds. <Link href="/contact" className="text-amber-600 hover:text-amber-700 font-semibold underline">Contact us for quotes from leading commercial insurers</Link> to find the best value for your flatbed operations.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Complete Commercial Flatbed Protection</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Commercial Flatbed</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Your flatbed is essential to your business. Don't operate without proper commercial insurance. Get comprehensive coverage designed for heavy-duty work and regular use.
                </p>
                <p className="text-lg text-slate-700">
                  Get a quote today and compare commercial flatbed insurance from New Zealand's leading providers.
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
