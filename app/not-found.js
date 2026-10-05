import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-24 bg-brand-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto text-center relative z-10">
        <span className="text-7xl sm:text-9xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary block mb-2">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-brand-text-secondary leading-relaxed mb-8">
          The <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">channel directory</Link>, guide, or streaming resource you are looking for does not exist or may have been relocated. Visit our <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">support center</Link> or return home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-brand-primary text-brand-bg hover:shadow-glow-primary transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-brand-bg-secondary border border-white/10 hover:border-brand-primary text-white transition-all"
          >
            <span>View Subscription Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
