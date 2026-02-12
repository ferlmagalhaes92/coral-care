import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
