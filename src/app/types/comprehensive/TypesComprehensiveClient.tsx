'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import {
  Shield,
  Flame,
  Wind,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Home,
  Lock,
  Umbrella,
  Wrench,
} from 'lucide-react';

export default function ComprehensivePage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Collision & Impact Damage',
      description: 'Cover for damage caused by accidents, collisions with other vehicles, and impacts with objects like posts, trees, or fencing.',
    },
    {
      icon: Flame,
      title: 'Fire & Explosion',
      description: 'Full coverage if your trailer catches fire due to electrical faults, accidents, or other causes. Includes firefighting costs and debris removal.',
    },
    {
      icon: AlertTriangle,
      title: 'Theft & Attempted Theft',
      description: 'Protection against trailer theft, which is increasingly common in NZ. Covers the full replacement value minus any excess.',
    },
    {
      icon: Wind,
      title: 'Storms & Natural Disasters',
      description: 'Cover for damage from heavy rain, hail, lightning, flooding, earthquakes, and other weather-related incidents.',
    },
    {
      icon: Zap,
      title: 'Electrical & Mechanical Breakdown',
      description: 'Coverage for damage to electrical systems, brakes, suspension, and mechanical components from accidents or weather events.',
    },
    {
      icon: Wrench,
      title: 'Emergency Repairs',
      description: 'Authorization for emergency repairs needed to get your trailer roadworthy again, with minimal out-of-pocket costs.',
    },
  ];

  const relatedGuides = [
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
    { title: 'Boat Trailer Insurance', href: '/insurance/boat-trailer-insurance-nz' },
    { title: 'Horse Float Insurance', href: '/insurance/horse-float-insurance-nz' },
    { title: 'Camper Trailer Insurance', href: '/insurance/camper-trailer-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Trailer Insurance Cost', href: '/insurance/trailer-insurance-cost-nz' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceProduct',
            name: 'Comprehensive Trailer Insurance',
            description: 'Full protection against damage, theft, fire, storms, and natural disasters for your trailer',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://www.trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://www.trailerinsurance.co.nz/types/comprehensive',
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
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Complete Peace of Mind</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Comprehensive Trailer Cover
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Protection Against Everything
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Full coverage for your trailer against damage, theft, fire, storms, and natural disasters. Whether you own a caravan, horse float, or boat trailer, comprehensive cover gives you complete protection 24/7.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">What is Comprehensive Trailer Insurance?</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Comprehensive trailer insurance is the broadest type of cover available, protecting your trailer against a wide range of risks. Unlike basic third-party liability cover, comprehensive policies cover damage to your own trailer from accidents, natural disasters, theft, and more.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                In New Zealand, comprehensive trailer cover is particularly important because standalone trailer policies provide protection that your car insurance typically doesn't. Most car insurance policies only cover your trailer while it's attached to an insured vehicle. Once you unhitch at a campsite or storage facility, you're usually uninsured. Comprehensive trailer insurance covers you whether your trailer is attached to a tow vehicle or sitting independently.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Major NZ insurers like AA Insurance, AMI, State Insurance, Tower, and Mariner offer comprehensive trailer cover with varying levels of coverage and excess options. When comparing quotes, it's important to understand exactly what's covered, what's excluded, and how the claim settlement process works.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What's Covered Under Comprehensive Trailer Insurance?</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accidental Damage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Comprehensive cover protects against damage resulting from accidents, whether you're at fault or not. This includes collisions with other vehicles, impacts with fixed objects, overturning, and damage from load shifts. If your horse float hits a fence while reversing, your caravan is side-swiped by another vehicle, or your boat trailer collides with a bollard, comprehensive cover has you protected.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Attempted Theft</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Trailer theft has become a significant problem across New Zealand. Thieves target valuable caravans, horse floats, and boat trailers for parts or resale. Comprehensive cover protects against theft of your entire trailer, as well as attempted theft that results in damage. You'll be covered for the full replacement value (or agreed value if your policy specifies one), minus your chosen excess. Most insurers require you to take reasonable steps to prevent theft, such as using wheel clamps, secure hitches, and parking in safe locations.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Fire and Explosion</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Fire can happen due to electrical faults, cooking accidents in caravans, impact damage igniting fuel or batteries, or external fires in severe weather. Comprehensive cover includes the full cost of replacing your trailer if it's destroyed by fire, plus costs for emergency services and debris removal. This is particularly important for caravans and camper trailers with onboard electrical systems, gas appliances, and lithium or lead-acid batteries.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Weather-Related Damage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                New Zealand's unpredictable weather means your trailer is at risk from multiple weather events. Comprehensive cover protects against damage from storms, heavy rain, hail, wind, lightning, flooding, and snow. If a tree branch crashes through your caravan during a storm, hail damages the roof, or flooding inundates your stored boat trailer, you're covered. In exceptional weather events, some policies may apply a separate excess or have specific exclusions, so check your policy details.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Natural Disasters</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                New Zealand experiences earthquakes, and some areas are prone to subsidence or landslips. Comprehensive coverage typically includes damage from natural disasters, though earthquake coverage may have specific terms or may be excluded in some policies. If your trailer is damaged during a seismic event or other natural disaster, your comprehensive policy should provide protection.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Towing and Recovery Costs</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                After an accident or breakdown, getting your trailer towed to a repairer can be expensive. Many comprehensive policies include coverage for towing and recovery costs, either fully or up to a certain limit. This can save hundreds of dollars if you're stranded far from home or your regular mechanic.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What's Usually Excluded?</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                It's important to understand what's not covered by comprehensive trailer insurance. Common exclusions include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>Wear and tear, rust, corrosion, and gradual deterioration</li>
                <li>Mechanical and electrical breakdowns (not caused by an insured event)</li>
                <li>Damage from faulty maintenance or poor repair quality</li>
                <li>Contents damage (unless you have contents cover as an add-on)</li>
                <li>Damage while towing with an unsuitable or unroadworthy tow vehicle</li>
                <li>Damage to gas bottles or gas system leaks (may require specialist cover)</li>
                <li>Damage from overloading beyond the trailer's rated capacity</li>
                <li>Claims where the trailer was being used for racing or competitive events</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Choosing Your Excess</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The excess is the amount you agree to pay towards each claim. Choosing a higher excess (e.g., $1,000 instead of $500) will lower your annual premium, but means you'll pay more out-of-pocket if you need to claim. Consider your financial situation and how likely you are to claim when deciding. Some insurers offer optional zero or low excess add-ons for an additional premium.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Agreed Value vs Market Value</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Some comprehensive policies offer agreed value cover, where you and the insurer agree on the replacement value upfront. This is particularly valuable for well-maintained classic caravans or specialised horse floats where the market value might be difficult to establish after a total loss. Market value cover settles based on the trailer's actual cash value at the time of loss, which can be lower than you expect for older vehicles.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What You Get With Comprehensive Cover</h2>

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

        {/* How Claims Work */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">How Do Comprehensive Claims Work?</h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Report the Damage Immediately',
                  description: 'Contact your insurer as soon as possible after an incident. Most insurers require notification within 7 days. Provide details about what happened, when it happened, and who was involved (for accidents).',
                },
                {
                  step: '2',
                  title: 'Provide Documentation',
                  description: 'Gather evidence to support your claim. This includes photographs of the damage, police reports (for theft or accidents), receipts for repairs or replacement items, and your policy documents.',
                },
                {
                  step: '3',
                  title: 'Get a Quote for Repairs',
                  description: 'Obtain repair quotes from panel repairers or approved workshops. Some insurers may require quotes from specific providers, while others accept any reasonable quote.',
                },
                {
                  step: '4',
                  title: 'Claim Assessment',
                  description: 'The insurer may send a claims assessor to inspect the damage and verify it is covered. For agreed value policies, settlement is straightforward. For market value policies, assessment may take longer.',
                },
                {
                  step: '5',
                  title: 'Receive Settlement',
                  description: 'Once approved, you receive settlement via direct bank transfer, less your excess. For repairable damage, the insurer may arrange repairs directly. For total loss, you receive the agreed or market value.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NZ Insurers Comparison */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Top Insurers for Comprehensive Trailer Cover</h2>
            <p className="text-slate-600 mb-8">All five providers below offer dedicated standalone comprehensive trailer or caravan policies — not just add-ons to car insurance. All require phone contact to obtain a quote.</p>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">AA Insurance</h3>
                  <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">16× Most Trusted</span>
                </div>
                <p className="text-slate-700 mb-3">
                  AA Insurance's dedicated standalone trailer policy covers your trailer on agreed value with $20 million third-party liability. Named NZ's Most Trusted Insurer for 16 consecutive years.
                </p>
                <p className="text-slate-500 text-sm">Best for: everyday utility and box trailers where brand trust matters.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">AMI Insurance</h3>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">IAG Group</span>
                </div>
                <p className="text-slate-700 mb-3">
                  AMI offers two separate products: a dedicated Caravan Insurance policy (includes contents cover) and a separate Trailer Insurance policy. $20 million third-party liability, excess-free key replacement up to $1,000.
                </p>
                <p className="text-slate-500 text-sm">Best for: caravans with contents, or where separate policy wordings matter.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">State Insurance</h3>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">IAG Group</span>
                </div>
                <p className="text-slate-700 mb-3">
                  State Insurance maintains dedicated policy documents for trailers (SI1058/8) and caravans (SI1057/9). Part of the IAG Group with strong financial backing. Bundling discounts available if you already hold State home or car cover.
                </p>
                <p className="text-slate-500 text-sm">Best for: multi-policy bundling with existing State Insurance customers.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">Tower Insurance</h3>
                  <span className="text-xs font-bold bg-green-100 text-green-800 px-2.5 py-1 rounded-full">Highest Liability: $25M</span>
                </div>
                <p className="text-slate-700 mb-3">
                  Tower offers the highest third-party liability limit in this comparison at $25 million. Covers collision, fire, theft, and natural disaster. Optional contents cover (up to $5,000) and accessories ($2,000–$5,000) available. All quotes are phone-based .
                </p>
                <p className="text-slate-500 text-sm">Best for: maximum liability protection or where optional contents cover is needed.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">Rural Specialist Insurers</h3>
                  <span className="text-xs font-bold bg-orange-100 text-orange-800 px-2.5 py-1 rounded-full">Rural Specialist</span>
                </div>
                <p className="text-slate-700 mb-3">
                  Specialist rural insurers cover trailers, horse floats, and caravans under rural vehicle policies designed specifically for farming New Zealand. Rural advisers understand farm operations, rural roads, and livestock transport requirements that mainstream city-focused insurers may not.
                </p>
                <p className="text-slate-500 text-sm">Best for: horse floats, farm trailers, rural use, and anyone in the primary sector.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips for Maximum Value */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Tips to Get the Best Comprehensive Cover</h2>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Compare Multiple Quotes</h3>
                  <p className="text-slate-700">
                    Don't just accept the first quote. Compare comprehensive policies from at least 3-5 insurers to find the best value. Premiums can vary significantly for the same coverage level.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Understand the Excess Structure</h3>
                  <p className="text-slate-700">
                    Know whether your policy has a fixed excess or different excesses for different types of claims. Some insurers offer low or zero excess options if you're willing to pay slightly higher premiums.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Invest in Security</h3>
                  <p className="text-slate-700">
                    Use approved wheel clamps, secure coupling systems, and park in safe locations. Some insurers offer discounts for additional security measures, which can offset the cost of equipment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Consider Contents Cover</h3>
                  <p className="text-slate-700">
                    Comprehensive cover protects the trailer structure, but contents (camping gear, appliances, personal items) usually need a separate add-on. Consider your typical cargo value.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Review Annually</h3>
                  <p className="text-slate-700">
                    Insurance needs and premiums change yearly. Review your policy annually to ensure your coverage still matches your needs and you're getting competitive rates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Ask About Discounts</h3>
                  <p className="text-slate-700">
                    Inquire about loyalty discounts, multi-policy discounts, good driver discounts, and membership discounts (AA, motoring clubs). These can reduce your premium by 10-20%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Ready to Get Comprehensive Cover?</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Getting a quote for comprehensive trailer insurance is quick and simple. Our comparison service connects you with New Zealand's top insurers, so you can compare coverage options and find the best deal for your needs.
                </p>
                <p className="text-lg text-slate-700">
                  Simply fill out our quick form with details about your trailer, and within 2 minutes you'll get quotes from multiple providers. No spam, no follow-up calls you don't want.
                </p>
              </div>
              <div>
                <QuoteForm mode="compact" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Related Insurance Guides</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
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
