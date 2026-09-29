'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import {
  Users,
  AlertTriangle,
  DollarSign,
  CheckCircle2,
  Shield,
  Zap,
  Building2,
  Car,
  Home,
  Wrench,
} from 'lucide-react';

export default function ThirdPartyLiabilityPage() {
  const coverageDetails = [
    {
      icon: Car,
      title: 'Property Damage to Other Vehicles',
      description: 'If your trailer damages another car, truck, or vehicle, third-party cover pays for repairs to their vehicle up to the policy limit.',
    },
    {
      icon: Home,
      title: 'Property Damage to Buildings & Property',
      description: 'Coverage extends to damage your trailer causes to buildings, fences, gates, street furniture, and other fixed structures.',
    },
    {
      icon: Users,
      title: 'Personal Injury Liability',
      description: 'Covers medical expenses and legal costs if someone is injured as a result of your trailer or its contents causing damage.',
    },
    {
      icon: DollarSign,
      title: 'Legal Defence Costs',
      description: 'The policy covers legal representation costs if you face legal action due to third-party claims arising from the insured incident.',
    },
    {
      icon: Building2,
      title: 'Damage to Public Amenities',
      description: 'Protection against costs of damaging public facilities like bollards, street signs, fencing, water features, and other shared infrastructure.',
    },
    {
      icon: Wrench,
      title: 'Emergency Clean-Up Costs',
      description: 'If your trailer spills cargo or fuel, third-party cover includes emergency cleanup and hazmat disposal costs.',
    },
  ];

  const relatedGuides = [
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
    { title: 'Boat Trailer Insurance', href: '/insurance/boat-trailer-insurance-nz' },
    { title: 'Horse Float Insurance', href: '/insurance/horse-float-insurance-nz' },
    { title: 'Commercial Trailer Cover', href: '/insurance/compare-trailer-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
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
            name: 'Third-Party Liability Trailer Insurance',
            description: 'Covers legal liability for damage caused by your trailer to other people\'s property — up to $20M',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://www.trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://www.trailerinsurance.co.nz/types/third-party-liability',
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
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Liability Protection Up to $20M</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Third-Party Liability Cover
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Protect Yourself from Major Claims
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Third-party liability insurance covers you against legal responsibility for damage your trailer causes to other people's property or personal injury. In New Zealand, this is often the minimum cover recommended.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Understanding Third-Party Liability</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Third-party liability insurance is designed to protect you against financial responsibility when your trailer causes damage to someone else's property or injures someone. Unlike comprehensive cover (which protects your own trailer), third-party liability only covers claims from third parties — hence the name.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                In New Zealand, third-party liability is considered essential protection for any vehicle owner, including trailer owners. A serious accident where your trailer damages multiple cars or a building could result in claims exceeding $100,000. Without liability cover, you would be personally responsible for paying these damages, which could be financially catastrophic.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Most NZ insurers offer third-party liability cover as a standalone policy (the most economical option) or bundled with comprehensive cover. Standard liability limits start at around $20 million in New Zealand, which provides substantial protection for most trailer owners.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">When Third-Party Liability Applies</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trailer at Fault in an Accident</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your trailer is involved in an accident and deemed at fault (or partially at fault), third-party liability cover pays for damage to the other party's vehicle. For example, if your trailer becomes unhitched and collides with oncoming traffic, your liability insurance would cover the damage claims from affected parties.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trailer Causes Property Damage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Third-party cover applies when your trailer causes damage to property that isn't a vehicle. If you're reversing and hit a neighbour's fence, or your trailer's contents spill onto the road and damage passing vehicles, third-party liability covers these claims. This extends to damage to public infrastructure like street signs, bollards, power lines, and buildings.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Cargo Spillage or Loss</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your trailer carries cargo (whether on a commercial trip or while camping) and the cargo spills onto the road, third-party liability covers claims from other road users who are injured or whose vehicles are damaged. This is particularly important for commercial trailers carrying goods.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Personal Injury Claims</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If someone is injured as a result of your trailer causing damage, third-party liability covers their personal injury claims. For example, if your trailer causes a car accident and the other driver is hospitalized, their medical expenses would be covered up to your policy limit.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Why $20M Liability Matters</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The $20 million liability limit offered by most NZ insurers provides substantial protection. To understand why this matters, consider these real-world scenarios:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700">
                <li><strong>Multi-vehicle accident:</strong> A major pileup involving 5-10 vehicles could result in total damage claims of $500,000-$2 million</li>
                <li><strong>Building damage:</strong> If your trailer damages commercial property, repair costs could be $100,000+</li>
                <li><strong>Personal injury:</strong> Serious injuries resulting in permanent disability could result in claims of $500,000-$5 million</li>
                <li><strong>Multiple fatalities:</strong> Fatal accidents can result in claims that exceed $10 million across multiple families</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Without adequate liability cover, you could be personally bankrupt if your trailer caused a serious accident. The $20M limit available from NZ insurers provides peace of mind that you're protected against even catastrophic claims.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Third-Party Liability Does NOT Cover</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                It's important to understand the limitations of third-party liability cover. Third-party policies do NOT cover:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700">
                <li>Damage to your own trailer (for this, you need comprehensive cover)</li>
                <li>Your own medical expenses or lost income from accidents</li>
                <li>Damage to your own belongings in or on the trailer</li>
                <li>Claims arising from illegal use of the trailer</li>
                <li>Fines or penalties imposed by authorities</li>
                <li>Claims where the trailer is operated by someone not permitted under the policy</li>
                <li>Intentional damage (e.g., you deliberately cause an accident)</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For complete protection, many Kiwis combine third-party liability with comprehensive cover to protect both themselves and other road users.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Third-Party Liability vs Comprehensive Cover</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The key difference is simple: third-party covers damage you cause to others, while comprehensive covers damage to your own trailer. Here's a comparison:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm md:text-base border-collapse">
                  <thead className="bg-amber-50">
                    <tr>
                      <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Coverage Type</th>
                      <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Your Trailer Damaged</th>
                      <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Others' Property Damaged</th>
                      <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-slate-300 p-3 font-bold text-slate-900">Third-Party Liability</td>
                      <td className="border border-slate-300 p-3 text-slate-700">✗ Not covered</td>
                      <td className="border border-slate-300 p-3 text-slate-700">✓ Covered (up to $20M)</td>
                      <td className="border border-slate-300 p-3 text-slate-700">Low</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-3 font-bold text-slate-900">Comprehensive</td>
                      <td className="border border-slate-300 p-3 text-slate-700">✓ Covered</td>
                      <td className="border border-slate-300 p-3 text-slate-700">✓ Covered (varies)</td>
                      <td className="border border-slate-300 p-3 text-slate-700">Higher</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">How to Handle a Third-Party Claim</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your trailer causes an accident or damage incident:
              </p>

              <ol className="list-decimal list-inside space-y-4 mb-6 text-lg text-slate-700">
                <li><strong>Stop immediately:</strong> Do not leave the scene. Provide your contact and insurance information to affected parties.</li>
                <li><strong>Call police:</strong> For accidents, request a police report number. This creates an official record of the incident.</li>
                <li><strong>Take photos:</strong> Document damage to all vehicles and property involved. Get contact details of witnesses.</li>
                <li><strong>Notify your insurer:</strong> Report the incident to your insurer within 24 hours if possible. Provide all documentation.</li>
                <li><strong>Cooperate fully:</strong> Provide honest information to your insurer. Misrepresenting facts can invalidate your claim.</li>
                <li><strong>Keep records:</strong> Maintain copies of all correspondence with your insurer and third parties.</li>
              </ol>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Choosing Your Excess</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many insurers offer third-party liability policies with optional excesses. A lower excess means you pay less out-of-pocket if you need to claim, but your premium will be higher. A higher excess means lower premiums but more out-of-pocket costs in a claim. Consider your financial position and risk tolerance when choosing.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Is Third-Party Liability Enough?</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Third-party liability is the minimum recommended cover in New Zealand, and for some trailer owners (particularly those with older, lower-value trailers or infrequent users), it may be sufficient. However, we recommend considering comprehensive cover if:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700">
                <li>Your trailer is relatively new or valuable ($10,000+)</li>
                <li>You use your trailer regularly for camping or trips</li>
                <li>You store valuable equipment or contents in your trailer</li>
                <li>You tow from locations prone to theft or damage</li>
                <li>You want peace of mind covering both your liability and your own property</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coverage Details Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What Third-Party Liability Covers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NZ Insurers */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Insurers Offering Third-Party Liability</h2>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA Insurance offers third-party liability cover starting from competitive rates with the option to upgrade to comprehensive. Their quotes are quick online, and they have excellent claims support.
                </p>
                <p className="text-slate-600 text-sm">Standard $20M liability limit included with excellent roadside support.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AMI Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AMI provides budget-friendly third-party liability policies perfect for basic protection needs. They offer competitive discounts for multiple policies bundled together.
                </p>
                <p className="text-slate-600 text-sm">Known for affordable liability-only coverage options.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State offers third-party liability with 24/7 claims support. Their online quotes are straightforward, and they provide clear coverage information.
                </p>
                <p className="text-slate-600 text-sm">Reliable service with good customer support.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">Tower Insurance</h3>
                <p className="text-slate-700 mb-4">
                  Tower provides straightforward third-party liability cover with flexible payment options. Their online portal makes managing your policy simple.
                </p>
                <p className="text-slate-600 text-sm">Easy online management with flexible policy options.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Management Tips */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Best Practices to Minimise Third-Party Risk</h2>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Ensure Proper Coupling</h3>
                  <p className="text-slate-700">
                    Regularly inspect your coupling mechanism, safety chains, and electrical connections. Ensure the coupling is compatible with your tow vehicle and rated for the trailer weight.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Maintain Proper Loading</h3>
                  <p className="text-slate-700">
                    Never exceed the trailer's rated capacity. Distribute weight evenly and secure all cargo properly. Overloaded trailers are more prone to failure and accidents.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Defensive Driving</h3>
                  <p className="text-slate-700">
                    Towing requires more planning time and distance for braking. Maintain safe speeds, allow extra following distance, and avoid sudden maneuvers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Regular Maintenance</h3>
                  <p className="text-slate-700">
                    Service your trailer annually, check brakes, tyres, lights, and coupling. Neglected maintenance increases accident risk and claims likelihood.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Secure Cargo Properly</h3>
                  <p className="text-slate-700">
                    Use appropriate securing methods for your cargo. Loose cargo that falls onto the road creates liability for damage to other vehicles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Review Your Policy Annually</h3>
                  <p className="text-slate-700">
                    Ensure your coverage limits still match your usage. If you're using your trailer more frequently or towing different loads, your coverage may need adjustment.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Get Third-Party Liability Cover Today</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Third-party liability is affordable insurance that protects you from potentially catastrophic financial consequences. Most Kiwis with trailers should have this basic cover.
                </p>
                <p className="text-lg text-slate-700 mb-8">
                  Use our comparison service to find the best third-party liability quotes from top NZ insurers. Get personalised quotes in just 2 minutes with no obligation.
                </p>

                <div className="space-y-4">
                  {[
                    { title: 'Up to $20M Liability Protection', desc: 'Cover legal costs and third-party property damage claims so one accident does not wipe out your savings.' },
                    { title: 'From Just a Few Dollars a Week', desc: 'Third-party liability is one of the most affordable trailer insurance options available, often under $15/week.' },
                    { title: 'Covers All Trailer Types', desc: 'Caravans, boat trailers, horse floats, box trailers, and commercial rigs — one policy covers your liability.' },
                    { title: 'Licensed Broker Network', desc: 'We match you with licensed brokers who compare quotes from 50+ NZ providers at no extra cost to you.' },
                    { title: '24-Hour Quote Response', desc: 'Submit your details once and receive personalised quotes from multiple insurers within one business day.' },
                    { title: 'No Obligation, No Hidden Fees', desc: 'Our comparison service is completely free. You only pay the insurer if you choose to go ahead with a policy.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">{item.title}</span>
                        <span className="text-slate-600"> — {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
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
