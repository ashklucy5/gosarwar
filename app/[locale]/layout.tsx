import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { inter, notoSansSC } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Axilab | Digital Business Growth',
  description: 'We blend creativity and data to achieve success.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html 
      lang={locale} 
      className={`${inter.variable} ${notoSansSC.variable} font-sans`}
    >
      <body className="bg-light text-dark antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}