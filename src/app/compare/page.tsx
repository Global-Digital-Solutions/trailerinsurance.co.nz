'use client';

import { CheckCircle, XCircle, Phone, AlertTriangle, Shield, Truck, Anchor, HelpCircle } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

const providers = [
  {
    name: 'AA Insurance',
    domain: 'aa.co.nz',
    badge: '16× Most Trusted',
    badgeColor: 'bg-amber-100 text-amber-800',
    description:
      'AA Insurance offers a dedicated standalone trailer policy — not just an add-on to your car insurance. Known as New Zealand\'s most trusted insurer for 16 consecutive years, AA covers trailers on agreed value with full third-party liability up to $20 million. Quotes are arranged by phone through their broker network.',
    type: 'Standalone Trailer Policy',
    liabilityLimit: '$20 million',
    phone: '0800 500 231',
    bestFor: 'Everyday utility & box trailers',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: true,
      naturalDisaster: true,
      contentsCover: false,
      roadsideAssist: true,
      onlineQuotes: false,
    },
  },
  {
    name: 'AMI Insurance',
    domain: 'ami.co.nz',
    badge: 'IAG Group',
    badgeColor: 'bg-blue-100 text-blue-800',
    description:
      'AMI (part of the IAG Group) provides two separate products: a dedicated Caravan Insurance policy and a separate Trailer Insurance policy. The caravan policy includes contents cover for belongings inside — the trailer policy covers the trailer itself. Both include $20 million third-party liability and excess-free key replacement up to $1,000.',
    type: 'Separate Caravan + Trailer Policies',
    liabilityLimit: '$20 million',
    phone: '0800 100 200',
    bestFor: 'Caravans & horse floats with contents',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: true,
      naturalDisaster: true,
      contentsCover: true,
      roadsideAssist: true,
      onlineQuotes: false,
    },
  },
  {
    name: 'State Insurance',
    domain: 'state.co.nz',
    badge: 'IAG Group',
    badgeColor: 'bg-blue-100 text-blue-800',
    description:
      'State Insurance (also IAG Group) maintains separate policy wordings for trailers (document SI1058/8) and caravans (SI1057/9). As an IAG member, State Insurance shares the group\'s financial strength and claims infrastructure. State is strong on bundling discounts if you already hold home or car insurance with them.',
    type: 'Standalone Trailer & Caravan Cover',
    liabilityLimit: 'IAG standard rates',
    phone: 'Via State.co.nz',
    bestFor: 'Bundling with existing State home or car policy',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: true,
      naturalDisaster: true,
      contentsCover: false,
      roadsideAssist: false,
      onlineQuotes: false,
    },
  },
  {
    name: 'Tower Insurance',
    domain: 'tower.co.nz',
    badge: 'Highest Liability',
    badgeColor: 'bg-green-100 text-green-800',
    description:
      'Tower offers the highest third-party liability limit in this comparison at $25 million. Their trailer/caravan policy covers collision, fire, theft, and natural disaster events. Optional contents cover up to $5,000 is available, plus accessories cover ($2,000–$5,000). All quotes are phone-based — Tower does not offer online trailer quote tools.',
    type: 'Caravan & Trailer Insurance',
    liabilityLimit: '$25 million',
    phone: '0800 379 372',
    bestFor: 'Maximum liability protection',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: true,
      naturalDisaster: true,
      contentsCover: true,
      roadsideAssist: false,
      onlineQuotes: false,
    },
  },
  {
    name: 'FMG Insurance',
    domain: 'fmg.co.nz',
    badge: 'Rural Specialist',
    badgeColor: 'bg-orange-100 text-orange-800',
    description:
      'FMG (Farmers\' Mutual Group) is the go-to insurer for rural and farming New Zealand. Their Superior Private Vehicles policy covers horse floats, farm trailers, and caravans as part of a broader rural vehicle package. FMG works through a network of rural advisers — ideal if you want someone who understands farming operations and livestock transport.',
    type: 'Rural Vehicle & Trailer Insurance',
    liabilityLimit: 'Contact FMG',
    phone: '0800 366 466',
    bestFor: 'Horse floats, farm trailers & rural use',
    features: {
      comprehensive: true,
      thirdParty: true,
      agreedValue: false,
      naturalDisaster: true,
      contentsCover: false,
      roadsideAssist: false,
      onlineQuotes: false,
    },
  },
];

