import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blumgi Slime",
  description: "Play Blumgi Slime Online - A fun and addictive slime platformer game!",
};

async function getMessages(locale) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    return (await import(`../../messages/en.json`)).default;
  }
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);
  
  return (
    <html lang={locale}>
      <head>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
