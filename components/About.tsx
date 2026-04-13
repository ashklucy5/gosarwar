'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const icons: Record<string, any> = { strategy: Lightbulb, growth: Rocket, team: Users, secure: ShieldCheck };

export default function About({ data }: { data?: any }) {
  const t = useTranslations('about');
  const defaults = { badge: t('badge'), title: t('title'), subtitle: t('subtitle'), heading: t('heading'), description: t('description'), imageUrl: '/default-about.jpg' };
  const content = { ...defaults, ...data };
  
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-xs font-bold mb-4">{content.badge}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{content.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">{content.heading}</h3>
            <p className="text-gray-600 leading-relaxed">{content.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {['strategy','growth','team','secure'].map((k,i) => {
                // ✅ FIX: Assign component to a Capitalized variable
                const Icon = icons[k]; 
                return (
                  <motion.div key={k} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
                    <div className="p-2 bg-violet-50 rounded-lg text-violet-600"><Icon className="w-5 h-5" /></div>
                    <div><p className="font-bold text-sm">{t(`features.${k}.title`)}</p><p className="text-xs text-gray-500">{t(`features.${k}.desc`)}</p></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            {/* ✅ FIX: Changed aspect-[4/3] to aspect-[4/3] (Tailwind v4 prefers arbitrary value syntax for ratios) */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full" style={{ aspectRatio: '4/3' }}>
              <Image src={content.imageUrl} alt="About" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}