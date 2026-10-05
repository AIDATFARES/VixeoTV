import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import ChannelsSection from '@/components/ChannelsSection';
import DevicesSection from '@/components/DevicesSection';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { 
  ShieldCheck, Zap, Tv, Clock, CheckCircle2, MessageCircle, 
  ArrowRight, Sparkles, Play, Award 
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { faqs } from '@/data/faq';

export const metadata = {
  title: 'VixeoTV — Premium IPTV Service | 4K Ultra HD & 60FPS Live Streams',
  description: 'VixeoTV delivers ultra-fast, buffer-free 4K IPTV streaming. Watch live sports, international TV channels, and 4K VOD on Firestick, Smart TVs, Android, and Apple.',
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function HomePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'VixeoTV Premium Streaming Service',
    serviceType: 'IPTV Streaming',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    description: siteConfig.description,
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'VixeoTV Subscription Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          name: '1 Month Plan',
          price: '14.99',
          priceCurrency: 'USD',
          url: `${siteConfig.domain}/pricing`,
        },
        {
          '@type': 'Offer',
          name: '12 Months Plan',
          price: '69.99',
          priceCurrency: 'USD',
          url: `${siteConfig.domain}/pricing`,
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.slice(0, 6).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Strip & Value Highlights */}
      <section className="py-10 bg-brand-bg-secondary border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm sm:text-base font-heading">Anti-Freeze v2.0 IPTV</span>
              <span className="text-brand-text-muted text-xs">Proprietary Stream Balancing</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2">
                <Tv className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm sm:text-base font-heading">4K &amp; Full HD IPTV</span>
              <span className="text-brand-text-muted text-xs">H.265 / HEVC 60FPS Feeds</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm sm:text-base font-heading">Fast IPTV Activation</span>
              <span className="text-brand-text-muted text-xs">Xtream Credentials in Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm sm:text-base font-heading">24/7 IPTV Support</span>
              <span className="text-brand-text-muted text-xs">Direct WhatsApp Helpdesk</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works (3 Simple Steps) */}
      <section className="py-20 md:py-24 bg-brand-bg relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3 font-heading">
              Effortless IPTV Setup
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white mb-4">
              How VixeoTV IPTV Works in 3 Easy Steps
            </h2>
            <p className="text-brand-text-secondary text-base">
              Getting started with your VixeoTV <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription</Link> is fast and effortless. Go from choosing your plan to streaming high-definition <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live channels</Link> in under 5 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="rounded-2xl bg-brand-bg-secondary p-8 border border-white/5 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-black font-heading text-lg flex items-center justify-center mb-5">
                01
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">Choose Your IPTV Plan</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                Select your ideal VixeoTV <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription duration</Link> and required simultaneous connections with transparent pricing and no hidden contracts.
              </p>
              <Link href="/pricing" className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1">
                <span>View IPTV Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-brand-bg-secondary p-8 border border-white/5 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-black font-heading text-lg flex items-center justify-center mb-5">
                02
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">Receive Instant IPTV Credentials</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                Within minutes of confirming your order, receive your secure M3U playlist link and Xtream Codes API login credentials directly via email or <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">24/7 WhatsApp helpdesk</Link>.
              </p>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                <span>Instant WhatsApp Support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-brand-bg-secondary p-8 border border-white/5 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-black font-heading text-lg flex items-center justify-center mb-5">
                03
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">Configure Your Device &amp; Stream</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                Follow our simple step-by-step <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">installation guides</Link> for your Smart TV, Firestick, or mobile device, enter your credentials, and start watching via our <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">supported device ecosystem</Link>.
              </p>
              <Link href="/setup" className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1">
                <span>Browse IPTV Setup Guides</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pricing Section */}
      <PricingSection />

      {/* 5. Entertainment & Channel Lineup Section */}
      <ChannelsSection />

      {/* 6. Features Section */}
      <FeaturesSection showComparison={false} />

      {/* 7. Supported Devices Section */}
      <DevicesSection showProtocolsAndHelp={false} />

      {/* 9. FAQ Section */}
      <section className="py-20 md:py-28 bg-brand-bg relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3 font-heading">
              VixeoTV Knowledge Base
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white mb-4">
              Frequently Asked Questions About VixeoTV IPTV
            </h2>
            <p className="text-brand-text-secondary text-base">
              Find answers to common questions regarding <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">VixeoTV IPTV subscriptions</Link>, compatible <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">streaming devices</Link>, connection speeds, and <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">setup steps</Link>.
            </p>
          </div>

          <FAQAccordion limit={6} />

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-primary hover:underline"
            >
              <span>Explore Complete VixeoTV IPTV FAQ Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final Call To Action */}
      <CTASection />
    </>
  );
}
