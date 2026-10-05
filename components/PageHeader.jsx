import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({
  badge,
  title,
  titleAccent,
  description,
  breadcrumbs = [],
  children
}) {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-brand-bg-secondary via-brand-bg to-brand-bg border-b border-white/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-text-muted mb-6"
          >
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="w-3 h-3" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={crumb.href || idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 opacity-40" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-brand-primary font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge Pill */}
        {badge && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
              {badge}
            </span>
          </div>
        )}

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight mb-5 max-w-4xl mx-auto">
          {title} {titleAccent && <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-primary-light to-brand-secondary">{titleAccent}</span>}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-base sm:text-lg text-brand-text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
            {description}
          </p>
        )}

        {/* Optional Action / Search / Filter Slots */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
