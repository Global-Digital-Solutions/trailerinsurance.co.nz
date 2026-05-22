import Link from 'next/link';

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'default' | 'dark';
}

export default function CTABanner({
  title = 'Ready to Protect Your Trailer?',
  description = 'Get personalised trailer insurance quotes from NZ\'s top providers.',
  buttonText = 'Get a Quote',
  buttonLink = '/#quote-form',
  variant = 'default',
}: CTABannerProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`w-full py-16 px-4 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-r from-amber-500 to-orange-600'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
        <p className={`text-lg mb-8 ${isDark ? 'text-slate-300' : 'text-amber-50'}`}>{description}</p>
        <Link href={buttonLink} className={`inline-block px-8 py-3 font-semibold rounded-lg transition-colors duration-300 ${isDark ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-white text-amber-600 hover:bg-amber-50'}`}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
