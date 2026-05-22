import Link from 'next/link';
import { CheckCircle, Clock, MessageSquare, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Thank You for Your Quote Request | TrailerInsurance.co.nz',
  description: 'Your quote request has been received. A broker will respond within 24 hours.',
};

export default function ThankYouPage() {
  return (
    <>
      {/* Success Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Thank You!</h1>
          <p className="text-xl text-slate-700 mb-8">
            Your quote request has been received successfully. We're already working on finding the best insurance options for your trailer.
          </p>

          {/* Confirmation Details */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What Happens Next</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 font-bold flex-shrink-0">
                  1
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-900 mb-1">Confirmation Sent</h3>
                  <p className="text-slate-700">Check your email for a confirmation of your request (usually arrives within minutes).</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 font-bold flex-shrink-0">
                  2
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-900 mb-1">Broker Assessment</h3>
                  <p className="text-slate-700">Our licensed ICNZ-registered brokers review your details and prepare personalised quotes.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 font-bold flex-shrink-0">
                  3
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-900 mb-1">Quotes Delivered</h3>
                  <p className="text-slate-700">Receive quotes from multiple NZ insurance providers within 24 hours (usually much faster).</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 font-bold flex-shrink-0">
                  4
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-900 mb-1">Expert Advice</h3>
                  <p className="text-slate-700">Our brokers explain the quotes, answer your questions, and help you choose the best coverage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">24 Hour Response</h3>
              <p className="text-sm text-slate-700">We guarantee response within 24 hours, usually much faster.</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">No Broker Fees</h3>
              <p className="text-sm text-slate-700">No broker fees. No hidden charges. Compare at no extra cost.</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <HelpCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Expert Support</h3>
              <p className="text-sm text-slate-700">Licensed brokers are on hand to explain and advise.</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-12">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Have Questions in the Meantime?</h3>
            <p className="text-slate-700 mb-6">Get in touch with our team directly:</p>
            <div className="space-y-3">
              <div>
                              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <a href="mailto:hello@cover4you.co.nz" className="text-amber-600 hover:text-amber-700 font-semibold">
                  hello@cover4you.co.nz
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Hours</p>
                <p className="text-slate-700">Monday to Friday, 8am-6pm NZST</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white border border-slate-200 rounded-lg p-8 mb-12 text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Common Questions</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Will I be contacted about other products?</h4>
                <p className="text-slate-700">
                  No. We only use your information to provide trailer insurance quotes. You won't be contacted about other products or services unless you specifically request them.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Is there any obligation to purchase?</h4>
                <p className="text-slate-700">
                  No. Getting quotes is completely obligation-free. Review the options, ask questions, and decide if insurance is right for you.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Are there any hidden fees?</h4>
                <p className="text-slate-700">
                  Absolutely not. Our service is free. Our brokers do not charge fees to provide quotes. You only pay insurance premiums if you choose to purchase a policy.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Can I get quotes from specific providers?</h4>
                <p className="text-slate-700">
                  Our brokers will provide quotes from providers suited to your needs. If you have specific preferences, mention them when they contact you.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg"
            >
              Return to Homepage
            </Link>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Browse More Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="/faqs"
                  className="px-6 py-3 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors font-semibold text-center"
                >
                  FAQs
                </Link>
                <Link
                  href="/coverage"
                  className="px-6 py-3 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors font-semibold text-center"
                >
                  Coverage Guide
                </Link>
                <Link
                  href="/blog"
                  className="px-6 py-3 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors font-semibold text-center"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Message */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Information Is Safe</h2>
          <p className="text-slate-700 mb-6">
            We protect your personal information with 256-bit SSL encryption and strict privacy practices. Learn more about how we protect your data in our{' '}
            <Link href="/privacy" className="text-amber-600 hover:text-amber-700 font-semibold">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-amber-600 font-bold">✓</span>
              <span className="text-slate-700">256-bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-600 font-bold">✓</span>
              <span className="text-slate-700">No Spam Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-600 font-bold">✓</span>
              <span className="text-slate-700">24-Hour Response</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
