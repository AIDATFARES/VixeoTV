import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'VixeoTV — Contact Customer Care | 24/7 Live WhatsApp Helpdesk',
  description: 'Contact VixeoTV customer support directly via WhatsApp or email. Fast 24/7 technical setup help, account activation, and channel inquiries.',
  alternates: {
    canonical: `${siteConfig.domain}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbs = [{ label: 'Contact', href: '/contact' }];

  const contactPointSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact VixeoTV Support',
    description: 'Get in touch with VixeoTV customer care via WhatsApp or email for subscription help, player setup, and account questions.',
    url: `${siteConfig.domain}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        email: siteConfig.email,
        availableLanguage: ['English', 'Spanish'],
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteConfig.domain}/contact` },
    ],
  };

  return (
    <>
      <JsonLd data={contactPointSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="24/7 Dedicated IPTV Helpdesk"
        title="We're Here to Help You"
        titleAccent="Stream Smarter With VixeoTV"
        description="Have a question about compatible IPTV players, playlist formats, or payment confirmation? Reach our support specialists directly on WhatsApp or submit your inquiry below."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <ContactForm />
        </div>
      </section>

      <CTASection
        title="Ready to Start Streaming With VixeoTV IPTV?"
        subtitle={
          <>
            Browse our flexible <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">subscription plans</Link> and experience buffer-free 4K <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live TV and sports</Link> today.
          </>
        }
      />
    </>
  );
}
