import type { Metadata } from 'next';
import './globals.css';
import { PageReveal } from '@/components/PageReveal';
import { CustomCursor } from '@/components/CustomCursor';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://atinjain.com'),
  title: 'Atin Jain | Financial Operations · Business Ownership · Pre-Launch Founder',
  description:
    'High school junior. Managed accounts for JSTickets. Scaled CWF Apparel to profitability. Building LeaseMynd AI.',
  openGraph: {
    title: 'Atin Jain | Financial Operations · Business Ownership · Pre-Launch Founder',
    description:
      'High school junior. Managed accounts for JSTickets. Scaled CWF Apparel to profitability. Building LeaseMynd AI.',
    url: 'https://atinjain.com',
    siteName: 'Atin Jain',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atin Jain | Financial Operations · Business Ownership · Pre-Launch Founder',
    description:
      'High school junior. Managed accounts for JSTickets. Scaled CWF Apparel to profitability. Building LeaseMynd AI.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://atinjain.com' },
};

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Atin Jain',
  url: 'https://atinjain.com',
  email: 'atinjain117@gmail.com',
  jobTitle: 'Founder & Financial Operations',
  description:
    'High school junior aspiring to major in finance and build a career in financial services.',
  sameAs: ['https://linkedin.com/in/atinjain1'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monroe Township',
    addressRegion: 'NJ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-charcoal text-white font-sans">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden font-sans">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-charcoal focus:outline-none"
        >
          Skip to content
        </a>
        <Providers>
          <PageReveal />
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
