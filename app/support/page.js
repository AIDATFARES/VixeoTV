import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { 
  MessageCircle, Mail, BookOpen, HelpCircle, Zap, ShieldCheck, 
  ArrowRight, PhoneCall, CheckCircle2 
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'VixeoTV — 24/7 Technical Support | Live Assistance & Helpdesk',
  description: 'Get immediate technical support for VixeoTV IPTV. Live 24/7 assistance on WhatsApp for player setup, playlist URLs, and stream troubleshooting.',
  alternates: {
    canonical: `${siteConfig.domain}/support`,
  },
};

export default function SupportPage() {
  const breadcrumbs = [{ label: 'Support', href: '/support' }];

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
        name: 'Support',
        item: `${siteConfig.domain}/support`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="24/7 Dedicated IPTV Helpdesk"
        title="24/7 Dedicated Support for Your"
        titleAccent="VixeoTV IPTV Streaming"
        description="Whether you need assistance configuring your IPTV player, renewing your subscription, or troubleshooting live sports streams, our technical specialists are available 24/7 on WhatsApp."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Main WhatsApp Support Banner */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-950/60 via-brand-bg-secondary to-brand-surface border border-emerald-500/30 p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Primary Support Channel
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mb-2">
                  Live WhatsApp IPTV Assistance
                </h2>
                <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                  Connect directly with our technicians for instant VixeoTV IPTV account provisioning, step-by-step remote <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">installation advice</Link>, and connection diagnostics across all <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">supported devices</Link>.
                </p>
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Direct 24/7 Live Desk
                </div>
              </div>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold bg-emerald-500 hover:bg-emerald-400 text-brand-bg text-sm sm:text-base transition-all duration-300 shadow-xl shadow-emerald-500/30 flex-shrink-0 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-brand-bg" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Support Resource Hub */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Link
              href="/setup"
              className="rounded-2xl bg-brand-bg-secondary p-6 border border-white/5 hover:border-brand-primary/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-heading text-white mb-2">
                Setup Guides Directory
              </h3>
              <p className="text-xs text-brand-text-secondary leading-relaxed mb-4">
                Detailed tutorials for Amazon Firestick, Android TV, Apple TV, Smart TVs, and MAG boxes to configure your <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription</Link>.
              </p>
              <span className="text-xs font-bold text-brand-primary flex items-center gap-1">
                <span>View Guides</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/faq"
              className="rounded-2xl bg-brand-bg-secondary p-6 border border-white/5 hover:border-brand-primary/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-heading text-white mb-2">
                Knowledge Base &amp; FAQ
              </h3>
              <p className="text-xs text-brand-text-secondary leading-relaxed mb-4">
                Quick answers on playlist URLs, Xtream Codes API, player buffering, and renewal policies — explore our full <Link href="/faq" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">FAQ knowledge base</Link>.
              </p>
              <span className="text-xs font-bold text-brand-primary flex items-center gap-1">
                <span>Browse FAQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl bg-brand-bg-secondary p-6 border border-white/5 hover:border-brand-primary/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-heading text-white mb-2">
                Email Helpdesk
              </h3>
              <p className="text-xs text-brand-text-secondary leading-relaxed mb-4">
                Prefer email correspondence? Submit your technical inquiry directly via our <Link href="/contact" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">contact desk</Link> or email support@vixeotv.net.
              </p>
              <span className="text-xs font-bold text-brand-primary flex items-center gap-1">
                <span>Contact Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Quick Troubleshooting Steps */}
          <div className="rounded-3xl bg-brand-bg-secondary p-8 sm:p-10 border border-white/10">
            <h3 className="text-xl font-bold font-heading text-white mb-4">
              Fast Self-Service IPTV Troubleshooting Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-brand-text-secondary">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-bg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span><strong>Restart Device:</strong> A quick power cycle resolves 80% of playback memory hiccups.</span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-bg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span><strong>Switch to 5GHz Wi-Fi:</strong> Eliminates radio congestion common on older 2.4GHz bands.</span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-bg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span><strong>Refresh Playlist:</strong> In player settings, reload your Xtream Codes or M3U list to grab latest links. See our <Link href="/setup" className="text-brand-primary hover:underline">setup guides</Link> if you need help.</span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-bg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span><strong>Toggle HW/SW Decoder:</strong> Change decoder mode in player preferences if a channel stutters.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started with VixeoTV IPTV?"
        subtitle={
          <>
            Select your <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">subscription plan</Link>, receive instant credentials, and let our 24/7 WhatsApp support team guide your <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">device setup</Link>.
          </>
        }
      />
    </>
  );
}
