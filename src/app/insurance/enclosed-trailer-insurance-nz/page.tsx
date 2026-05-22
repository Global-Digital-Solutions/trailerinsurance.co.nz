'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Lock, Shield, AlertTriangle, Package, CheckCircle2, TrendingUp, Home, Zap } from 'lucide-react';

export default function EnclosedTrailerInsurancePage() {
  const benefits = [
    {
      icon: Lock,
      title: 'Enclosed Structure Protection',
      description: 'Full coverage for aluminum or steel bodywork, doors, windows, roof, and insulation protecting your cargo and equipment.',
    },
    {
      icon: Shield,
      title: 'Security and Access Features',
      description: 'Protection for locks, hinges, door mechanisms, and security systems that keep your contents safe from theft.',
    },
    {
      icon: Package,
      title: 'Contents Protection Available',
      description: 'Optional add-on coverage for valuable cargo, equipment, and tools stored inside your enclosed trailer.',
    },
    {
      icon: AlertTriangle,
      title: 'Accidental Damage Coverage',
      description: 'Protection against collision damage, impacts, and accidents while towing your enclosed cargo trailer.',
    },
    {
      icon: Home,
      title: 'Theft and Vandalism Protection',
      description: 'Comprehensive cover against theft and break-ins at storage facilities, carparks, or work sites.',
    },
    {
      icon: TrendingUp,
      title: 'Business and Trade Use',
      description: 'Insurance designed for commercial use, trade operations, and equipment transport across New Zealand.',
    },
  ];

  const relatedGuides = [
    { title: 'Box Trailer Insurance NZ', href: '/insurance/box-trailer-insurance-nz' },
    { title: 'Car Trailer Insurance', href: '/insurance/car-trailer-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Trailer Insurance Cost NZ', href: '/insurance/trailer-insurance-cost-nz' },
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
            name: 'Enclosed Trailer Insurance NZ',
            description: 'Enclosed cargo trailer insurance in New Zealand protecting your equipment, tools, and valuable contents',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/enclosed-trailer-insurance-nz',
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
                <Lock className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Secure Cargo Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Enclosed Trailer Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Protection for Cargo and Equipment Trailers
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Comprehensive insurance for enclosed cargo trailers protecting your valuable equipment, tools, and contents. Complete coverage from break-ins to accidents.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Enclosed Trailers Need Specialist Insurance</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed cargo trailers provide secure storage and transport for valuable equipment, tools, and contents. Whether you're a tradie carrying expensive power tools, a business transporting inventory, or a contractor moving specialised equipment, your enclosed trailer is a critical business asset.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed trailers are attractive targets for thieves. The enclosed design protects contents but also makes it harder for thieves to see what's inside, increasing theft risk. Break-ins at storage facilities, construction sites, or parking areas can result in total loss of your cargo. Your standard car insurance doesn't protect your unhitched trailer—you need dedicated insurance.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Quality enclosed trailer insurance from providers like AA Insurance, AMI, State, Tower, and others offers comprehensive coverage designed for cargo protection. These policies often include optional contents insurance to protect the valuable equipment and materials you carry.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Enclosed Trailer Insurance Covers</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trailer Body and Structure</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Insurance covers damage to the aluminum or steel trailer body, roof, floor, and walls. If your enclosed trailer is hit by another vehicle, damaged in an accident, or impacted while parked, your insurance covers structural repairs or replacement.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Doors, Windows, and Access Points</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed trailers have doors, windows, and access points that are vulnerable to break-ins and damage. Insurance covers damage from break-ins, attempted theft, and impact damage to doors, hinges, windows, and frames.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Locking Systems and Security Equipment</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Quality locks are essential to protecting your cargo. Insurance covers damage to locks, hasps, hinges, and reinforced security features from attempted break-ins or accidents. Upgrading security may qualify you for discounts.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Electrical and Lighting Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed trailers often have internal lighting, exterior lights, and electrical connections. Insurance covers damage to these systems from impacts, weather, or accidents.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Brakes and Suspension</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Well-functioning brakes and suspension are essential for safe towing. Insurance covers damage to these systems from accidents or impacts, ensuring your trailer remains safe to tow.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft Protection</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Comprehensive insurance covers theft of the entire enclosed trailer or theft through break-ins. This is critical protection given that enclosed trailers are common theft targets. Use wheel clamps and coupling locks to qualify for theft cover.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Contents Insurance Add-on</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The trailer structure is covered by your main policy, but your cargo—tools, equipment, materials, inventory—usually needs separate contents insurance. Optional contents coverage protects the valuable items you transport inside your enclosed trailer. This is essential for tradies and businesses carrying expensive equipment.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Enclosed Trailer Insurance Considerations</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Contents Valuation</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you carry valuable contents, get an accurate inventory and valuation. Contents insurance limits must match your typical cargo value. Underinsuring means you'll be undercompensated in a claim; overinsuring means you'll pay unnecessary premiums.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Business vs Personal Use</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Declare your intended use. Commercial trailers used for business or trade have different coverage and pricing than personal equipment trailers. Using the wrong policy type may void coverage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Security Requirements</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To qualify for comprehensive cover, you'll need approved wheel clamps and coupling locks. Many insurers offer discounts for upgraded security like reinforced doors, alarm systems, or GPS tracking.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Storage Location</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Where you park your enclosed trailer affects your premium and coverage. Secure storage (locked compound, garage) commands better rates than street parking or exposed work sites. Be honest about typical parking locations.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Top NZ Insurers for Enclosed Trailers</h2>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA Insurance offers enclosed trailer policies with optional contents coverage for tradies and businesses. Good claims support and flexible excess options.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AMI Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AMI specialises in commercial and trade insurance with enclosed trailer policies designed for business use. Multi-policy discounts and good customer service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State provides commercial-grade enclosed trailer insurance with 24/7 claims support, ideal for businesses relying on equipment transport.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Common Enclosed Trailer Insurance Claims Scenarios</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Break-Ins and Theft of Contents</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Break-ins at storage facilities, construction sites, or parking areas are the most common claims for enclosed trailers. Thieves target expensive tools, equipment, and materials stored inside. With <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">comprehensive coverage including contents protection</Link>, you're covered for both the forced entry damage and the stolen contents. Keep detailed inventories with photos and descriptions of valuable items, which helps speed up claims processing.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trailer Structural Damage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Accidents while towing can cause significant structural damage. If your enclosed trailer is hit by another vehicle or hits an obstacle, damage to the aluminum or steel body, roof, and walls can be expensive to repair. Comprehensive insurance covers these impacts. Weather events like hail or windstorms can also damage the enclosed structure. Make sure your policy covers accidental damage and weather-related incidents.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Vandalism at Unattended Locations</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed trailers left at work sites, yards, or public parking areas are vulnerable to vandalism. Graffiti, dents, broken windows, and door damage can be costly. Your insurance covers vandalism damage, though you may need photographic evidence. To reduce vandalism risk and potentially lower premiums, park in secure locations with CCTV monitoring when possible, and maintain good lighting around your trailer.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">How to Choose the Right Enclosed Trailer Insurance Coverage</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trailer Cover vs Contents Cover</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                It's essential to understand the difference. Your main policy covers the trailer structure—the aluminum body, roof, floor, doors, lights, brakes, and suspension. Your contents cover is a separate, optional add-on that protects the valuable items you carry inside—tools, equipment, inventory, and materials. Most tradies and business operators need both. <Link href="/types/contents-cover" className="text-amber-600 hover:text-amber-700 font-semibold underline">Learn more about contents coverage options</Link> to protect your valuable cargo.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Calculate Your True Coverage Needs</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Before getting quotes, inventory your typical cargo. Make a detailed list of the tools and equipment you regularly carry, with estimated replacement values. This inventory determines your contents insurance limit. Don't underestimate—if your inventory is worth $15,000 but you only insure for $10,000, you'll only be compensated $10,000 if there's a total loss. Conversely, don't over-insure unnecessarily. An accurate inventory ensures you get appropriate coverage at a fair premium.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Business Use Requirements</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you use your enclosed trailer for business purposes—transporting stock, tools, equipment for paid work, or as part of your trade—you need commercial coverage. Personal insurance for business use will have claims denied. Be honest about your intended use when getting quotes. Some insurers specialise in commercial and trade use with coverage levels and support designed for business operators.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Cost-Saving Strategies for Enclosed Trailer Insurance</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Security Measures Pay for Themselves</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Investing in security can substantially reduce your insurance costs. Approved wheel clamps and coupling locks can earn you 5-10% discounts. Alarm systems, motion sensors, or GPS trackers can reduce premiums by another 10-15%. Reinforced doors and high-grade locks are valued by insurers. These security measures have the added benefit of actually preventing theft and break-ins, which protects your contents and maintains your claims history. Calculate the payback period—many security investments pay for themselves through lower insurance premiums in 2-3 years.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Secure Storage Locations</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Where you park your trailer affects your insurance rate. Parking in a locked compound, garage, or secure facility commands significantly lower premiums than street parking or exposed work sites. If possible, arrange secure parking at your business premises or use a professional storage facility during downtime. This single change can reduce your premium by 10-20%.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Higher Excess for Lower Premiums</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you can afford a higher excess, it significantly reduces your premium. Moving from a $500 excess to a $1000 excess can save 10-20% on your annual cost. This works well for established businesses with few claims. However, only choose this option if you can confidently pay the excess if you claim.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">NZ-Specific Enclosed Trailer Insurance Considerations</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trade and Business Compliance</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                New Zealand's insurance regulations require that business use be explicitly declared. If you operate a construction, landscaping, electrical, or plumbing business using an enclosed trailer, you must have commercial coverage. Using personal insurance for business purposes voids your coverage. Professional tradespeople should get quotes specifically designed for their industry, which often include specialised coverage for common risks in that trade.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Contents Documentation</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For contents claims, documentation is essential. Keep detailed records with photos of expensive tools and equipment. Note serial numbers, purchase dates, and original values. This documentation speeds up claims processing and helps prevent disputes about item values. Some insurance policies allow you to take photos during the initial sign-up to establish baseline evidence.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Seasonal Variations and Storage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your trailer is used intensively during certain seasons and stored idle other times, inform your insurer. Some policies adjust coverage or premium during off-seasons. Similarly, if you operate in coastal areas or regions with harsh weather, make sure your policy covers weather-related damage. <Link href="/insurance/compare-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">Compare different insurers' approaches to seasonal operations</Link> to find the best match for your business cycle.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Multi-Trailer and Fleet Considerations</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you operate multiple trailers, fleet insurance policies may offer better rates than individual policies. <Link href="/types/commercial" className="text-amber-600 hover:text-amber-700 font-semibold underline">Commercial fleet coverage</Link> can cover all your trailers under one policy with simplified management and often significant savings.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Tips for Enclosed Trailer Insurance</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Get accurate contents valuation if carrying expensive equipment or tools</li>
                <li>Use approved wheel clamps and coupling locks when parked</li>
                <li>Install quality locks and security features on doors</li>
                <li>Consider GPS tracking or alarm systems for additional protection</li>
                <li>Park in secure, monitored locations whenever possible</li>
                <li>Declare your business use and typical cargo values accurately</li>
                <li>Keep an inventory of contents with photos and descriptions</li>
                <li>Maintain your trailer regularly—poor maintenance can affect claims</li>
                <li>Review your contents coverage annually as inventory changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Complete Enclosed Trailer Protection</h2>

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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Enclosed Trailer and Cargo</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Don't leave your valuable equipment and tools at risk. Get comprehensive enclosed trailer insurance that covers both the trailer and your contents.
                </p>
                <p className="text-lg text-slate-700">
                  Get a quote today and compare coverage from New Zealand's leading insurers specialising in cargo and equipment transport.
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
