import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://103.179.189.81:3000';
const TITLE = 'Code Web Không Khó — Organize anything, together';
const DESCRIPTION =
  'Boards, lists, and cards to organize your projects and collaborate with your team in real time. A fast, simple Code Web Không Khó, free to start.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Code Web Không Khó',
  },
  description: DESCRIPTION,
  applicationName: 'Code Web Không Khó',
  keywords: [
    'Code Web Không Khó',
    'kanban board',
    'project management',
    'task management',
    'team collaboration',
    'boards lists cards',
    'agile',
    'productivity',
  ],
  authors: [{ name: 'Code Web Không Khó' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Code Web Không Khó',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'productivity',
};

export const viewport = {
  themeColor: '#1868DB',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Code Web Không Khó',
      url: SITE_URL,
      description: DESCRIPTION,
      logo: `${SITE_URL}/icon.png`,
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Code Web Không Khó',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: SITE_URL,
      description: DESCRIPTION,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1240',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
