'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, ChevronRight, Maximize2, X, Play, Tv, Trophy, 
  Film, Sparkles, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { playerScreenshots, playerCategories, channelStats } from '@/data/channels';
import { siteConfig } from '@/data/siteConfig';

export default function ChannelsSection({ hideHeader = false }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef(null);

  // Filter screenshots based on selected category
  const filteredScreenshots = activeCategory === 'all'
    ? playerScreenshots
    : playerScreenshots.filter((item) => item.category === activeCategory);

  // Scroll controls
  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Auto-scroll effect (gentle nudge every 4 seconds when user isn't hovering)
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 380, behavior: 'smooth' });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Modal keyboard navigation (ESC, ArrowLeft, ArrowRight)
  const handleKeyDown = useCallback((e) => {
    if (!activeModalItem) return;
    if (e.key === 'Escape') {
      setActiveModalItem(null);
    } else if (e.key === 'ArrowRight') {
      const currentIndex = filteredScreenshots.findIndex(item => item.id === activeModalItem.id);
      const nextIndex = (currentIndex + 1) % filteredScreenshots.length;
      setActiveModalItem(filteredScreenshots[nextIndex]);
    } else if (e.key === 'ArrowLeft') {
      const currentIndex = filteredScreenshots.findIndex(item => item.id === activeModalItem.id);
      const prevIndex = (currentIndex - 1 + filteredScreenshots.length) % filteredScreenshots.length;
      setActiveModalItem(filteredScreenshots[prevIndex]);
    }
  }, [activeModalItem, filteredScreenshots]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="py-20 md:py-28 bg-brand-bg relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* 1. Header Section */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/25 mb-4 font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Player Interface &amp; 4K Feeds</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white mb-4 leading-tight">
              World-Class Sports, Cinema &amp; Live Television on VixeoTV IPTV
            </h2>
            <p className="text-brand-text-secondary text-base sm:text-lg leading-relaxed">
              Experience the actual high-definition player interface. Browse live 60FPS sports, international news networks, and thousands of 4K on-demand movies via our <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription plans</Link> streamed directly through our <Link href="/features" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Anti-Freeze servers</Link>.
            </p>
          </div>
        )}

        {/* 2. Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {channelStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-brand-bg-secondary border border-white/5 text-center shadow-lg transition-transform hover:-translate-y-1 duration-200"
            >
              <div className="text-2xl sm:text-3xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-primary-light">
                {stat.value}
              </div>
              <div className="text-xs text-brand-text-muted mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. Category Filter Chips & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto no-scrollbar">
            {playerCategories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-brand-bg shadow-glow-primary scale-105'
                      : 'bg-brand-bg-secondary text-brand-text-secondary hover:text-white border border-white/5 hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-[11px] text-brand-text-muted hidden md:inline">
              Drag or use arrows to scroll
            </span>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Previous screenshot"
              className="w-9 h-9 rounded-full bg-brand-bg-secondary border border-white/10 hover:border-brand-primary/50 text-white flex items-center justify-center hover:bg-brand-surface transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Next screenshot"
              className="w-9 h-9 rounded-full bg-brand-bg-secondary border border-white/10 hover:border-brand-primary/50 text-white flex items-center justify-center hover:bg-brand-surface transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4. THE IMAGE STRIP (Continuous Horizontal Showcase) */}
        <div
          className="relative -mx-4 sm:-mx-6 px-4 sm:px-6"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredScreenshots.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group relative flex-shrink-0 w-[300px] sm:w-[380px] md:w-[440px] rounded-2xl bg-brand-bg-secondary border border-white/10 hover:border-brand-primary/60 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,212,255,0.18)] cursor-pointer snap-start flex flex-col justify-between"
              >
                {/* Image Container with 16:9 ratio */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 380px, 440px"
                  />

                  {/* Gradient shadow for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Top Badge (Live Stream Indicator) */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/70 backdrop-blur-md text-white border border-white/15">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Category Label */}
                  <div className="absolute bottom-2.5 left-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-primary bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="p-4 bg-brand-bg-secondary/90 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-heading text-white group-hover:text-brand-primary transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-text-muted mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-brand-text-secondary font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Verified Stream</span>
                    </span>
                    <span className="text-brand-primary font-bold group-hover:underline flex items-center gap-0.5">
                      <span>Click to preview</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Bottom Action Strip */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-bg-secondary via-brand-surface to-brand-bg-secondary border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
              Ready to watch these live channels &amp; 4K movies on your own screen?
            </h4>
            <p className="text-xs sm:text-sm text-brand-text-secondary mt-1">
              Compatible with Amazon Firestick, Android TV, Smart TVs, and Apple TV (see our <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">supported devices</Link> and step-by-step <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV setup guides</Link>). Instant activation in 2-5 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-brand-primary to-brand-primary-light text-brand-bg hover:shadow-glow-primary transition-all font-heading"
            >
              <span>Explore IPTV Subscription Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent('Hello VixeoTV, I want to ask about the channel lineup.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black transition-all font-heading"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* 6. FULLSCREEN PREVIEW LIGHTBOX MODAL */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#03060B] rounded-2xl sm:rounded-3xl border border-white/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="bg-black/90 px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-sm sm:text-base font-bold text-white truncate font-heading">
                  {activeModalItem.title}
                </h4>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-brand-primary/20 text-brand-primary">
                  {activeModalItem.badge}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Main Image */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Modal Bottom Bar */}
            <div className="p-4 sm:p-6 bg-brand-bg-secondary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div className="max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">
                  {activeModalItem.categoryLabel}
                </span>
                <p className="text-xs sm:text-sm text-brand-text-secondary mt-0.5">
                  {activeModalItem.description}
                </p>
              </div>

              <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-primary text-brand-bg hover:shadow-glow-primary transition-all font-heading"
                >
                  <span>Order Plan to Watch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
