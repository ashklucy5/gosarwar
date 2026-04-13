'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

const Bubbles = () => {
  const bubbles = [
    { size: 'w-64 h-64 sm:w-80 sm:h-80', pos: 'top-[5%] right-[5%]',    color: 'bg-violet-400',  opacity: 'opacity-40', delay: 0,   duration: 12 },
    { size: 'w-48 h-48 sm:w-64 sm:h-64', pos: 'top-[25%] left-[10%]',   color: 'bg-purple-400',  opacity: 'opacity-30', delay: 1.2, duration: 14 },
    { size: 'w-56 h-56 sm:w-72 sm:h-72', pos: 'bottom-[10%] right-[15%]',color: 'bg-fuchsia-400', opacity: 'opacity-35', delay: 2.4, duration: 13 },
    { size: 'w-40 h-40 sm:w-56 sm:h-56', pos: 'top-[45%] right-[25%]',  color: 'bg-violet-300',  opacity: 'opacity-50', delay: 0.6, duration: 11 },
    { size: 'w-36 h-36 sm:w-48 sm:h-48', pos: 'bottom-[30%] left-[20%]',color: 'bg-purple-300',  opacity: 'opacity-45', delay: 1.8, duration: 15 },
    { size: 'w-32 h-32 sm:w-40 sm:h-40', pos: 'top-[15%] right-[40%]',  color: 'bg-fuchsia-300', opacity: 'opacity-55', delay: 3,   duration: 10 },
    { size: 'w-28 h-28 sm:w-36 sm:h-36', pos: 'bottom-[5%] left-[35%]', color: 'bg-violet-400',  opacity: 'opacity-40', delay: 3.6, duration: 12 },
    { size: 'w-24 h-24 sm:w-32 sm:h-32', pos: 'top-[60%] left-[5%]',    color: 'bg-purple-400',  opacity: 'opacity-50', delay: 0.3, duration: 9  },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-2xl ${b.size} ${b.pos} ${b.color} ${b.opacity}`}
          animate={{ y: [0, -55, 0, 40, 0], x: [0, 35, 0, -28, 0], scale: [1, 1.18, 1, 0.86, 1] }}
          transition={{ duration: b.duration, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
        />
      ))}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-violet-100/20 via-transparent to-fuchsia-100/20"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default function Hero({ data }: { data?: any }) {
  const t = useTranslations('hero');
  const services = t.raw('servicesList') as string[];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50/60 to-fuchsia-50 flex flex-col"
    >
      <Bubbles />

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 sm:pt-24 lg:pt-28 pb-0 px-4 sm:px-6 lg:px-12 flex flex-col flex-1">

        {/* ── ROW 1 · Badge + Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 sm:mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-violet-100 text-violet-700 rounded-full text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4">
            <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            {t('tagline')}
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-3xl mx-auto mb-0">
            {t('titleStart')}
            <span className="bg-lime-300 px-1 sm:px-1.5 lg:px-2 rounded-md mx-0.5 sm:mx-1">{t('titleHighlight')}</span>
            {t('titleMiddle')}
            <span className="inline-flex items-center mx-1 sm:mx-2 align-middle gap-0.5">
              <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gray-900 inline-block" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-violet-500 inline-block" style={{ clipPath: 'inset(0 0 0 50%)' }} />
            </span>
            {t('titleEnd')}
          </h1>
        </motion.div>

        {/* ── ROW 2 · Team card (left) + Hero image (right) ── */}
        {/*
          Mobile: image on top, team card below it — both centered.
          The team card uses absolute positioning on lg to float over the image bottom.
          On mobile we use a relative stacked approach instead so nothing overflows.
        */}
        <div className="relative mb-0">

          {/* ── MOBILE version of Row 2 (hidden on lg+) ── */}
          <div className="lg:hidden flex flex-col items-center gap-3">
            {/* Image — constrained to viewport width */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full flex justify-center"
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Professional"
                width={480}
                height={580}
                className="object-contain drop-shadow-2xl select-none"
                style={{ maxHeight: '38vh', width: 'auto', maxWidth: '100%' }}
                priority
              />
            </motion.div>

            {/* Team card — full width on mobile, auto height */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-full"
            >
              <div className="bg-white/92 backdrop-blur-md rounded-2xl shadow-2xl border border-white/80 p-4 relative">
                <p className="text-sm font-bold text-gray-900 leading-snug mb-3">
                  {t('teamCard.title')}
                </p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-sm">
                      <Image src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="team" width={32} height={32} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-violet-600 flex items-center justify-center text-white text-[10px] font-bold shadow-sm z-10">+</div>
                </div>
                {/* doodle stays but clipped inside card bounds */}
                <svg className="absolute right-3 bottom-3 w-8 h-8 text-violet-400/40" viewBox="0 0 80 80" fill="none">
                  <path d="M10 65 C 10 20, 65 15, 60 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 5" />
                  <path d="M55 60 L60 55 L65 62" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* ── DESKTOP version of Row 2 (hidden below lg) ── */}
          <div className="hidden lg:grid grid-cols-2 items-end gap-0">
            {/* Left: team card with upward pb offset */}
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
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-sm">
                      <Image src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="team" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-violet-600 flex items-center justify-center text-white text-xs font-bold shadow-sm z-10">+</div>
                </div>
                <svg className="absolute -right-6 -bottom-3 w-14 h-14 text-violet-400/60 rotate-12" viewBox="0 0 80 80" fill="none">
                  <path d="M10 65 C 10 20, 65 15, 60 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 5" />
                  <path d="M55 60 L60 55 L65 62" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>

            {/* Right: hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="flex justify-center items-end z-10"
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
        </div>

        {/* ── ROW 3 · Stat cards ── */}
        {/*
          Mobile: stacked column — each card full width, no horizontal scroll.
            Purple card: full width, service tags in 2 cols.
            Revenue card: full width, smaller chart.
            Yellow card: full width, horizontal layout (icon left | number right).
          Desktop: flex row with 45/40/15% widths and negative margin overlap.
        */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative z-30 px-0 mt-3 lg:mt-0"
          style={{ marginTop: undefined }} /* reset inline — handled per breakpoint below */
        >
          {/* ── MOBILE stat cards (hidden lg+) ── */}
          <div className="lg:hidden flex flex-col gap-3">

            {/* Purple services card — full width */}
            <div className="bg-violet-600 p-4 rounded-2xl shadow-xl w-full">
              <div className="flex justify-between items-center mb-2.5">
                <h4 className="font-bold text-white text-sm">{t('stats.servicesTitle')}</h4>
                <span className="text-[9px] bg-white/20 text-white px-2 py-0.5 rounded-full font-medium border border-white/30">
                  {t('stats.servicesBadge')}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {services.slice(0, 6).map((s: string, i: number) => (
                  <div key={i} className="text-[11px] text-violet-100 bg-white/15 rounded-full px-2.5 py-1 flex items-center gap-1.5 min-w-0">
                    <span className="w-1 h-1 rounded-full bg-violet-200 flex-shrink-0" />
                    <span className="truncate">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue card — full width */}
            <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-xl w-full">
              <p className="text-gray-400 text-[10px] font-medium mb-0.5">{t('stats.revenueTitle')}</p>
              <p className="text-2xl font-extrabold mb-2 tracking-tight">25,4780</p>
              <div className="flex items-end gap-1 h-9 w-full">
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
              <p className="text-[9px] text-emerald-400 font-semibold mt-1.5">↑ +25M $</p>
            </div>

            {/* Yellow 12K card — horizontal layout on mobile so it's not too tall */}
            <div className="bg-yellow-300 p-4 rounded-2xl shadow-xl w-full flex items-center justify-between">
              <Users className="w-8 h-8 text-gray-800 flex-shrink-0" />
              <div className="text-right">
                <p className="text-3xl font-extrabold text-gray-900 leading-none">12K+</p>
                <p className="text-[10px] font-semibold text-gray-700 leading-tight mt-0.5">{t('stats.helped')}</p>
              </div>
            </div>
          </div>

          {/* ── DESKTOP stat cards (hidden below lg) ── */}
          <div
            className="hidden lg:flex gap-4 px-1"
            style={{ marginTop: '-90px' }}
          >
            {/* Purple 45% */}
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

            {/* Dark 40% */}
            <div className="bg-gray-900 text-white p-5 rounded-2xl shadow-xl flex-shrink-0" style={{ width: '40%' }}>
              <p className="text-gray-400 text-xs font-medium mb-0.5">{t('stats.revenueTitle')}</p>
              <p className="text-3xl font-extrabold mb-3 tracking-tight">25,4780</p>
              <div className="flex items-end gap-1.5 h-12">
                {[35, 60, 40, 85, 55, 75, 50].map((h: number, i: number) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{
                    height: `${h}%`,
                    background: i === 3 ? 'linear-gradient(to top,#7C3AED,#A78BFA)' : 'linear-gradient(to top,#4c1d95,#6d28d9)',
                    opacity: i === 3 ? 1 : 0.55,
                  }} />
                ))}
              </div>
              <p className="text-[10px] text-emerald-400 font-semibold mt-2">↑ +25M $</p>
            </div>

            {/* Yellow flex-1 (~15%) */}
            <div className="bg-yellow-300 p-5 rounded-2xl shadow-xl flex flex-col justify-between flex-1">
              <Users className="w-6 h-6 text-gray-800 mb-2" />
              <div>
                <p className="text-4xl font-extrabold text-gray-900 leading-none mb-1">12K+</p>
                <p className="text-xs font-semibold text-gray-700 leading-tight">{t('stats.helped')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── ROW 4 · Trust marquee ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 sm:mt-10 mb-6 sm:mb-8 text-center"
        >
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-5 font-medium tracking-wide">{t('trust.text')}</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-24 bg-gradient-to-r from-purple-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-24 bg-gradient-to-l from-purple-50/80 to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-5 sm:gap-8 lg:gap-10 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            >
              {[...Array(2)].map((_, rep) =>
                ['Logoipsum', 'Logoipsum', 'Logoipsum', 'logoipsum', 'Logoipsum'].map((l, i) => (
                  <span
                    key={`${rep}-${i}`}
                    className="text-xs sm:text-sm lg:text-base font-extrabold tracking-widest text-gray-400/70 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-gray-200/40 whitespace-nowrap select-none"
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