const featureLabels: Record<string, string> = {
  comprehensive: 'Comprehensive Cover',
  thirdParty: 'Third-Party Liability',
  agreedValue: 'Agreed Value Option',
  naturalDisaster: 'Natural Disaster Cover',
  contentsCover: 'Contents Cover',
  roadsideAssist: 'Roadside Assistance',
  onlineQuotes: 'Online Quote Tool',
};

const trailerTypes = [
  {
    icon: Truck,
    title: 'Box & Utility Trailers',
    desc: 'The most common type in NZ. Standard two-axle box trailers used for moving furniture, tools, garden waste. Typically lower values ($1,000–$8,000) — agreed value policies are ideal.',
  },
  {
    icon: Anchor,
    title: 'Boat Trailers',
    desc: 'Single or tandem axle trailers used to transport trailer boats. Higher theft risk at boat ramps. Mariner-specific policies may cover the boat and trailer together under marine insurance.',
  },
  {
    icon: Shield,
    title: 'Horse Floats',
    desc: 'Specialist trailers with high values ($15,000–$80,000+). FMG Insurance dominates this segment with rural adviser expertise. Livestock welfare and breakdowns far from help are key risks.',
  },
  {
    icon: Truck,
    title: 'Caravans & Camper Trailers',
    desc: 'Highest average values and most complex coverage needs. Require contents cover for furniture, appliances, and personal items. AMI offers the most complete caravan-specific policy wording in NZ.',
  },
  {
    icon: Truck,
    title: 'Car Trailers & Flat Decks',
    desc: 'Used for transporting vehicles, machinery, and heavy equipment. Commercial use changes the risk profile — check whether your policy covers trade or business use explicitly.',
  },
  {
    icon: Truck,
    title: 'Enclosed Trailers',
    desc: 'Specialist trailers for motorcycles, gear, and equipment. Higher theft risk and often contain expensive contents. Contents cover is essential — standard trailer policies may not cover what\'s inside.',
  },
];

