import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'VixeoTV — Premium IPTV Service | 4K Ultra HD & 60FPS Live Streams',
    template: '%s',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'VixeoTV Technical Team', url: siteConfig.domain }],
  creator: 'VixeoTV',
  publisher: 'VixeoTV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.domain,
    siteName: 'VixeoTV',
    title: 'VixeoTV — Premium IPTV Service | 4K Ultra HD & 60FPS Live Streams',
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.domain}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'VixeoTV - Premium Ultra HD IPTV Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VixeoTV — Premium IPTV Service | 4K Ultra HD & 60FPS Live Streams',
    description: siteConfig.description,
    images: [`${siteConfig.domain}/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/vixeo-icon.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo-icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/images/vixeo-icon.png' }
    ],
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/logo.svg`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: siteConfig.email,
      availableLanguage: ['English', 'Spanish'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}/logo.svg`,
      },
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="bg-brand-bg text-brand-text min-h-screen flex flex-col antialiased selection:bg-brand-primary selection:text-brand-bg">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
