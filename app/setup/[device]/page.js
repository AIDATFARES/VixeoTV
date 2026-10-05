import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { 
  CheckCircle2, Clock, Wrench, AlertCircle, MessageCircle, 
  ArrowLeft, ArrowRight, HelpCircle, Shield 
} from 'lucide-react';
import { setupGuides } from '@/data/setupGuides';
import { siteConfig } from '@/data/siteConfig';

export async function generateStaticParams() {
  return Object.keys(setupGuides).map((slug) => ({
    device: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { device } = await params;
  const guide = setupGuides[device];

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `${siteConfig.domain}/setup/${guide.slug}`,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `${siteConfig.domain}/setup/${guide.slug}`,
    },
  };
}

export default async function DeviceSetupPage({ params }) {
  const { device } = await params;
  const guide = setupGuides[device];

  if (!guide) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Setup Guide', href: '/setup' },
    { label: guide.deviceName, href: `/setup/${guide.slug}` },
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.metaDescription,
    totalTime: `PT${guide.estimatedTime.replace(/[^0-9]/g, '') || '10'}M`,
    supply: guide.prerequisites.map((p) => ({
      '@type': 'HowToSupply',
      name: p,
    })),
    step: guide.steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.title,
      text: s.description,
      position: s.stepNumber,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.domain,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Setup Guide',
        item: `${siteConfig.domain}/setup`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.deviceName,
        item: `${siteConfig.domain}/setup/${guide.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge={`${guide.deviceName} Installation Walkthrough`}
        title={guide.title}
        description={guide.metaDescription}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-text-secondary">
            <Clock className="w-3.5 h-3.5 text-brand-primary" />
            <span>Time: {guide.estimatedTime}</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-text-secondary">
            <Wrench className="w-3.5 h-3.5 text-brand-primary" />
            <span>Difficulty: {guide.difficulty}</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold">
            <span>App: {guide.recommendedApp}</span>
          </span>
        </div>
      </PageHeader>

      {/* Main Guide Content */}
      <section className="py-16 md:py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Prerequisites Box */}
          <div className="rounded-2xl bg-brand-bg-secondary p-6 sm:p-8 border border-white/10 mb-12 shadow-xl">
            <h2 className="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-primary" />
              <span>What You Need Before Starting</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-text-secondary">
              {guide.prerequisites.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-brand-text-muted">
              <span>Don't have an active subscription yet?</span>
              <Link href="/pricing" className="text-brand-primary hover:underline font-bold">
                View VixeoTV IPTV Plans →
              </Link>
            </div>
          </div>

          {/* Numbered Steps */}
          <div className="space-y-6 mb-16">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mb-6">
              Step-by-Step Instructions
            </h2>

            {guide.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="relative rounded-2xl bg-brand-bg-secondary p-6 sm:p-8 border border-white/10 hover:border-brand-primary/30 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-brand-bg font-black font-heading flex items-center justify-center flex-shrink-0 text-base shadow-md">
                    {step.stepNumber}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Troubleshooting Section */}
          {guide.troubleshooting && guide.troubleshooting.length > 0 && (
            <div className="rounded-2xl bg-brand-bg-secondary p-6 sm:p-8 border border-amber-500/20 mb-16 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl font-bold font-heading text-white">
                  Troubleshooting Common Issues on {guide.deviceName}
                </h2>
              </div>

              <div className="space-y-4">
                {guide.troubleshooting.map((t, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-brand-bg border border-white/5">
                    <h4 className="text-sm font-bold text-amber-300 mb-1">{t.issue}</h4>
                    <p className="text-xs text-brand-text-secondary leading-relaxed">{t.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Device FAQ */}
          {guide.faqs && guide.faqs.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-black font-heading text-white mb-6">
                Frequently Asked Questions about {guide.deviceName}
              </h2>
              <div className="space-y-4">
                {guide.faqs.map((f, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-brand-bg-secondary border border-white/10">
                    <h3 className="text-base font-bold font-heading text-white mb-2">{f.q}</h3>
                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live Support Help Box */}
          <div className="rounded-2xl bg-gradient-to-r from-emerald-950/40 via-brand-bg-secondary to-brand-bg-secondary border border-emerald-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-white mb-1">
                Stuck during installation?
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-secondary">
                Our <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">support agents</Link> are active on WhatsApp to assist with any setup error, or you can check our <Link href="/faq" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV knowledge base</Link>.
              </p>
            </div>
            <a
              href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(
                `Hello VixeoTV, I need setup help with my ${guide.deviceName}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-brand-bg transition-colors flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Live WhatsApp Help</span>
            </a>
          </div>

          {/* Navigation link back to all guides */}
          <div className="mt-12 text-center">
            <Link
              href="/setup"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View All Device Setup Guides</span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Stream VixeoTV IPTV on Your ${guide.deviceName}?`}
        subtitle={
          <>
            <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Subscribe now</Link>, get instant account activation, and enjoy 4K Ultra HD <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live TV and sports</Link>.
          </>
        }
      />
    </>
  );
}
