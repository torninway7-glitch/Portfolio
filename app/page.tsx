import { Ticker } from "@/components/site/ticker";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Logos } from "@/components/site/logos";
import { Services } from "@/components/site/services";
import { Work } from "@/components/site/work";
import { Process } from "@/components/site/process";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Ticker />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
