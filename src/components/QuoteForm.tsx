'use client';

import { useRef, useState } from 'react';
import { Lock, ShieldCheck, Clock } from 'lucide-react';
import TurnstileWidget, { type TurnstileHandle } from './TurnstileWidget';

interface QuoteFormProps {
  mode?: 'compact' | 'full';
}

const WORKER_URL = '/api/submit-form';

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
  { value: '5k-10k', label: '$5,000 – $10,000' },
  { value: '10k-25k', label: '$10,000 – $25,000' },
  { value: '25k-50k', label: '$25,000 – $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
];

const securityBadges = [
  { icon: Lock, label: '256-bit SSL Encrypted' },
  { icon: ShieldCheck, label: 'No Spam Guarantee' },
  { icon: Clock, label: 'Response Within 24hrs' },
];

export default function QuoteForm({ mode = 'full' }: QuoteFormProps) {
  const turnstileRef = useRef<TurnstileHandle>(null);
  const [state, setState] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trailer_type: '',
    trailer_value: '',
    additional_details: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');
    const cfToken = await turnstileRef.current?.execute();
    if (!cfToken) {
      setState('error');
      return;
    }
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: 'New Quote Request – TrailerInsurance.co.nz',
          ...formData,
          cfTurnstileToken: cfToken,
        }),
      });
      if (!res.ok) throw new Error('Submit failed');
      window.location.href = '/thank-you/';
    } catch {
      setState('error');
    }
  };

  if (mode === 'compact') {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-5">
          <h3 className="text-white font-bold text-xl">Get Your Quote</h3>
          <p className="text-amber-100 text-sm mt-1">Compare top NZ trailer insurers in 2 minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="name-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
            <input id="name-compact" type="text" name="name" required value={formData.name} onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
              placeholder="John Doe" />
          </div>

          <div>
            <label htmlFor="email-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
            <input id="email-compact" type="email" name="email" required value={formData.email} onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
              placeholder="john@example.com" />
          </div>

          <div>
            <label htmlFor="phone-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
            <input id="phone-compact" type="tel" name="phone" required value={formData.phone} onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
              placeholder="09 XXX XXXX" />
          </div>

          <div>
            <label htmlFor="trailerType-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Trailer Type</label>
            <select id="trailerType-compact" name="trailer_type" value={formData.trailer_type} onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm bg-white">
              <option value="">Select trailer type...</option>
              {trailerTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="trailerValue-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Approximate Value</label>
            <select id="trailerValue-compact" name="trailer_value" value={formData.trailer_value} onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm bg-white">
              <option value="">Select value range...</option>
              {trailerValues.map((v) => <option key={v.value} value={v.value}>{v.label}</option>)}
            </select>
          </div>

          {state === 'error' && (
            <p className="text-red-600 text-sm text-center">Something went wrong. Please complete the security check and try again.</p>
          )}

          <TurnstileWidget ref={turnstileRef} />

          <button type="submit" disabled={state === 'submitting'}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5">
            {state === 'submitting' ? 'Sending…' : 'Get My Quote →'}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Get Your Quote</h2>
            <p className="text-amber-100 text-lg">Fill out the form below and a licensed broker will respond within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name-full" className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                <input id="name-full" type="text" name="name" required value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base"
                  placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email-full" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                <input id="email-full" type="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base"
                  placeholder="john@example.com" />
              </div>
            </div>

            <div>
              <label htmlFor="phone-full" className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
              <input id="phone-full" type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base"
                placeholder="09 XXX XXXX" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="trailerType-full" className="block text-sm font-semibold text-slate-900 mb-2">Type of Trailer</label>
                <select id="trailerType-full" name="trailer_type" value={formData.trailer_type} onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base bg-white">
                  <option value="">Select trailer type...</option>
                  {trailerTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="trailerValue-full" className="block text-sm font-semibold text-slate-900 mb-2">Approximate Trailer Value</label>
                <select id="trailerValue-full" name="trailer_value" value={formData.trailer_value} onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base bg-white">
                  <option value="">Select value range...</option>
                  {trailerValues.map((v) => <option key={v.value} value={v.value}>{v.label}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="details-full" className="block text-sm font-semibold text-slate-900 mb-2">Additional Details (Optional)</label>
              <textarea id="details-full" name="additional_details" rows={4} value={formData.additional_details} onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base resize-none"
                placeholder="Tell us about your trailer — make, model, year, any specific coverage needs..." />
            </div>

            {state === 'error' && (
              <p className="text-red-600 text-sm text-center">Something went wrong. Please complete the security check and try again.</p>
            )}

            <TurnstileWidget ref={turnstileRef} />

            <button type="submit" disabled={state === 'submitting'}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all duration-300 text-lg shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5">
              {state === 'submitting' ? 'Sending…' : 'Get My Quote →'}
            </button>
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
