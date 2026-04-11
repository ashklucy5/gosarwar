'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const works = Array(8).fill(null).map((_, i) => ({
  id: i,
  img: `https://picsum.photos/seed/${i+10}/600/400`,
  title: `Project ${i+1}`
}));

export default function WorksCarousel() {
  const t = useTranslations('carousel');
  
  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-3">{t('title')}</h2>
        <p className="text-gray-500">{t('subtitle')}</p>
      </div>

      {/* Row 1 */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="inline-flex animate-scroll-left gap-6">
          {[...works, ...works].map((item, idx) => (
            <div key={idx} className="w-80 h-56 rounded-2xl overflow-hidden relative shrink-0 group">
              <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 (Reverse direction) */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-scroll-left-fast gap-6" style={{ animationDirection: 'reverse' }}>
          {[...works, ...works].map((item, idx) => (
            <div key={`r${idx}`} className="w-80 h-56 rounded-2xl overflow-hidden relative shrink-0 group">
              <Image src={`https://picsum.photos/seed/${idx+50}/600/400`} alt={item.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}