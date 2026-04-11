'use client';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  const switchLocale = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath || `/${locale}`);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 transition">
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
      </button>
      <div className="absolute right-0 mt-2 w-24 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <button onClick={() => switchLocale('en')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-xl">English</button>
        <button onClick={() => switchLocale('zh')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 last:rounded-b-xl">中文</button>
      </div>
    </div>
  );
}