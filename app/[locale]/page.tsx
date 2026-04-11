import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WorksCarousel from '@/components/WorksCarousel';
import Team from '@/components/Team';
// Import your About component here once you create it

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      <WorksCarousel />
      <Team />
      
      {/* Footer Placeholder */}
      <footer id="contact" className="py-12 bg-dark text-white text-center min-h-50 flex items-center justify-center">
        <p className="text-gray-400">Contact Section Coming Next</p>
      </footer>
    </div>
  );
}