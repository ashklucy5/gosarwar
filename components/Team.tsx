'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  { id: 1, role: 'CEO', img: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, role: 'CTO', img: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, role: 'Designer', img: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, role: 'Dev Lead', img: 'https://i.pravatar.cc/150?u=4' },
];

export default function Team() {
  const t = useTranslations('team');

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">{t('title')}</h2>
          <p className="text-gray-500">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-primary/20 transition-colors">
                <Image
                  src={member.img}
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-dark">
                {t(`members.${member.role}`)}
              </h3>
              
              {/* Social Buttons (Inline SVGs - No dependencies needed) */}
              <div className="flex justify-center gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* LinkedIn */}
                <button className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                {/* Twitter / X */}
                <button className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}