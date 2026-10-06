'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Flame, Tv, Apple, Monitor, MonitorSmartphone, Laptop, Cpu, 
  ArrowRight, Clock, CheckCircle2, Star, Zap, ShieldCheck, 
  Play, MessageCircle, ExternalLink, Sparkles 
} from 'lucide-react';
import { supportedDevices, deviceProtocols } from '@/data/devices';
import { siteConfig } from '@/data/siteConfig';

const iconMap = {
  Flame: Flame,
  Tv: Tv,
  Apple: Apple,
  Monitor: Monitor,
  MonitorSmartphone: MonitorSmartphone,
  Laptop: Laptop,
  Cpu: Cpu,
};

export default function DevicesSection({ hideHeader = false, showProtocolsAndHelp = true }) {
  const [selectedDeviceId, setSelectedDeviceId] = useState('firestick');
  
  const activeDevice = supportedDevices.find((d) => d.id === selectedDeviceId) || supportedDevices[0];
  const ActiveIcon = iconMap[activeDevice.icon] || Tv;

  return (
    <section className="py-20 md:py-28 bg-brand-bg relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/25 mb-4 font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Universal Streaming Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight mb-4 leading-[1.15]">
              Watch on Every Screen You Own.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-primary-light to-white">
                Zero Complex Setup.
              </span>
            </h2>
            <p className="text-brand-text-secondary text-base sm:text-lg leading-relaxed">
              From 85-inch living room OLED TVs to pocket iPhones and travel laptops — VixeoTV runs natively on 100% of major streaming devices with zero lag and instant 2-minute activation on all <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription plans</Link>.
            </p>
          </div>
        )}

        {/* 1. INTERACTIVE HARDWARE STAGE (Hero Showcase) */}
        <div className="mb-20">
          
          {/* Device Tabs Bar */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
            {supportedDevices.map((device) => {
              const DeviceIcon = iconMap[device.icon] || Tv;
              const isActive = device.id === selectedDeviceId;
              return (
                <button
                  key={device.id}
                  type="button"
                  onClick={() => setSelectedDeviceId(device.id)}
                  className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-brand-bg shadow-[0_0_25px_rgba(0,212,255,0.35)] scale-105'
                      : 'bg-brand-bg-secondary text-brand-text-secondary hover:text-white border border-white/5 hover:border-white/20 hover:bg-brand-surface'
                  }`}
                >
                  <DeviceIcon className={`w-4 h-4 ${isActive ? 'text-brand-bg' : 'text-brand-primary'}`} />
                  <span>{device.shortName || device.name}</span>
                  {device.popular && (
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-black/20 text-brand-bg' : 'bg-brand-primary/20 text-brand-primary'
                    }`}>
                      Hot
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Showcase Frame */}
          <div className="rounded-3xl bg-gradient-to-b from-brand-surface/90 to-brand-bg-secondary/90 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Realistic 4K Living Room Display Mockup */}
              <div className="lg:col-span-7 relative">
                
                {/* TV Bezel Container */}
                <div className="relative rounded-2xl bg-[#03060B] border-4 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(0,212,255,0.15)] overflow-hidden group">
                  
                  {/* Top TV Screen Bar */}
                  <div className="bg-black/80 px-4 py-2 border-b border-white/10 flex items-center justify-between text-[11px] text-white/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="font-bold text-white uppercase tracking-wider text-[10px]">LIVE BROADCAST</span>
                      <span className="text-white/40">•</span>
                      <span className="font-mono text-brand-primary">{activeDevice.previewTitle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-brand-primary/20 text-brand-primary font-bold text-[10px]">4K 60FPS</span>
                      <span className="hidden sm:inline px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">HEVC H.265</span>
                    </div>
                  </div>

                  {/* Main Screen Content Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <Image
                      src={activeDevice.previewImage}
                      alt={activeDevice.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                    />
                    
                    {/* Screen overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* On-Screen Live Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold text-white">
                            Dolby 5.1 Surround
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md text-[10px] font-bold text-emerald-300">
                            Anti-Freeze Active
                          </span>
                        </div>
                        <p className="text-lg sm:text-xl font-black text-white font-heading drop-shadow-md">
                          {activeDevice.name}
                        </p>
                        <p className="text-xs text-white/80 drop-shadow">
                          {activeDevice.streamQuality}
                        </p>
                      </div>

                      {/* Screen Play Button Icon */}
                      <div className="w-10 h-10 rounded-full bg-brand-primary text-brand-bg flex items-center justify-center shadow-glow-primary">
                        <Play className="w-4 h-4 fill-brand-bg ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bezel with Metallic Stand Accent */}
                  <div className="bg-[#0A0E17] py-2 px-4 flex items-center justify-between text-[10px] text-white/50 border-t border-white/5">
                    <div className="flex items-center gap-1.5 font-heading font-black tracking-wider text-brand-primary">
                      <span>VIXEO</span>
                      <span className="text-white">TV</span>
                    </div>
                    <span>Certified Player Feed • Ultra Low Latency</span>
                  </div>
                </div>

                {/* Floating Hardware Badge */}
                <div className="absolute -bottom-4 -left-4 sm:left-4 bg-brand-surface/95 border border-brand-primary/40 rounded-2xl p-3 sm:p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-brand-text-muted uppercase tracking-wider">
                      Target Hardware
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white font-heading">
                      {activeDevice.osVersion}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Device Blueprint & App Lineup */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                
                {/* Header & Badges */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/15 text-brand-primary border border-brand-primary/30">
                      {activeDevice.highlightBadge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/5 text-white/80 border border-white/10">
                      {activeDevice.difficulty}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-3">
                    {activeDevice.name}
                  </h3>

                  <p className="text-sm text-brand-text-secondary leading-relaxed mb-5">
                    {activeDevice.fullDesc}
                  </p>

                  {/* Micro Specs Grid */}
                  <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-brand-bg/80 border border-white/5 mb-5">
                    <div>
                      <div className="text-[10px] text-brand-text-muted uppercase font-bold">Estimated Setup</div>
                      <div className="text-xs sm:text-sm font-bold text-white mt-0.5 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-primary" />
                        <span>{activeDevice.setupTime}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-brand-text-muted uppercase font-bold">Max Resolution</div>
                      <div className="text-xs sm:text-sm font-bold text-white mt-0.5 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-brand-primary" />
                        <span>4K UHD 60FPS</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Advantages */}
                  <div className="space-y-2 mb-6">
                    {activeDevice.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommended Apps Lineup */}
                  <div>
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-2.5">
                      Top Recommended Media Players:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {activeDevice.appDetails?.map((app, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/40 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-white truncate">{app.name}</span>
                            <span className="text-[10px] font-bold text-amber-400 flex items-center gap-0.5">
                              <Star className="w-2.5 h-2.5 fill-amber-400" />
                              {app.rating}
                            </span>
                          </div>
                          <div className="text-[10px] text-brand-text-muted truncate">{app.store}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href={activeDevice.setupUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-brand-primary to-brand-primary-light text-brand-bg hover:shadow-glow-primary transition-all text-center"
                  >
                    <span>View Step-by-Step Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(`Hello VixeoTV, I need help setting up on my ${activeDevice.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Help</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 2. THE DEVICE BENTO MATRIX (Modern visual grid for all devices) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary font-heading">
                Comprehensive Lineup
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mt-1">
                Explore All Supported Hardware
              </h3>
            </div>
            <Link
              href="/setup"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-primary hover:underline"
            >
              <span>Visit Setup Center</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedDevices.map((device) => {
              const DeviceIcon = iconMap[device.icon] || Tv;
              const isFirestick = device.id === 'firestick';

              return (
                <div
                  key={device.id}
                  className={`group relative rounded-3xl bg-brand-bg-secondary p-7 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
                    isFirestick
                      ? 'border-brand-primary/40 shadow-[0_10px_35px_rgba(0,212,255,0.12)]'
                      : 'border-white/10 hover:border-brand-primary/40 shadow-glow-card'
                  }`}
                >
                  {/* Subtle hover gradient glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/15 transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Header: Icon, Title & Badge */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-brand-primary/10 border border-brand-primary/25 text-brand-primary flex items-center justify-center p-3 group-hover:bg-brand-primary group-hover:text-brand-bg group-hover:scale-110 transition-all duration-300">
                        <DeviceIcon className="w-6 h-6" />
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        {device.popular && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-primary-light text-brand-bg shadow-sm">
                            Popular Pick
                          </span>
                        )}
                        <span className="text-[10px] font-semibold text-brand-text-muted">
                          {device.setupTime}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-brand-primary transition-colors">
                      {device.name}
                    </h3>

                    <p className="text-xs text-brand-text-secondary leading-relaxed mb-5">
                      {device.shortDesc}
                    </p>

                    {/* Hardware OS Target */}
                    <div className="mb-4 py-2 px-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-white/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      <span className="truncate">{device.osVersion}</span>
                    </div>

                    {/* Recommended App Badges */}
                    <div className="mb-6">
                      <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider block mb-2">
                        Top Tested Apps:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {device.recommendedApps.map((app, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-brand-surface text-white border border-white/10 group-hover:border-white/20 transition-colors"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Guide Link */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-brand-text-muted">
                      Difficulty: <span className="text-white">{device.difficulty}</span>
                    </span>

                    <Link
                      href={device.setupUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary group-hover:underline"
                    >
                      <span>Setup Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. UNIVERSAL PROTOCOLS & API SUPPORT BANNER & 4. SETUP ASSISTANCE HELP DESK */}
        {showProtocolsAndHelp && (
          <>
            {/* 3. UNIVERSAL PROTOCOLS & API SUPPORT BANNER */}
            <div className="rounded-3xl bg-gradient-to-r from-brand-surface via-brand-bg-secondary to-brand-surface border border-white/10 p-6 sm:p-8 mb-12 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="max-w-xl text-center lg:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-primary font-heading">
                    Universal Protocol Support
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white mt-1 mb-2">
                    Already Have a Preferred Player Installed?
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                    VixeoTV is fully open and compatible with any IPTV app in the world. Connect in seconds via Xtream Codes API, standard M3U/M3U8 URLs, or MAG Stalker portals — check out our <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">configuration guides</Link> or view our <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">channel list</Link>.
                  </p>
                </div>

                {/* Protocol Pills */}
                <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 max-w-lg">
                  {deviceProtocols.map((proto, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-center"
                    >
                      <span className="text-xs font-bold text-white block">{proto.name}</span>
                      <span className="text-[10px] text-brand-text-muted">{proto.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. SETUP ASSISTANCE HELP DESK */}
            <div className="rounded-2xl bg-brand-bg-secondary border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                    Can&apos;t find your device or need personal help?
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-secondary mt-0.5">
                    Our technical <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">support engineers</Link> are available 24/7 on WhatsApp to guide you step-by-step through installation or check our <Link href="/faq" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">frequently asked questions</Link>.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
                <a
                  href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent('Hello VixeoTV, I need help setting up my device.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all font-heading"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
