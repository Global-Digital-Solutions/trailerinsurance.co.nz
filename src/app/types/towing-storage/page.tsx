'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import {
  Anchor,
  Shield,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Truck,
  Building2,
  Clock,
  Wrench,
  AlertCircle,
} from 'lucide-react';

export default function TowingStoragePage() {
  const coverageServices = [
    {
      icon: Truck,
      title: 'Professional Towing Services',
      description: 'Coverage for the cost of towing your trailer from the accident site or breakdown location to a repairer or your home.',
    },
    {
      icon: AlertCircle,
      title: 'Roadside Assistance',
      description: 'Emergency support including tyre changes, fuel delivery, lockout assistance, and jump-starts for your tow vehicle.',
    },
    {
      icon: Building2,
      title: 'Storage Facility Costs',
      description: 'Reimbursement for secure storage of your trailer while it awaits repairs or replacement following an accident.',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Response',
      description: 'Round-the-clock availability for towing requests, weekend and public holiday coverage with no waiting times.',
    },
    {
      icon: Wrench,
      title: 'Approved Repairer Network',
      description: 'Access to a network of approved repair facilities with agreed rates, minimizing your out-of-pocket costs.',
    },
    {
      icon: DollarSign,
      title: 'Recovery Cost Coverage',
      description: 'Covers specialist recovery services if your trailer is in a ditch, bog, or off-road location requiring specialised equipment.',
    },
  ];

  const relatedGuides = [
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
    { title: 'Boat Trailer Insurance', href: '/insurance/boat-trailer-insurance-nz' },
    { title: 'Horse Float Insurance', href: '/insurance/horse-float-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
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
            name: 'Towing & Storage Trailer Insurance',
            description: 'Covers costs for towing, recovery, and storing your trailer after accidents',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/types/towing-storage',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Anchor className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Recovery & Storage Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Towing & Storage Cover
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Help When You Need It Most
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                After an accident or breakdown, towing and storage cover provides essential support. From roadside assistance to storage costs, we've got you covered.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Understanding Towing & Storage Cover</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When your trailer is damaged in an accident or suffers a breakdown, the incident doesn't end with the damage itself. You then face additional costs to get your trailer to a repairer, store it safely while repairs are arranged, and potentially cover transportation costs for replacement or alternative arrangements.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Towing and storage cover is an insurance add-on or bundled feature that covers these post-incident costs. Rather than paying out of pocket for expensive towing services or daily storage fees, your insurance covers these costs so you can focus on getting your trailer repaired and back on the road.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Most comprehensive trailer insurance policies include some level of towing coverage as standard, though storage may be an optional add-on. NZ insurers like AA Insurance, State Insurance, Tower, and others typically offer generous towing limits and often include unlimited roadside assistance.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Towing & Storage Coverage Includes</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Professional Towing Services</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                After an accident or breakdown, your trailer typically can't be driven. Professional towing services are required to move it to a repair facility. Towing costs vary based on distance — a 50km tow might cost $300-$500, while a 100km tow could exceed $1,000. In remote areas or with specialised trailers (horse floats, enclosed caravans), costs can be even higher.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Comprehensive towing coverage reimburses all towing costs up to a specified limit, typically $500-$1,000+ per incident. This ensures you can get professional towing without worrying about the bill.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Recovery Services</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Sometimes your trailer doesn't just need towing — it needs recovery. If your trailer goes off the road into a ditch, creek, or boggy ground, standard towing won't work. You need specialised recovery equipment like heavy tow trucks, winches, or cranes to extract the trailer safely.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Recovery costs are substantial. A winch recovery might cost $1,000-$3,000, while crane recovery for a horse float could exceed $5,000. Most comprehensive policies cover recovery costs to encourage you to use professional services rather than attempting dangerous DIY extraction.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Secure Storage Facilities</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                After your trailer is towed, it needs secure storage while repair arrangements are made. Storage facility costs range from $25-$50 per day depending on the facility and location. For a major repair taking 4-6 weeks, storage alone could cost $700-$2,100.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many comprehensive policies include storage coverage, either for unlimited days or up to 28-30 days per incident. This ensures your trailer is properly secured and protected while you arrange repairs.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Roadside Assistance</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Beyond major accidents, your tow vehicle might have issues while towing your trailer. Roadside assistance covers emergency services like:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>Tyre changes and repairs</li>
                <li>Fuel delivery if you run out of gas</li>
                <li>Lockout assistance if keys are locked in the vehicle</li>
                <li>Battery jump-start service</li>
                <li>Spare parts delivery</li>
                <li>Emergency repairs to get you back on the road</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many insurers provide unlimited roadside assistance calls per year at no additional cost, providing peace of mind when travelling.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Access to Approved Repairers</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many comprehensive policies include access to a network of approved repairers. These facilities have pre-negotiated rates with your insurer, often reducing your out-of-pocket costs. Using approved repairers also streamlines the claim process because your insurer has relationships with these facilities.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Even if you prefer an independent repairer, comprehensive policies usually cover towing to any facility you choose, not just approved ones.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Who Benefits Most From Towing & Storage Cover?</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Towing and storage cover is particularly valuable for:
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Long-Distance Travelers</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you regularly take your caravan on long trips around New Zealand, a breakdown or accident far from home would result in expensive towing bills. Coverage ensures you can get professional help without worrying about costs.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Owners of Expensive Trailers</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Horse floats, quality caravans, and specialised trailers are expensive to repair. Extended storage while waiting for parts is likely. Towing and storage cover protects against these costs.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">People with Limited Access</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you don't have a lockup or covered parking at home, secure storage is essential. Towing and storage cover ensures your damaged trailer is properly protected.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Frequent Campers</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Regular caravan users benefit most from comprehensive coverage including towing and storage, because they're more likely to need these services during their active camping years.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Real-World Example</h2>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 sm:p-8 mb-8">
                <h4 className="font-bold text-slate-900 mb-3">Accident Scenario: South Island Trip</h4>
                <p className="text-slate-700 mb-4">
                  Maria is towing her caravan near Arrowtown when another vehicle hits her. Her caravan is damaged and can't be driven safely. Here are the costs she faces:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
                  <li>Professional towing to Queenstown (80km): $650</li>
                  <li>Initial repair assessment and storage setup: $200</li>
                  <li>Secure storage facility for 6 weeks while parts arrive: $1,800</li>
                  <li>Total out-of-pocket costs without insurance: $2,650</li>
                </ul>
                <p className="text-slate-700 font-bold">
                  With towing and storage cover: Maria pays nothing. The insurance covers all towing and storage costs.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Coverage Limits & Considerations</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When reviewing towing and storage coverage:
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Towing Limits</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Most policies cover towing up to a specified distance (often unlimited) or to a limit per incident ($500-$2,000). Check your policy:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>Is towing unlimited or capped at a distance?</li>
                <li>Can you tow to any repairer or only approved ones?</li>
                <li>Does it cover recovery (winch extraction)?</li>
                <li>What about towing your tow vehicle if damaged in an accident?</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Storage Limits</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Storage coverage varies significantly:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>Some policies cover unlimited storage days</li>
                <li>Others limit to 28-30 days per incident</li>
                <li>Some have daily limits ($30-$50 per day)</li>
                <li>Check if storage is only at approved facilities or any secure facility</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For major repairs that take 6+ weeks, limited storage might not be sufficient. Ask your insurer about your specific coverage.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">How to Access Towing Services</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When you need towing after an accident or breakdown:
              </p>

              <ol className="list-decimal list-inside space-y-4 mb-6 text-lg text-slate-700">
                <li><strong>Call your insurer immediately:</strong> Have your policy number ready. Many insurers provide a 24/7 claims hotline.</li>
                <li><strong>Explain the situation:</strong> Describe what happened and where you are. For accidents, get a police report number.</li>
                <li><strong>Authorise towing:</strong> The insurer will either dispatch a tow truck or authorise you to call an approved provider.</li>
                <li><strong>Provide details:</strong> Tell the tow operator where you want the trailer towed (approved repairer, your home, etc.).</li>
                <li><strong>Get documentation:</strong> Keep receipts and towing documentation for your claim file.</li>
                <li><strong>Follow up:</strong> Confirm coverage with your insurer and ensure towing is processed as a covered claim.</li>
              </ol>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Cost of Towing & Storage Cover</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Towing is often included as standard in comprehensive policies at no additional cost. Storage cover might be an optional add-on costing $20-$50 annually. Given that a single towing incident could cost $500-$1,000+, this coverage provides excellent value.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When getting quotes, check whether towing is included standard and whether storage is optional. Compare policies carefully, as some insurers offer unlimited coverage while others have limits.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Services Included</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Important Details */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Questions to Ask Your Insurer</h2>

            <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Is towing cover included standard or optional?
                </h3>
                <p className="text-slate-700">
                  Most comprehensive policies include towing standard, but verify this when comparing quotes. Some basic policies might require it as an add-on.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  What are the towing limits?
                </h3>
                <p className="text-slate-700">
                  Check if towing is unlimited distance or has a per-incident cap. For frequent long-distance travelers, unlimited towing is preferable.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Is storage included and for how long?
                </h3>
                <p className="text-slate-700">
                  Clarify whether storage is covered, if it's unlimited or has daily/total limits, and whether it applies to any secure facility or only approved ones.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Does it cover recovery (off-road extraction)?
                </h3>
                <p className="text-slate-700">
                  If you explore remote areas or rough roads, confirm that recovery services are covered for situations where standard towing won't work.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Is 24/7 roadside assistance available?
                </h3>
                <p className="text-slate-700">
                  Confirm that roadside assistance is available around the clock, including weekends and public holidays, with no waiting limitations.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Can I choose any repairer or only approved ones?
                </h3>
                <p className="text-slate-700">
                  Verify whether you can take your trailer to any qualified repairer. Some policies require approved repairers for full coverage benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Best Practices for Avoiding Towing Situations</h2>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Regular Maintenance</h3>
                  <p className="text-slate-700">
                    Service your trailer annually. Check brakes, lights, coupling, bearings, and safety equipment. Good maintenance prevents breakdowns that require towing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Proper Coupling</h3>
                  <p className="text-slate-700">
                    Ensure your coupling is secure and compatible with your tow vehicle. Use safety chains and electrical connections correctly to prevent detachment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Safe Loading</h3>
                  <p className="text-slate-700">
                    Never exceed weight limits. Distribute cargo evenly and secure it properly. Overloaded trailers are prone to breakdowns and accidents.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Defensive Driving</h3>
                  <p className="text-slate-700">
                    Towing requires additional stopping distance and planning. Drive defensively, avoid sudden maneuvers, and adjust speed for conditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Carry Emergency Kit</h3>
                  <p className="text-slate-700">
                    Keep spare fuses, fluids, belts, and tools onboard. Having emergency supplies can help you resolve minor issues without needing a tow.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Know Your Limits</h3>
                  <p className="text-slate-700">
                    Understand your tow vehicle's towing capacity and your trailer's weight. Never exceed these limits, even on short trips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Get Towing & Storage Protection</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Don't get caught out with expensive towing and storage bills after an accident or breakdown. Ensure your trailer insurance includes comprehensive towing and storage cover so you're protected in any situation.
                </p>
                <p className="text-lg text-slate-700">
                  Compare quotes from top NZ insurers to find the policy with towing and storage coverage that meets your needs.
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
