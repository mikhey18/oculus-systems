import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'Oculus Systems | Videovigilancia CCTV Profesional & NVR (Barcelona / Tarragona)',
  description: 'Instalación de cámaras de seguridad sin cuotas mensuales. Sistemas NVR privados, calidad 4K, acceso remoto. Servicio en Cataluña. Video surveillance installation Spain.',
  keywords: [
    'cámaras seguridad barcelona',
    'instalación cctv',
    'videovigilancia sin internet',
    'nvr local',
    'hikvision installer',
    'home assistant camera',
    'cámaras seguridad tarragona',
    'instalación videovigilancia cataluña',
    'sistemas seguridad privados',
    'cctv profesional españa',
  ],
  authors: [{ name: 'Oculus Systems' }],
  creator: 'Oculus Systems',
  publisher: 'Oculus Systems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://oculus-systems.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'ca-ES': '/ca',
      'ru-RU': '/ru',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Oculus Systems | CCTV Profesional Barcelona - Sin Cuotas Mensuales',
    description: 'Instalación profesional de sistemas NVR privados. Calidad 4K, sin nube, sin cuotas. Servicio en Barcelona y Tarragona.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://oculus-systems.com',
    siteName: 'Oculus Systems',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oculus Systems - CCTV Profesional',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oculus Systems | CCTV Profesional Barcelona',
    description: 'Instalación de cámaras de seguridad sin cuotas mensuales. Sistemas NVR privados, calidad 4K.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://oculus-systems.com'} />
        <meta name="geo.region" content="ES-CT" />
        <meta name="geo.placename" content="Barcelona, Tarragona" />
        <meta name="geo.position" content="41.3851;2.1734" />
        <meta name="ICBM" content="41.3851, 2.1734" />
      </head>
      <body className="bg-background">
        <LanguageProvider>
          {children}
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
