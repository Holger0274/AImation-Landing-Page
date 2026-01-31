import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import SocialProof from '@/components/sections/SocialProof';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Services />
        <Process />
        <SocialProof />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
