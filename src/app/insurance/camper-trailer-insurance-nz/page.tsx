'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Tent, Home, AlertTriangle, Zap, MapPin, CheckCircle2, TrendingUp, Shield } from 'lucide-react';

export default function CamperTrailerInsurancePage() {
  const benefits = [
    {
      icon: Tent,
      title: 'Pop-Top and Camper Coverage',
      description: 'Specialised insurance for pop-top campers, expandable trailers, and lightweight camping rigs with all their unique features.',
    },
    {
      icon: Home,
      title: 'Onboard Equipment Protection',
      description: 'Coverage for camping equipment, kitchen systems, gas appliances, water systems, and awnings integrated into your camper.',
    },
    {
      icon: Shield,
      title: 'Accidental Damage & Repairs',
      description: 'Protection against collision damage, impact damage from accidents, and emergency repairs while travelling.',
    },
    {
      icon: AlertTriangle,
      title: 'Theft & Vandalism Coverage',
      description: 'Comprehensive cover against theft of entire campers and vandalism at campsites, carparks, or storage locations.',
    },
    {
      icon: Zap,
      title: 'Electrical and Gas Systems',
      description: 'Coverage for 12V electrical systems, gas appliances, water heaters, and propane systems critical to camping comfort.',
    },
    {
      icon: MapPin,
      title: 'Adventure Travel Protection',
      description: 'Insurance designed for frequent travelers covering your adventures across New Zealand from beaches to mountains.',
    },
  ];

  const relatedGuides = [
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
    { title: 'Box Trailer Insurance', href: '/insurance/box-trailer-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
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
            name: 'Camper Trailer Insurance NZ',
            description: 'Comprehensive camper and pop-top trailer insurance in New Zealand with specialised coverage for adventure travelers',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/camper-trailer-insurance-nz',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1761019340019-6c747df036e0?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Tent className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Adventure Travel Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Camper Trailer Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Protect Your Adventure on the Road
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Comprehensive insurance for pop-top campers and lightweight camping trailers. Whether you're exploring NZ's coastlines or backcountry, we've got you covered 24/7.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Camper Trailer Insurance Matters</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Pop-top campers and lightweight camping trailers offer flexibility and freedom for New Zealand adventurers. Unlike traditional caravans, these rigs are designed for easy towing, off-the-beaten-path camping, and remote exploration. However, their lighter construction and integrated systems make them uniquely vulnerable to damage and theft.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Camper trailers frequently travel to remote locations, campgrounds, and off-road sites where security is limited. Their smaller size makes them easier targets for thieves. Their pop-top or expandable designs contain multiple mechanical and electrical components that require specialised knowledge to repair after damage.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Quality camper trailer insurance from providers like AA Insurance, AMI, State, Tower, and others provides protection specifically designed for adventure travelers. These policies understand the unique risks of lightweight trailers and remote travel.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Camper Trailer Insurance Covers</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Pop-Top and Expandable Mechanisms</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The pop-top or expandable roof is the most complex part of your camper. Insurance covers damage to hydraulic or mechanical systems that raise and lower the roof, including the canvas or fibreglass panels, frame components, and sealing systems. If hydraulic rams fail or the canvas tears, insurance covers repairs or replacement.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Electrical and 12V Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Modern camper trailers rely on 12V electrical systems powering lights, charging, fridges, water pumps, and monitoring systems. Insurance covers damage to batteries, solar panels, inverters, and wiring from accidents or weather events. Proper functioning of these systems is essential for comfortable camping.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Gas Appliances and Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many camper trailers feature gas cooktops, water heaters, and heaters. Insurance covers damage to gas appliances and piping from accidents, though may exclude normal wear. Some policies include optional mechanical breakdown cover for appliances.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Water and Plumbing Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your camper's water tanks, pumps, lines, and fixtures are vulnerable to damage from impacts, freezing, or accidents. Insurance covers damage to these systems when caused by insured events, helping you access clean water for cooking and hygiene while travelling.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Awnings and Canvas</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many camper trailers include awnings or canvas extensions. Insurance covers damage from wind, storms, or accidental tearing. Given that awnings are expensive to replace, this coverage is valuable.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accidental Damage While Towing</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Accidents happen on New Zealand roads. If your camper trailer is involved in a collision, swerve to avoid an obstacle, or impacts something while reversing, accidental damage cover protects you. This includes damage from overturning.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Vandalism</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Camper trailers left at campsites or remote locations can be targets for thieves. Insurance covers theft of the entire unit or parts like solar panels, gas bottles, or equipment. Vandalism damage is also covered.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Contents and Equipment Coverage</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Standard camper trailer insurance covers the structure and built-in equipment. Personal camping gear—sleeping bags, cooking equipment, clothing, and valuables—usually need separate contents cover. Given the value of camping equipment, adding contents protection is recommended.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Top Insurers for Camper Trailers</h2>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA Insurance offers comprehensive camper trailer policies with flexible excess options and good claims support. Their online quote system makes comparisons easy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AMI Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AMI specialises in recreational vehicle insurance with policies designed for adventure travelers. They offer multi-policy discounts and excellent customer service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State provides competitive camper trailer insurance with 24/7 claims support and a nationwide network of repairers familiar with pop-top mechanisms and systems.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Camper Trailer Insurance Tips</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Use wheel clamps and coupling locks when parked at campgrounds</li>
                <li>Park in well-lit areas and choose secure campsites when possible</li>
                <li>Keep your pop-top mechanism well-maintained—poor maintenance can affect claims</li>
                <li>Declare all your adventure travel plans to your insurer</li>
                <li>Take photos of your camper before the insurance year starts</li>
                <li>Consider contents cover for your camping equipment and valuables</li>
                <li>Review your policy annually to ensure coverage matches your needs</li>
                <li>Keep your camper properly ventilated to prevent mold and moisture damage</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Common Camper Trailer Claims and What's Covered</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Impact Damage and Collisions</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                One of the most common claims for camper trailers involves impact damage—backing into objects, colliding with other vehicles while towing, or hitting obstacles on narrow roads. These accidents can cause significant damage to the pop-top mechanism, walls, windows, and chassis. Accidental damage coverage handles these incidents, though you'll typically pay an excess. Keep detailed photos of the damage for your insurer and cooperate fully with their assessors.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Weather-Related Damage and Natural Disasters</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                New Zealand's unpredictable weather can damage camper trailers. High winds tear awnings and damage pop-top seals, heavy rain infiltrates water systems, hail damages canvas and fibreglass, and storms cause impact damage. Comprehensive policies cover these weather-related incidents. However, wear and tear from normal weather exposure isn't covered. Regular maintenance helps distinguish between covered weather damage and maintenance issues.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Mechanical and Electrical Failures</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Pop-top hydraulic systems can fail unexpectedly. Water pump failures, battery drain, solar panel malfunctions, and gas appliance breakdowns are common issues. Standard insurance covers accidental damage to these systems but typically excludes mechanical breakdown due to wear and tear. Optional mechanical breakdown coverage can be added for an extra premium if you want protection against system failures.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Security Breaches</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Campers left at campgrounds or remote locations are theft targets. Comprehensive policies cover theft of the entire unit or break-ins where thieves steal equipment or valuables. To qualify for theft cover, you typically need approved security devices—wheel clamps, coupling locks, or alarm systems. Report thefts to police immediately and provide incident reports to your insurer.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Cost Factors for Camper Trailer Insurance</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Replacement Value and Excess Amount</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your premium is partially based on your camper's agreed replacement value. Higher values mean higher premiums. You also choose your excess amount—the portion you pay towards each claim. A higher excess ($1000+) reduces premiums but increases your out-of-pocket costs when you claim. Many owners balance this by choosing moderate excesses ($500) that match their financial capacity.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Travel Patterns and Usage Declarations</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your declared usage significantly affects premiums. Campers used for frequent long-distance adventures pay more than those used for occasional weekend trips. Remote destination travel typically commands higher premiums than coastal camping. Honest usage declarations are essential—misrepresenting your travel patterns can result in claim denial.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Security Features and Discounts</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Installing approved security devices reduces your premiums. Wheel clamps, coupling locks, alarm systems, and GPS trackers all qualify for discounts. Some insurers offer 10-15% reductions for approved security. These devices not only reduce your insurance costs but also genuinely deter thieves, making your camper less attractive to steal.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Driver Age and Driving Record</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Younger drivers and those with poor driving records pay higher premiums. Maintaining a clean driving record, completing defensive driving courses, and accumulating no-claim bonuses all reduce costs over time. Some insurers offer young driver discounts after completing approved driver training courses.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">How to Choose the Right Camper Trailer Policy</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Comparing Coverage Types: Third-Party vs Comprehensive</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <Link href="/types/third-party-liability" className="text-amber-600 hover:text-amber-700 font-semibold underline">Third-party liability insurance</Link> is the legal minimum, covering damage you cause to others' property. However, it doesn't protect your camper. <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">Comprehensive coverage</Link> protects your camper against damage, theft, and accidents. Most camper owners choose comprehensive for the complete protection it provides.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Optional Add-Ons Worth Considering</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Beyond basic comprehensive coverage, consider optional add-ons. <Link href="/types/contents-cover" className="text-amber-600 hover:text-amber-700 font-semibold underline">Contents protection</Link> covers personal camping equipment inside your camper—sleeping bags, cooking gear, clothing, and electronics. Mechanical breakdown cover protects appliance and system failures. Roadside assistance and emergency repair coverage can be invaluable when breakdowns occur far from home.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Agreed Value vs Market Value</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Ask your insurer about agreed value policies. With agreed value, you and the insurer agree on your camper's replacement cost upfront. If a total loss occurs, you receive the agreed amount without depreciation disputes. This is typically more favorable for specialty campers than standard market value assessments.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Local Considerations for Camper Insurance</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Regional Risk Variations Across New Zealand</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Insurance premiums vary based on where you typically park your camper. Auckland and Wellington city camping areas may have higher theft risks. Remote backcountry camping in DOC campsites presents different risks. Coastal areas face weather and salt-spray damage. Insurers adjust premiums based on your primary usage regions. Being honest about your actual travel patterns helps ensure appropriate coverage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Off-Road Camping and Department of Conservation Sites</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you frequently camp at DOC sites or other remote locations, inform your insurer. Some policies have restrictions on off-road travel or remote area camping. Conversely, many insurers appreciate that DOC sites have managed facilities and relatively low theft risk. Discussing your actual camping destinations helps match your policy to your activities.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Seasonal Use and Winter Storage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many NZ campers are seasonal—heavy use in summer, storage in winter. Some insurers offer reduced premiums for seasonal cover or discounts during storage months when your camper isn't actively travelled. Ask about hibernation or seasonal reduction options that acknowledge periods when your camper sits unused.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Comparing Camper Trailer Insurers</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Choosing between insurers requires comparing more than just price. Check claims response times—critical when you're stranded with a broken camper. Review repair networks—do they work with specialists who understand pop-top mechanisms? Look at customer service ratings and how they handle adventure travelers. <Link href="/compare" className="text-amber-600 hover:text-amber-700 font-semibold underline">Compare quotes from multiple providers</Link> to understand pricing and coverage options, then review the details before selecting your policy.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Contact insurers directly to discuss your specific needs. If you're planning extended overseas travel (some campers drive to Australia), confirm coverage during international adventures. Adventure travel requirements vary between insurers, so discussing your plans ensures you get appropriate coverage for your actual usage.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Complete Camper Trailer Protection</h2>

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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Camper Adventure</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Don't let unexpected damage derail your NZ adventure. Get comprehensive camper trailer insurance that covers your pop-top rig and adventure travel lifestyle.
                </p>
                <p className="text-lg text-slate-700">
                  Get a quote today and compare coverage from New Zealand's top insurers specializing in camper and pop-top protection.
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
