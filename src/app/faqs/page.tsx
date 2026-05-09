'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqs } from '@/data/faqs';
import CTABanner from '@/components/CTABanner';
import { ChevronDown } from 'lucide-react';

export default function FAQsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (slug: string) => {
    setExpandedId(expandedId === slug ? null : slug);
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-200">Everything you need to know about trailer insurance in New Zealand.</p>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Trailer Insurance</h2>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Trailer insurance is more than just meeting legal requirements—it's about protecting your investment and ensuring peace of mind on New Zealand roads. Whether you own a caravan for holidays, a boat trailer for weekend getaways, or use a trailer for business, understanding your insurance options is essential.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Many Kiwi trailer owners have questions about what's covered, which coverage level is right for them, and how to get the best value. We've compiled the most common questions below to help you make informed decisions about your trailer insurance policy. From coverage types to claims processes, these FAQs cover the topics that matter most to trailer owners.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              If you're not sure whether you need comprehensive coverage or third-party liability, wondering what <Link href="/coverage" className="text-amber-600 hover:text-amber-700 font-semibold underline">contents cover</Link> includes, or curious about <Link href="/types/commercial" className="text-amber-600 hover:text-amber-700 font-semibold underline">commercial trailer insurance</Link>, read on. We're here to answer your questions and help you choose the right insurance for your needs.
            </p>
          </div>

          <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg mb-12">
            <h3 className="font-semibold text-slate-900 mb-2">Exploring More About Trailer Insurance?</h3>
            <p className="text-slate-700 mb-4">
              For a comprehensive overview of coverage options, check out our <Link href="/coverage" className="text-amber-600 hover:text-amber-700 font-semibold underline">complete coverage guide</Link>. We also have detailed pages for each coverage type, including <Link href="/types/comprehensive" className="text-amber-600 hover:text-amber-700 font-semibold underline">comprehensive cover</Link>, <Link href="/types/agreed-value" className="text-amber-600 hover:text-amber-700 font-semibold underline">agreed value</Link>, and <Link href="/types/towing-storage" className="text-amber-600 hover:text-amber-700 font-semibold underline">towing and storage coverage</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.slug} className="border border-slate-200 rounded-lg hover:border-amber-300 transition-colors">
                <button
                  onClick={() => toggleExpanded(faq.slug)}
                  className="w-full px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-left text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                      expandedId === faq.slug ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedId === faq.slug && (
                  <div className="px-6 sm:px-8 py-6 border-t border-slate-200 bg-slate-50">
                    <p className="text-slate-700 text-base leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 p-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Still Have Questions?</h2>
            <p className="text-slate-700 mb-6 text-center">Our insurance brokers are ready to answer any questions about trailer insurance and help you find the perfect policy for your situation.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Link href="/coverage" className="p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-400 transition-colors text-center">
                <h3 className="font-semibold text-slate-900 mb-2">View Coverage Options</h3>
                <p className="text-sm text-slate-700 mb-3">Learn about all available coverage types and what each covers.</p>
                <span className="text-amber-600 font-semibold">Explore coverage →</span>
              </Link>

              <Link href="/compare" className="p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-400 transition-colors text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Compare Policies</h3>
                <p className="text-sm text-slate-700 mb-3">Get quotes from multiple insurers and compare coverage options.</p>
                <span className="text-amber-600 font-semibold">Compare quotes →</span>
              </Link>

              <Link href="/contact" className="p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-400 transition-colors text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Contact a Broker</h3>
                <p className="text-sm text-slate-700 mb-3">Speak directly with an ICNZ registered broker about your needs.</p>
                <span className="text-amber-600 font-semibold">Get in touch →</span>
              </Link>
            </div>

            <div className="text-center">
              <a
                href="/#quote-form"
                className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all"
              >
                Get Your Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Learn More About Trailer Insurance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coverage Types */}
            <div className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Coverage Types</h3>
              <p className="text-slate-700 mb-6">Understand the different coverage options available and which one is right for your trailer.</p>
              <div className="space-y-3">
                <Link href="/types/comprehensive" className="flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                  <span className="mr-2">→</span> Comprehensive Cover
                </Link>
                <Link href="/types/third-party-liability" className="flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                  <span className="mr-2">→</span> Third-Party Liability
                </Link>
                <Link href="/types/agreed-value" className="flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                  <span className="mr-2">→</span> Agreed Value Cover
                </Link>
                <Link href="/types/contents-cover" className="flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                  <span className="mr-2">→</span> Contents Cover
                </Link>
                <Link href="/types/towing-storage" className="flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                  <span className="mr-2">→</span> Towing & Storage
                </Link>
                <Link href="/types/commercial" className="flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                  <span className="mr-2">→</span> Commercial Insurance
                </Link>
              </div>
            </div>

            {/* Insurance Types */}
            <div className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Insurance Types</h3>
              <p className="text-slate-700 mb-6">Explore insurance options tailored to your specific trailer type and usage needs.</p>
              <div className="space-y-3">
                <Link href="/insurance/caravan-insurance-nz" className="flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                  <span className="mr-2">→</span> Caravan Insurance
                </Link>
                <Link href="/insurance/boat-trailer-insurance-nz" className="flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                  <span className="mr-2">→</span> Boat Trailer Insurance
                </Link>
                <Link href="/compare" className="flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                  <span className="mr-2">→</span> Compare Policies
                </Link>
                <Link href="/coverage" className="flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                  <span className="mr-2">→</span> Coverage Guide
                </Link>
              </div>
            </div>

            {/* Coverage Decision Help */}
            <div className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Choosing Coverage</h3>
              <p className="text-slate-700 mb-6">Not sure which coverage level is right for you? We'll help you understand the decision.</p>
              <div className="space-y-3">
                <p className="text-slate-700 text-sm">
                  Our <Link href="/coverage" className="text-amber-600 hover:text-amber-700 font-semibold underline">comprehensive coverage guide</Link> includes sections on:
                </p>
                <ul className="text-slate-700 text-sm space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>How to choose the right coverage level</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>What affects your coverage needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>NZ-specific coverage considerations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Common coverage mistakes to avoid</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Get a Quote */}
            <div className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to Get Insured?</h3>
              <p className="text-slate-700 mb-6">Get a free quote from multiple insurers in just a few minutes.</p>
              <div className="space-y-3">
                <p className="text-slate-700 text-sm">
                  Our quote tool is free and easy to use. You'll receive quotes from ICNZ registered insurers without any obligation.
                </p>
                <a
                  href="/#quote-form"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all text-center w-full"
                >
                  Get Free Quotes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Protect Your Trailer?"
        description="Get quotes from NZ's top insurance providers in just 2 minutes."
        buttonText="Get a Free Quote"
        buttonLink="/#quote-form"
      />
    </>
  );
}
