'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Anchor, Shield, AlertTriangle, Droplet, CheckCircle2, TrendingUp, Lock, Wrench } from 'lucide-react';

export default function BoatTrailerInsurancePage() {
  const benefits = [
    {
      icon: Anchor,
      title: 'Boat Trailer Hull Coverage',
      description: 'Full protection for your boat trailer frame, chassis, axles, suspension, and all structural components against damage and deterioration.',
    },
    {
      icon: Droplet,
      title: 'Water Damage Protection',
      description: 'Specialised cover for corrosion, rust, and water damage that boat trailers are particularly susceptible to due to salt water and moisture exposure.',
    },
    {
      icon: Shield,
      title: 'Theft & Vandalism Cover',
      description: 'Protection against theft of your boat trailer or damage from vandalism while parked at boat ramps, marinas, or storage facilities.',
    },
    {
      icon: AlertTriangle,
      title: 'Accidental Damage Coverage',
      description: 'Protection from accidents while towing, including collisions, swerving incidents, and damage from overturning or impacts.',
    },
    {
      icon: Wrench,
      title: 'Brake and Suspension Repair',
      description: 'Coverage for damage to brakes, suspension systems, and electrical components critical to safe towing of your boat.',
    },
    {
      icon: TrendingUp,
      title: 'Marine Specialist Providers',
      description: 'Standalone boat trailer cover from AA, AMI, Tower, and State Insurance — protecting your trailer against marine-specific risks including corrosion, theft at boat ramps, and water damage.',
    },
  ];

  const relatedGuides = [
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Trailer Insurance Cost NZ', href: '/insurance/trailer-insurance-cost-nz' },
    { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz' },
    { title: 'Cheap Trailer Insurance', href: '/insurance/cheap-trailer-insurance-nz' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceProduct',
            name: 'Boat Trailer Insurance NZ',
            description: 'Specialist boat trailer insurance in New Zealand protecting against corrosion, theft, damage, and marine-specific risks',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/boat-trailer-insurance-nz',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1711963069605-dbf66e42c5c0?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Anchor className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Marine-Grade Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Boat Trailer Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Specialist Cover for Water Enthusiasts
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Protect your boat trailer from corrosion, salt water damage, theft, and accidents. Specialist insurance designed for boat owners who need protection against marine-specific risks across New Zealand.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Boat Trailers Need Specialist Insurance</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Boat trailers face unique challenges that standard vehicle insurance doesn't adequately cover. Exposure to saltwater, moisture, sun, and harsh marine environments causes accelerated corrosion and rust. Your boat trailer spends time at boat ramps, marinas, and coastal storage facilities—high-risk areas for theft and damage.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                A quality boat trailer represents a significant investment. Whether you own a jetski trailer, fishing boat trailer, or larger cruiser trailer, specialist boat trailer insurance protects your asset with coverage designed for marine use. Standard car insurance often doesn't cover trailers once unhitched, and even when they do, they may not understand marine-specific risks.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Insurance specialists like Mariner, along with mainstream providers AA Insurance, AMI, State, and Tower, understand the unique needs of boat owners. They offer comprehensive coverage that includes water damage, salt corrosion, marine theft risks, and the specific challenges of towing boats in New Zealand conditions.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Comprehensive Boat Trailer Coverage</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Corrosion and Water Damage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This is the most critical aspect of boat trailer insurance. Saltwater exposure causes rapid oxidation and corrosion of steel and aluminum components. Even freshwater storage can lead to rust if the trailer isn't properly maintained. Quality boat trailer insurance covers damage from saltwater corrosion, rust, and water seepage. It protects the trailer frame, axles, springs, and coupling against deterioration from marine exposure.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Brake System Protection</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Boat trailers rely on properly functioning brake systems for safe towing. Salt and moisture corrode brake components, while accidents can damage the entire brake assembly. Comprehensive cover includes replacement or repair of brake cylinders, pipes, and components damaged by accidents or corrosion-related failure from an insured event.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Suspension and Axle Coverage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Boat trailers are heavily loaded and frequently reversing down boat ramps, placing stress on suspension and axle components. Insurance covers damage to springs, shock absorbers, axles, and suspension mounts from accidents or impacts. This is essential because suspension damage makes your trailer unsafe to tow.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Electrical System Protection</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Modern boat trailers have electrical systems for lights, brakes, and winches. Marine environments and saltwater exposure quickly corrode electrical components. Insurance covers damage to wiring, connectors, lights, and brake electronics when damaged by an insured event.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Vandalism</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Boat trailers are frequently left unattended at boat ramps, marinas, and storage facilities. Thieves target them for valuable components like winches, lights, and brake systems—or steal entire trailers for resale. Comprehensive boat trailer insurance protects against theft of the entire trailer or theft of components, plus damage from vandalism.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accidental Damage During Towing</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Accidents happen while towing. If your boat trailer is hit by another vehicle, you swerve to avoid an obstacle and damage the trailer, or you back into a bollard at the boat ramp, accidental damage cover protects you. This includes damage from overturning or impacts with fixed objects.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Towing and Recovery</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your boat trailer becomes damaged or unsafe to tow, getting professional assistance can be expensive. Insurance typically covers towing and recovery costs to get your trailer to a repairer. This is invaluable if you break down far from home or a service center.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Types of Boat Trailers We Cover</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li><strong>Jetski Trailers:</strong> Small, frequently-used trailers for jet ski transport and storage</li>
                <li><strong>Fishing Boat Trailers:</strong> Medium trailers for small to medium fishing boats</li>
                <li><strong>Cruiser Trailers:</strong> Larger trailers for family cruising boats</li>
                <li><strong>Center Console Trailers:</strong> Specialised trailers for center console fishing boats</li>
                <li><strong>Catamaran Trailers:</strong> Heavy-duty trailers for multi-hull vessels</li>
                <li><strong>Wakeboard Boat Trailers:</strong> Sports-specific trailers for wake sports</li>
                <li><strong>Inflatable Boat Trailers:</strong> Light-duty trailers for RIBs and inflatables</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Choosing the Right Coverage Type for Your Boat Trailer</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When protecting your boat trailer, you have two main coverage options: <Link href="/types/third-party-liability" className="text-amber-600 hover:text-amber-700 font-semibold underline">third-party liability</Link> and <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">comprehensive coverage</Link>. Third-party covers damage you cause to others' property, making it the legal minimum. However, for boat trailers—especially valuable ones—comprehensive coverage is typically the better choice because it protects your own investment against theft, water damage, and accidents.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many boat owners also add <Link href="/types/contents-cover" className="text-amber-600 hover:text-amber-700 font-semibold underline">contents insurance</Link> to protect valuable equipment transported with the trailer, such as fishing gear, safety equipment, or maintenance tools. This additional cover bridges the gap between what trailer insurance covers and what your personal possessions need.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                The best approach is to compare policies side-by-side. Our <Link href="/insurance/compare-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">trailer insurance comparison guide</Link> walks you through all your options so you can make an informed decision.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Boat Trailer Insurance vs Other Trailer Types</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Boat trailers have unique insurance requirements compared to other trailer types. A <Link href="/insurance/caravan-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">caravan trailer</Link> is typically stationary or moves slowly on highways, while boat trailers face rapid corrosion from saltwater and frequent stress from backing down boat ramps at steep angles. Horse floats focus on animal safety and welfare, whereas boat trailers need specific marine equipment coverage.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Additionally, boat trailers may qualify for different discounts based on security measures (such as coupling locks), storage location, and usage patterns. When comparing quotes, make sure providers understand your specific boating activities and storage setup so they offer appropriate coverage.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-3 mt-12">Top NZ Insurers for Boat Trailers</h2>
              <p className="text-slate-600 text-base mb-6">All four providers below require phone contact for a boat trailer quote. Note: your boat itself will require a separate marine or leisure craft policy — the providers below cover the trailer, not the boat.</p>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">AA Insurance</h3>
                  <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">16× Most Trusted</span>
                </div>
                <p className="text-slate-700 mb-3">
                  AA Insurance's standalone trailer policy covers boat trailers on agreed value with $20 million third-party liability. As NZ's most trusted insurer, AA is a strong default choice for boat trailer owners who want reliability and nationwide repair access. Phone: 0800 500 231.
                </p>
                <p className="text-slate-500 text-sm">Best for: single-axle and tandem boat trailers, bundling with AA car or home insurance.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">Tower Insurance</h3>
                  <span className="text-xs font-bold bg-green-100 text-green-800 px-2.5 py-1 rounded-full">$25M Liability</span>
                </div>
                <p className="text-slate-700 mb-3">
                  Tower offers the highest third-party liability at $25 million and includes natural disaster cover. Optional accessories cover ($2,000–$5,000) is useful for boat trailer winches, rollers, and launch equipment. Phone: 0800 379 372.
                </p>
                <p className="text-slate-500 text-sm">Best for: higher-value boat trailers or where maximum liability protection matters.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">AMI Insurance</h3>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">IAG Group</span>
                </div>
                <p className="text-slate-700 mb-3">
                  AMI (IAG Group) provides a standalone trailer insurance policy with $20 million liability. If you store significant equipment on your boat trailer (winch gear, outboard holders, etc.) it's worth asking about their contents cover options. Phone: 0800 100 200.
                </p>
                <p className="text-slate-500 text-sm">Best for: bundling with existing AMI home or car policy.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">State Insurance</h3>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">IAG Group</span>
                </div>
                <p className="text-slate-700 mb-3">
                  State Insurance (IAG Group) maintains a dedicated trailer policy document (SI1058/8) with IAG's financial strength behind it. Multi-policy discounts are available for State home or car customers adding trailer cover. Via State.co.nz.
                </p>
                <p className="text-slate-500 text-sm">Best for: existing State Insurance customers looking to bundle.</p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Boat Ramp Safety Tips and Insurance Considerations</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Beyond insurance, protecting your boat trailer involves sensible practices:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Use wheel clamps when parked at boat ramps or unattended locations</li>
                <li>Install high-quality coupling locks to prevent theft of the trailer</li>
                <li>Park in well-lit, monitored areas whenever possible</li>
                <li>Regularly rinse your trailer with fresh water after saltwater exposure</li>
                <li>Apply protective coatings to metal components to prevent corrosion</li>
                <li>Keep your boat trailer well-maintained—insurers may deny claims for negligent maintenance</li>
                <li>Ensure your towing vehicle is suitable for your boat and trailer weight</li>
                <li>Take photographs of your trailer and record its condition before any boating season</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Seasonal Boating and Off-Season Insurance Strategies</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                New Zealand's boating season peaks during summer months (December to February), but many boat owners only use their trailers seasonally. If you only boat during specific months, you have options to reduce insurance costs. Some insurers offer seasonal policies that pause or reduce coverage during off-season months when your trailer sits unused. This can provide significant savings compared to paying full premiums year-round.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When your boat trailer is in storage during off-season, proper protection is critical. Store your trailer in a secure, covered facility if possible, use wheel clamps and coupling locks, and apply protective coatings to metal surfaces to prevent rust and corrosion. Even during storage, corrosion can occur from moisture and temperature fluctuations, so maintain regular ventilation and keep the trailer dry.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Before boating season begins, perform a thorough inspection of your trailer and discuss any new risks with your insurer. Check brakes, lights, suspension, and corrosion damage. If you've made modifications to your boat or upgraded equipment, notify your insurer as these changes may affect your coverage or premiums.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Common Boat Trailer Insurance Questions</h2>

              <div className="space-y-6 mb-8">
                {[
                  {
                    q: 'Will my boat trailer insurance cover winch damage?',
                    a: 'Winch damage caused by an insured event (accident, falling object) is typically covered. Wear and tear or mechanical failure is not. Specialist insurers understand winch risks better than mainstream providers.',
                  },
                  {
                    q: 'Is corrosion covered by boat trailer insurance?',
                    a: 'Corrosion from normal exposure is not covered (it\'s gradual deterioration). However, corrosion caused by damage from an insured event (accident causing water intrusion) can be covered. This is why specialist boat insurers matter.',
                  },
                  {
                    q: 'What if my boat trailer is damaged at the boat ramp?',
                    a: 'Damage at the boat ramp is typically covered if it results from an accident or covered incident. Damage from normal use or negligent handling may not be covered.',
                  },
                  {
                    q: 'Do I need to transport my boat in a certain way for insurance to apply?',
                    a: 'Yes—your trailer must be properly hitched, secured, and towed with a suitable vehicle. Using an unsuitable tow vehicle may void your cover.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Comprehensive Boat Trailer Protection</h2>

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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Boat Trailer Investment</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Don't leave your valuable boat trailer exposed to corrosion, theft, and damage. Get a quote for specialist boat trailer insurance today and enjoy peace of mind knowing your investment is protected.
                </p>
                <p className="text-lg text-slate-700">
                  We work with NZ's leading trailer insurers — AA, AMI, State, Tower, and FMG — to find the best cover for your boat trailer. One form, multiple quotes.
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
