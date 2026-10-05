'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import { faqs, faqCategories } from '@/data/faq';
import { siteConfig } from '@/data/siteConfig';

function renderAnswerWithLinks(text) {
  if (!text) return null;
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [_, label, url] = match;
    if (url.startsWith('/')) {
      parts.push(
        <Link
          key={match.index}
          href={url}
          className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors font-medium"
        >
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-primary hover:underline font-medium"
        >
          {label}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export default function FAQAccordion({ limit, initialCategory = 'All' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  // Filter FAQs based on category & search term
  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Category Tabs & Search Bar (only shown when not limited or on dedicated FAQ page) */}
      {!limit && (
        <div className="mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-brand-bg-secondary border border-white/10 text-white placeholder-brand-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-brand-bg shadow-glow-primary'
                    : 'bg-white/5 text-brand-text-secondary hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-3">
        {displayFaqs.length > 0 ? (
          displayFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-brand-bg-secondary border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold font-heading text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-primary/20 text-brand-primary' : 'text-brand-text-muted'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-brand-text-secondary leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    <p>{renderAnswerWithLinks(item.answer)}</p>
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-brand-text-muted">
                      <span>Category: {item.category}</span>
                      <a
                        href={siteConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Still have questions? Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 rounded-2xl bg-brand-bg-secondary border border-white/5 p-8">
            <p className="text-brand-text-secondary text-sm mb-4">
              No questions found matching "{searchQuery}".
            </p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-500 text-brand-bg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Our WhatsApp Support Directly</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
