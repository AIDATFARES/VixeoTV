import Link from 'next/link';
import Image from 'next/image';
import { Zap, Check, Star, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  return (
    <section className="relative pt-[70px] pb-10 sm:pt-[74px] sm:pb-14 lg:pt-[78px] lg:pb-16 bg-brand-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Main Hero Card Container */}
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 bg-[#0E131F] shadow-2xl min-h-[580px] lg:min-h-[640px] flex items-center">
          
          {/* Background Image: Couple on couch watching TV */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-couple-couch.jpg"
              alt="Streamers enjoying VixeoTV on their living room TV"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center sm:object-right opacity-35 lg:opacity-45 scale-105"
            />
            {/* Rich gradient overlays for ultra-high contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080B11] via-[#080B11]/95 to-transparent sm:via-[#080B11]/85 lg:via-[#080B11]/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-transparent to-transparent opacity-80" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 blur-3xl pointer-events-none" />
          </div>

          {/* Foreground Grid Content */}
          <div className="relative z-10 w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            
            {/* Left Column: Headline, Value propositions, Rating, CTAs */}
            <div className="lg:col-span-7 max-w-2xl">
              {/* Eyebrow */}
              <div className="mb-3">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-primary font-heading">
                  PREMIUM IPTV SUBSCRIPTION &amp; 4K STREAMING
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[56px] font-black font-heading text-white tracking-tight leading-[1.12] mb-5">
                VixeoTV – <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-primary-light to-brand-primary">
                  The Premier IPTV Provider
                </span>{' '}
                <br className="hidden lg:inline" />
                <span>for the USA, Canada, and Europe.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-sm sm:text-base text-brand-text-secondary font-medium mb-6">
                VixeoTV delivers the complete <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live streaming channels</Link> and on-demand entertainment package across your <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">favorite devices</Link>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-3.5">
                <a
                  href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent('Hello VixeoTV, I would like to request a free trial.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-extrabold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-[1.03] active:scale-95 animate-pulse-glow-btn"
                >
                  {/* Continuous Light Sweep Flare */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-shimmer-sweep" />

                  <svg
                    className="w-5 h-5 fill-white transition-transform duration-300 group-hover:scale-115 relative z-10 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="relative z-10">Get a free trial</span>
                </a>

                <Link
                  href="/pricing"
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-bold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-all duration-300 hover:border-brand-primary/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.2)] hover:scale-[1.02] active:scale-95"
                >
                  {/* Subtle hover light sheen */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                  <span className="relative z-10">Choose Your IPTV Plan</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10 text-brand-primary" />
                </Link>
              </div>

              {/* Trust Footnote */}
              <p className="text-xs text-brand-text-muted mb-6">
                <Link href="/pricing" className="hover:text-brand-primary underline decoration-white/20">Instant IPTV activation</Link> • <Link href="/devices" className="hover:text-brand-primary underline decoration-white/20">Multi-device support</Link> • <Link href="/support" className="hover:text-brand-primary underline decoration-white/20">24/7 WhatsApp helpdesk</Link>
              </p>

              {/* Feature Checklist (Moved below buttons) */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-sm shadow-brand-primary/30">
                    <Check className="w-3.5 h-3.5 text-brand-bg stroke-[3.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Thousands of <Link href="/channels" className="text-brand-primary hover:underline">live TV channels</Link> &amp; high-speed 4K VOD library
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-sm shadow-brand-primary/30">
                    <Check className="w-3.5 h-3.5 text-brand-bg stroke-[3.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Buffer-free Full HD &amp; 4K streams powered by <Link href="/features" className="text-brand-primary hover:underline">Anti-Freeze v2.0</Link>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-sm shadow-brand-primary/30">
                    <Check className="w-3.5 h-3.5 text-brand-bg stroke-[3.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Global sports leagues, trending movies &amp; full <Link href="/channels" className="text-brand-primary hover:underline">EPG TV guide</Link>
                  </span>
                </div>
              </div>

              {/* Ratings line */}
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="flex items-center text-amber-400 gap-0.5">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-brand-text-secondary text-xs sm:text-sm">
                  Rated <strong className="text-white font-bold">Excellent</strong> — 4.9/5 satisfaction
                </span>
              </div>
            </div>

            {/* Right Column: Multi-Device Streaming Collage */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
                
                {/* 1. Large Television Display in Background */}
                <div className="relative rounded-2xl sm:rounded-3xl bg-[#090C12] border-2 border-white/15 p-2 shadow-2xl overflow-hidden">
                  {/* Top-Right Quality Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-black/80 text-brand-primary border border-brand-primary/40 backdrop-blur-md">
                      ✦ UP TO 4K QUALITY
                    </span>
                  </div>

                  {/* TV Screen Content */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/images/hero-tv-show.jpg"
                      alt="4K Action Series on TV"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                    
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">
                        Action Series
                      </span>
                      <h4 className="text-sm sm:text-base font-black text-white font-heading mt-1 drop-shadow">
                        VIXEO CINEMA 4K
                      </h4>
                    </div>
                  </div>
                </div>

                {/* 2. Floating Devices Overlay (Laptop + Tablet + Smartphone) */}
                <div className="relative -mt-16 sm:-mt-20 z-20 flex items-end justify-between gap-2 px-2">
                  
                  {/* Open Laptop */}
                  <div className="w-[45%] rounded-xl bg-[#0C1017] border border-white/20 p-1.5 shadow-2xl backdrop-blur-md transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-950">
                      <Image
                        src="/images/hero-sports.jpg"
                        alt="Live Football Stadium on Laptop"
                        fill
                        sizes="(max-width: 768px) 50vw, 250px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-1.5 left-2">
                        <span className="text-[8px] sm:text-[9px] font-black text-white font-mono uppercase bg-red-600 px-1 py-0.2 rounded">
                          ● LIVE 60FPS
                        </span>
                      </div>
                    </div>
                    {/* Laptop Keyboard Base Bezel */}
                    <div className="h-1.5 bg-slate-800 rounded-b mt-1" />
                  </div>

                  {/* Tablet in Center */}
                  <div className="w-[30%] rounded-xl bg-[#0C1017] border border-white/20 p-1 shadow-2xl transform translate-y-1 hover:translate-y-0 transition-transform duration-300">
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-slate-950">
                      <Image
                        src="/images/hero-cinema.jpg"
                        alt="Movies on Tablet"
                        fill
                        sizes="(max-width: 768px) 30vw, 160px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                      <div className="absolute bottom-1 left-1.5">
                        <span className="text-[8px] font-bold text-white leading-tight block">
                          Trending Series
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Smartphone on Right */}
                  <div className="w-[20%] rounded-xl bg-[#0C1017] border border-white/25 p-1 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="relative aspect-[9/18] rounded-lg overflow-hidden bg-slate-950 flex flex-col justify-between p-1">
                      <div className="w-4 h-1 bg-white/20 rounded-full mx-auto mb-1" />
                      <div className="relative flex-1 rounded overflow-hidden">
                        <Image
                          src="/images/hero-tv-show.jpg"
                          alt="Mobile App View"
                          fill
                          sizes="(max-width: 768px) 20vw, 100px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-[7px] text-center text-brand-primary font-bold mt-0.5">
                        Vixeo App
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Floating Vibrant Price Pill Badge */}
                <div className="absolute top-1/2 -left-3 sm:-left-6 -translate-y-1/2 z-30 animate-in fade-in zoom-in-95 duration-500">
                  <div className="rounded-2xl bg-gradient-to-br from-brand-primary via-brand-primary-light to-brand-primary text-brand-bg p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,212,255,0.5)] border border-white/30 transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider block opacity-90">
                      Starting at
                    </span>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading leading-tight tracking-tight text-brand-bg">
                      $14.99
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold block mt-0.5 opacity-90">
                      / month • 1 device
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
