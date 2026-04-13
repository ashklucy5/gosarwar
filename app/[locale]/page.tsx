import { getSection, getCarouselItems } from "@/lib/db";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorksCarousel from "@/components/WorksCarousel";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default async function Home() {
  // Fetch all data in parallel using our new DB functions
  const [heroDoc, aboutDoc, contactDoc, works, team] = await Promise.all([
    getSection("hero"),
    getSection("about"),
    getSection("contact"),
    getCarouselItems("work"),
    getCarouselItems("team"),
  ]);

  return (
    <main className="flex flex-col gap-0">
      <Hero data={heroDoc?.data} />
      <About data={aboutDoc?.data} />
      <WorksCarousel data={works} />
      <Team data={team} />
      <Footer data={contactDoc?.data} />
    </main>
  );
}