'use client';

import { useRef, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Phone, FileText, DollarSign, Lock, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import TurnstileWidget, { type TurnstileHandle } from './TurnstileWidget';

interface QuoteFormProps {
  mode?: 'compact' | 'full';
}

const trailerTypes = [
  { value: 'caravan', label: 'Caravan' },
  { value: 'boat-trailer', label: 'Boat Trailer' },
  { value: 'horse-float', label: 'Horse Float' },
  { value: 'camper-trailer', label: 'Camper Trailer' },
  { value: 'box-trailer', label: 'Box Trailer' },
  { value: 'flatbed-trailer', label: 'Flatbed / Utility Trailer' },
  { value: 'enclosed-trailer', label: 'Enclosed Trailer' },
  { value: 'car-trailer', label: 'Car Carrier Trailer' },
  { value: 'commercial-trailer', label: 'Commercial Trailer' },
  { value: 'other', label: 'Other' },
];

const trailerValues = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
];

const securityBadges = [
  { icon: Lock, label: '256-bit SSL Encrypted' },
  { icon: ShieldCheck, label: 'No Spam Guarantee' },
  { icon: Clock, label: 'Response Within 24hrs' },
];

export default function QuoteForm({ mode = 'full' }: QuoteFormProps) {
  const router = useRouter();
  const turnstileRef = useRef<TurnstileHandle>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });
    setIsSubmitting(true);
    try {
      const cfToken = await turnstileRef.current?.execute();
      if (!cfToken) {
        setIsSubmitting(false);
        setError('Security check could not complete. Please try again.');
        return;
      }

      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, cfTurnstileToken: cfToken }),
      });
      if (!res.ok) throw new Error('Submission failed');
      router.push('/thank-you/');
    } catch {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  }

  if (mode === 'compact') {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-5">
          <h3 className="text-white font-bold text-xl">Get Your Free Quote</h3>
          <p className="text-amber-100 text-sm mt-1">Compare top NZ trailer insurers in 2 minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input type="hidden" name="_next" value="https://trailerinsurance.co.nz/thank-you/" />
          <input type="hidden" name="_subject" value="New Quote Request - TrailerInsurance.co.nz" />
          <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_honey" style={{ display: 'none' }} />

          <div>
            <label htmlFor="fullName-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input id="fullName-compact" type="text" name="fullName" required className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm" placeholder="John Doe" />
            </div>
          </div>

          <div>
            <label htmlFor="email-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input id="email-compact" type="email" name="email" required className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm" placeholder="john@example.com" />
            </div>
          </div>

          <div>
            <label htmlFor="phone-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input id="phone-compact" type="tel" name="phone" required className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm" placeholder="09 XXX XXXX" />
            </div>
          </div>

          <div>
            <label htmlFor="trailerType-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Trailer Type</label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select id="trailerType-compact" name="trailerType" required className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm appearance-none bg-white">
                <option value="">Select trailer type...</option>
                {trailerTypes.map((type) => (<option key={type.value} value={type.value}>{type.label}</option>))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="trailerValue-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Approximate Value</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select id="trailerValue-compact" name="trailerValue" required className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm appearance-none bg-white">
                <option value="">Select value range...</option>
                {trailerValues.map((val) => (<option key={val.value} value={val.value}>{val.label}</option>))}
              </select>
            </div>
          </div>

          <TurnstileWidget ref={turnstileRef} />
          {error && <p className="text-sm bg-red-50 text-red-700 border border-red-200 rounded-lg px-3 py-2">{error}</p>}

          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
            {isSubmitting ? 'Submitting...' : 'Get My Free Quote →'}
          </button>
        </form>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {securityBadges.map((badge) => {
              const BadgeIcon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center gap-1.5">
                  <BadgeIcon className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-xs font-medium text-slate-600">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="quote-form" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-20">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 sm:px-10 py-8 sm:py-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Get Your Free Quote</h2>
            <p className="text-amber-100 text-lg">Fill out the form below and a licensed broker will respond within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10">
            <input type="hidden" name="_next" value="https://trailerinsurance.co.nz/thank-you/" />
            <input type="hidden" name="_subject" value="New Quote Request - TrailerInsurance.co.nz" />
            <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_honey" style={{ display: 'none' }} />

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName-full" className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input id="fullName-full" type="text" name="fullName" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base" placeholder="John Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email-full" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input id="email-full" type="email" name="email" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="phone-full" className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input id="phone-full" type="tel" name="phone" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base" placeholder="09 XXX XXXX" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="trailerType-full" className="block text-sm font-semibold text-slate-900 mb-2">Type of Trailer</label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select id="trailerType-full" name="trailerType" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base appearance-none bg-white">
                      <option value="">Select trailer type...</option>
                      {trailerTypes.map((type) => (<option key={type.value} value={type.value}>{type.label}</option>))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="trailerValue-full" className="block text-sm font-semibold text-slate-900 mb-2">Approximate Trailer Value</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select id="trailerValue-full" name="trailerValue" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base appearance-none bg-white">
                      <option value="">Select value range...</option>
                      {trailerValues.map((val) => (<option key={val.value} value={val.value}>{val.label}</option>))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="details-full" className="block text-sm font-semibold text-slate-900 mb-2">Additional Details (Optional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                  <textarea id="details-full" name="additionalDetails" rows={4} className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base resize-none" placeholder="Tell us about your trailer — make, model, year, any specific coverage needs..." />
                </div>
              </div>

              <TurnstileWidget ref={turnstileRef} />
              {error && <p className="text-sm bg-red-50 text-red-700 border border-red-200 rounded-lg px-3 py-2">{error}</p>}

              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all duration-300 text-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5">
                {isSubmitting ? 'Submitting...' : 'Get My Free Quote →'}
              </button>
            </div>
          </form>

          <div className="bg-slate-50 px-6 sm:px-10 py-6 border-t border-slate-200">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {securityBadges.map((badge) => {
                const BadgeIcon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-center gap-2">
                    <BadgeIcon className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-medium text-slate-600">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
