import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/Whatsapp/WhatsAppButton';
import { GlobalStructuredData } from '@/components/seo/StructuredData';
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from '@/config/seo';
import { HERO_VIDEO_URL } from '@/config/homeVideos';

const HOME_TITLE = `${SITE_NAME} — Spiritual Tattoo Art in Arambol, Goa`;
const HOME_DESCRIPTION =
  'Ink Baba Tattoo House in Arambol, Goa — custom spiritual tattoos, mandala art, sacred symbols, and professional piercing. Walk-ins welcome. Book: +91 77190 99888.';

const BANNER_VIDEO = HERO_VIDEO_URL;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: [
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: SITE_TAGLINE,
    images: [{ url: '/tattoo.jpeg', width: 437, height: 417, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: SITE_TAGLINE,
    images: [DEFAULT_OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: '#C45C26',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <link
          rel="preconnect"
          href="https://szekpgvomczeswpvthiy.supabase.co"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://szekpgvomczeswpvthiy.supabase.co"
        />

        {/* Preload Hero Video */}
        <link
          rel="preload"
          as="video"
          href={BANNER_VIDEO}
          type="video/mp4"
          fetchPriority="high"
        />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5V5V5QR3');
          `}
        </Script>
      </head>

      <body className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden">

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5V5V5QR3"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          />
        </noscript>

        <GlobalStructuredData />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}