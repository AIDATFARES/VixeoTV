import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { 
  Check, 
  MessageCircle, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Tv, 
  Server, 
  Headphones, 
  Zap, 
  Users, 
  Clock, 
  Layers,
  ArrowRight 
} from 'lucide-react';
import { resellerCreditPackages, resellerFaq } from '@/data/pricing';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'VixeoTV — IPTV Reseller Panel & Credits | Start Your IPTV Business',
  description: 'Launch your branded IPTV service with VixeoTV. 120 to 600 credits from $399 with dedicated Xtream Codes panel, sub-reseller access, free trials, and 24/7 VIP support.',
  keywords: [
    'IPTV reseller',
    'buy IPTV credits',
    'IPTV reseller panel',
    'start IPTV business',
    'Xtream Codes reseller panel',
    'cheap IPTV credits',
    'VixeoTV reseller program',
    'IPTV sub-reseller'
  ],
  alternates: {
    canonical: `${siteConfig.domain}/reseller`,
  },
};

export default function ResellerPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Reseller Program', href: '/reseller' },
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'VixeoTV IPTV Reseller Panel & Credits',
    description: 'High-margin IPTV reseller program with dedicated Xtream Codes panel, credits that never expire, and sub-reseller management.',
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '399.00',
      highPrice: '1999.00',
      priceCurrency: 'USD',
      offerCount: resellerCreditPackages.length,
      offers: resellerCreditPackages.map((p) => ({
        '@type': 'Offer',
        name: `${p.name} Reseller Panel`,
        price: p.price.toString(),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${siteConfig.domain}/reseller`,
      })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Reseller Program', item: `${siteConfig.domain}/reseller` },
    ],
  };

  const advantages = [
    {
      icon: Tv,
      title: 'COMPATIBLE ACROSS ALL DEVICES',
      description: (
        <>
          Your clients can stream smoothly across Firestick, Smart TVs, Android boxes, Apple TV, iOS, and PC. Explore our <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">compatible devices</Link> and <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">setup tutorials</Link>.
        </>
      ),
    },
    {
      icon: Server,
      title: 'HIGH-PERFORMANCE INFRASTRUCTURE',
      description: (
        <>
          Deliver over 50,000 live channels and 200,000 VOD movies backed by <Link href="/features" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Anti-Freeze v2.0 load balancing</Link> and 99.9% verified server uptime. Check our <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">complete channel lineup</Link>.
        </>
      ),
    },
    {
      icon: Zap,
      title: 'INTUITIVE XTREAM CODES PANEL',
      description: (
        <>
          Manage client accounts in seconds. Generate M3U playlists, set custom bouquets, create 24-hour trial lines, and view real-time connection status with zero latency.
        </>
      ),
    },
    {
      icon: Users,
      title: 'SUB-RESELLER CREATION & CONTROL',
      description: (
        <>
          Expand your enterprise by creating your own sub-resellers. Transfer credit balances at your custom wholesale margins and monitor sub-account performance directly from your master dashboard.
        </>
      ),
    },
    {
      icon: Clock,
      title: 'CREDITS NEVER EXPIRE',
      description: (
        <>
          Enjoy complete peace of mind with zero expiration deadlines. Your purchased credits remain secure in your management panel until you actively issue or renew client lines.
        </>
      ),
    },
    {
      icon: Headphones,
      title: '24/7 DEDICATED RESELLER SUPPORT',
      description: (
        <>
          Direct access to senior video engineers on WhatsApp to assist with playlist migrations, transponder questions, and portal setups via our <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">support desk</Link>.
        </>
      ),
    },
  ];

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="Official Reseller Program"
        title="Start Your Own IPTV Business with"
        titleAccent="VixeoTV Credits"
        description="Launch an independent, high-margin IPTV streaming business with our enterprise infrastructure. Get access to an official Xtream Codes management panel, generate unlimited free test lines, enjoy credits that never expire, and scale with sub-reseller controls."
        breadcrumbs={breadcrumbs}
      />

      {/* Credit Packages Section */}
      <section className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
        {/* Ambient glow highlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-brand-primary/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px] relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3 font-heading">
              Transparent Credit Tiers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white mb-4">
              Wholesale IPTV Reseller Packages
            </h2>
            <p className="text-brand-text-secondary text-base sm:text-lg">
              Each credit equals 1 month of active IPTV service. Select the tier that matches your customer volume. Compare with standard <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">retail subscription plans</Link> or connect with our <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">wholesale desk</Link>.
            </p>
            
            {/* Key Value Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-brand-text-secondary bg-brand-bg-secondary/70 border border-white/5 py-2 px-5 rounded-full max-w-fit mx-auto">
              <span className="text-brand-primary font-bold">1 Credit = 1 Month Line</span>
              <span>•</span>
              <span className="text-white">Free Trial Generation</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">Credits Never Expire</span>
            </div>
          </div>

          {/* 5-Column Side-by-Side Grid for Large Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-4 xl:gap-3.5 2xl:gap-5 mb-16 items-stretch">
            {resellerCreditPackages.map((pkg) => {
              const isPopular = pkg.popular;
              const isBestValue = pkg.badge === 'Best Value';

              const whatsappUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(pkg.whatsappMessage)}`;

              return (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col justify-between h-full rounded-3xl p-5 sm:p-5.5 2xl:p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                    isPopular
                      ? 'bg-gradient-to-b from-brand-primary/15 via-brand-bg-secondary to-brand-bg-secondary border-2 border-brand-primary shadow-[0_0_35px_rgba(0,212,255,0.2)]'
                      : isBestValue
                      ? 'bg-gradient-to-b from-purple-500/15 via-brand-bg-secondary to-brand-bg-secondary border-2 border-purple-500/80 shadow-[0_0_35px_rgba(168,85,247,0.2)]'
                      : 'bg-brand-bg-secondary/90 border border-white/10 hover:border-brand-primary/40 shadow-glow-card'
                  }`}
                >
                  {/* Floating Highlight Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-lg whitespace-nowrap ${
                          isPopular
                            ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-bg shadow-brand-primary/30'
                            : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-purple-500/30'
                        }`}
                      >
                        <Sparkles className="w-3 h-3" />
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header Block (Title & Price per credit) */}
                    <div className="text-center pt-2 pb-4 border-b border-white/5 min-h-[70px] flex flex-col justify-center">
                      <h3 className="text-lg 2xl:text-xl font-black font-heading text-white tracking-wide uppercase">
                        {pkg.name}
                      </h3>
                      <div className="mt-1">
                        <span className="text-[11px] font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-0.5 rounded-full inline-block">
                          {pkg.pricePerCredit}
                        </span>
                      </div>
                    </div>

                    {/* Price Block */}
                    <div className="py-4 text-center border-b border-white/5 min-h-[92px] flex flex-col justify-center">
                      <div className="flex items-baseline justify-center gap-0.5">
                        <span className="text-sm font-bold text-brand-text-secondary">$</span>
                        <span className="text-3xl sm:text-4xl 2xl:text-4xl font-black font-heading text-white tracking-tight">
                          {pkg.price}
                        </span>
                      </div>
                      <div className="text-[11px] text-brand-text-muted mt-1 font-medium">
                        {pkg.billingNote}
                      </div>
                      <div className="text-[10px] font-bold text-emerald-400 mt-1 flex items-center justify-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Credits Never Expire</span>
                      </div>
                    </div>

                    {/* Feature Checklist */}
                    <ul className="py-5 space-y-2.5 text-left">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs leading-snug">
                          <Check className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span className="text-[11px] 2xl:text-xs text-white/80">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Actions */}
                  <div className="pt-4 mt-auto border-t border-white/5 space-y-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden w-full flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-md ${
                        isPopular
                          ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-brand-bg shadow-glow-primary hover:shadow-glow-primary-lg'
                          : isBestValue
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-purple-500/20 hover:shadow-purple-500/40'
                          : 'bg-white/10 hover:bg-brand-primary hover:text-brand-bg text-white border border-white/10 hover:border-transparent'
                      }`}
                    >
                      <span className="relative z-10">{pkg.ctaText}</span>
                      <ChevronRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1 py-1 text-[11px] font-medium text-brand-text-muted hover:text-emerald-400 transition-colors"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-400" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Reseller Trial Banner */}
          <div className="max-w-3xl mx-auto rounded-3xl bg-brand-bg-secondary border border-brand-primary/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl mb-24">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-lg font-black text-white uppercase tracking-wide">
                  Want to Test the Reseller Panel First?
                </h4>
                <p className="text-xs sm:text-sm text-brand-text-secondary mt-1">
                  Connect with our WhatsApp wholesale support desk to request a live demo walkthrough of our Xtream Codes management interface.
                </p>
              </div>
            </div>
            <a
              href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent('Hello VixeoTV support, I want to request a demo of the IPTV Reseller Panel.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary text-brand-bg hover:shadow-glow-primary transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Panel Demo</span>
            </a>
          </div>

          {/* Platform Advantages Section */}
          <div className="pt-16 border-t border-white/5">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary font-heading">
                Operational Excellence
              </span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mt-1 mb-4">
                VixeoTV Reseller Platform Advantages
              </h2>
              <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed">
                Everything required to establish, operate, and scale an independent IPTV operation with industry-leading stream retention and stability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, idx) => {
                const IconComponent = adv.icon;
                return (
                  <div key={idx} className="p-7 rounded-3xl bg-brand-bg-secondary border border-white/10 hover:border-brand-primary/30 transition-all flex items-start gap-4 shadow-lg">
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white tracking-wide uppercase mb-2">
                        {adv.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                        {adv.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reseller FAQ Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary font-heading">
                Seller Knowledge Base
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                Frequently Asked Reseller Questions
              </h2>
            </div>

            <div className="space-y-4">
              {resellerFaq.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-brand-bg-secondary border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-primary" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed pl-4">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <CTASection
        title="Ready to Build Your IPTV Reseller Brand?"
        subtitle={
          <>
            Order your credit package today on WhatsApp, receive instant dashboard login credentials, and start provisioning <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">4K live channels</Link> for your customers across all <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">supported devices</Link>.
          </>
        }
      />
    </>
  );
}
