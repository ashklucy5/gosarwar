'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen flex items-center justify-center bg-light px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-dark mb-4">{t('title')}</h2>
        <p className="text-gray-500 mb-8">{t('message')}</p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
        >
          ← {t('backHome')}
        </Link>
      </div>
    </div>
  );
}