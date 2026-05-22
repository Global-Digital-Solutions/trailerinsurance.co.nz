import Link from 'next/link';
import { ShieldCheck, Heart, Users, Zap, MapPin, Clock } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'About TrailerInsurance.co.nz | NZ Trailer Insurance',
  description: 'Learn about TrailerInsurance.co.nz. Connecting Kiwis with the right trailer insurance through ICNZ registered brokers, no fees, and 24-hour support.',
};

export default function AboutPage() {
  const trustSignals = [
    {
      icon: ShieldCheck,
      title: 'Licensed Insurance Brokers',
      description: 'Our partners are fully registered with Insurance Council of New Zealand',
    },
    {
      icon: Zap,
      title: 'No Broker Fees',
      description: 'Zero hidden charges. Get quotes and support at no extra cost.',
    },
    {
      icon: Clock,
      title: '24-Hour Response',
      description: 'We respond to all enquiries within 24 hours, guaranteed.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your needs come before everything. We listen, understand, and deliver solutions that work for you.',
    },
    {
      icon: Users,
      title: 'Built for Kiwis',
      description: 'We understand the NZ trailer landscape — from Auckland beach caravans to Southland station trucks.',
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Partnered with NZ brokers who know your region, your risks, and your options.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About TrailerInsurance.co.nz</h1>
          <p className="text-xl text-slate-200 mb-8">Connecting Kiwis with the right trailer insurance through transparent, no-fee quotes and trusted broker partnerships.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'NZ Owned & Operated', value: '✓' },
              { label: 'Fast Impartial Quotes', value: '24hr' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-slate-700 text-lg mb-4">
                TrailerInsurance.co.nz was founded with a simple mission: make it easy for New Zealanders to find the right trailer insurance. We saw that too many Kiwis were either overpaying for cover they didn't need or driving uninsured because the process was confusing and time-consuming.
              </p>
              <p className="text-slate-700 text-lg mb-4">
                We partnered with ICNZ-registered brokers across New Zealand to create a transparent, no-fee quote service. No hidden charges. No pushy sales tactics. Just straightforward comparisons and expert advice from professionals who know the NZ insurance landscape inside out.
              </p>
              <p className="text-slate-700 text-lg">
                Today, thousands of Kiwis trust us to help them protect their trailers. Whether you're towing a <Link href="/insurance/caravan-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">caravan up the West Coast</Link> or hauling a <Link href="/insurance/horse-float-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">horse float to a weekend show</Link>, we're here to connect you with the best insurance for your needs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-700 text-lg">
                To connect every Kiwi with accessible, transparent trailer insurance that protects their asset and their peace of mind — without unnecessary complexity or cost.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How Our Comparison Service Works</h2>
              <p className="text-slate-700 text-lg mb-4">
                Getting the right trailer insurance shouldn't require hours of research or multiple phone calls. Our service streamlines the entire process. When you submit your information through our site, we connect you with licensed insurance brokers who understand the NZ trailer market.
              </p>
              <p className="text-slate-700 text-lg mb-4">
                Our brokers compare quotes from over 50 insurance providers, considering your specific trailer type, value, usage patterns, and location. Whether you're insuring a <Link href="/insurance/boat-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">boat trailer</Link>, <Link href="/insurance/caravan-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">caravan</Link>, or utility trailer, they'll find options tailored to your needs.
              </p>
              <p className="text-slate-700 text-lg mb-4">
                What sets us apart is that you never pay broker fees. Our system is designed to be cost-effective for everyone. Insurers value the quality leads we send, and that efficiency gets passed directly to you through no-fee quotes. Learn more about comparing your options in our <Link href="/insurance/compare-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">comprehensive comparison guide</Link>.
              </p>
              <p className="text-slate-700 text-lg">
                Within 24 hours, you'll hear from a broker with personalised recommendations and clear comparisons showing premium costs, coverage levels, excess options, and available add-ons. You can then choose the policy that offers the best value for your situation.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Understanding the Trailer Insurance Industry</h2>
              <p className="text-slate-700 text-lg mb-4">
                New Zealand's trailer insurance market is regulated by the Insurance Council of New Zealand (ICNZ), which ensures all brokers and insurers meet strict standards. This regulatory framework protects customers by requiring licensed professionals, transparent disclosure practices, and proper claims handling procedures.
              </p>
              <p className="text-slate-700 text-lg mb-4">
                The NZ trailer insurance landscape includes both specialist providers who focus exclusively on trailers and general insurers offering trailer coverage as part of their broader product suite. Specialist insurers like Mariner Insurance bring deep expertise in marine-specific risks, while mainstream providers like AA Insurance, AMI, State Insurance, and Tower offer competitive premiums and comprehensive coverage through established networks.
              </p>
              <p className="text-slate-700 text-lg mb-4">
                Understanding your coverage options is essential. <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">Comprehensive coverage</Link> protects your trailer from accidents, theft, weather damage, and other perils. <Link href="/types/third-party-liability" className="text-amber-600 hover:text-amber-700 font-semibold underline">Third-party liability</Link> covers damage you cause to others but not your own trailer. Many providers also offer <Link href="/types/agreed-value" className="text-amber-600 hover:text-amber-700 font-semibold underline">agreed-value policies</Link> and add-ons like <Link href="/types/contents-cover" className="text-amber-600 hover:text-amber-700 font-semibold underline">contents coverage</Link>.
              </p>
              <p className="text-slate-700 text-lg">
                Trailer values and usage patterns vary dramatically across New Zealand. Coastal regions may face higher theft and corrosion risks, requiring different coverage than inland areas. Rural users often tow longer distances, while urban owners might use trailers occasionally for specific needs. Our brokers understand these regional variations and local risk factors that affect your insurance options.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why You Should Trust Our Expertise</h2>
              <p className="text-slate-700 text-lg mb-4">
                Our broker network consists of professionals with years of experience in New Zealand's insurance industry. They've guided thousands of Kiwis through choosing the right coverage and navigating claims processes. Many have personal experience with trailers, caravans, boats, and horses, giving them real-world understanding of the risks you face.
              </p>
              <p className="text-slate-700 text-lg mb-4">
                Brokers on our platform understand that insurance isn't one-size-fits-all. A young professional with a new utility trailer has different needs than a retiree towing a caravan across the country. A boat enthusiast needs specialised marine coverage, while a horse float owner requires different protections. Our brokers take time to understand your specific situation and recommend accordingly.
              </p>
              <p className="text-slate-700 text-lg mb-4">
                Beyond just finding quotes, our brokers provide ongoing support. They explain policy terms in plain English, help you understand what's covered and what isn't, and guide you through claims if needed. They're advocates for their customers, working to resolve issues and ensure you get fair treatment throughout your policy term.
              </p>
              <p className="text-slate-700 text-lg">
                Check out our <Link href="/faqs" className="text-amber-600 hover:text-amber-700 font-semibold underline">FAQs page</Link> for answers to common questions, or <Link href="/blog" className="text-amber-600 hover:text-amber-700 font-semibold underline">read our blog</Link> for detailed guides on topics like <Link href="/insurance/trailer-insurance-cost-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">insurance costs</Link> and <Link href="/insurance/best-trailer-insurance-nz" className="text-amber-600 hover:text-amber-700 font-semibold underline">choosing the best coverage</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why You Can Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{signal.title}</h3>
                  </div>
                  <p className="text-slate-700">{signal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-amber-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sidebar Quote Form Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Protect Your Trailer?</h2>
            <p className="text-lg text-slate-700 mb-8">
              Get free, no-obligation quotes from NZ's top trailer insurers. Our brokers will compare your options and help you find the best cover at the right price.
            </p>
            <ul className="space-y-4">
              {[
                'Compare leading NZ insurance providers in one place',
                'No broker fees — ever',
                'Response from a licensed broker within 24 hours',
                'All your trailer type options covered: caravans, boat trailers, horse floats, and more',
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
          <div className="lg:col-span-1">
            <QuoteForm mode="compact" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Protect Your Trailer?"
        description="Get personalised quotes from NZ's top providers in just 2 minutes."
        buttonText="Get a Quote"
        buttonLink="/#quote-form"
      />
    </>
  );
}
