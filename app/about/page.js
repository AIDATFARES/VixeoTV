import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, Zap, Globe, Tv, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'VixeoTV — About Us | High-Stability IPTV Streaming Mission',
  description: 'Learn about VixeoTV: Our engineering commitment to high-stability IPTV streaming, honest pricing, universal multi-device compatibility, and 24/7 human care.',
  alternates: {
    canonical: `${siteConfig.domain}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: 'About', href: '/about' }];

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
        name: 'About',
        item: `${siteConfig.domain}/about`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="Our Mission &amp; Streaming Standards"
        title="Engineering a Superior IPTV Experience for"
        titleAccent="Modern Homes"
        description="At VixeoTV, we believe cord-cutting through modern IPTV should be simple, reliable, and accessible. Discover our network engineering philosophy, stream stability architecture, and dedicated customer care."
        breadcrumbs={breadcrumbs}
      />

      {/* Main Philosophy Section */}
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-16">
          {/* Section 1: Who We Are */}
          <div className="rounded-3xl bg-brand-bg-secondary p-8 sm:p-12 border border-white/10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mb-4">
              What is VixeoTV IPTV?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-brand-text-secondary leading-relaxed">
              <p>
                VixeoTV is an independent premium IPTV provider dedicated to delivering seamless <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live television broadcasts</Link>, major international sporting tournaments, and an expansive 4K on-demand entertainment library directly over the internet.
              </p>
              <p>
                Traditional cable television and satellite subscriptions are burdened with inflated monthly bills, rigid contracts, and proprietary set-top box rental fees. VixeoTV IPTV removes those barriers by delivering ultra-fast, high-bitrate streaming feeds straight to the <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">devices you already own</Link>—from Amazon Firestick and Apple TV to Samsung/LG Smart TVs, Android boxes, and mobile screens. Explore our transparent <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription plans</Link> to start watching today.
              </p>
            </div>
          </div>

          {/* Section 2: Core Pillars Grid */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mb-8 text-center">
              Our Core IPTV Service Pillars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-brand-bg-secondary p-6 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-2">
                  IPTV Stream Integrity
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  We invest continuously in edge CDN bandwidth and redundant source ingestion to minimize buffering and maintain smooth 60FPS sports playback with our <Link href="/features" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Anti-Freeze technology</Link>.
                </p>
              </div>

              <div className="rounded-2xl bg-brand-bg-secondary p-6 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-2">
                  Transparent IPTV Pricing
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  No hidden installation charges, no sudden price escalations, and no automatic subscriptions without your explicit consent. Browse our <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">no-contract plans</Link>.
                </p>
              </div>

              <div className="rounded-2xl bg-brand-bg-secondary p-6 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-2">
                  Dedicated WhatsApp Support
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  No impersonal bot mazes. Reach knowledgeable technical agents directly via <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">WhatsApp live support</Link> whenever you need setup guidance or troubleshooting.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Universal Device Support */}
          <div className="rounded-3xl bg-brand-bg-secondary p-8 sm:p-12 border border-white/10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mb-4">
              Universal IPTV Ecosystem Compatibility
            </h2>
            <p className="text-sm sm:text-base text-brand-text-secondary leading-relaxed mb-6">
              A premium IPTV service should never restrict you to a single proprietary device. We engineer our M3U playlists and Xtream Codes API endpoints to adhere strictly to open media streaming standards, ensuring flawless playback on industry-leading players including TiviMate, IPTV Smarters Pro, IBO Player, UHF, and VLC. Check our step-by-step <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV setup tutorials</Link> for detailed walkthroughs.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/devices"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-brand-primary text-brand-bg hover:shadow-glow-primary transition-all"
              >
                <span>Explore Compatible Devices</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/setup"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 text-white transition-all"
              >
                <span>View Setup Center</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the VixeoTV IPTV Difference"
        subtitle={
          <>
            Join thousands of satisfied viewers enjoying buffer-free <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live television</Link>. Choose your <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">subscription plan</Link> and start streaming in minutes.
          </>
        }
      />
    </>
  );
}
