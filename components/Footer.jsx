import Link from 'next/link';
import { MessageCircle, ShieldCheck, Zap, Mail, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-bg border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Logo />
            <p className="text-sm text-brand-text-secondary leading-relaxed max-w-sm">
              VixeoTV is a premium IPTV service provider delivering high-fidelity, buffer-free <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live television</Link> and on-demand entertainment across all <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">modern devices</Link>. Explore our <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV plans</Link> or connect with our 24/7 <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">WhatsApp support desk</Link>.
            </p>
            
            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>WhatsApp: Live Support Desk</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-muted hover:text-white transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-brand-text-muted" />
                </div>
                <span>Email: {siteConfig.email}</span>
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-bg-secondary border border-white/5 text-xs text-brand-text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Streaming Edge Gateways Operational</span>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Platform
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-text-secondary hover:text-brand-primary transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Setup Guides */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Setup Guides
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.footerLinks.setupGuides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-text-secondary hover:text-brand-primary transition-colors flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Help & Legal
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.footerLinks.support.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-text-secondary hover:text-emerald-400 transition-colors flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-brand-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <div className="pt-3 border-t border-white/5 space-y-2.5">
                {siteConfig.footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-text-muted hover:text-white transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-text-muted">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/legal/refund-policy" className="hover:text-white transition-colors">
              Refunds
            </Link>
            <Link href="/legal/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
