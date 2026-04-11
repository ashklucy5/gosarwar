'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

const Bubbles = () => {
  const bubbles = [
    { size: 'w-80 h-80', pos: 'top-[5%] right-[5%]', color: 'bg-violet-400', opacity: 'opacity-40', delay: 0, duration: 12 },
    { size: 'w-64 h-64', pos: 'top-[25%] left-[10%]', color: 'bg-purple-400', opacity: 'opacity-30', delay: 1.2, duration: 14 },
    { size: 'w-72 h-72', pos: 'bottom-[10%] right-[15%]', color: 'bg-fuchsia-400', opacity: 'opacity-35', delay: 2.4, duration: 13 },
    { size: 'w-56 h-56', pos: 'top-[45%] right-[25%]', color: 'bg-violet-300', opacity: 'opacity-50', delay: 0.6, duration: 11 },
    { size: 'w-48 h-48', pos: 'bottom-[30%] left-[20%]', color: 'bg-purple-300', opacity: 'opacity-45', delay: 1.8, duration: 15 },
    { size: 'w-40 h-40', pos: 'top-[15%] right-[40%]', color: 'bg-fuchsia-300', opacity: 'opacity-55', delay: 3, duration: 10 },
    { size: 'w-36 h-36', pos: 'bottom-[5%] left-[35%]', color: 'bg-violet-400', opacity: 'opacity-40', delay: 3.6, duration: 12 },
    { size: 'w-32 h-32', pos: 'top-[60%] left-[5%]', color: 'bg-purple-400', opacity: 'opacity-50', delay: 0.3, duration: 9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-2xl ${b.size} ${b.pos} ${b.color} ${b.opacity}`}
          animate={{
            y: [0, -55, 0, 40, 0],        // Increased vertical travel distance
            x: [0, 35, 0, -28, 0],         // Increased horizontal travel distance
            scale: [1, 1.18, 1, 0.86, 1],  // Slightly more pronounced scale pulse
          }}
          transition={{
            duration: b.duration,          // Faster: 9-15s instead of 17-26s
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        />
      ))}
      {/* Subtle animated gradient overlay for depth */}
      <motion.div 
        className="absolute inset-0 bg-linear-to-br from-violet-100/20 via-transparent to-fuchsia-100/20"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
export default function Hero() {
  const t = useTranslations('hero');
  const services = t.raw('servicesList') as string[];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50/60 to-fuchsia-50 flex flex-col"
    >
      <Bubbles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-0 flex flex-col flex-1">

        {/* ── ROW 1 · Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-semibold mb-4">
            <TrendingUp className="w-3 h-3" />
            {t('tagline')}
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-3xl mx-auto mb-6">
            {t('titleStart')}
            <span className="bg-lime-300 px-2 rounded-md mx-1">{t('titleHighlight')}</span>
            {t('titleMiddle')}
            {/* decorative half-moon logo mark */}
            <span className="inline-flex items-center mx-2 align-middle gap-0.5">
              <span className="w-6 h-6 rounded-full bg-gray-900 inline-block" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              <span className="w-6 h-6 rounded-full bg-violet-500 inline-block" style={{ clipPath: 'inset(0 0 0 50%)' }} />
            </span>
            {t('titleEnd')}
          </h1>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition-all group shadow-lg hover:-translate-y-0.5 hover:shadow-xl">
            {t('cta')}
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </motion.div>

        {/* ── ROW 2 · Team card (left) + Hero image (right) ── */}
        <div className="relative grid lg:grid-cols-2 items-end gap-0 mb-0">

          {/* Left – team card, bigger + higher so it's clearly a separate card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex items-end pb-32 pl-2 z-20"
          >
            <div className="bg-white/92 backdrop-blur-md rounded-2xl shadow-2xl border border-white/80 p-6 w-[300px] relative">
              <p className="text-base font-bold text-gray-900 leading-snug mb-5">
                {t('teamCard.title')}
              </p>
              {/* Avatars */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-sm">
                      <Image
                        src={`https://i.pravatar.cc/150?u=${i + 20}`}
                        alt="team"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-violet-600 flex items-center justify-center text-white text-xs font-bold shadow-sm z-10">
                    +
                  </div>
                </div>
              </div>
              {/* Doodle arrow */}
              <svg
                className="absolute -right-6 -bottom-4 w-14 h-14 text-violet-400/60 rotate-12"
                viewBox="0 0 80 80" fill="none"
              >
                <path d="M10 65 C 10 20, 65 15, 60 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 5" />
                <path d="M55 60 L60 55 L65 62" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>

          {/* Right – hero image, no background, bleeds upward */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="relative flex justify-center items-end z-10"
            style={{ marginBottom: '-2px' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Professional"
              width={480}
              height={580}
              className="object-contain drop-shadow-2xl select-none"
              style={{ maxHeight: '52vh', width: 'auto' }}
              priority
            />
          </motion.div>
        </div>

        {/* ── ROW 3 · Three stat cards — 45% / 40% / 15%, overlap image bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-4 relative z-30 px-1"
          style={{ marginTop: '-90px' }}
        >
          {/* Card 1 – Business services (purple) · 45% */}
          <div className="bg-violet-600 p-5 rounded-2xl shadow-xl flex-shrink-0" style={{ width: '45%' }}>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-white text-base">{t('stats.servicesTitle')}</h4>
              <span className="text-[10px] bg-white/20 text-white px-2.5 py-0.5 rounded-full font-medium border border-white/30">
                {t('stats.servicesBadge')}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {services.slice(0, 6).map((s: string, i: number) => (
                <div key={i} className="text-xs text-violet-100 bg-white/15 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-200 flex-shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 – Revenue chart (dark) · 40% */}
          <div className="bg-gray-900 text-white p-5 rounded-2xl shadow-xl flex-shrink-0" style={{ width: '40%' }}>
            <p className="text-gray-400 text-xs font-medium mb-0.5">{t('stats.revenueTitle')}</p>
            <p className="text-3xl font-extrabold mb-3 tracking-tight">25,4780</p>
            <div className="flex items-end gap-1.5 h-12">
              {[35, 60, 40, 85, 55, 75, 50].map((h: number, i: number) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 3 ? 'linear-gradient(to top,#7C3AED,#A78BFA)' : 'linear-gradient(to top,#4c1d95,#6d28d9)',
                    opacity: i === 3 ? 1 : 0.55,
                  }}
                />
              ))}
            </div>
            <p className="text-[10px] text-emerald-400 font-semibold mt-2">↑ +25M $</p>
          </div>

          {/* Card 3 – 12K+ (yellow) · remaining ~15% */}
          <div className="bg-yellow-300 p-5 rounded-2xl shadow-xl flex flex-col justify-between flex-1">
            <Users className="w-6 h-6 text-gray-800 mb-2" />
            <div>
              <p className="text-4xl font-extrabold text-gray-900 leading-none mb-1">12K+</p>
              <p className="text-xs font-semibold text-gray-700 leading-tight">{t('stats.helped')}</p>
            </div>
          </div>
        </motion.div>

        {/* ── ROW 4 · Trust / logo bar with marquee animation ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 mb-8 text-center"
        >
          <p className="text-sm text-gray-500 mb-5 font-medium tracking-wide">{t('trust.text')}</p>

          {/* Marquee wrapper */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-purple-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-purple-50/80 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-10 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              {[...Array(2)].map((_, rep) =>
                ['Logoipsum', 'Logoipsum', 'Logoipsum', 'logoipsum', 'Logoipsum'].map((l, i) => (
                  <span
                    key={`${rep}-${i}`}
                    className="text-base font-extrabold tracking-widest text-gray-400/70 px-3 py-1.5 rounded-md bg-gray-200/40 whitespace-nowrap select-none"
                  >
                    {l}
                  </span>
                ))
              )}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}