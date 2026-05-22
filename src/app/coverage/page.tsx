import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Trailer Insurance Coverage Guide | TrailerInsurance.co.nz',
  description: 'Complete guide to trailer insurance coverage in NZ. Understand what\'s covered, compare coverage levels, and find the right policy for your trailer.',
};

const coverageTypes = [
  {
    slug: 'comprehensive',
    title: 'Comprehensive Cover',
    description: 'Full protection for accidental damage, theft, fire, storm damage, and third-party liability.',
    icon: '🛡️',
  },
  {
    slug: 'third-party-liability',
    title: 'Third-Party Liability',
    description: 'Cover for damage or injury to others caused by your trailer. Essential minimum cover.',
    icon: '⚖️',
  },
  {
    slug: 'agreed-value',
    title: 'Agreed Value',
    description: 'Lock in your trailer\'s value upfront. Get the agreed amount if your trailer is written off.',
    icon: '💰',
  },
  {
    slug: 'contents-cover',
    title: 'Contents Cover',
    description: 'Optional add-on for caravans. Covers camping gear, appliances, and personal items inside.',
    icon: '📦',
  },
  {
    slug: 'towing-storage',
    title: 'Towing & Storage',
    description: 'Cover for emergency towing costs and storage fees after an accident or breakdown.',
    icon: '🔗',
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    description: 'For business trailers. Covers goods in transit, public liability, and trade-related risks.',
    icon: '🚚',
  },
];

const coverageComparison = [
  { feature: 'Accidental Damage', basic: true, standard: true, comprehensive: true },
  { feature: 'Theft Protection', basic: false, standard: true, comprehensive: true },
  { feature: 'Fire & Natural Disaster', basic: false, standard: true, comprehensive: true },
  { feature: 'Storm Damage', basic: false, standard: true, comprehensive: true },
  { feature: 'Third-Party Liability', basic: true, standard: true, comprehensive: true },
  { feature: 'Agreed Value Option', basic: false, standard: true, comprehensive: true },
  { feature: 'Contents Cover', basic: false, standard: false, comprehensive: true },
  { feature: 'Roadside Assistance', basic: false, standard: false, comprehensive: true },
  { feature: 'Emergency Accommodation', basic: false, standard: false, comprehensive: true },
  { feature: 'Towing & Storage', basic: false, standard: true, comprehensive: true },
];

const whatsCovered = [
  'Accidental damage from collisions and impact',
  'Theft and attempted theft',
  'Fire damage',
  'Storm, hail, and weather-related damage',
  'Flood damage (depending on location)',
  'Vandalism and malicious damage',
  'Third-party liability up to $20 million',
  'Towing and recovery costs',
  'Emergency accommodation (if caravan becomes uninhabitable)',
];

const whatsNotCovered = [
  'Wear and tear or mechanical breakdown',
  'Damage while trailer is being used illegally',
  'Damage to contents (unless contents cover added)',
  'Damage due to lack of maintenance',
  'Damage from animal strikes (in some policies)',
  'Damage from defects in design or manufacture',
  'Financial losses unrelated to physical damage',
];

