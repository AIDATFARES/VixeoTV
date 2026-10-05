'use client';

import { siteConfig } from '@/data/siteConfig';

export default function WhatsAppButton() {
  const whatsappUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent('Hello VixeoTV, I need help.')}`;

  return (
    <aside
      aria-label="WhatsApp live chat support"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end pointer-events-auto select-none"
    >
      {/* Speech Bubble Tooltip */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/bubble relative mb-3.5 mr-2 sm:mr-3 inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-300"
        aria-label="Need help? Chat with us on WhatsApp"
      >
        <span className="text-sm sm:text-base font-black text-zinc-950 whitespace-nowrap tracking-tight">
          Need help? Chat with us!
        </span>

        {/* Speech Bubble Pointer Tail */}
        <span
          className="absolute -bottom-2 right-8 sm:right-9 w-4 h-4 bg-[#25D366] group-hover/bubble:bg-[#20bd5a] rotate-45 transition-colors duration-300"
          aria-hidden="true"
        />
      </a>

      {/* Floating Circular WhatsApp Button */}
      <div className="relative group flex items-center justify-center">
        {/* Soft Ambient Glow Halo */}
        <div
          className="absolute -inset-3.5 sm:-inset-4 rounded-full bg-[#25D366]/25 pointer-events-none transition-transform duration-300 group-hover:scale-115"
          aria-hidden="true"
        />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:shadow-[0_14px_45px_rgba(37,211,102,0.75)] hover:scale-108 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          aria-label="Chat with VixeoTV on WhatsApp"
        >
          {/* Official WhatsApp Logo SVG */}
          <svg
            className="w-9 h-9 sm:w-10 sm:h-10 fill-white transition-transform duration-300 group-hover:scale-110 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
