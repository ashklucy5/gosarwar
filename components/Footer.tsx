'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import Image from 'next/image';

const YoutubeIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>);

export default function Footer({ data }: { data?: any }) {
  const t = useTranslations('footer');
  const c = { title: t('title'), subtitle: t('subtitle'), phone: t('phone.value'), whatsapp: t('whatsapp.link'), email: t('email.value'), youtube: t('youtube.link'), wechat: '/qr/wechat.png', qq: '/qr/qq.png', ...data };
  
  return (
    <footer id="contact" className="relative py-20 bg-linear-to-br from-gray-900 via-violet-950 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8 text-center lg:text-left">
          <div><h3 className="text-2xl font-bold">{c.title}</h3><p className="text-gray-400">{c.subtitle}</p></div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <div className="bg-white p-3 rounded-xl"><Image src={c.wechat} alt="WeChat" width={100} height={100} className="rounded" /></div>
            <div className="bg-white p-3 rounded-xl"><Image src={c.qq} alt="QQ" width={100} height={100} className="rounded" /></div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 space-y-4">
          {[
            { icon: Phone, label: "Phone", value: c.phone, href: `tel:${c.phone}` },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat Now", href: c.whatsapp },
            { icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
            { icon: YoutubeIcon, label: "YouTube", value: "Watch Us", href: c.youtube }
          ].map((item, i) => (
            <a key={i} href={item.href} target="_blank" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition group">
              <div className="p-3 bg-violet-500/20 rounded-xl text-violet-300 group-hover:bg-violet-500 group-hover:text-white transition"><item.icon className="w-5 h-5" /></div>
              <div><p className="text-xs text-gray-400 uppercase">{item.label}</p><p className="font-semibold">{item.value}</p></div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}