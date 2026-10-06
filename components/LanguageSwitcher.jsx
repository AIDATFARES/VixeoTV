'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import { ChevronDown, Check, ChevronUp } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', short: 'EN' },
  { code: 'nl', name: 'Dutch', short: 'NL' },
  { code: 'fr', name: 'French', short: 'FR' },
  { code: 'de', name: 'German', short: 'DE' },
  { code: 'it', name: 'Italian', short: 'IT' },
  { code: 'pt', name: 'Portuguese', short: 'PT' },
  { code: 'ru', name: 'Russian', short: 'RU' },
  { code: 'es', name: 'Spanish', short: 'ES' },
  { code: 'ar', name: 'Arabic', short: 'AR' },
];

function FlagIcon({ code, className = 'w-5 h-3.5' }) {
  switch (code) {
    case 'en':
      return (
        <svg className={`${className} rounded-[2px] shadow-sm shrink-0`} viewBox="0 0 640 480">
          <path fill="#bd3d44" d="M0 0h640v480H0z" />
          <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640" />
          <path fill="#192f5d" d="M0 0h260v258.5H0z" />
          <circle cx="30" cy="30" r="8" fill="#fff" />
          <circle cx="80" cy="30" r="8" fill="#fff" />
          <circle cx="130" cy="30" r="8" fill="#fff" />
          <circle cx="180" cy="30" r="8" fill="#fff" />
          <circle cx="230" cy="30" r="8" fill="#fff" />
          <circle cx="55" cy="65" r="8" fill="#fff" />
          <circle cx="105" cy="65" r="8" fill="#fff" />
          <circle cx="155" cy="65" r="8" fill="#fff" />
          <circle cx="205" cy="65" r="8" fill="#fff" />
          <circle cx="30" cy="100" r="8" fill="#fff" />
          <circle cx="80" cy="100" r="8" fill="#fff" />
          <circle cx="130" cy="100" r="8" fill="#fff" />
          <circle cx="180" cy="100" r="8" fill="#fff" />
          <circle cx="230" cy="100" r="8" fill="#fff" />
          <circle cx="55" cy="135" r="8" fill="#fff" />
          <circle cx="105" cy="135" r="8" fill="#fff" />
          <circle cx="155" cy="135" r="8" fill="#fff" />
          <circle cx="205" cy="135" r="8" fill="#fff" />
          <circle cx="30" cy="170" r="8" fill="#fff" />
          <circle cx="80" cy="170" r="8" fill="#fff" />
          <circle cx="130" cy="170" r="8" fill="#fff" />
          <circle cx="180" cy="170" r="8" fill="#fff" />
          <circle cx="230" cy="170" r="8" fill="#fff" />
          <circle cx="55" cy="205" r="8" fill="#fff" />
          <circle cx="105" cy="205" r="8" fill="#fff" />
          <circle cx="155" cy="205" r="8" fill="#fff" />
          <circle cx="205" cy="205" r="8" fill="#fff" />
        </svg>
      );
    case 'nl':
      return (
        <svg className={`${className} rounded-[2px] shadow-sm shrink-0`} viewBox="0 0 640 480">
          <path fill="#21468b" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M0 0h640v320H0z" />
          <path fill="#ae1c28" d="M0 0h640v160H0z" />
        </svg>
      );
    case 'fr':
      return (
        <svg className={`${className} rounded-[2px] shadow-sm shrink-0`} viewBox="0 0 640 480">
          <path fill="#ed2939" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M0 0h426.7v480H0z" />
          <path fill="#002395" d="M0 0h213.3v480H0z" />
        </svg>
      );
    case 'de':
      return (
        <svg className={`${className} rounded-[2px] shadow-sm shrink-0`} viewBox="0 0 640 480">
          <path fill="#ffce00" d="M0 0h640v480H0z" />
          <path fill="#d00" d="M0 0h640v320H0z" />
          <path fill="#000" d="M0 0h640v160H0z" />
        </svg>
      );
    case 'it':
      return (
        <svg className={`${className} rounded-[2px] shadow-sm shrink-0`} viewBox="0 0 640 480">
          <path fill="#ce2b37" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M0 0h426.7v480H0z" />
          <path fill="#009246" d="M0 0h213.3v480H0z" />
        </svg>
      );
    case 'pt':
      return (
        <svg className={`${className} rounded-[2px] shadow-sm shrink-0`} viewBox="0 0 640 480">
          <path fill="#ff0000" d="M0 0h640v480H0z" />
          <path fill="#006600" d="M0 0h256v480H0z" />
          <circle cx="256" cy="240" r="75" fill="#ffcc00" />
          <circle cx="256" cy="240" r="50" fill="#fff" />
          <path fill="#ff0000" d="M241 215h30v50h-30z" />
        </svg>
      );
    case 'ru':
      return (
        <svg className={`${className} rounded-[2px] shadow-sm shrink-0`} viewBox="0 0 640 480">
          <path fill="#d52b1e" d="M0 0h640v480H0z" />
          <path fill="#0039a6" d="M0 0h640v320H0z" />
          <path fill="#fff" d="M0 0h640v160H0z" />
        </svg>
      );
    case 'es':
      return (
        <svg className={`${className} rounded-[2px] shadow-sm shrink-0`} viewBox="0 0 640 480">
          <path fill="#aa151b" d="M0 0h640v480H0z" />
          <path fill="#f1bf00" d="M0 120h640v240H0z" />
          <rect x="120" y="180" width="50" height="70" rx="6" fill="#aa151b" />
        </svg>
      );
    case 'ar':
      return (
        <svg className={`${className} rounded-[2px] shadow-sm shrink-0`} viewBox="0 0 640 480">
          <path fill="#006c35" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M160 210h320v18H160zM190 250h260v12H190z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [loadScript, setLoadScript] = useState(false);
  const dropdownRef = useRef(null);
  const listRef = useRef(null);

  const initTranslate = () => {
    setLoadScript(true);
  };

  // Sync with cookie on mount
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=\/([^/]+)\/([a-z]{2})/);
    if (match && match[2]) {
      const found = languages.find((l) => l.code === match[2]);
      if (found) {
        setCurrentLang(found);
        if (found.code !== 'en') {
          setLoadScript(true);
        }
      }
    }

    // Define Google Translate element init callback
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: languages.map((l) => l.code).join(','),
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    initTranslate();
    setCurrentLang(lang);
    setIsOpen(false);

    // Set cookies
    const host = window.location.hostname;
    document.cookie = `googtrans=/en/${lang.code}; path=/;`;
    document.cookie = `googtrans=/auto/${lang.code}; path=/;`;
    if (host) {
      document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${host};`;
      document.cookie = `googtrans=/auto/${lang.code}; path=/; domain=${host};`;
    }

    // Trigger select element in Google Translate frame if present
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  };

  const scrollUp = () => {
    if (listRef.current) listRef.current.scrollBy({ top: -60, behavior: 'smooth' });
  };

  const scrollDown = () => {
    if (listRef.current) listRef.current.scrollBy({ top: 60, behavior: 'smooth' });
  };

  return (
    <>
      <div
        ref={dropdownRef}
        className="fixed bottom-6 left-6 z-50 flex flex-col items-start select-none"
      >
        {/* Languages Popover Menu */}
        {isOpen && (
          <div className="mb-3 w-48 sm:w-52 rounded-2xl bg-white text-slate-800 shadow-[0_12px_35px_rgba(0,0,0,0.35)] border border-slate-200/90 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
            {/* Scroll Up Button */}
            <button
              type="button"
              onClick={scrollUp}
              aria-label="Scroll up languages"
              className="w-full flex items-center justify-center py-1 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors border-b border-slate-100"
            >
              <ChevronUp className="w-4 h-4" />
            </button>

            {/* Language Items List */}
            <div
              ref={listRef}
              className="max-h-64 overflow-y-auto scroll-smooth divide-y divide-slate-100/60"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#94a3b8 #f1f5f9',
              }}
            >
              {languages.map((lang) => {
                const isActive = lang.code === currentLang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelect(lang)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs sm:text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#43597D] text-white hover:bg-[#3b4e6d]'
                        : 'text-slate-800 hover:bg-slate-100/90'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FlagIcon code={lang.code} className="w-5 h-3.5" />
                      <span className="leading-none">{lang.name}</span>
                    </div>

                    {isActive && (
                      <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Scroll Down Button */}
            <button
              type="button"
              onClick={scrollDown}
              aria-label="Scroll down languages"
              className="w-full flex items-center justify-center py-1 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors border-t border-slate-100"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Floating Trigger Button */}
        <button
          type="button"
          onClick={() => {
            initTranslate();
            setIsOpen(!isOpen);
          }}
          onMouseEnter={initTranslate}
          onFocus={initTranslate}
          aria-expanded={isOpen}
          aria-label="Change website language"
          className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0c1220] hover:bg-[#11182c] text-white border border-indigo-400/50 ring-4 ring-indigo-500/25 shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        >
          <FlagIcon code={currentLang.code} className="w-5 h-3.5" />
          <span className="text-xs sm:text-sm font-black font-heading tracking-wide">
            {currentLang.short}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-300 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Hidden Google Translate Mount Container */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Google Translate API Script - Loaded on demand */}
      {loadScript && (
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
