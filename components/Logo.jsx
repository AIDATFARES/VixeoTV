'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Logo({ compact = false, className = '', onClick }) {
  const pathname = usePathname();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      scroll={true}
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg cursor-pointer ${className}`}
      aria-label="VixeoTV - Return to homepage"
    >
      {/* Icon Mark */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-bg-tertiary to-brand-bg-secondary p-0.5 border border-brand-primary/30 group-hover:border-brand-primary group-hover:shadow-glow-primary transition-all duration-300 flex items-center justify-center overflow-hidden flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vixLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#7928CA" />
            </linearGradient>
          </defs>
          <path
            d="M26 30 L45 68 C47 72 53 72 55 68 L74 30 L62 30 L50 56 L38 30 Z"
            fill="url(#vixLogoGrad)"
          />
          <polygon points="46,42 58,49 46,56" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography */}
      {!compact && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-xl sm:text-2xl font-black font-heading tracking-wider text-white">
              VIXEO
            </span>
            <span className="text-xs sm:text-sm font-extrabold px-1.5 py-0.5 rounded bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-bg font-heading uppercase">
              TV
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-widest text-brand-text-muted font-semibold mt-0.5">
            Ultra HD Streams
          </span>
        </div>
      )}
    </Link>
  );
}
