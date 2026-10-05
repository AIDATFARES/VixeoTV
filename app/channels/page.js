import PageHeader from '@/components/PageHeader';
import ChannelsSection from '@/components/ChannelsSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { Trophy, Film, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'VixeoTV — Live Channels & 4K VOD Lineup | Global Sports & TV',
  description: 'Browse the complete VixeoTV IPTV channel lineup. Watch live global sports, premier US, UK, European & Arabic networks, and thousands of 4K VOD movies with EPG.',
  alternates: {
    canonical: `${siteConfig.domain}/channels`,
  },
};

export default function ChannelsPage() {
  const breadcrumbs = [{ label: 'Channels', href: '/channels' }];

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
        name: 'Channels',
        item: `${siteConfig.domain}/channels`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="Global IPTV Channels &amp; On-Demand Library"
        title="Explore the Complete VixeoTV IPTV Channel Lineup &amp;"
        titleAccent="4K VOD Library"
        description="Stream major international sports events, news, blockbuster movies, and regional television networks in crystal-clear Full HD and 4K quality with dynamic EPG guides on VixeoTV IPTV."
        breadcrumbs={breadcrumbs}
      />

      <ChannelsSection hideHeader={true} />

      {/* Content Quality Guarantees */}
      <section className="py-16 bg-brand-bg-secondary border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-brand-bg border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white font-heading">60 FPS Live Sports IPTV Streams</h4>
                <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                  Enjoy smooth action and high refresh rates on major football, motorsport, tennis, and basketball feeds without jitter on any <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription plan</Link>.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-bg border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white font-heading">Multi-Language Audio &amp; Subtitles</h4>
                <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                  Easily switch between original commentary and multi-language audio or subtitle tracks on supported VixeoTV channels and <Link href="/features" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">VOD streaming titles</Link>.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-bg border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white font-heading">Automatic IPTV EPG Synchronization</h4>
                <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                  Interactive 7-day electronic program guide schedules update automatically every 24 hours via Xtream Codes API and M3U links. Learn how to configure your player in our <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">setup guides</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Full Access to the VixeoTV IPTV Lineup"
        subtitle={
          <>
            Select your preferred <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">subscription duration</Link> and start enjoying high-definition live channels and 4K cinema across all your <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">connected devices</Link>.
          </>
        }
      />
    </>
  );
}
