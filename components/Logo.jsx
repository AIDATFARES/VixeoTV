'use client';

import Link from 'next/link';
import Image from 'next/image';
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
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
        <Image
          src="/images/vixeo-icon.png"
          alt="VixeoTV Icon"
          width={40}
          height={40}
          className="w-full h-full object-contain rounded-xl"
          priority
        />
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
