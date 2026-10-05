import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, BookOpen, CheckCircle2, AlertCircle } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { siteConfig } from '@/data/siteConfig';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'VixeoTV — Article Not Found' };
  }

  return {
    title: post.metaTitle || `VixeoTV — ${post.title}`,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `${siteConfig.domain}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || `VixeoTV — ${post.title}`,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `${siteConfig.domain}/blog/${post.slug}`,
      images: [
        {
          url: `${siteConfig.domain}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: [`${siteConfig.domain}/og-image.jpg`],
    },
  };
}

// Inline Markdown Parser Helper
function parseInlineMarkdown(text) {
  if (!text) return null;
  const parts = [];
  let remaining = text;
  let key = 0;

  // Regex matching [link text](url), **bold text**, `code`
  const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`)/;

  while (remaining) {
    const match = remaining.match(tokenRegex);
    if (!match) {
      parts.push(remaining);
      break;
    }

    const index = match.index;
    if (index > 0) {
      parts.push(remaining.substring(0, index));
    }

    const fullMatch = match[0];
    if (fullMatch.startsWith('[') && match[2] && match[3]) {
      const linkText = match[2];
      const linkUrl = match[3];
      const isInternal = linkUrl.startsWith('/');
      if (isInternal) {
        parts.push(
          <Link
            key={key++}
            href={linkUrl}
            className="text-brand-primary font-semibold hover:underline underline-offset-4 decoration-brand-primary/60"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={key++}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary font-semibold hover:underline underline-offset-4 decoration-brand-primary/60"
          >
            {linkText}
          </a>
        );
      }
    } else if (fullMatch.startsWith('**') && match[4]) {
      parts.push(
        <strong key={key++} className="font-bold text-white">
          {match[4]}
        </strong>
      );
    } else if (fullMatch.startsWith('`') && match[5]) {
      parts.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 rounded bg-white/10 text-brand-primary text-xs font-mono font-bold"
        >
          {match[5]}
        </code>
      );
    }

    remaining = remaining.substring(index + fullMatch.length);
  }

  return parts;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  // Find related articles
  const relatedPosts = blogPosts
    .filter((p) => post.relatedSlugs?.includes(p.slug) || (p.slug !== post.slug && p.category === post.category))
    .slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: siteConfig.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}/logo.svg`,
      },
    },
  };

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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${siteConfig.domain}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge={post.category}
        title={post.title}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-brand-text-muted mt-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand-primary" />
            <span>Published {post.date}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-primary" />
            <span>{post.readTime}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-brand-primary" />
            <span>{post.author}</span>
          </span>
        </div>
      </PageHeader>

      <article className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          
          {/* Article Banner Visual */}
          <div className={`h-48 sm:h-64 rounded-3xl bg-gradient-to-r ${post.coverGradient} mb-12 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl`}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-bg/90 px-3.5 py-1.5 rounded-full border border-brand-primary/20">
                {post.category} Technical Manual
              </span>
              <span className="text-xs font-mono text-white/80 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                Verified 2026 Edition
              </span>
            </div>

            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-black text-white font-heading line-clamp-2">
                {post.title}
              </h2>
            </div>
          </div>

          {/* Quick Table of Contents / Outline Callout */}
          <div className="p-6 rounded-2xl bg-brand-bg-secondary border border-white/10 mb-10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-1">
                Comprehensive Technical Guide
              </span>
              <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="rounded-3xl bg-brand-bg-secondary p-6 sm:p-12 border border-white/10 shadow-xl max-w-none">
            <div className="text-sm sm:text-base text-brand-text-secondary leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => {
                const text = paragraph.trim();
                if (!text) return null;

                // H2 Heading
                if (text.startsWith('## ')) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl sm:text-3xl font-black font-heading text-white pt-8 pb-3 border-b border-white/10 tracking-tight leading-snug"
                    >
                      {text.replace('## ', '')}
                    </h2>
                  );
                }

                // H3 Heading
                if (text.startsWith('### ')) {
                  return (
                    <h3
                      key={index}
                      className="text-lg sm:text-xl font-bold font-heading text-brand-primary pt-6 pb-2 tracking-tight"
                    >
                      {text.replace('### ', '')}
                    </h3>
                  );
                }

                // H4 Heading
                if (text.startsWith('#### ')) {
                  return (
                    <h4
                      key={index}
                      className="text-base font-bold font-heading text-white pt-4 pb-1"
                    >
                      {text.replace('#### ', '')}
                    </h4>
                  );
                }

                // Horizontal Rule
                if (text.startsWith('---')) {
                  return <hr key={index} className="border-white/10 my-8" />;
                }

                // Blockquote / Tip Callout
                if (text.startsWith('> ')) {
                  const quoteContent = text.replace(/^>\s*/, '');
                  return (
                    <div
                      key={index}
                      className="p-4 sm:p-5 my-6 rounded-2xl bg-brand-surface border-l-4 border-brand-primary text-white text-xs sm:text-sm leading-relaxed"
                    >
                      {parseInlineMarkdown(quoteContent)}
                    </div>
                  );
                }

                // Table
                if (text.startsWith('|') && text.includes('\n|')) {
                  const rows = text.split('\n').filter((r) => r.trim().startsWith('|'));
                  if (rows.length >= 2) {
                    const headers = rows[0].split('|').map((c) => c.trim()).filter(Boolean);
                    const bodyRows = rows.slice(2); // Skip separator row
                    return (
                      <div key={index} className="overflow-x-auto my-6 rounded-2xl border border-white/10 bg-brand-surface/50">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-white/5 border-b border-white/10 text-white font-heading font-bold">
                            <tr>
                              {headers.map((h, hi) => (
                                <th key={hi} className="p-3.5 sm:p-4 whitespace-nowrap">
                                  {parseInlineMarkdown(h)}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {bodyRows.map((br, bri) => {
                              const cells = br.split('|').map((c) => c.trim()).filter(Boolean);
                              return (
                                <tr key={bri} className="hover:bg-white/[0.02]">
                                  {cells.map((cell, ci) => (
                                    <td key={ci} className="p-3.5 sm:p-4 text-brand-text-secondary">
                                      {parseInlineMarkdown(cell)}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                }

                // Bullet List
                if (text.startsWith('- ')) {
                  const items = text.split('\n').filter((l) => l.trim().startsWith('- '));
                  return (
                    <ul key={index} className="space-y-2.5 pl-5 list-disc marker:text-brand-primary my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-brand-text-secondary leading-relaxed">
                          {parseInlineMarkdown(item.replace(/^[-\*]\s+/, ''))}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Numbered List
                if (text.match(/^[0-9]\./)) {
                  const items = text.split('\n').filter((l) => l.trim().match(/^[0-9]\./));
                  return (
                    <ol key={index} className="space-y-2.5 pl-5 list-decimal marker:text-brand-primary font-medium my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-brand-text-secondary leading-relaxed">
                          {parseInlineMarkdown(item.replace(/^[0-9]+\.\s*/, ''))}
                        </li>
                      ))}
                    </ol>
                  );
                }

                // Regular Paragraph
                return (
                  <p key={index} className="leading-relaxed">
                    {parseInlineMarkdown(text)}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-bold font-heading text-white mb-6">
                Related Technical Streaming Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="p-6 rounded-2xl bg-brand-bg-secondary border border-white/10 hover:border-brand-primary/40 transition-all hover:-translate-y-1 group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">
                      {related.category}
                    </span>
                    <h4 className="text-base font-bold font-heading text-white mt-1 mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-xs text-brand-text-secondary line-clamp-2 mb-4">
                      {related.excerpt}
                    </p>
                    <span className="text-xs font-bold text-brand-primary flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Blog Articles</span>
            </Link>
          </div>
        </div>
      </article>

      <CTASection
        title="Ready to Put These Guides into Practice?"
        subtitle={
          <>
            <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Subscribe to VixeoTV today</Link>, get instant credentials, and enjoy 4K Ultra HD <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live TV and sports</Link> across all your <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">devices</Link>.
          </>
        }
      />
    </>
  );
}
