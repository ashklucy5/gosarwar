'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');

  // Feature Icons mapping
  const icons: Record<string, React.ElementType> = {
    strategy: Lightbulb,
    growth: Rocket,
    team: Users,
    secure: ShieldCheck,
  };

  return (
    <section 
      id="about" 
      className="relative py-20 sm:py-28 bg-slate-50 overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-[120px] -translate-y-1/3 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-200/20 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          
          {/* Left: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              {t('heading')}
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {t('description')}
            </p>
            
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['strategy', 'growth', 'team', 'secure'].map((key, i) => {
                const Icon = icons[key];
                return (
                  <motion.div 
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-violet-200 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 p-2.5 bg-violet-50 rounded-xl text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{t(`features.${key}.title`)}</h4>
                      <p className="text-sm text-gray-500">{t(`features.${key}.desc`)}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team Collaboration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60" />
              
              {/* Floating Text Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                <p className="font-bold text-gray-900 text-sm sm:text-base">{t('stats.cardTitle')}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="text-center">
                    <p className="text-lg sm:text-xl font-extrabold text-violet-600">{t('stats.value1')}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">{t('stats.label1')}</p>
                  </div>
                  <div className="w-px h-8 bg-gray-300" />
                  <div className="text-center">
                    <p className="text-lg sm:text-xl font-extrabold text-fuchsia-600">{t('stats.value2')}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">{t('stats.label2')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements Behind Image */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-fuchsia-500/30 rounded-full blur-2xl" />
            <div className="absolute -z-10 -top-8 -left-8 w-40 h-40 bg-violet-500/30 rounded-full blur-2xl" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}