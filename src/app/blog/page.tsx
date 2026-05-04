import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Blog | Trailer Insurance Tips & Guides | TrailerInsurance.co.nz',
  description: 'Read our blog for trailer insurance tips, guides, and industry insights for NZ trailer owners.',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Trailer Insurance Blog</h1>
          <p className="text-xl text-slate-200">Tips, guides, and insights for NZ trailer owners and enthusiasts.</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-amber-300 transition-all duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden bg-slate-200 h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Metadata */}
                  <div className="flex items-center justify-between mb-3 text-xs text-slate-600">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-700 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                  {/* Author */}
                  <div className="text-xs text-slate-600 border-t border-slate-100 pt-4">
                    By {post.author}
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="px-6 pb-6">
                  <div className="text-amber-600 font-semibold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                    Read more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-slate-700 mb-8">Get notified when we publish new trailer insurance tips and guides.</p>
          <form
            action="https://shiny-bush-41cd.darinbutler.workers.dev"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input type="hidden" name="_subject" value="Newsletter Signup - TrailerInsurance.co.nz" />
            <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="name" placeholder="Your name" required className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            <input type="email" name="email" placeholder="Your email" required className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Need Trailer Insurance Now?"
        description="Don't wait for the next article. Get quotes from NZ's top providers today."
        buttonText="Get a Free Quote"
        buttonLink="/#quote-form"
      />
    </>
  );
}