export default function ComparePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Research updated May 2026 — verified NZ market data</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Compare Trailer Insurance Providers in NZ
          </h1>
          <p className="text-xl text-slate-200 mb-8">
            We&apos;ve researched every major NZ trailer insurer so you don&apos;t have to. See accurate coverage details, liability limits, and quote methods — then let our brokers get you the best deal.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#comparison-table"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-3 px-6 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all"
            >
              See Comparison Table →
            </a>
            <a
              href="/#quote-form"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-all"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* The Coverage Gap Warning */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                The Coverage Gap Most Kiwi Trailer Owners Don&apos;t Know About
              </h2>
              <p className="text-slate-700 text-lg mb-4">
                <strong>Your car insurance likely only covers your trailer up to $750–$1,000.</strong> Most NZ car policies include what insurers call the &ldquo;garden trailer rule&rdquo; — limited cover for small utility trailers that gets stripped away the moment your trailer is unhitched.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="text-red-600 font-bold text-sm mb-1">❌ What car insurance usually covers</div>
                  <p className="text-slate-600 text-sm">Third-party liability only while hitched. Own damage limited to ~$750–$1,000. Nothing when unhitched.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <div className="text-amber-700 font-bold text-sm mb-1">⚠️ Common gaps</div>
                  <p className="text-slate-600 text-sm">Theft when parked. Fire. Accidental damage. Contents inside the trailer. Overloading voids all claims.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="text-green-700 font-bold text-sm mb-1">✓ Standalone trailer insurance</div>
                  <p className="text-slate-600 text-sm">Covers the trailer 24/7, hitched or not. Agreed value payout. Fire, theft, natural disaster, and third-party liability.</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm mt-4">
                Source: Quashed.co.nz independent NZ insurance research, December 2025. Policy wordings vary — always read your PDS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison-table" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">NZ Trailer Insurance Feature Comparison</h2>
            <p className="text-slate-600 text-lg">
              Verified against current policy wordings. All five providers confirmed to offer standalone trailer/caravan policies — not just add-ons.
            </p>
          </div>

          {/* Important note about phone-only quotes */}
          <div className="mb-8 flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> As of May 2026, all five providers in this comparison require phone contact to obtain a trailer insurance quote. None offer a self-serve online quote tool for trailers or caravans. Our broker service submits your details once and gets quotes back from multiple providers.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold min-w-[200px]">Feature</th>
                  {providers.map((provider) => (
                    <th key={provider.name} className="px-4 py-4 text-center font-semibold min-w-[150px]">
                      <div className="font-bold text-sm">{provider.name}</div>
                      <div className="text-xs opacity-90 font-normal mt-1">{provider.type}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="px-6 py-3 font-semibold text-slate-500 text-sm uppercase tracking-wide">Liability Limit</td>
                  {providers.map((provider) => (
                    <td key={provider.name} className="px-4 py-3 text-center text-sm font-semibold text-slate-900">
                      {provider.liabilityLimit}
                    </td>
                  ))}
                </tr>
                {Object.entries(featureLabels).map(([key, label], i) => (
                  <tr key={key} className={`border-t border-slate-200 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <td className="px-6 py-4 font-semibold text-slate-900">{label}</td>
                    {providers.map((provider) => (
                      <td key={provider.name} className="px-4 py-4 text-center">
                        {provider.features[key as keyof typeof provider.features] ? (
                          <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-slate-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-slate-200 bg-amber-50">
                  <td className="px-6 py-3 font-semibold text-slate-700">Best For</td>
                  {providers.map((provider) => (
                    <td key={provider.name} className="px-4 py-3 text-center text-xs text-slate-600">
                      {provider.bestFor}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {providers.map((provider) => (
              <div key={provider.name} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{provider.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${provider.badgeColor}`}>
                      {provider.badge}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">{provider.type}</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                    <span className="text-sm font-semibold text-slate-500">Liability Limit</span>
                    <span className="text-sm font-bold text-slate-900">{provider.liabilityLimit}</span>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(featureLabels).map(([key, label]) => (
                      <div key={key} className="flex items-center justify-between py-1.5 border-t border-slate-100">
                        <span className="text-sm text-slate-700">{label}</span>
                        {provider.features[key as keyof typeof provider.features] ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-slate-300" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500"><strong>Best for:</strong> {provider.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA under comparison table */}
          <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Want Quotes from All Five Providers at Once?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Since every provider requires a phone call, let our ICNZ-registered brokers do the legwork. One form — multiple quotes back in your inbox.
            </p>
            <a
              href="/#quote-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 font-bold py-3.5 px-8 rounded-xl hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Free Quote →
            </a>
          </div>
        </div>
      </section>

      {/* Provider Profiles */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Provider Profiles — What You Need to Know</h2>
            <p className="text-slate-600 text-lg">Detailed breakdown of each insurer&apos;s trailer product, strengths, and limitations — based on current NZ policy wordings.</p>
          </div>

          <div className="space-y-8">
            {providers.map((provider) => (
              <div key={provider.name} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-slate-900">{provider.name}</h3>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${provider.badgeColor}`}>
                        {provider.badge}
                      </span>
                    </div>
                    <p className="text-amber-600 font-semibold">{provider.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 mb-0.5">Third-Party Liability</div>
                    <div className="text-xl font-bold text-slate-900">{provider.liabilityLimit}</div>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">{provider.description}</p>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                  {Object.entries(provider.features).map(([key, included]) =>
                    included ? (
                      <span key={key} className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs font-medium text-green-700">
                        ✓ {featureLabels[key]}
                      </span>
                    ) : (
                      <span key={key} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-medium text-slate-400">
                        — {featureLabels[key]}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>{provider.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Shield className="w-4 h-4 text-amber-500" />
                    <span>Best for: {provider.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trailer Types Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Coverage Needs by Trailer Type</h2>
            <p className="text-slate-600 text-lg">Different trailers carry different risks. Here&apos;s what matters most for each type.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trailerTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Choose the Right Provider</h2>

          <div className="space-y-5">
            <div className="bg-white border border-amber-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">🏆 Best overall for most trailers: AA Insurance</h3>
              <p className="text-slate-700">New Zealand&apos;s most trusted insurer for 16 years running. Dedicated standalone trailer policy with agreed value and $20 million third-party liability. If you want the peace of mind of the most recognised name in NZ insurance, AA is the benchmark. Phone-only quoting via their broker network.</p>
            </div>

            <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">🚌 Best for caravans with contents: AMI Insurance</h3>
              <p className="text-slate-700">AMI is the only provider in this comparison with a fully separate, dedicated Caravan Insurance policy that includes contents cover as standard — furniture, appliances, and personal belongings inside your caravan. Also excess-free key replacement up to $1,000. Strong choice for full-timer or regular caravanners.</p>
            </div>

            <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">🛡️ Best liability limit: Tower Insurance</h3>
              <p className="text-slate-700">At $25 million third-party liability, Tower offers the highest limit in this comparison — useful if your trailer could cause significant damage in a serious accident (e.g., an unbraked caravan causing a multi-vehicle crash on a motorway). Optional contents cover ($5,000) and accessories ($2,000–$5,000) available.</p>
            </div>

            <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">🌾 Best for rural & horse floats: FMG Insurance</h3>
              <p className="text-slate-700">FMG is the clear choice for farming New Zealand. Their rural advisers understand horse floats, farm trailers, livestock transport, and the specific risks of rural operations. FMG doesn&apos;t just understand trailers — they understand the land and the lifestyle. Essential if you&apos;re covering a horse float worth $30,000+.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">🏠 Best for bundling: State Insurance</h3>
              <p className="text-slate-700">If you already hold a home or car policy with State Insurance, bundling your trailer cover can unlock multi-policy discounts. State (IAG Group) maintains dedicated trailer and caravan policy documents and IAG&apos;s broad financial strength behind them. Ask about bundling discounts when you quote.</p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex gap-3 items-start">
              <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900 mb-1">Important: price is almost never the only factor</p>
                <p className="text-slate-700 text-sm">
                  Excess amounts, claim payment speed, policy exclusions (especially overloading, WOF compliance, and coupling security), and whether your insurer will pay agreed value or market value at claim time can make a $200/year premium difference irrelevant. Our brokers are trained to look past the headline price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What NZ Trailer Insurance Typically Covers</h2>
          <p className="text-slate-600 text-lg mb-10">
            Standalone trailer insurance policies in New Zealand generally include the following events — but always check your specific policy wording (PDS):
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Accidental Collision Damage', desc: 'Damage from collisions while towing, including single-vehicle accidents and rollovers.' },
              { title: 'Fire & Explosion', desc: 'Fire damage to the trailer whether hitched or stored. Includes electrical faults and arson.' },
              { title: 'Theft & Attempted Theft', desc: 'If your trailer is stolen from your property, a campsite, or a public area. Applies hitched or unhitched.' },
              { title: 'Natural Disaster', desc: 'Flood, earthquake, storm, and volcanic activity. NZ EQC-equivalent events covered by most standalone policies.' },
              { title: 'Third-Party Liability', desc: 'If your trailer causes injury or property damage to others. NZ liability limits range from $20M to $25M.' },
              { title: 'Towing & Storage Costs', desc: 'Some policies include emergency towing after an accident and storage fees while repairs are arranged.' },
              { title: 'Contents Cover (selected policies)', desc: 'AMI (caravan policy) and Tower (optional add-on) cover belongings inside the trailer up to specified limits.' },
              { title: 'Accessories & Attachments', desc: 'Tower explicitly covers accessories ($2,000–$5,000). Check whether awnings, annexes, or equipment are included.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 text-sm mb-1">{item.title}</div>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-red-50 border border-red-200 rounded-xl">
            <h3 className="font-bold text-red-800 mb-2">⚠️ Common Exclusions to Watch For</h3>
            <ul className="space-y-1 text-sm text-red-700">
              <li>• <strong>WOF/rego non-compliance:</strong> If your trailer doesn&apos;t have a current WOF or registration, claims may be declined</li>
              <li>• <strong>Overloading:</strong> Exceeding your vehicle&apos;s towing capacity can void any claim — both your trailer and car policies</li>
              <li>• <strong>Coupling security:</strong> Trailer must be properly hitched — safety chains and couplings must be correctly fitted</li>
              <li>• <strong>Commercial use:</strong> Using a trailer for business or hire without declaring it can result in a declined claim</li>
              <li>• <strong>Contents (standard trailers):</strong> Most trailer policies (not caravan) exclude personal belongings inside the trailer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Quotes from All NZ Providers in One Step</h2>
            <p className="text-lg text-slate-700 mb-6">
              Because every provider requires a phone call to get a trailer insurance quote, going direct means five separate calls — each starting from scratch. Our brokers submit your trailer details once and come back with competitive quotes from the providers that best match your situation.
            </p>
            <ul className="space-y-4">
              {[
                'We contact all five providers (and more from our broker network) on your behalf',
                'Quotes compared side-by-side — not just price, but excess, agreed value, and key exclusions',
                'ICNZ-registered brokers who understand NZ trailer and caravan insurance',
                'No obligation — compare then decide',
                'Response within 24 hours on business days',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <QuoteForm mode="compact" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Compare Trailer Insurance?"
        description="Our brokers will match you with the right provider for your trailer type and budget."
        buttonText="Get a Free Quote"
        buttonLink="/#quote-form"
      />
    </>
  );
}
