'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, MessageCircle, ChevronRight, Sparkles } from 'lucide-react';
import { pricingPlans, pricingGuarantees, connectionOptions } from '@/data/pricing';
import { siteConfig } from '@/data/siteConfig';

export default function PricingSection({ hideHeader = false }) {
  const [selectedConnections, setSelectedConnections] = useState(1);

  // Multiplier for connection options
  const activeConnection = connectionOptions.find(c => c.connections === selectedConnections) || connectionOptions[0];

  return (
    <section id="pricing-section" className="py-20 md:py-28 bg-brand-bg relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-brand-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px] relative z-10">
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3 font-heading">
              Transparent IPTV Subscription Plans
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white mb-4">
              Choose Your VixeoTV IPTV Plan: Instant 4K Streaming Access
            </h2>
            <p className="text-brand-text-secondary text-base sm:text-lg">
              All VixeoTV IPTV plans include high-definition <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">4K &amp; Full HD channels</Link>, comprehensive electronic program guides (EPG), proprietary <Link href="/features" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Anti-Freeze v2.0 load balancing</Link>, and dedicated 24/7 WhatsApp <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">customer care</Link>. Zero hidden fees, zero surprise rebills.
            </p>
          </div>
        )}

        {/* Multi-Device Connection Selector Tabs */}
        <div className="flex flex-col items-center justify-center mb-12">
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
            Select Number of Simultaneous Device Connections:
          </span>
          <div className="inline-flex p-1.5 rounded-2xl bg-brand-bg-secondary border border-white/10 max-w-full overflow-x-auto">
            {connectionOptions.map((opt) => (
              <button
                key={opt.connections}
                type="button"
                onClick={() => setSelectedConnections(opt.connections)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  selectedConnections === opt.connections
                    ? 'bg-gradient-to-r from-brand-primary to-brand-primary-light text-brand-bg shadow-glow-primary'
                    : 'text-brand-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid - 5 Columns Side-by-Side on Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-4 xl:gap-3.5 2xl:gap-5 mb-16 items-stretch">
          {pricingPlans.map((plan) => {
            const calculatedPrice = (plan.price * activeConnection.multiplier).toFixed(2);
            const calculatedMonthly = (calculatedPrice / (plan.id === '1-month' ? 1 : plan.id === '3-months' ? 3 : plan.id === '6-months' ? 6 : plan.id === '1-year' ? 12 : 24)).toFixed(2);

            const isBestValue = plan.badge === 'Best Value';
            const isPopular = plan.popular;

            const whatsappUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(
              `Hello VixeoTV support, I would like to order the ${plan.name} Plan (${selectedConnections} Device${selectedConnections > 1 ? 's' : ''}) for $${calculatedPrice}.`
            )}`;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between h-full rounded-3xl p-5 sm:p-5.5 2xl:p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                  isPopular
                    ? 'bg-gradient-to-b from-brand-primary/15 via-brand-bg-secondary to-brand-bg-secondary border-2 border-brand-primary shadow-[0_0_35px_rgba(0,212,255,0.2)]'
                    : isBestValue
                    ? 'bg-gradient-to-b from-purple-500/15 via-brand-bg-secondary to-brand-bg-secondary border-2 border-purple-500/80 shadow-[0_0_35px_rgba(168,85,247,0.2)]'
                    : 'bg-brand-bg-secondary/90 border border-white/10 hover:border-brand-primary/40 shadow-glow-card'
                }`}
              >
                {/* Floating Badge (Popular / Best Value / Savings) */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-lg whitespace-nowrap ${
                        isPopular
                          ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-bg shadow-brand-primary/30'
                          : isBestValue
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-purple-500/30'
                          : 'bg-white/10 text-white border border-white/20'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Header (Duration Title & Monthly rate) */}
                  <div className="text-center pt-2 pb-4 border-b border-white/5 min-h-[70px] flex flex-col justify-center">
                    <h3 className="text-lg 2xl:text-xl font-black font-heading text-white tracking-wide uppercase">
                      {plan.name}
                    </h3>
                    <div className="mt-1">
                      <span className="text-[11px] font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-0.5 rounded-full inline-block">
                        {plan.duration}
                      </span>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="py-4 text-center border-b border-white/5 min-h-[92px] flex flex-col justify-center">
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-sm font-bold text-brand-text-secondary">$</span>
                      <span className="text-3xl sm:text-4xl 2xl:text-4xl font-black font-heading text-white tracking-tight">
                        {calculatedPrice}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[11px] mt-1">
                      <span className="text-brand-primary font-semibold">
                        ${calculatedMonthly}/mo eq.
                      </span>
                      {plan.savingsText && (
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          {plan.savingsText}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-300 mt-0.5">
                      {selectedConnections} Device Connection{selectedConnections > 1 ? 's' : ''}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="py-5 space-y-2.5 text-left">
                    {plan.features.slice(0, 6).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs leading-snug">
                        <Check className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                        <span className="text-[11px] 2xl:text-xs text-white/80">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Actions */}
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
                    <span className="relative z-10">{plan.ctaText || 'Get Plan'}</span>
                    <ChevronRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-1 text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-brand-bg-secondary border border-white/5">
          {pricingGuarantees.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white font-heading">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guaranteed Safe Checkout Banner */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-white/10 max-w-lg w-full flex items-center justify-center transition-transform duration-300 hover:scale-[1.01]">
            <Image
              src="/images/safe-checkout.webp"
              alt="Guaranteed Safe Checkout - VixeoTV Accepted Payment Methods"
              width={600}
              height={139}
              className="w-full h-auto max-w-[480px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
