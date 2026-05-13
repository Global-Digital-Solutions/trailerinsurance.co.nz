'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

export default function NewsletterForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const fd = new FormData(e.currentTarget);
    const cfToken = fd.get('cf-turnstile-response');
    if (!cfToken) {
      setError('Please wait a moment for the security check to finish, then try again.');
      return;
    }
    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });
    setSubmitting(true);
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: 'Newsletter Signup — TrailerInsurance.co.nz',
          cfTurnstileToken: cfToken,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      router.push('/thank-you/');
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" name="name" placeholder="Your name" required
          className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
        <input type="email" name="email" placeholder="Your email" required
          className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
        <button type="submit" disabled={submitting}
          className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 disabled:opacity-60 transition-all whitespace-nowrap">
          {submitting ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="afterInteractive" />
      <div className="flex justify-center mt-3">
        <div className="cf-turnstile" data-sitekey="0x4AAAAAADMnq1OKyxf3JvVv" data-size="invisible" />
      </div>
      {error && <p className="text-sm bg-red-50 text-red-700 border border-red-200 rounded-lg px-3 py-2 mt-3">{error}</p>}
    </form>
  );
}
