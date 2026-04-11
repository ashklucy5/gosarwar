'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './ui/LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const links = ['home', 'services', 'works', 'about', 'team', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary">Axilab</div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((key) => (
              <a key={key} href={`#${key}`} className="text-sm font-medium text-gray-600 hover:text-primary transition">
                {t(key)}
              </a>
            ))}
            <LanguageSwitcher />
            <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition">
              {t('bookDemo')}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          {links.map((key) => (
            <a key={key} href={`#${key}`} className="block text-gray-600" onClick={() => setOpen(false)}>
              {t(key)}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}