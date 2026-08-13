'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { Heart, Shield, AlertTriangle, Home, CheckCircle2, Zap, Lock, TrendingUp } from 'lucide-react';

export default function HorseFloatInsurancePage() {
  const benefits = [
    {
      icon: Heart,
      title: 'Equine Specialist Coverage',
      description: 'Insurance designed specifically for horse floats and equine transport with understanding of unique equine risks and requirements.',
    },
    {
      icon: Home,
      title: 'Float Structure Protection',
      description: 'Full coverage for the float body, partitions, ventilation systems, ramps, and safety features essential for safe horse transport.',
    },
    {
      icon: Shield,
      title: 'Accidental Damage & Repairs',
      description: 'Protection against collision damage, impact damage, and accidents during transport. Quick claim settlement to minimise disruption.',
    },
    {
      icon: AlertTriangle,
      title: 'Theft & Vandalism Protection',
      description: 'Comprehensive cover against theft of your horse float and damage from vandalism at stables, events, or storage facilities.',
    },
    {
      icon: Zap,
      title: 'Electrical & Brake Systems',
      description: 'Coverage for electrical wiring, lighting, charging systems, and braking components critical to safe horse transport.',
    },
    {
      icon: TrendingUp,
      title: 'Equine Event Coverage',
      description: 'Insurance that covers transport to shows, competitions, and events with appropriate coverage for your travel patterns.',
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
            name: 'Horse Float Insurance NZ',
            description: 'Specialist equine transport insurance in New Zealand protecting horse floats against damage, theft, and accidents',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://www.trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://www.trailerinsurance.co.nz/insurance/horse-float-insurance-nz',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1535440724399-15ca4f772090?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Heart className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Equine Transport Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Horse Float Insurance
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Safe Transport Coverage for Your Horses
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Specialist insurance for horse floats protecting your investment and your animals. Comprehensive cover designed by equestrians for equestrian transport across New Zealand.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Horse Float Insurance is Critical</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Horse floats represent a significant financial investment, often costing $15,000 to $50,000 or more depending on size, features, and build quality. Beyond the monetary value, your horse float is essential to your equestrian activities—whether you're competing at shows, travelling to events, or transporting horses for agistment or veterinary care.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Unlike a caravan that sits stationary, horse floats are regularly in transit, exposing them to accident risks. They're parked at stables, events, and rural properties where theft and vandalism are concerns. They have specialised features—partitions, ventilation, ramps, internal fittings—that require equine-specific knowledge to replace properly after damage.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Insurance specialists and mainstream providers like AA Insurance, AMI, State, Tower, and Mariner offer horse float policies. However, specialist equine insurers or providers with strong equine focus understand the unique needs of horse owners better than generalist insurance companies.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Comprehensive Horse Float Coverage Explained</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Float Structure and Partitions</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Quality insurance covers the entire float structure: chassis, body panels, roof, floor, ramps, and internal partitions. Horse floats are custom-built with specific partition systems, ventilation arrangements, and safety features. If your float is damaged in an accident, you need insurance that covers not just basic repairs but restoration of these specialised equine components.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Ventilation and Air Quality Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Modern horse floats feature specialised ventilation systems crucial for horse health during transport. These systems prevent heat stress and provide adequate air circulation. Insurance covers damage to ventilation ducting, grilles, and fans. A damaged ventilation system can make the float unsafe or uncomfortable for horses to travel in.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Ramps and Loading Equipment</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Ramps are critical safety features for loading and unloading horses. Heavy-duty ramps, electric motors, and hydraulic systems are expensive to repair or replace. Insurance covers damage to ramps, motors, and related loading equipment that occur from accidents or impacts.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Electrical and Lighting Systems</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Horse floats have complex electrical systems for lights, charging batteries, and operating electric ramps or ventilation. Accidents can damage wiring harnesses, connections, and light clusters. Quality insurance covers these electrical components when damaged by insured events.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accidental Damage and Collision</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Accidents happen while towing. If another vehicle hits your float, you clip a gatepost while reversing, or your float swerves and impacts an obstacle, accidental damage cover protects you. This includes damage from overturning during emergency maneuvers.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Theft and Vandalism</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Horse floats are targeted for theft, particularly at equestrian events where multiple floats are parked together. Thieves steal expensive ramps, electrical components, and entire floats for resale. Insurance covers theft of the entire float or parts, plus damage from vandalism.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Towing and Recovery</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your horse float becomes unsafe to tow, you'll need professional recovery. Getting a damaged float towed from a remote location can cost hundreds or thousands of dollars. Most comprehensive policies include towing and recovery costs.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Specific Considerations for Horse Float Insurance</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Declaring Equine Use</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Make sure your insurance policy is specifically written for horse transport. Using a standard utility trailer policy to transport horses may void coverage. Your floats must be declared as horse transport equipment to your insurer.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Show and Event Travel</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you travel extensively to shows and competitions, ensure your policy covers your travel patterns. Some policies limit usage or require disclosure of frequent travelling. Always declare where you typically travel.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Towing Vehicle Suitability</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your insurance requires that your horse float be towed by a suitable, roadworthy vehicle. Using an undersized or unsuitable vehicle may void coverage. Ensure your tow vehicle is properly maintained and capable of safely towing your float.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Regular Maintenance</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Keep your float well-maintained. Insurers may deny claims if they determine that poor maintenance contributed to damage. This includes regular brake maintenance, electrical checks, and structural inspections.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-3 mt-12">Top Insurers for Horse Float Cover</h2>
              <p className="text-slate-600 text-base mb-6">All providers below require phone contact to obtain a horse float insurance quote — no online quote tools exist for this product in NZ.</p>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">AA Insurance</h3>
                  <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">16× Most Trusted</span>
                </div>
                <p className="text-slate-700 mb-3">
                  AA Insurance offers a dedicated standalone trailer/horse float policy with agreed value and $20 million third-party liability. Named NZ&apos;s Most Trusted Insurer for 16 consecutive years. Quotes are arranged by phone through their broker network .
                </p>
                <p className="text-slate-500 text-sm">Best for: well-maintained horse floats where agreed value and brand trust are priorities.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">AMI Insurance</h3>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">IAG Group</span>
                </div>
                <p className="text-slate-700 mb-3">
                  AMI provides separate caravan and trailer policies through the IAG Group. Their caravan policy includes contents cover — useful if your horse float has living quarters or an attached tack/gear area. $20 million third-party liability, excess-free key replacement up to $1,000.
                </p>
                <p className="text-slate-500 text-sm">Best for: horse floats with living quarters or significant tack/gear storage.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-amber-600">Tower Insurance</h3>
                  <span className="text-xs font-bold bg-green-100 text-green-800 px-2.5 py-1 rounded-full">$25M Liability</span>
                </div>
                <p className="text-slate-700 mb-3">
                  Tower offers the highest third-party liability in this comparison at $25 million — relevant if your horse float is large or towed on busy roads where an accident could involve multiple vehicles. Optional accessories cover ($2,000–$5,000) is useful for tack, saddles, and float equipment.
                </p>
                <p className="text-slate-500 text-sm">Best for: maximum liability cover on larger or heavier horse floats.</p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Horse Float Insurance Tips</h2>

              <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700">
                <li>Get a professional float inspection and valuation for agreed value insurance</li>
                <li>Use wheel clamps and coupling locks when parked at events or stables</li>
                <li>Park in well-lit areas when attending events—keep your float visible and secure</li>
                <li>Document your float's condition with photos before the insurance year starts</li>
                <li>Maintain your float regularly—poor maintenance can void claims</li>
                <li>Ensure your tow vehicle is suitable and properly maintained</li>
                <li>Declare all your travel and usage honestly to your insurer</li>
                <li>Review your policy annually to ensure your coverage matches your needs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Comprehensive Horse Float Protection</h2>

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

        {/* FAQs */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Horse Float Insurance FAQs</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Will my horse float insurance cover veterinary transport?',
                  a: 'Yes, most policies cover transport to veterinary facilities. Declare this usage to your insurer to ensure it\'s noted on your policy.',
                },
                {
                  q: 'Do I need special insurance for competing in shows?',
                  a: 'Your standard horse float insurance covers transport to shows. Ensure your policy covers the areas where you travel and has no restrictions on event usage.',
                },
                {
                  q: 'What if my horse float is damaged while loaded?',
                  a: 'Damage to the float itself is covered. Harm to the horse may require separate animal insurance. Check with your insurer about their specific terms.',
                },
                {
                  q: 'How much does horse float insurance cost?',
                  a: 'Costs vary based on float value, age, type, and your location. Budget $400-$1200+ annually. Get quotes from multiple providers to compare.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Horse Float Investment</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Don't leave your horse float at risk. Get comprehensive insurance that's designed with equestrian transport in mind. Our comparison service connects you with New Zealand's best insurers.
                </p>
                <p className="text-lg text-slate-700">
                  Get a quote today and compare coverage options from multiple providers tailored for horse float owners.
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
