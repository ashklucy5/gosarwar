'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WorksCarousel({ data = [] }: { data?: any[] }) {
  if (!data.length) return null;
  return (
    <section id="works" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Our Works</h2>
      </div>
      <div className="flex gap-6 animate-scroll-left">
        {[...data, ...data].map((item, i) => (
          <motion.div key={`${item._id}-${i}`} className="flex-shrink-0 w-80 group relative overflow-hidden rounded-2xl shadow-lg" whileHover={{ scale: 1.02 }}>
            <Image src={item.imageUrl} alt={item.title} width={400} height={300} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-bold">{item.title}</p>
              <p className="text-gray-300 text-sm">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}