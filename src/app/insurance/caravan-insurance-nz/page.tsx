'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Shield, Home, AlertTriangle, Zap, MapPin, CheckCircle2, TrendingUp, Lock } from 'lucide-react';

export default function CaravanInsurancePage() {
  const benefits = [
    {
      icon: Home,
      title: 'Caravan Structure Protection',
      description: 'Full coverage for the caravan body, chassis, awnings, and permanent fixtures including kitchen, bathroom, and sleeping areas.',
    },
    {
      icon: Shield,
      title: 'Accidental Damage Coverage',
      description: 'Protection against collision damage, impact with objects, overturning, and damage from accidents during travel or while parked.',
    },
    {
      icon: AlertTriangle,
      title: 'Theft & Break-in Protection',
      description: 'Cover against theft of your entire caravan or attempted theft, plus damage from break-ins and vandalism while parked.',
    },
    {
      icon: Zap,
      title: 'Electrical & Appliance Cover',
      description: 'Coverage for onboard electrical systems, water heaters, air conditioning, fridges, and other appliances that fail due to insured events.',
    },
    {
      icon: MapPin,
      title: 'On-Site and Travelling Cover',
      description: 'Full protection whether your caravan is at a holiday park, in storage, being towed, or parked in your driveway.',
    },
    {
      icon: TrendingUp,
      title: 'Agreed Value Option',
      description: 'Choose to have your caravan valued at purchase and settle total losses at that agreed figure without depreciation disputes.',
    },
  ];

  const relatedGuides = [
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Camper Trailer Insurance', href: '/insurance/camper-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Contents Insurance Guide', href: '/types/contents-cover' },
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
            name: 'Caravan Insurance NZ',
            description: 'Comprehensive caravan insurance coverage in New Zealand protecting your investment against damage, theft, and accidents',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://www.trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://www.trailerinsurance.co.nz/insurance/caravan-insurance-nz',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1765478423046-b66c352ff59a?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Home className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Protect Your Home Away From Home</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Caravan Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Complete Peace of Mind for Your Adventures
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Comprehensive caravan insurance that covers your investment on the road and at home. From holiday parks to remote camping spots, we've got you protected 24/7 across all of New Zealand.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Caravan Insurance is Essential</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Caravans are a significant investment, and many New Zealand families rely on them for holidays, weekend getaways, and extended travel adventures. Whether you own a single-axle van, a large family caravan, or a luxury pop-top, specialist caravan insurance is crucial to protect your asset.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Standard car insurance policies don't provide adequate cover for caravans once they're unhitched from your tow vehicle. Your caravan can be exposed to theft, weather damage, accidental damage, and vandalism while parked at holiday parks, in storage, or at home. Dedicated caravan insurance fills this gap with comprehensive protection designed specifically for your caravanning lifestyle.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                New Zealand's top insurers — AA Insurance, AMI Insurance, State Insurance, and Tower — all offer specialised standalone caravan policies with flexibility to match your needs. The right policy protects not just the caravan structure but also the electrical systems, appliances, and contents that make your travels comfortable. Importantly, all NZ caravan insurers require phone contact to obtain a quote — no self-serve online quote tools exist for caravans in NZ.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Caravan Insurance Covers</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Caravan Structure and Chassis</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Comprehensive caravan insurance covers damage to the caravan body, chassis, frame, walls, roof, windows, and doors. If your caravan is damaged in an accident, hit by falling debris, or damaged by weather events, your insurance covers the structural repairs or replacement. This includes damage to permanent fixtures like built-in furniture, kitchen units, and bathroom installations.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Electrical Systems and Appliances</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Modern caravans contain complex electrical systems, water heating, air conditioning, refrigeration, and cooking appliances. Quality caravan insurance covers damage to these systems when caused by an insured event such as an accident, lightning strike, or electrical fault resulting from impact damage. Some policies include optional mechanical breakdown cover if your fridge or other appliances fail during your holidays.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft Protection</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Caravan theft is an increasing problem across New Zealand. Thieves target caravans for their valuable contents, appliances, or to resell the entire unit. Comprehensive caravan insurance protects against the theft of your entire caravan or attempted theft that causes damage. To qualify for theft cover, you'll need to demonstrate reasonable security measures such as wheel clamps, coupling locks, and parking in secure locations when possible.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Weather and Natural Disaster Coverage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                New Zealand's weather can be unpredictable. Caravan insurance covers damage from storms, heavy rain, hail, wind, lightning, and flooding. If a branch crashes through your caravan during a storm, hail damages your awning, or a flood affects your vehicle while parked at a holiday park, you're covered. Natural disaster coverage includes earthquakes and subsidence, though some policies may have specific terms for these events.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Contents Insurance Add-on</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your caravan insurance typically covers the structure, but your personal contents—camping equipment, bedding, cooking gear, and valuables—usually need a separate contents policy add-on. This covers your items if they're damaged or stolen. Given the value of camping equipment and the fact that your caravan often travels to remote locations, contents cover is highly recommended.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accidental Damage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Accidents happen, especially during towing. If you collide with another vehicle, hit a low bridge, or swerve to avoid an obstacle and damage your caravan, accidental damage cover protects you. This includes damage from overturning, load shifts, and impacts with fixed objects like fence posts, trees, or bollards while parked or being towed.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Towing and Recovery</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your caravan becomes damaged or unsafe to tow, you'll need professional assistance. Most comprehensive caravan policies include cover for towing and recovery costs to get your caravan to a repairer. This can cost hundreds of dollars if you break down far from home, so this coverage is invaluable.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Key Considerations for Caravan Insurance</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Agreed Value vs Market Value</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many insurers offer agreed value caravan insurance, where you declare the value of your caravan upfront. If it's a total loss, you'll be paid this agreed amount without depreciation disputes. This is especially valuable for well-maintained caravans or unusual models where market value would be difficult to establish. Market value policies settle based on what your caravan would fetch at the time of loss, which can be lower than you expect.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Annual vs Multi-Year Policies</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Most insurers offer annual caravan policies, though some allow multi-year arrangements if you're a good customer. Annual policies give you flexibility to review your coverage and shop around each year. Multi-year policies can offer savings but lock you in—make sure you're happy with the terms before committing.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Usage Restrictions</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Some caravan insurance policies have usage restrictions. For example, policies might have mileage limits, restrict towing to certain vehicle types, or require that your caravan isn't left unattended in remote areas for extended periods. Always read the fine print to ensure your intended use is covered.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Safety and Security Requirements</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To qualify for comprehensive caravan insurance, you'll typically need to take basic security precautions. This includes using approved wheel clamps, securing the coupling, parking in safe locations when possible, and having the caravan inspected regularly. Some insurers offer discounts for additional security measures like GPS trackers or alarm systems.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-3 mt-12">Top Insurers for Caravan Cover</h2>
              <p className="text-slate-600 text-base mb-6">All providers below offer dedicated standalone caravan policies — not just trailer or car add-ons. All require phone contact for a quote.</p>

              <div className="bg-amber-50 p-8 rounded-2xl border-2 border-amber-300 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-700">AMI Insurance</h3>
                  <span className="text-xs font-bold bg-amber-500 text-white px-2.5 py-1 rounded-full">Top Pick for Caravans</span>
                </div>
                <p className="text-slate-700 mb-3">
                  AMI (IAG Group) is the standout choice for caravan owners in NZ. They offer a dedicated, separate Caravan Insurance policy with contents cover included as standard — furniture, appliances, and personal belongings inside your caravan. Excess-free key replacement up to $1,000. $20 million third-party liability.
                </p>
                <p className="text-slate-500 text-sm font-medium">Best for: caravans with contents, appliances, and personal belongings inside.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">AA Insurance</h3>
                  <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">16× Most Trusted</span>
                </div>
                <p className="text-slate-700 mb-3">
                  AA Insurance offers a dedicated standalone caravan policy with agreed value and $20 million third-party liability. NZ's Most Trusted Insurer for 16 years running. Flexible excess options and strong nationwide repair network. All quotes via their broker network.
                </p>
                <p className="text-slate-500 text-sm">Best for: brand trust, agreed value cover, nationwide claim support.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">Tower Insurance</h3>
                  <span className="text-xs font-bold bg-green-100 text-green-800 px-2.5 py-1 rounded-full">$25M Liability</span>
                </div>
                <p className="text-slate-700 mb-3">
                  Tower offers the highest third-party liability at $25 million — highest in the NZ market. Optional contents cover (up to $5,000) and accessories cover ($2,000–$5,000) are available add-ons. Comprehensive cover includes natural disaster, fire, theft, and collision.
                </p>
                <p className="text-slate-500 text-sm">Best for: maximum liability, optional contents cover on a caravan with valuables.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">State Insurance</h3>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">IAG Group</span>
                </div>
                <p className="text-slate-700 mb-3">
                  State Insurance (IAG Group) has a dedicated Caravan Insurance policy document (SI1057/9) separate from their trailer policy. Multi-policy bundling discounts available for customers with existing State home or car cover. Via State.co.nz.
                </p>
                <p className="text-slate-500 text-sm">Best for: bundling with existing State Insurance policies.</p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Tips for Getting the Best Caravan Insurance Deal</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Get quotes from at least 3-5 insurers to compare premiums and coverage levels</li>
                <li>Choose agreed value if you have a newer or well-maintained caravan</li>
                <li>Consider contents cover if you carry valuable equipment or camping gear</li>
                <li>Invest in approved security measures—wheel clamps, coupling locks, and parking safely</li>
                <li>Ask about multi-policy discounts if you bundle caravan and home insurance</li>
                <li>Review your policy annually to ensure your coverage still matches your needs</li>
                <li>Declare accurate usage and mileage—misrepresentation can affect claims</li>
                <li>Keep your caravan well-maintained to reduce mechanical issues and insurance concerns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What Your Caravan Insurance Provides</h2>

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

        {/* Common Exclusions */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">What's Usually NOT Covered</h2>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 space-y-4">
              <p className="text-lg text-slate-700 font-semibold mb-6">Understanding exclusions is important. Most caravan policies exclude:</p>
              <ul className="list-disc list-inside space-y-3 text-lg text-slate-700">
                <li>Wear and tear, rust, corrosion, and gradual deterioration</li>
                <li>Mechanical or electrical breakdowns not caused by an insured event</li>
                <li>Damage from faulty maintenance or poor repair quality</li>
                <li>Contents unless you have contents cover as an add-on</li>
                <li>Damage while towing with an unsuitable or unroadworthy vehicle</li>
                <li>Damage from overloading beyond the caravan's rated capacity</li>
                <li>Damage while being used for racing or competitive events</li>
                <li>Gas bottle damage or gas system leaks (may need specialist cover)</li>
                <li>Loss of enjoyment or cost of alternative accommodation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Caravan Insurance FAQs</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Do I need caravan insurance if I only use it occasionally?',
                  a: 'Yes. Even if you only use your caravan a few times a year, it still needs protection when parked at home or at holiday parks. Theft and weather damage can happen anytime.',
                },
                {
                  q: 'Can I add contents cover to my caravan insurance?',
                  a: 'Yes, most insurers offer optional contents cover to protect your camping equipment, bedding, cooking gear, and personal items inside the caravan.',
                },
                {
                  q: 'What security measures do I need for caravan insurance?',
                  a: 'Typically, you need an approved wheel clamp, coupling lock, and should park in safe locations when possible. Some insurers offer discounts for GPS tracking or alarm systems.',
                },
                {
                  q: 'How much does caravan insurance cost in New Zealand?',
                  a: 'Costs vary based on your caravan value, age, type, location, and chosen excess. Budget anywhere from $300-$1000+ annually. Get quotes from multiple insurers to find the best price.',
                },
                {
                  q: 'What is agreed value caravan insurance?',
                  a: 'Agreed value insurance means you and the insurer agree on your caravan\'s value upfront. If it\'s a total loss, you\'ll be paid this amount without depreciation disputes.',
                },
                {
                  q: 'Am I covered if I tow my caravan with a rental vehicle?',
                  a: 'This depends on your policy. Some insurers restrict cover to specific tow vehicles. Check with your insurer before towing with a rental.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.a}</p>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Ready to Protect Your Caravan?</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Don't leave your caravan uninsured. Get a quote today and discover how affordable comprehensive caravan insurance can be. Our process is simple, fast, and transparent—no hidden fees or surprise costs.
                </p>
                <p className="text-lg text-slate-700">
                  We compare policies from New Zealand's top insurers, so you can easily see which offers the best value and coverage for your needs.
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
