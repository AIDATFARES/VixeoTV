import PageHeader from '@/components/PageHeader';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { legalPolicies } from '@/data/legalContent';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: legalPolicies.refundPolicy.metaTitle,
  description: legalPolicies.refundPolicy.metaDescription,
  alternates: {
    canonical: `${siteConfig.domain}/legal/refund-policy`,
  },
};

function renderPolicyContent(text) {
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
    parts.push(
      <Link
        key={match.index}
        href={url}
        className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors font-medium"
      >
        {label}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export default function RefundPolicyPage() {
  const policy = legalPolicies.refundPolicy;
  const breadcrumbs = [
    { label: 'Legal', href: '/legal/terms' },
    { label: 'Refund Policy', href: '/legal/refund-policy' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Refund Policy', item: `${siteConfig.domain}/legal/refund-policy` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="Customer Assurance"
        title={policy.title}
        description={`Last updated: ${policy.lastUpdated}. Clear terms regarding technical satisfaction and cancellation.`}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="rounded-3xl bg-brand-bg-secondary p-8 sm:p-12 border border-white/10 shadow-xl space-y-10">
            {policy.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {section.heading}
                </h2>
                <div className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed whitespace-pre-line">
                  {renderPolicyContent(section.content)}
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-white/5 flex flex-wrap gap-4 text-xs text-brand-text-muted">
              <span>Related Legal Policies:</span>
              <Link href="/legal/privacy" className="text-brand-primary hover:underline">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/legal/terms" className="text-brand-primary hover:underline">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/legal/cookies" className="text-brand-primary hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
