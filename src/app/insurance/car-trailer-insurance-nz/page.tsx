'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Car, Shield, AlertTriangle, Zap, CheckCircle2, TrendingUp, Lock, Home } from 'lucide-react';

export default function CarTrailerInsurancePage() {
  const benefits = [
    {
      icon: Car,
      title: 'Car Carrier Trailer Protection',
      description: 'Specialised coverage for enclosed and open car carrier trailers designed for safe vehicle transport and storage.',
    },
    {
      icon: Shield,
      title: 'Damage and Accidents',
      description: 'Protection against collision damage, impacts, and accidents while transporting vehicles or your carriers equipment.',
    },
    {
      icon: AlertTriangle,
      title: 'Theft and Vandalism Coverage',
      description: 'Comprehensive cover against theft of your car carrier trailer and damage from vandalism at storage or work sites.',
    },
    {
      icon: Home,
      title: 'Structural Protection',
      description: 'Coverage for the frame, deck, ramps, chains, and all components essential to safe vehicle transport.',
    },
    {
      icon: Zap,
      title: 'Brakes and Towing Systems',
      description: 'Protection for heavy-duty braking systems, hydraulic controls, lights, and electrical components for safe towing.',
    },
    {
      icon: TrendingUp,
      title: 'Business and Personal Use',
      description: 'Insurance flexible enough for occasional use or regular vehicle transport business operations.',
    },
  ];

  const relatedGuides = [
    { title: 'Enclosed Trailer Insurance', href: '/insurance/enclosed-trailer-insurance-nz' },
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
            name: 'Car Trailer Insurance NZ',
            description: 'Car carrier and transporter trailer insurance in New Zealand protecting against damage, theft, and accidents',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/insurance/car-trailer-insurance-nz',
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
                <Car className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Vehicle Transport Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Car Trailer Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Safe Coverage for Vehicle Transport
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Specialist insurance for car carrier trailers and vehicle transporters. Comprehensive coverage for enclosed and open carriers protecting your investment and business.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Car Trailers Need Specialist Insurance</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Car carrier trailers are specialised equipment designed for safe vehicle transport. Whether you operate a vehicle transport business, occasionally move cars between locations, or auction vehicles, your car trailer is a valuable asset requiring dedicated insurance protection. Standard personal trailer policies don't adequately cover the unique risks and requirements of vehicle transport equipment.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Car trailers face significant stresses: the weight of loaded vehicles, hydraulic ramp systems, expensive tie-down and restraint equipment, and the liability risks of transporting others' vehicles. They're often parked at auctions, dealerships, or storage yards—locations with higher theft risk. They require specialised knowledge to repair after damage.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Insurance providers AA Insurance, AMI, State, Tower, and others offer car trailer policies designed for vehicle transport operations. Some specialise in dealership and auction support, understanding the unique risks of vehicle transport businesses.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Car Trailer Insurance Covers</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Carrier Frame and Structure</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Insurance covers damage to the trailer frame, deck, side rails, and structural components. Whether you have an enclosed car trailer or an open carrier, the frame and structure are protected against accident damage, impacts, and weather damage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Hydraulic Ramp Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed car trailers feature hydraulic or mechanical ramp systems for loading and unloading vehicles. These expensive systems are critical to carrier functionality. Insurance covers damage to ramps, hydraulic cylinders, motors, and related equipment from accidents or impacts.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Tie-Down and Restraint Equipment</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Proper vehicle restraint is essential for safe transport. Insurance covers damage to chains, straps, anchor points, and attachment rings from accidents or wear. Quality tie-down equipment is expensive, making this coverage valuable.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Brake and Suspension Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Heavy-duty brakes and suspension must handle the weight of loaded vehicles. Insurance covers damage to air brakes, hydraulic systems, suspension springs, axles, and bearings from accidents or impacts. Functioning brakes are essential for safety.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Lighting and Electrical Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Car trailers have extensive electrical systems for lights, backup alarms, and monitoring. Insurance covers damage to wiring, light clusters, connections, and electrical components from accidents or weather events.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Enclosed Bodywork (for Enclosed Carriers)</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed car trailers feature aluminum or steel bodywork, windows, doors, and insulation. Insurance covers damage to these components from accidents, impacts, or weather. Repairing or replacing bodywork can be expensive.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accidental Damage While Towing</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Accidents happen while towing. If your car trailer is involved in a collision, hits an obstacle, or damage occurs while transporting vehicles, comprehensive coverage protects you. This includes damage from overturning or jackknifing.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Vandalism</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Car trailers parked at auctions, dealerships, or storage yards are targets for thieves. Comprehensive coverage protects against theft of the entire trailer or theft of valuable equipment like ramps, chains, or lights. Vandalism damage is also covered.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Car Trailer Insurance Considerations</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Business vs Personal Use</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Declare your intended use. If you operate a vehicle transport business or transport vehicles for sale, you need commercial coverage. Personal occasional use has different requirements. Using the wrong policy type voids coverage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Enclosed vs Open Carriers</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed car trailers have different risks and repair requirements than open carriers. Make sure your policy is specific to your carrier type. Enclosed trailers may have different premiums and coverage options.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Vehicle Load Limits</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Declare the maximum vehicle values you typically transport. Some policies have limits on vehicle value or total load weight. Exceeding these limits may void coverage.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Top NZ Insurers for Car Trailers</h2>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA Insurance offers car trailer policies for vehicle transport businesses and private transporters. They understand the specialised needs of car carriers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State provides commercial-grade car trailer insurance with 24/7 claims support, ideal for vehicle transport businesses and dealers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">Tower Insurance</h3>
                <p className="text-slate-700 mb-4">
                  Tower offers competitive car trailer insurance with flexible terms for business and personal vehicle transport use.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Common Car Trailer Insurance Claims</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accident Damage While Towing</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Collision accidents while towing are among the most common car trailer claims. Whether you're involved in a rear-end collision, hit an object on the road, or your trailer jackknifes, <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">comprehensive trailer cover</Link> protects against these incidents. Claims can include damage to the frame, ramps, lights, and tie-down systems. Always ensure your tow vehicle has adequate braking and control for your trailer's weight.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft at Auctions and Dealerships</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Car trailers parked at auction sites and vehicle dealerships are frequent theft targets. Thieves may steal the entire trailer, or steal valuable components like hydraulic ramps, chains, lights, or the tow coupling. Your insurance covers replacement or repair of the trailer and equipment. To reduce theft risk and potentially lower premiums, use approved wheel clamps and coupling locks when parked, and consider <Link href="/insurance/best-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">comprehensive cover options that include additional security discounts</Link>.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Vandalism and Weather Damage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enclosed car trailers left at exposed sites can suffer vandalism damage—broken windows, door damage, or scratches to bodywork. Hail storms can dent aluminum or steel bodies. Wind can damage ramps or attachment points. Comprehensive insurance covers these incidents, though you may need to prove how damage occurred. Photographs taken immediately after damage are valuable evidence for your claim.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">How to Choose the Right Car Trailer Insurance Policy</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Assess Your Coverage Needs</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your coverage choice depends on your use. If you operate a professional vehicle transport business, you need commercial-grade <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">comprehensive coverage</Link> to protect your income. If you occasionally transport a few vehicles, <Link href="/types/third-party-liability" className="text-amber-600 hover:text-amber-700 font-semibold underline">third-party liability cover</Link> may be sufficient. Consider your trailer's value, typical vehicle loads, and how often you use it. Your policy should clearly state business use to avoid claims being denied.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Compare Multiple Quotes</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Don't accept the first quote. Insurance prices vary significantly between providers for identical coverage. <Link href="/insurance/compare-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">Compare trailer insurance from multiple NZ providers</Link> to find the best value. Some insurers specialise in commercial vehicle transport, while others focus on personal use. Getting 3-5 quotes takes just a few minutes and could save you hundreds of dollars annually.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Understand Your Excess Options</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your excess (the amount you pay toward a claim) significantly affects your premium. A $250 excess will have a higher premium than a $1000 excess. Choose an excess you can comfortably afford to pay. If you make frequent claims, a higher excess might make sense. If your trailer is parked in a high-theft area, a lower excess might be worthwhile despite higher premiums.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Cost-Saving Tips for Car Trailer Insurance</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Security Measures Reduce Premiums</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Installing approved security equipment can significantly reduce your premiums. Wheel clamps, coupling locks, and alarm systems demonstrate to insurers that you're serious about protecting your investment. Some policies offer discounts of 10-20% for enhanced security. These measures also physically deter thieves, reducing your actual theft risk. <Link href="/insurance/cheap-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">Learn about affordable insurance options that reward security investments</Link>.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Bundle and Multi-Policy Discounts</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Combining your car trailer insurance with home, vehicle, or other insurance policies often qualifies you for multi-policy discounts of 10-15%. Some insurers also offer loyalty discounts for keeping policies with them long-term. AA members may get additional discounts. Always ask about available discounts when getting quotes—they're often worth hundreds of dollars annually.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Increase Your Excess for Lower Premiums</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your car trailer is in good condition and you're a careful operator, increasing your excess from $500 to $1000 can reduce your premium by 10-20%. Only do this if you can afford to pay the excess if you claim. This strategy works particularly well for business operators with few claims, where the savings over multiple years exceed the higher excess.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">NZ-Specific Considerations for Car Trailer Insurance</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Business Use Declaration</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                New Zealand insurers take business use very seriously. If you operate a professional vehicle transport service, auction consignment business, or vehicle sales operation, you must declare this on your policy. Using personal insurance for business activities voids your coverage. Make sure your policy explicitly states your business use to avoid claim denials. Professional operators should use commercial policies with higher vehicle value limits and 24/7 claims support.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Winter Weather and Rural Roads</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                New Zealand's winter weather—ice, snow, and wet roads—increases trailer accident risk. If your operations extend into winter or highland areas, ensure your policy covers weather-related accidents. Similarly, if you frequently travel on rural or unsealed roads, your towing technique and trailer condition affect your risk profile. Maintain your trailer's brakes and suspension year-round, and inform your insurer about seasonal variations in your use.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Caravan and Recreational Trailer Options</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you also operate <Link href="/insurance/caravan-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">caravan or recreational vehicle transport</Link>, some insurers offer multi-trailer policies. Similarly, operators of <Link href="/insurance/horse-float-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">horse floats or specialty trailers</Link> may benefit from specialised policies designed for those vehicle types.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Tips for Car Trailer Insurance</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Declare your business use and typical vehicle values honestly</li>
                <li>Use wheel clamps and coupling locks when parked</li>
                <li>Park in secure, monitored locations when possible</li>
                <li>Maintain your ramps, tie-downs, and equipment regularly</li>
                <li>Keep your brakes and suspension well-serviced</li>
                <li>Don't exceed your trailer's weight or vehicle value limits</li>
                <li>Ensure your tow vehicle is suitable for your loaded trailer weight</li>
                <li>Document your trailer's condition with photos</li>
                <li>Review your policy annually to ensure coverage matches your needs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Complete Car Trailer Protection</h2>

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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Car Carrier Investment</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Your car trailer is essential to your business or transport needs. Get comprehensive insurance that covers damage, theft, and accidents while protecting your bottom line.
                </p>
                <p className="text-lg text-slate-700">
                  Get a quote today and compare car trailer insurance from New Zealand's leading providers.
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
