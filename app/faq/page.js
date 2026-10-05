import PageHeader from '@/components/PageHeader';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { MessageCircle, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/faq';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'VixeoTV — FAQ & Helpdesk | Common IPTV Questions Answered',
  description: 'Find clear answers about VixeoTV IPTV subscriptions, compatible streaming apps, speed requirements, 4K channels, Anti-Freeze technology, and refund terms.',
  alternates: {
    canonical: `${siteConfig.domain}/faq`,
  },
};

export default function FAQPage() {
  const breadcrumbs = [{ label: 'FAQ', href: '/faq' }];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      },
    })),
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
        name: 'FAQ',
        item: `${siteConfig.domain}/faq`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="VixeoTV IPTV Knowledge Base"
        title="Frequently Asked Questions About"
        titleAccent="VixeoTV IPTV"
        description="Browse clear, categorized answers to common questions about VixeoTV IPTV subscriptions, compatible devices, 4K streaming quality, Anti-Freeze technology, and setup procedures."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 md:py-24 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <FAQAccordion />

          {/* Still Need Answers Box */}
          <div className="mt-16 rounded-2xl bg-brand-bg-secondary border border-white/10 p-6 sm:p-8 text-center max-w-2xl mx-auto">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              Have a Question About VixeoTV IPTV?
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-secondary mb-5">
              Our customer care and technical <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">support specialists</Link> are available 24/7 on WhatsApp to answer your questions and assist with immediate <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV setup</Link> or <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">subscription orders</Link>.
            </p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-emerald-500 text-brand-bg hover:bg-emerald-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience VixeoTV IPTV?"
        subtitle={
          <>
            <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Subscribe in seconds</Link>, receive your credentials instantly, and start streaming buffer-free 4K <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">television and sports</Link> across all your <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">devices</Link>.
          </>
        }
      />
    </>
  );
}