export default function CoveragePage() {
  return (
    <>
      {/* Hero Section — tall with bottom padding so coverage card overlaps */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end px-4 sm:px-6 lg:px-8 pt-28 pb-32"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1765478423046-b66c352ff59a?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
        <div className="relative max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 rounded-full px-4 py-1.5 mb-5">
            <span className="text-amber-300 text-sm font-semibold">Complete NZ Coverage Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">Trailer Insurance<br className="hidden sm:block" /> Coverage Guide</h1>
          <p className="text-xl text-slate-200 max-w-2xl">Understand exactly what's covered, compare policy levels, and find the right cover for your trailer.</p>
        </div>
      </section>

      {/* What Is Covered Section — overlaps hero with negative top margin */}
      <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/20 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">What Trailer Insurance Covers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Covered
              </h3>
              <ul className="space-y-3">
                {whatsCovered.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-600" />
                Not Covered
              </h3>
              <ul className="space-y-3">
                {whatsNotCovered.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-red-600 font-bold mt-1">✕</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Coverage Types Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Coverage Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/types/${type.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-amber-300 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{type.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {type.title}
                </h3>
                <p className="text-slate-700 mb-4">{type.description}</p>
                <div className="text-amber-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Coverage Types Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Understanding Each Coverage Type</h2>

          <div className="space-y-12">
            {/* Comprehensive */}
            <div className="border-l-4 border-amber-500 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Comprehensive Cover</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Comprehensive coverage represents the highest level of protection available for your trailer. This policy covers accidental damage, theft, fire, storm damage, and more. It's the most popular choice for valuable trailers, caravans, and those used regularly on NZ roads. Comprehensive cover also typically includes third-party liability protection, so you're covered if your trailer causes damage or injury to others.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                With <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">comprehensive coverage</Link>, you gain peace of mind knowing that most common scenarios are covered. Whether your trailer is damaged in a collision, affected by severe weather, or stolen, your insurance will help cover repair or replacement costs.
              </p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Many comprehensive policies for <Link href="/insurance/caravan-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">caravans</Link> and <Link href="/insurance/boat-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">boat trailers</Link> include additional benefits like roadside assistance, emergency accommodation if your caravan becomes uninhabitable, and optional contents cover for your belongings inside.
              </p>
            </div>

            {/* Third-Party Liability */}
            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Liability Cover</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <Link href="/types/third-party-liability" className="text-amber-600 hover:text-amber-700 font-semibold underline">Third-party liability cover</Link> is the legal minimum requirement in New Zealand and provides essential protection if your trailer damages someone else's property or causes injury to another person. This coverage protects you financially if you're held liable for claims arising from your trailer.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Your liability limit is typically up to $20 million, which covers legal costs, medical expenses, and property damage claims made against you. While basic third-party only policies are the most affordable option, they don't cover damage to your own trailer—only your legal liability to others.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This is an excellent option if your trailer has minimal value or you're looking for the most budget-friendly coverage. However, many Kiwis combine third-party liability with theft and fire protection for better value, creating a middle-ground coverage level.
              </p>
            </div>

            {/* Agreed Value */}
            <div className="border-l-4 border-green-500 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Agreed Value Cover</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <Link href="/types/agreed-value" className="text-amber-600 hover:text-amber-700 font-semibold underline">Agreed value coverage</Link> eliminates depreciation concerns by locking in your trailer's value upfront. When you agree on a value with your insurer at the time of purchase, you'll receive that exact amount if your trailer is written off or stolen—regardless of how much it's worth at claim time.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                This is particularly valuable for newer trailers and high-end caravans or boat trailers, where depreciation happens quickly. By choosing agreed value, you know precisely what you'll receive in a total loss situation, making it easier to plan your replacement.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The alternative is market value coverage, where your payout is calculated based on your trailer's market value at the time of the claim—which may be less than you hoped. Agreed value provides certainty and peace of mind, especially important when you own specialty trailers or custom setups.
              </p>
            </div>

            {/* Contents Cover */}
            <div className="border-l-4 border-purple-500 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Contents Cover</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <Link href="/types/contents-cover" className="text-amber-600 hover:text-amber-700 font-semibold underline">Contents cover</Link> is an optional add-on that protects the belongings stored inside your caravan or trailer. This includes camping gear, kitchen appliances, bedding, personal items, and other possessions. Without this add-on, your standard trailer insurance only covers the trailer structure itself—not what's inside.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                For caravan owners who travel extensively, contents cover is highly recommended. Whether your caravan is your holiday getaway or your home on wheels, protecting the valuable equipment and personal items inside is essential. This coverage typically covers theft, accidental damage, and weather-related damage to your contents.
              </p>
              <p className="text-slate-700 leading-relaxed">
                When selecting a contents limit, think about your cooking equipment, beds, entertainment systems, tools, and personal belongings. Contents cover offers protection tailored specifically to caravan owners and is often very affordable when added to a comprehensive policy.
              </p>
            </div>

            {/* Towing & Storage */}
            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Towing & Storage Cover</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <Link href="/types/towing-storage" className="text-amber-600 hover:text-amber-700 font-semibold underline">Towing and storage cover</Link> protects you against the unexpected costs that arise after an accident or breakdown. If your trailer breaks down or is damaged, emergency towing can cost hundreds of dollars. This coverage reimburses those costs and also covers storage fees while your trailer is being repaired.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                This add-on is particularly valuable for caravan owners who travel far from home. Breaking down on a remote NZ road could result in expensive towing fees, especially if towing must happen over long distances. Storage cover ensures you're not left paying out of pocket while repairs are being completed.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Many insurers include towing and storage as part of standard or comprehensive policies, but it's worth checking your policy details. For those frequently taking their trailers on long journeys, this coverage provides valuable protection and peace of mind.
              </p>
            </div>

            {/* Commercial */}
            <div className="border-l-4 border-red-500 pl-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Commercial Trailer Cover</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <Link href="/types/commercial" className="text-amber-600 hover:text-amber-700 font-semibold underline">Commercial trailer insurance</Link> is designed for business owners who use trailers for work purposes. This specialised coverage includes protection for goods in transit, public liability for your business operations, and trade-related risks that standard consumer policies don't cover.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                If you operate a trade business, transport goods for clients, or use your trailer as part of a commercial venture, standard consumer insurance won't provide adequate protection. Commercial policies are tailored to business needs and often include higher liability limits and specific coverage for business equipment and cargo.
              </p>
              <p className="text-slate-700 leading-relaxed">
                From tradies transporting tools and materials to businesses using trailers for deliveries, commercial coverage ensures your business operations are properly protected. Coverage extends to include liability for damage caused to clients' property or third parties during the course of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Comparison Table */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Coverage Level Comparison</h2>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Coverage Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Basic</th>
                  <th className="px-6 py-4 text-center font-semibold">Standard</th>
                  <th className="px-6 py-4 text-center font-semibold">Comprehensive</th>
                </tr>
              </thead>
              <tbody>
                {coverageComparison.map((row, i) => (
                  <tr key={i} className={`border-t border-slate-200 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <td className="px-6 py-4 font-semibold text-slate-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.basic ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600">
                          ✕
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.standard ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600">
                          ✕
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.comprehensive ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600">
                          ✕
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-slate-700">
              <span className="font-semibold text-slate-900">Note:</span> Coverage levels and features vary between insurers. Some providers offer customizable policies that combine features from multiple levels. Always review the Product Disclosure Statement (PDS) for specific coverage details and exclusions.
            </p>
          </div>
        </div>
      </section>

      {/* Choosing Coverage Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">How to Choose the Right Coverage Level</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Factors to Consider</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Selecting the right coverage level requires careful consideration of your trailer's value, how you use it, and your financial situation. Take time to assess your specific situation rather than choosing based on price alone.
              </p>
              <ul className="space-y-4">
                {[
                  'Your trailer\'s value and replacement cost',
                  'Type of trailer and how frequently it\'s used',
                  'Whether you prefer agreed value or market value',
                  'Optional add-ons like contents or roadside assist',
                  'Your comfort level with the excess amount',
                  'How far you travel and where you park',
                  'Whether you tow on long journeys regularly',
                  'Your claims history and driving record',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Coverage Level Guide</h3>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
                  <h4 className="font-semibold text-slate-900 mb-2">Third-Party Liability Only</h4>
                  <p className="text-sm text-slate-700 mb-2">Best for: Low-value trailers, occasional users, budget-conscious owners</p>
                  <p className="text-sm text-slate-700">Covers liability to others only. Lowest cost option, meets legal minimums.</p>
                </div>
                <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded">
                  <h4 className="font-semibold text-slate-900 mb-2">Standard (Theft & Fire)</h4>
                  <p className="text-sm text-slate-700 mb-2">Best for: Mid-value trailers, regular users, balanced protection</p>
                  <p className="text-sm text-slate-700">Adds theft, fire, and accidental damage. Good middle ground between cost and coverage.</p>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
                  <h4 className="font-semibold text-slate-900 mb-2">Comprehensive</h4>
                  <p className="text-sm text-slate-700 mb-2">Best for: New trailers, caravans, valuable equipment, frequent travelers</p>
                  <p className="text-sm text-slate-700">Full coverage including weather, accidental damage, and more. Maximum protection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Your Coverage Needs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What Affects Your Coverage Needs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Trailer Type & Value</h3>
              <p className="text-slate-700 mb-4">
                High-value caravans and specialty trailers warrant comprehensive coverage with agreed value. Budget-friendly trailers may only need basic third-party liability. Check what <Link href="/insurance/caravan-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">caravan insurance</Link> covers if you own a caravan.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Usage Patterns</h3>
              <p className="text-slate-700 mb-4">
                Trailers used for long-distance travel, especially in remote areas, benefit from towing and storage cover. Trailers parked permanently in secure storage need less coverage than those regularly on the road.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Business vs. Personal Use</h3>
              <p className="text-slate-700 mb-4">
                <Link href="/types/commercial" className="text-amber-600 hover:text-amber-700 font-semibold underline">Commercial trailers</Link> require different coverage than personal trailers. If you use your trailer for work or business purposes, standard consumer insurance may not provide adequate protection.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Contents & Belongings</h3>
              <p className="text-slate-700 mb-4">
                Caravan owners with expensive equipment and personal items should consider <Link href="/types/contents-cover" className="text-amber-600 hover:text-amber-700 font-semibold underline">contents cover</Link>. Standard policies don't protect items stored inside your trailer.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Location & Parking</h3>
              <p className="text-slate-700 mb-4">
                Trailers parked in high-crime areas or on street sides benefit from theft protection. Trailers stored in secure facilities may have lower rates or different coverage needs. NZ urban vs. rural areas have different risk profiles.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Budget Considerations</h3>
              <p className="text-slate-700 mb-4">
                Balance your premium costs against potential claims. A higher excess reduces your premium but means higher out-of-pocket costs if you need to claim. Find the right balance for your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NZ-Specific Considerations Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Coverage Considerations for Local Conditions</h2>

          <div className="space-y-8">
            <div className="p-8 bg-white rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Weather & Natural Disasters</h3>
              <p className="text-slate-700 mb-4">
                New Zealand experiences diverse weather patterns, from heavy rain in the south to extreme wind events in the north. Comprehensive coverage that includes storm and flood damage is essential for NZ trailer owners. Winter snow and ice in alpine regions create additional risks, while the coastal environment increases salt corrosion risks.
              </p>
              <p className="text-slate-700">
                If you frequently travel in areas prone to flooding or severe weather, ensure your policy specifically covers flood damage. Some policies have geographic limitations or exclusions for certain weather events.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Towing Laws & Requirements</h3>
              <p className="text-slate-700 mb-4">
                NZ has specific towing regulations regarding trailer weight, braking systems, and safety standards. Your insurance must comply with your trailer's registration and usage. Make sure your insurer knows the accurate weight and specifications of your trailer, as misrepresentation could affect claims.
              </p>
              <p className="text-slate-700">
                Understand your towing vehicle's capacity and ensure you're not exceeding weight limits. Some insurers have specific requirements for trailers towed by certain vehicle types.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rural vs. Urban Risks</h3>
              <p className="text-slate-700 mb-4">
                Rural areas present different risks (stock gates, farm equipment collisions, remote breakdowns) compared to urban areas (theft, parking damage). Your coverage should reflect where your trailer spends most of its time. Rural users benefit from towing cover, while urban users may prioritize theft protection.
              </p>
              <p className="text-slate-700">
                Consider how often you travel between rural and urban areas and ensure your coverage is appropriate for your actual usage patterns.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Holiday Season Usage</h3>
              <p className="text-slate-700 mb-4">
                Many Kiwis use caravans and trailers primarily during holidays. If your usage is seasonal, discuss this with your insurer. Some policies offer seasonal discounts or adjusted coverage for trailers used only at certain times of year.
              </p>
              <p className="text-slate-700">
                Summer holidays and school breaks increase towing on NZ roads. Ensure your policy covers the specific dates and periods when you plan to travel.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Specialist Trailer Types</h3>
              <p className="text-slate-700 mb-4">
                NZ users choose from diverse trailer types: <Link href="/insurance/caravan-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">caravans</Link>, <Link href="/insurance/boat-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">boat trailers</Link>, horse trailers, and more. Each type has unique risks and coverage needs. Ensure your policy is specifically designed for your trailer type, not a generic trailer policy.
              </p>
              <p className="text-slate-700">
                Specialty trailers may require specialised insurers who understand their specific risks and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Common Coverage Mistakes to Avoid</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Underestimating Trailer Value</h3>
              <p className="text-slate-700">
                Choosing a value that's too low to save on premiums will result in lower payouts when claiming. If your trailer is worth $30,000, insuring it for $20,000 leaves you significantly exposed. Use <Link href="/types/agreed-value" className="text-amber-600 hover:text-amber-700 font-semibold underline">agreed value coverage</Link> to lock in the correct amount.
              </p>
            </div>

            <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Not Reviewing Contents Coverage</h3>
              <p className="text-slate-700">
                Many caravan owners forget that contents inside aren't covered by the trailer policy alone. Your camping equipment, kitchen appliances, bedding, and personal items need separate <Link href="/types/contents-cover" className="text-amber-600 hover:text-amber-700 font-semibold underline">contents cover</Link> protection. Without it, theft or damage could be completely uninsured.
              </p>
            </div>

            <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Choosing Only Third-Party Liability</h3>
              <p className="text-slate-700">
                While meeting legal minimums, third-party only leaves your own trailer completely unprotected. A collision or theft could be catastrophic financially. Adding theft and fire protection creates a much safer middle ground between cost and coverage.
              </p>
            </div>

            <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Misrepresenting Business Use</h3>
              <p className="text-slate-700">
                Using a personal policy for business purposes can invalidate coverage. If you use your trailer for work or commercial purposes, you need <Link href="/types/commercial" className="text-amber-600 hover:text-amber-700 font-semibold underline">commercial coverage</Link> to ensure claims are protected. Being dishonest about usage is grounds for claim denial.
              </p>
            </div>

            <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Ignoring Excess Levels</h3>
              <p className="text-slate-700">
                A low premium might come with a high excess ($1,000 or more). Ensure you can afford the excess if you need to claim. Balance the premium savings against the excess amount you'd pay out of pocket.
              </p>
            </div>

            <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Not Including Towing Cover</h3>
              <p className="text-slate-700">
                Skipping <Link href="/types/towing-storage" className="text-amber-600 hover:text-amber-700 font-semibold underline">towing and storage cover</Link> can be expensive when you break down far from home. Emergency towing costs can exceed $500-$1,000, making this cover excellent value for frequent travelers.
              </p>
            </div>

            <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Not Updating Coverage After Purchase</h3>
              <p className="text-slate-700">
                If you modify your trailer, add expensive equipment, or change how you use it, your coverage may no longer be appropriate. Review and update your policy annually or whenever your trailer circumstances change.
              </p>
            </div>

            <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Not Comparing Policies</h3>
              <p className="text-slate-700">
                Staying with the same insurer without shopping around could cost you hundreds annually. Get multiple quotes and compare not just price but coverage details, excesses, and extras. What suits your neighbour might not suit you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Quote Form Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Expert Help Choosing Coverage</h2>
            <p className="text-lg text-slate-700 mb-8">
              Not sure which coverage level is right for you? Our insurance brokers can help you assess your needs and find the perfect policy. Request a quote today and speak with an expert about your specific situation.
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-slate-700 leading-relaxed">
                Whether you own a caravan for holidays, use a boat trailer for weekend fishing, or need <Link href="/types/commercial" className="text-amber-600 hover:text-amber-700 font-semibold underline">commercial trailer insurance</Link>, we can guide you to the right coverage. Our brokers understand NZ road conditions, usage patterns, and the unique needs of different trailer types.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <QuoteForm mode="compact" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Find the Right Coverage for Your Trailer"
        description="Get quotes and expert advice from ICNZ registered brokers."
        buttonText="Get a Quote"
        buttonLink="/#quote-form"
      />
    </>
  );
}
