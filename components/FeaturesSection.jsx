import Link from 'next/link';
import { 
  Tv, Zap, Calendar, Laptop, Clock, Film, Trophy, MessageCircle, 
  Check, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { featureList, featureComparison } from '@/data/features';
import { siteConfig } from '@/data/siteConfig';

const iconMap = {
  Tv: Tv,
  Zap: Zap,
  Calendar: Calendar,
  Laptop: Laptop,
  Clock: Clock,
  Film: Film,
  Trophy: Trophy,
  MessageCircle: MessageCircle,
};

const featureLinks = {
  '4k-ultra-hd': { text: 'live sports and blockbuster cinema', href: '/channels' },
  'anti-freeze-technology': { text: 'IPTV stream load balancing', href: '/features' },
  'epg-tv-guide': { text: 'live programming schedules', href: '/channels' },
  'multi-device-support': { text: 'multi-device freedom', href: '/devices' },
  'instant-activation': { text: 'Xtream Codes API credentials', href: '/setup' },
  'vod-entertainment': { text: 'on-demand titles', href: '/channels' },
  'global-sports-coverage': { text: 'premier league football', href: '/channels' },
  'whatsapp-support': { text: 'technical specialists via WhatsApp', href: '/support' },
};

function renderFeatureDescription(item) {
  const linkConfig = featureLinks[item.id];
  if (!linkConfig || !item.description.includes(linkConfig.text)) {
    return item.description;
  }
  const parts = item.description.split(linkConfig.text);
  return (
    <>
      {parts[0]}
      <Link href={linkConfig.href} className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">
        {linkConfig.text}
      </Link>
      {parts.slice(1).join(linkConfig.text)}
    </>
  );
}

export default function FeaturesSection({ showComparison = true, hideHeader = false }) {
  return (
    <section className="py-20 md:py-28 bg-brand-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3 font-heading">
              Engineered for IPTV Stability
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white mb-4">
              Advanced VixeoTV IPTV Features Built for Peak Performance
            </h2>
            <p className="text-brand-text-secondary text-base sm:text-lg">
              From Ultra HD <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live sports feeds</Link> to real-time EPG schedules, VixeoTV IPTV is engineered to eliminate buffering and deliver crystal-clear entertainment on any <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">connected screen</Link>.
            </p>
          </div>
        )}

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {featureList.map((item) => {
            const IconComponent = iconMap[item.icon] || Tv;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-brand-bg p-6 sm:p-7 border border-white/5 hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-glow-card flex flex-col justify-between"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-brand-bg transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mb-4">
                    {renderFeatureDescription(item)}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-text-muted">
                  <span className="text-[11px] font-medium text-slate-300">{item.shortDesc}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        {showComparison && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-brand-bg border border-white/10 p-6 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary font-heading">
                Side-by-Side Comparison
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                How VixeoTV IPTV Compares to Cable and Generic IPTV Providers
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white">
                    <th className="py-3 px-3 font-semibold text-brand-text-muted">Feature</th>
                    <th className="py-3 px-3 font-black text-brand-primary bg-brand-primary/10 rounded-t-xl">
                      VixeoTV
                    </th>
                    <th className="py-3 px-3 font-semibold text-brand-text-muted">Cable TV</th>
                    <th className="py-3 px-3 font-semibold text-brand-text-muted">Generic IPTV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-brand-text-secondary">
                  {featureComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-3 font-medium text-white">{row.feature}</td>
                      <td className="py-3.5 px-3 font-bold text-brand-primary bg-brand-primary/5">
                        {row.vixeo}
                      </td>
                      <td className="py-3.5 px-3 text-brand-text-muted">{row.traditionalCable}</td>
                      <td className="py-3.5 px-3 text-brand-text-muted">{row.genericIptv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h3 className="text-sm font-bold text-white">Ready to upgrade your home entertainment with VixeoTV IPTV?</h3>
                <p className="text-xs text-slate-300">Experience buffer-free 4K streaming with <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-white/20">instant activation</Link> and 24/7 dedicated <Link href="/support" className="text-brand-primary hover:underline">WhatsApp support</Link>.</p>
              </div>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-brand-primary text-brand-bg hover:shadow-glow-primary transition-all"
              >
                <span>Explore VixeoTV IPTV Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
