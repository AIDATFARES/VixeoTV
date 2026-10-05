import PageHeader from '@/components/PageHeader';
import DevicesSection from '@/components/DevicesSection';
import SetupGuideCards from '@/components/SetupGuideCards';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'VixeoTV — Supported Devices | Firestick, Smart TVs, iOS & PC',
  description: 'Stream VixeoTV IPTV on Amazon Firestick, Android TV, Apple TV, Samsung & LG Smart TVs, PC, and MAG boxes. Easy 5-minute setup on any screen in your home.',
  alternates: {
    canonical: `${siteConfig.domain}/devices`,
  },
};

export default function DevicesPage() {
  const breadcrumbs = [{ label: 'Devices', href: '/devices' }];

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
        name: 'Devices',
        item: `${siteConfig.domain}/devices`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="Universal IPTV Multi-Device Support"
        title="Watch VixeoTV IPTV on Every Screen in"
        titleAccent="Your Home"
        description="Whether you are watching the championship match on your living room 4K Smart TV or streaming a series on your mobile phone, VixeoTV IPTV provides native, high-performance compatibility with all modern streaming devices."
        breadcrumbs={breadcrumbs}
      />

      <DevicesSection hideHeader={true} />

      {/* Direct Setup Guides Section */}
      <section className="py-20 bg-brand-bg border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary font-heading">
              Verified IPTV Installation Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white mt-1 mb-3">
              Ready to Install VixeoTV IPTV on Your Device?
            </h2>
            <p className="text-sm text-brand-text-secondary">
              Follow our concise, verified <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV installation tutorials</Link> with tested media player recommendations for each platform, or view our <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">subscription plans</Link> to get your activation credentials:
            </p>
          </div>

          <SetupGuideCards />
        </div>
      </section>

      <CTASection
        title="Start Streaming With VixeoTV IPTV Today"
        subtitle={
          <>
            <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Subscribe in seconds</Link>, receive your credentials immediately, and follow our easy visual <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">setup guides</Link> to watch on your favorite screen.
          </>
        }
      />
    </>
  );
}
