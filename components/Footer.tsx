'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail } from 'lucide-react'; // Removed Youtube import
import Image from 'next/image';

// Simple YouTube SVG Icon Component
const YoutubeIcon = () => (
  <svg 
    className="w-5 h-5" 
    fill="currentColor" 
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer 
      id="contact" 
      className="relative py-20 sm:py-28 bg-linear-to-br from-gray-900 via-violet-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-violet-600/20 rounded-full blur-[120px] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('title')}</h2>
          <p className="text-gray-400 max-w-xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* QR Codes Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">{t('qrTitle')}</h3>
              <p className="text-gray-400 text-sm">{t('qrSubtitle')}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* WeChat QR */}
              <div className="bg-white p-4 rounded-2xl shadow-2xl shadow-violet-500/10 hover:scale-105 transition-transform duration-300">
                <div className="relative w-32 h-32 bg-gray-100 rounded-xl overflow-hidden">
                  <Image 
                    src="/qr/wechat.png" 
                    alt="WeChat QR" 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
                <p className="text-center text-gray-800 font-semibold mt-3 text-sm">WeChat</p>
              </div>

              {/* QQ QR */}
              <div className="bg-white p-4 rounded-2xl shadow-2xl shadow-violet-500/10 hover:scale-105 transition-transform duration-300">
                <div className="relative w-32 h-32 bg-gray-100 rounded-xl overflow-hidden">
                  <Image 
                    src="/qr/qq.png" 
                    alt="QQ QR" 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
                <p className="text-center text-gray-800 font-semibold mt-3 text-sm">QQ</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Card Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">{t('contactTitle')}</h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <a 
                  href={`tel:${t('phone.value')}`} 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-violet-500/20 rounded-xl text-violet-300 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{t('phone.label')}</p>
                    <p className="font-semibold text-white">{t('phone.value')}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href={t('whatsapp.link')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-green-500/20 rounded-xl text-green-300 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{t('whatsapp.label')}</p>
                    <p className="font-semibold text-white">{t('whatsapp.value')}</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${t('email.value')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-fuchsia-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-fuchsia-500/20 rounded-xl text-fuchsia-300 group-hover:bg-fuchsia-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{t('email.label')}</p>
                    <p className="font-semibold text-white">{t('email.value')}</p>
                  </div>
                </a>

                {/* YouTube - Using Custom SVG */}
                <a 
                  href={t('youtube.link')}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-red-500/20 rounded-xl text-red-300 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <YoutubeIcon /> 
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{t('youtube.label')}</p>
                    <p className="font-semibold text-white">{t('youtube.value')}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm"
        >
          <p>{t('copyright')}</p>
        </motion.div>
      </div>
    </footer>
  );
}