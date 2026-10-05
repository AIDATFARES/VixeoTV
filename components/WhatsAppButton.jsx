'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Popover Callout */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-brand-bg-secondary border border-emerald-500/30 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-heading">
                VixeoTV Live Support
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-brand-text-muted hover:text-white p-1"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-brand-text-secondary leading-relaxed mb-3">
            Have questions about <Link href="/setup" onClick={() => setIsOpen(false)} className="text-emerald-400 hover:underline">setup guides</Link>, <Link href="/devices" onClick={() => setIsOpen(false)} className="text-emerald-400 hover:underline">device compatibility</Link>, or <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-emerald-400 hover:underline">subscription plans</Link>? Our agents are online on WhatsApp to help you in real time.
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-brand-bg font-bold text-xs transition-colors shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp Live Chat</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group">
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsOpen(true)}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-brand-bg flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
          aria-label="Chat with VixeoTV on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-brand-bg" />
          {/* Online badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-brand-bg rounded-full" />
        </a>
      </div>
    </div>
  );
}
