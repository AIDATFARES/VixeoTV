import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blogPosts';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'VixeoTV — IPTV Blog & Streaming Guides | Tutorials & Reviews',
  description: 'Expert IPTV tutorials, device setup walkthroughs, app comparisons, and buffering fixes. Learn how to optimize 4K streaming on Firestick, Smart TVs, and more.',
  alternates: {
    canonical: `${siteConfig.domain}/blog`,
  },
};

export default function BlogIndexPage() {
  const breadcrumbs = [{ label: 'Blog', href: '/blog' }];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.domain,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteConfig.domain}/blog`,
      },
    ],
  };

  const blogCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'VixeoTV Streaming Blog & Setup Guides',
    description: 'Expert IPTV tutorials, device setups, player configurations, and troubleshooting guides.',
    url: `${siteConfig.domain}/blog`,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogCollectionSchema} />

      <PageHeader
        badge="Guides &amp; Technical Insights"
        title="Streaming Mastery, Tutorials &amp; Player"
        titleAccent="Reviews"
        description="Learn how to unlock the full potential of your streaming setup. Discover expert tutorials for Firestick, best IPTV players, buffering fixes, and 4K sports configuration."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative rounded-3xl bg-brand-bg-secondary border border-white/10 hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1.5 shadow-glow-card flex flex-col justify-between overflow-hidden"
              >
                {/* Header Gradient Banner */}
                <div className={`h-40 bg-gradient-to-br ${post.coverGradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-bg/80 text-white backdrop-blur-md">
                      {post.category}
                    </span>
                    <span className="text-[11px] font-medium text-white/80 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[11px] font-mono text-white/70">
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-brand-text-muted">{post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary group-hover:underline"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Put These Guides into Action"
        subtitle={
          <>
            Experience smooth, buffer-free IPTV with VixeoTV. <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Subscribe today</Link>, explore our <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">device setup tutorials</Link>, and start streaming.
          </>
        }
      />
    </>
  );
}
