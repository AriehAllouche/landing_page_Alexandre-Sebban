import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Alexandre Sebban - Avocat au Barreau de Paris | Contentieux Civil, Droit du Travail, Litiges Immobiliers',
  description: 'Maître Alexandre Sebban, avocat au Barreau de Paris vous accompagne dans vos litiges civils, immobiliers et en droit du travail. Cabinet situé 21 Rue Viète, Paris 17e. Consultation sous 48h.',
  keywords: 'avocat, Paris, droit civil, droit du travail, litige immobilier, contentieux, Maître Sebban, avocat Paris 17, contentieux civil',
  authors: [{ name: 'Maître Alexandre Sebban' }],
  robots: { index: true, follow: true },
  metadataBase: new URL('https://alexandre-sebban-avocat.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Alexandre Sebban - Avocat au Barreau de Paris',
    description: 'Cabinet d\'avocat haut de gamme spécialisé en contentieux civil, droit du travail et litiges immobiliers. Consultation sous 48h.',
    siteName: 'Alexandre Sebban - Avocat',
    images: [{ url: 'https://images.pexels.com/photos/5668840/pexels-photo-5668840.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexandre Sebban - Avocat au Barreau de Paris',
    description: 'Cabinet d\'avocat spécialisé en contentieux civil, droit du travail et litiges immobiliers.',
    images: ['https://images.pexels.com/photos/5668840/pexels-photo-5668840.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Attorney",
                "@id": "https://alexandre-sebban-avocat.fr/#attorney",
                "name": "Alexandre Sebban",
                "jobTitle": "Avocat au Barreau de Paris",
                "description": "Avocat spécialisé en contentieux civil, droit du travail et litiges immobiliers",
                "image": "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
                "areaServed": {
                  "@type": "AdministrativeArea",
                  "name": "Paris et Île-de-France"
                },
                "knowsAbout": ["Droit civil", "Droit du travail", "Litiges immobiliers", "Contentieux"],
                "hasCredential": {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Master 2 Recherche en Droit des Obligations Civiles et Commerciales - Université Paris Cité"
                }
              },
              {
                "@type": "LegalService",
                "@id": "https://alexandre-sebban-avocat.fr/#localservice",
                "name": "Cabinet Alexandre Sebban",
                "legalName": "Cabinet d'avocat Alexandre Sebban",
                "description": "Cabinet d'avocat haut de gamme à Paris 17e, spécialisé en contentieux civil, droit du travail et litiges immobiliers",
                "url": "https://alexandre-sebban-avocat.fr",
                "telephone": "+33660243299",
                "email": "contact@alexandre-sebban-avocat.fr",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "21 Rue Viète",
                  "addressLocality": "Paris",
                  "postalCode": "75017",
                  "addressCountry": "FR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.8862,
                  "longitude": 2.3158
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "20:00"
                  }
                ],
                "priceRange": "€€€",
                "areaServed": ["Paris", "Île-de-France"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Services juridiques",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Consultation juridique",
                        "description": "Consultation avec Maître Sebban"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "reviewCount": 47,
                  "ratingValue": 4.8,
                  "bestRating": 5,
                  "worstRating": 1
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://alexandre-sebban-avocat.fr/#localbusiness",
                "name": "Cabinet Alexandre Sebban",
                "description": "Cabinet d'avocat au Barreau de Paris, situé dans le 17e arrondissement",
                "url": "https://alexandre-sebban-avocat.fr",
                "telephone": "+33660243299",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "21 Rue Viète",
                  "addressLocality": "Paris",
                  "postalCode": "75017",
                  "addressCountry": "FR"
                },
                "image": "https://images.pexels.com/photos/5668840/pexels-photo-5668840.jpeg",
                "openingHours": "Mo-Fr 09:00-20:00"
              }
            ]
          })
        }} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
