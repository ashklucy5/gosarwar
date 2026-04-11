'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe, Monitor, PenTool, ShoppingBag, TrendingUp, Users } from 'lucide-react';

const icons = {
  seo: Globe,
  design: Monitor,
  marketing: PenTool,
  ecommerce: ShoppingBag,
  analytics: TrendingUp,
  support: Users
};

export default function Services() {
  const t = useTranslations('services');
  const services = ['seo', 'design', 'marketing', 'ecommerce', 'analytics', 'support'];

  return (
    <section id="services" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((key, i) => {
            const IconComponent = icons[key as keyof typeof icons];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{t(`items.${key}.title`)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`items.${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}