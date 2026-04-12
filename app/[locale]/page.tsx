import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WorksCarousel from '@/components/WorksCarousel';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
// Import your About component here once you create it

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      <WorksCarousel />
      <About/>
      <Team />
      <Footer/>
    </div>
  );
}