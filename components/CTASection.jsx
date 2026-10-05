import Link from 'next/link';
import { ChevronRight, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function CTASection({
  title = 'Ready to Experience Buffer-Free 4K Streaming with VixeoTV IPTV?',
  subtitle
}) {
  const defaultSubtitle = (
    <>
      Activate your VixeoTV <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription</Link> in under 5 minutes with our step-by-step <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">installation guides</Link> and 24/7 dedicated <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">WhatsApp support team</Link>.
    </>
  );

  return (
    <section className="py-20 md:py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-bg-tertiary via-brand-surface to-brand-bg-secondary border border-white/10 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          {/* Subtle Background Glow Rings */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/15 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-xs font-semibold text-brand-primary mb-6">
            <Zap className="w-3.5 h-3.5 text-brand-primary" />
            <span>Instant VixeoTV IPTV Activation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white max-w-3xl mx-auto mb-5 tracking-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-brand-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            {subtitle || defaultSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/pricing"
              className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold bg-gradient-to-r from-brand-primary to-brand-primary-light text-brand-bg shadow-glow-primary hover:shadow-glow-primary-lg transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-glow-btn"
            >
              {/* Continuous Light Sweep Flare */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-shimmer-sweep" />

              <span className="relative z-10">View VixeoTV IPTV Plans</span>
              <ChevronRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Talk with WhatsApp Support</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-brand-text-muted">
            <ShieldCheck className="w-4 h-4 text-brand-primary" />
            <span>No Long-Term Contracts • <Link href="/setup" className="hover:text-brand-primary underline decoration-white/20">Instant Credentials</Link> • 24/7 <Link href="/support" className="hover:text-brand-primary underline decoration-white/20">WhatsApp Support</Link></span>
          </div>
        </div>
      </div>
    </section>
  );
}
