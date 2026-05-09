'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import {
  Truck,
  Shield,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Wrench,
  Package,
  Zap,
  Building2,
  Lock,
} from 'lucide-react';

export default function CommercialPage() {
  const benefits = [
    {
      icon: Truck,
      title: 'Heavy Equipment & Tools Coverage',
      description: 'Comprehensive protection for tools, machinery, and equipment transported on your trailer, up to declared values.',
    },
    {
      icon: Shield,
      title: 'Cargo Liability Protection',
      description: 'Covers liability if cargo damage causes injury or damage to third parties, up to specified limits.',
    },
    {
      icon: Package,
      title: 'Goods-in-Transit Coverage',
      description: 'Protection for goods being transported from point A to point B, including theft and accidental damage.',
    },
    {
      icon: DollarSign,
      title: 'High Value Claim Limits',
      description: 'Increased cover limits suitable for valuable cargo, equipment, and high-risk commercial operations.',
    },
    {
      icon: Wrench,
      title: 'Equipment Breakdown Coverage',
      description: 'Optional add-on for electrical and mechanical breakdown of trailer equipment during transit.',
    },
    {
      icon: Zap,
      title: '24/7 Claims Support',
      description: 'Dedicated support for commercial claims with quick assessment and settlement for business continuity.',
    },
  ];

  const businessTypes = [
    {
      title: 'Contractors & Tradies',
      description: 'Protection for tool storage and equipment transport. Covers power tools, machinery, and building materials on job sites.',
    },
    {
      title: 'Landscapers & Horticulturists',
      description: 'Coverage for garden equipment, mowers, soil, plants, and landscape supplies transported in commercial trailers.',
    },
    {
      title: 'Moving Companies',
      description: 'Comprehensive goods-in-transit coverage for household items and commercial goods being moved for clients.',
    },
    {
      title: 'Event & Equipment Rental',
      description: 'Protection for valuable event equipment, marquees, furniture, and entertainment gear in transport.',
    },
    {
      title: 'Freight & Courier Services',
      description: 'Specialised coverage for parcels, documents, and goods being transported for commercial delivery.',
    },
    {
      title: 'Agricultural Operations',
      description: 'Cover for farm equipment, produce, and supplies transported in agricultural trailers.',
    },
  ];

  const relatedGuides = [
    { title: 'Commercial Trailer Cover', href: '/insurance/flatbed-trailer-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Box Trailer Insurance', href: '/insurance/box-trailer-insurance-nz' },
    { title: 'Enclosed Trailer Insurance', href: '/insurance/enclosed-trailer-insurance-nz' },
    { title: 'Compare Trailer Insurance', href: '/insurance/compare-trailer-insurance-nz' },
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
            name: 'Commercial & Carriers Liability Trailer Insurance',
            description: 'Specialised cover for business trailers, tools, heavy transport, and commercial equipment',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/types/commercial',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Truck className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Business Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Commercial & Carriers Liability
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Specialised Business Coverage
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Protect your business operations with specialised trailer insurance for commercial equipment, heavy transport, and valuable cargo. Tailored for contractors, moving companies, and commercial operators.
              </p>

              <Link href="/#quote-form" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5">
                Get Your Free Quote <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Commercial Trailer Insurance Explained</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial and carriers liability insurance is specifically designed for businesses that rely on trailers for their operations. Whether you're a contractor transporting tools, a moving company carrying household goods, or a logistics operator moving freight, commercial trailer insurance provides specialised coverage tailored to business risks.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Standard personal trailer insurance may not adequately protect business assets or provide sufficient liability coverage for commercial operations. Commercial policies are designed with higher claim limits, specific coverage for tools and equipment, and provisions for goods-in-transit protection.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                NZ insurers like AA Insurance, State Insurance, Tower, and specialised providers understand the unique risks businesses face when operating trailers. Commercial policies often include features standard personal policies don't offer, such as coverage for cargo value, employee coverage, and higher liability limits.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What's Covered in Commercial Trailer Insurance?</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Tools and Equipment</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial trailers often carry expensive tools and equipment. A single power tool can be worth thousands, and a full trailer of tools can easily exceed $50,000-$100,000. Commercial insurance covers tools and equipment against theft, damage, and loss. You can typically declare specific high-value items separately for additional protection.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Materials and Goods</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Contractors often transport building materials, landscapers move soil and plants, and couriers carry valuable parcels. Commercial policies protect goods in transit, including coverage for:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>Accidental damage during transport</li>
                <li>Theft or break-in to secured trailers</li>
                <li>Weather-related damage to cargo</li>
                <li>Spillage or contamination of goods</li>
                <li>Loss during loading or unloading</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Carriers Liability</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Carriers liability covers claims from third parties if your cargo causes damage or injury. For example, if unsecured cargo spills onto the road and damages another vehicle, carriers liability covers the affected party's repair costs and personal injury claims. This coverage is essential for professional transport operators.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Increased Liability Limits</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial policies typically offer higher third-party liability limits than personal policies. Where standard policies might offer $20M liability, commercial policies can extend to $50M+ depending on your business and cargo value. This protection is critical when transporting high-value goods.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Trailer Damage Coverage</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial comprehensive cover protects your trailer itself against accident damage, theft, fire, weather damage, and other perils. Since your business depends on your trailer, this ensures you can get back to work quickly after damage.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Optional Extras</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial policies often include optional add-ons:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li><strong>Breakdown cover:</strong> Recovery and repair of mechanical/electrical failures</li>
                <li><strong>Lost earnings:</strong> Compensation for lost income while your trailer is being repaired</li>
                <li><strong>Trailer hire:</strong> Cost of hiring a replacement trailer while repairs are underway</li>
                <li><strong>Tools cover:</strong> Specialised protection for individual valuable tools</li>
                <li><strong>Spoilage cover:</strong> For refrigerated goods or perishables</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Who Needs Commercial Trailer Insurance?</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If any of the following applies to you, commercial trailer insurance is essential:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700">
                <li>You use your trailer for business purposes or to generate income</li>
                <li>You transport valuable equipment, tools, or goods</li>
                <li>You carry cargo for clients (moving, freight, courier)</li>
                <li>Your trailer is essential to business operations</li>
                <li>You employ staff who use or ride in your trailer</li>
                <li>You transport goods across New Zealand or to different locations</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Key Differences from Personal Trailer Insurance</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial policies differ from personal policies in several important ways:
              </p>

              <table className="w-full text-sm md:text-base border-collapse mb-6">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Feature</th>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Personal Insurance</th>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Commercial Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Cargo Coverage</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Limited or excluded</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Comprehensive goods-in-transit</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Liability Limits</td>
                    <td className="border border-slate-300 p-3 text-slate-700">$20M standard</td>
                    <td className="border border-slate-300 p-3 text-slate-700">$50M+ available</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Business Use</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Usually excluded</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Specifically covered</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Tools/Equipment</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Not covered</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Full coverage available</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Breakdown Cover</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Rare</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Often included</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What's Usually Excluded?</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Common exclusions in commercial trailer insurance include:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>Damage caused by poor loading or securing of cargo</li>
                <li>Wear and tear or gradual deterioration of equipment</li>
                <li>Cargo of prohibited or illegally transported items</li>
                <li>Damage from inadequate maintenance or poor repair work</li>
                <li>Claims while operating outside NZ (unless specifically covered)</li>
                <li>Losses resulting from dishonesty or fraud by employees</li>
                <li>Goods not properly declared or valued</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Declarations and Honesty</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial policies require careful declarations about:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>The types of goods typically transported</li>
                <li>Maximum cargo values per trip</li>
                <li>Geographic areas of operation</li>
                <li>Security measures (alarms, CCTV, tracking)</li>
                <li>Staff safety records</li>
                <li>Previous claims history</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                It's crucial to be completely honest in your declarations. If you misrepresent your business operations, the insurer may deny claims or cancel your policy.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Premium Considerations</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Commercial trailer insurance premiums depend on several factors:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700">
                <li><strong>Cargo value:</strong> Higher value goods = higher premiums</li>
                <li><strong>Type of goods:</strong> Hazardous materials cost more than general goods</li>
                <li><strong>Geographic coverage:</strong> Operating across NZ costs more than regional coverage</li>
                <li><strong>Security measures:</strong> Better security can reduce premiums</li>
                <li><strong>Claims history:</strong> Previous claims will increase premiums</li>
                <li><strong>Business size:</strong> Larger operations may get bulk discounts</li>
                <li><strong>Excess:</strong> Higher excess = lower premiums</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Making a Claim</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your cargo or trailer is damaged, the commercial claims process is similar to personal policies but with additional documentation requirements:
              </p>

              <ol className="list-decimal list-inside space-y-4 mb-6 text-lg text-slate-700">
                <li><strong>Notify immediately:</strong> Report the incident within 24 hours if possible</li>
                <li><strong>Preserve evidence:</strong> Keep damaged goods and take photographs</li>
                <li><strong>Get documentation:</strong> Police reports, receipts, repair quotes, invoice for goods</li>
                <li><strong>Minimise losses:</strong> Take reasonable steps to prevent further damage or loss</li>
                <li><strong>Provide details:</strong> Complete claim form with full incident details and cargo information</li>
                <li><strong>Submit supporting docs:</strong> Provide all evidence to support your claim</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Commercial Insurance Benefits</h2>

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

        {/* Business Types */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Industries We Cover</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessTypes.map((type, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Management */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Best Practices for Commercial Operations</h2>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Maintain Security</h3>
                  <p className="text-slate-700">
                    Use wheel clamps, locks, or enclosed trailers. Install alarm systems or GPS tracking for high-value cargo. Insurers reward good security with lower premiums.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Proper Loading & Securing</h3>
                  <p className="text-slate-700">
                    Always follow weight limits and distribute loads properly. Secure cargo correctly to prevent shift damage or spillage during transport.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Regular Maintenance</h3>
                  <p className="text-slate-700">
                    Service your trailer regularly. Check brakes, lights, coupling, and safety equipment. Good maintenance reduces breakdowns and claim frequency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Document Everything</h3>
                  <p className="text-slate-700">
                    Keep receipts for equipment, photos of cargo, and records of any incidents. Good documentation supports claims and helps with future negotiations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Employee Training</h3>
                  <p className="text-slate-700">
                    Ensure staff understand how to load, secure, and handle cargo safely. Training reduces accidents and damage claims.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Review Coverage Annually</h3>
                  <p className="text-slate-700">
                    As your business grows or changes, ensure your coverage matches your current operations and cargo values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NZ Insurers */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Top Insurers for Commercial Trailers</h2>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">AA Insurance</h3>
                <p className="text-slate-700 mb-4">
                  AA offers commercial trailer cover with customizable cargo limits and higher liability options. Their business support team understands contractor and tradesperson needs.
                </p>
                <p className="text-slate-600 text-sm">Excellent for tradies and contractors with diverse cargo types.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">State Insurance</h3>
                <p className="text-slate-700 mb-4">
                  State provides comprehensive commercial trailer insurance with 24/7 claims support and flexible cargo declarations. Quick online quotes for business owners.
                </p>
                <p className="text-slate-600 text-sm">Strong commercial support with quick claim processing.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">Tower Insurance</h3>
                <p className="text-slate-700 mb-4">
                  Tower offers business-focused trailer insurance with add-ons for breakdown cover and lost earnings protection. Straightforward online management portal.
                </p>
                <p className="text-slate-600 text-sm">Good for small businesses with optional add-on flexibility.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">Mariner Insurance</h3>
                <p className="text-slate-700 mb-4">
                  Mariner specialises in specialist and high-value cargo transport, including marine, equipment, and specialised goods. Expert knowledge of commercial transport risks.
                </p>
                <p className="text-slate-600 text-sm">Ideal for high-value or specialised commercial cargo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Protect Your Business Operations</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Commercial trailer insurance is an essential investment in your business continuity. Whether you're a contractor, moving company, or logistics operator, proper coverage protects your equipment, cargo, and liability exposure.
                </p>
                <p className="text-lg text-slate-700">
                  Get personalised commercial insurance quotes from top NZ insurers in just 2 minutes. Compare coverage options and find the right policy for your business.
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
