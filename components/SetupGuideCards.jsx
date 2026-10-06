import Link from 'next/link';
import { 
  Flame, Tv, Apple, Monitor, MonitorSmartphone, Laptop, Cpu, 
  ArrowRight, Clock, CheckCircle2, ShieldCheck, Sparkles 
} from 'lucide-react';
import { setupGuides } from '@/data/setupGuides';

const iconMap = {
  firestick: Flame,
  'android-tv': Tv,
  'apple-tv': Apple,
  'samsung-smart-tv': Monitor,
  'lg-smart-tv': MonitorSmartphone,
  windows: Laptop,
  mag: Cpu,
};

export default function SetupGuideCards() {
  const guideList = Object.values(setupGuides);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {guideList.map((guide) => {
        const IconComponent = iconMap[guide.slug] || Tv;
        const isFirestick = guide.slug === 'firestick';

        return (
          <Link
            key={guide.slug}
            href={`/setup/${guide.slug}`}
            className={`group relative rounded-3xl bg-brand-bg-secondary p-7 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
              isFirestick 
                ? 'border-brand-primary/40 shadow-[0_10px_35px_rgba(0,212,255,0.12)]' 
                : 'border-white/10 hover:border-brand-primary/40 shadow-glow-card'
            }`}
          >
            {/* Ambient hover light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/15 transition-all duration-500 pointer-events-none" />

            <div>
              {/* Top Bar with Icon & Time */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-13 h-13 rounded-2xl bg-brand-primary/10 border border-brand-primary/25 text-brand-primary flex items-center justify-center p-3 group-hover:bg-brand-primary group-hover:text-brand-bg group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    <Clock className="w-3.5 h-3.5 text-brand-primary" />
                    <span>{guide.estimatedTime}</span>
                  </span>
                  <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                    {guide.difficulty} Setup
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold font-heading text-white mb-2.5 group-hover:text-brand-primary transition-colors">
                {guide.deviceName}
              </h3>

              <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mb-5 line-clamp-2">
                {guide.metaDescription}
              </p>

              {/* App Badge */}
              <div className="mb-5 py-2 px-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">Player App:</span>
                <span className="text-white font-bold truncate max-w-[170px]">{guide.recommendedApp}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified 2026</span>
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform">
                <span>Start Tutorial</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
