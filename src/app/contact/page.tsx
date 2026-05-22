import { Phone, Mail, Clock, Shield, CheckCircle, Zap, Lock, Users } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Contact TrailerInsurance.co.nz | Get a Quote',
  description: 'Contact our NZ trailer insurance brokers. Phone hello@cover4you.co.nz, email hello@cover4you.co.nz, or fill out our quick quote form for a free comparison.',
};

const usps = [
  { icon: Shield, title: 'Licensed Insurance Brokers', desc: 'Licensed professionals you can trust' },
  { icon: Zap, title: '24-Hour Response', desc: 'Quotes back to you within one business day' },
  { icon: CheckCircle, title: 'No Broker Fees', desc: 'Completely free — no hidden charges' },
  { icon: Lock, title: '256-bit SSL Secure', desc: 'Your data is safe and encrypted' },
  { icon: Users, title: 'NZ Owned & Operated', desc: '15+ years of local industry experience' },
  { icon: Mail, title: 'Impartial Advice', desc: 'We compare providers on your behalf' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero + Form Above Fold */}
      <section
        className="relative min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/75" />

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left: Heading + USPs + Contact */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-semibold">No obligation — no broker fees</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Get Your Free<br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Trailer Insurance Quote
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Fill in the form and one of our ICNZ-registered brokers will compare the market and get back to you within 24 hours — at no cost to you.
              </p>

              {/* Contact strip */}
              <div className="flex flex-wrap gap-4 mb-8">
                hello@cover4you.co.nz
                <a href="mailto:hello@cover4you.co.nz" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-2.5 transition-colors">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold text-sm">hello@cover4you.co.nz</div>
                    <div className="text-slate-400 text-xs">Response within 24 hours</div>
                  </div>
                </a>
              </div>

              {/* USP grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {usps.map((usp) => {
                  const Icon = usp.icon;
                  return (
                    <div key={usp.title} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{usp.title}</div>
                        <div className="text-slate-400 text-xs mt-0.5">{usp.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Quote Form */}
            <QuoteForm mode="compact" />

          </div>
        </div>
      </section>

      {/* Contact Details Below Fold */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
              hello@cover4you.co.nz
              <p className="text-sm text-slate-600">Mon–Fri, 8am–6pm NZST</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
              <a href="mailto:hello@cover4you.co.nz" className="text-amber-600 hover:text-amber-700 font-bold block mb-1 text-sm">hello@cover4you.co.nz</a>
              <p className="text-sm text-slate-600">We reply within 24 hours</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
              <p className="text-slate-900 font-bold">Mon–Fri</p>
              <p className="text-sm text-slate-600">8:00 AM – 6:00 PM NZST</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
