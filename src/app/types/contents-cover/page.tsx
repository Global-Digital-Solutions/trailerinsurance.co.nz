'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import {
  Package,
  Shield,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Home,
  Tent,
  Utensils,
  Zap,
  Lock,
} from 'lucide-react';

export default function ContentsCoverPage() {
  const coverageItems = [
    {
      icon: Tent,
      title: 'Camping Equipment',
      description: 'Protection for tents, sleeping bags, camping chairs, cooking stoves, coolers, and outdoor gear stored in your caravan or trailer.',
    },
    {
      icon: Home,
      title: 'Caravan Furnishings',
      description: 'Covers built-in and portable furniture, bedding, curtains, cushions, and other soft furnishings inside your caravan.',
    },
    {
      icon: Utensils,
      title: 'Kitchen & Dining',
      description: 'Protection for pots, pans, cutlery, crockery, kitchen utensils, and food stored in your caravan or trailer galley.',
    },
    {
      icon: Zap,
      title: 'Electrical Equipment',
      description: 'Coverage for televisions, laptops, phones, chargers, portable heaters, and other electronic devices you bring on trips.',
    },
    {
      icon: Lock,
      title: 'Personal Clothing & Items',
      description: 'Protection for clothing, footwear, toiletries, books, games, and personal items brought for camping trips.',
    },
    {
      icon: DollarSign,
      title: 'Valuable Items',
      description: 'Optional coverage for jewelry, cameras, binoculars, and other high-value personal items up to specified limits.',
    },
  ];

  const relatedGuides = [
    { title: 'Caravan Insurance NZ', href: '/insurance/caravan-insurance-nz' },
    { title: 'Camper Trailer Insurance', href: '/insurance/camper-trailer-insurance-nz' },
    { title: 'Horse Float Insurance', href: '/insurance/horse-float-insurance-nz' },
    { title: 'Best Trailer Insurance NZ', href: '/insurance/best-trailer-insurance-nz' },
    { title: 'Comprehensive Trailer Cover', href: '/types/comprehensive' },
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
            name: 'Contents & Accessory Trailer Insurance',
            description: 'Protect personal items, equipment, and accessories stored in your caravan or trailer',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TrailerInsurance.co.nz',
              url: 'https://trailerinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://trailerinsurance.co.nz/types/contents-cover',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Package className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white font-medium">Personal Item Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Contents & Accessory Cover
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Protect Your Personal Items
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Keep your camping gear, caravan furnishings, and personal belongings protected. Contents cover reimburses you if items stored in your trailer are damaged, lost, or stolen.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Understanding Contents & Accessory Cover</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Contents and accessory cover is an optional add-on to your trailer insurance that protects personal items, equipment, and belongings stored inside or on your trailer. While comprehensive trailer insurance covers the structure and mechanical components of your caravan or trailer, it typically doesn't cover the personal belongings you pack for camping trips.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your caravan is broken into and camping gear is stolen, if fire damages your furnishings and personal items, or if an accident destroys contents, contents cover reimburses you for those losses. This add-on is particularly valuable for caravans and camper trailers that regularly carry expensive equipment.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Most major NZ insurers including AA Insurance, AMI, State Insurance, Tower, and Mariner offer contents cover as an optional add-on. The additional premium is typically modest compared to the value of protection it provides.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Does Contents Cover Include?</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Standard Camping Gear</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Contents cover protects typical camping equipment including tents, sleeping bags, sleeping mats, camp chairs, tables, cooking equipment, and food storage containers. This covers both items stored inside your caravan and gear secured to the exterior.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                A typical camping trip might include $2,000-$5,000 of gear and equipment. Without contents cover, losing this in a break-in or accident would be an out-of-pocket loss. With contents cover, you'd be reimbursed for replacement costs.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Caravan Furnishings</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many modern caravans come with beautiful furnishings including fixed and portable furniture, cushions, bedding, curtains, and soft furnishings. While the trailer structure is insured, these furnishings are your personal property and aren't covered by standard policies.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Quality caravan furnishings can be expensive. A set of curtains might cost $500-$1,000, bedding and cushions another $1,500-$3,000. If damaged by fire, water, or theft, contents cover reimburses replacement costs.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Built-in Appliances</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many caravans have built-in refrigerators, microwaves, ovens, washing machines, TVs, and entertainment systems. These are typically considered fixtures of the caravan and covered under the structure insurance. However, portable appliances you bring (electric cookers, fans, portable TVs) are covered under contents.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Check with your insurer what's considered built-in versus portable, as this affects coverage under different policy sections.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Electronics & Technology</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Contents cover protects laptops, tablets, smartphones, cameras, binoculars, portable speakers, and other electronic devices. In today's world, people often bring thousands of dollars in technology on camping trips. Accidental damage or theft of these items is covered.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                A single laptop can be worth $1,000-$3,000, and a good camera with lenses might be worth $2,000-$5,000. Contents cover protects against total loss of these items.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Personal Clothing & Toiletries</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Your personal clothing, footwear, toiletries, and general personal items are covered. This includes clothes you pack for trips, cosmetics, medications, and other personal care items. For a week-long trip, you might have $1,000-$2,000 in personal items that are protected.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Valuable Items</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many policies include optional coverage for valuable items like jewelry, watches, artwork, and collectibles. These items might have sublimits on standard policies (e.g., $500 per item), and you may want to increase coverage for particularly valuable items.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Accessories & Attachments</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Trailer accessories including spare wheels, equipment racks, awnings, outdoor furniture, and external storage boxes are covered. These items can be expensive and are vulnerable to damage or theft.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What's Not Covered?</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Important exclusions typically include:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>Items left unattended outside the trailer (e.g., camping chairs left outside overnight)</li>
                <li>Perishable goods or food items</li>
                <li>Items damaged through lack of care or maintenance</li>
                <li>Items used for business purposes</li>
                <li>Cash, credit cards, and financial documents</li>
                <li>Items in unlocked or insecure locations</li>
                <li>Damage from vermin, insects, or gradual deterioration</li>
                <li>Items already covered by home or contents insurance</li>
                <li>Items removed from the trailer for extended periods</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Calculating Contents Value</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To properly insure contents, you need to estimate the total value of items typically carried. Here's a breakdown for a typical caravan owner:
              </p>

              <table className="w-full text-sm md:text-base border-collapse mb-6">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Category</th>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Examples</th>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Typical Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Camping Gear</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Tents, sleeping bags, chairs, tables, coolers</td>
                    <td className="border border-slate-300 p-3 text-slate-700">$2,000-$5,000</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Electronics</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Laptop, camera, TV, speakers</td>
                    <td className="border border-slate-300 p-3 text-slate-700">$2,000-$4,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Kitchen & Dining</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Pots, pans, cutlery, crockery, stove</td>
                    <td className="border border-slate-300 p-3 text-slate-700">$800-$1,500</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Clothing & Personal</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Clothes, toiletries, personal items</td>
                    <td className="border border-slate-300 p-3 text-slate-700">$1,000-$2,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Furnishings</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Bedding, cushions, curtains, furniture</td>
                    <td className="border border-slate-300 p-3 text-slate-700">$2,000-$4,000</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Accessories</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Spare wheel, awning, external storage</td>
                    <td className="border border-slate-300 p-3 text-slate-700">$1,000-$3,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-bold text-slate-900">Valuable Items</td>
                    <td className="border border-slate-300 p-3 text-slate-700">Jewelry, watches, artwork</td>
                    <td className="border border-slate-300 p-3 text-slate-700">$500-$2,000</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                As you can see, typical contents can easily total $9,000-$20,000+. Without contents cover, you'd lose all this value in a theft or major accident. With contents cover, you'd be reimbursed.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">How Contents Claims Work</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you suffer a loss involving contents:
              </p>

              <ol className="list-decimal list-inside space-y-4 mb-6 text-lg text-slate-700">
                <li><strong>Report immediately:</strong> Notify your insurer within 24 hours of discovering the loss or damage</li>
                <li><strong>Document the loss:</strong> Take photographs of damaged or stolen items. If theft, get a police report number.</li>
                <li><strong>List affected items:</strong> Make a detailed list of what was lost or damaged, including purchase dates and original prices</li>
                <li><strong>Obtain receipts:</strong> Provide proof of purchase or value estimates from retailers if you have them</li>
                <li><strong>Get repair quotes:</strong> If items are damaged but repairable, obtain repair quotes from qualified providers</li>
                <li><strong>Submit claim:</strong> Complete the claims form with all supporting documentation and submit to your insurer</li>
              </ol>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Chosen Sum Insured Method</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Most contents policies use "chosen sum insured" where you declare a total contents value when you buy the policy. If you claim, the insurer will pay up to this amount for covered losses. It's important to assess contents carefully when setting this limit.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you declare $10,000 in contents value but actually lose $15,000 worth of items, your claim will only be paid to $10,000. Conversely, if you declare too high a value, you'll pay unnecessarily high premiums.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">New for Old vs Actual Value</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Some policies offer "new for old" (replacement) cover while others pay "actual cash value" (depreciated value). New for old is more valuable but costs more. For example:
              </p>

              <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700">
                <li><strong>Sleeping bag original cost:</strong> $300. After 3 years, depreciated value might be $150.</li>
                <li><strong>New for old cover:</strong> You'd receive $300 to buy a replacement</li>
                <li><strong>Actual cash value:</strong> You'd receive $150, requiring you to pay $150 more for replacement</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For older caravans with used items, new for old cover is much more valuable. Ask your insurer which method their contents cover uses.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Cost of Contents Cover</h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Contents cover is typically an optional add-on that costs $50-$150 annually depending on:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700">
                <li>Total sum insured (higher value = higher premium)</li>
                <li>Type of caravan/trailer</li>
                <li>Security measures (alarm, locks, tracking)</li>
                <li>Your claims history</li>
                <li>Where you store the trailer</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For typical contents of $10,000-$15,000, you'd pay roughly $100-$150 annually. This is excellent value considering the potential loss without cover.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What's Covered</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageItems.map((item, idx) => {
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

        {/* Tips Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Best Practices for Contents Protection</h2>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Keep an Inventory</h3>
                  <p className="text-slate-700">
                    Photograph or video record your typical contents. This helps if you need to claim and provides evidence for the value of what you normally carry.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Keep Receipts</h3>
                  <p className="text-slate-700">
                    Store purchase receipts for major items. These help substantiate claims and establish the original value of contents.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Secure Your Trailer</h3>
                  <p className="text-slate-700">
                    Use good locks, park in safe locations, and consider alarms or tracking systems. Better security can reduce premiums.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Don't Leave Items Outside</h3>
                  <p className="text-slate-700">
                    Store contents inside your trailer, not left on racks or outside overnight. Most policies require reasonable care to prevent loss.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Review Coverage Regularly</h3>
                  <p className="text-slate-700">
                    As you accumulate more gear and equipment, reassess your contents value. Ensure your sum insured matches your actual contents.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Check for Overlap</h3>
                  <p className="text-slate-700">
                    Verify that contents aren't already covered by home insurance. Avoid duplicate coverage while ensuring you're fully protected.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Add Contents Cover to Your Policy</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Contents and accessory cover is an affordable way to protect the items you love. For just $50-$150 annually, you can have peace of mind that your camping gear, personal items, and caravan furnishings are covered against loss or damage.
                </p>
                <p className="text-lg text-slate-700">
                  When getting a quote, ask insurers about contents cover as an add-on to your main trailer policy.
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
