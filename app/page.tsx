import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Philosophy from "@/components/sections/Philosophy";
import WhyLegend from "@/components/sections/WhyLegend";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <Philosophy />
      <WhyLegend />
      <Testimonials />
       <CTABanner />
    </main>
  );
}