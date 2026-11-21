import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { OperationalFlow } from "@/components/sections/OperationalFlow";
import { Features } from "@/components/sections/Features";
import { AIAssistant } from "@/components/sections/AIAssistant";
import { Benefits } from "@/components/sections/Benefits";
import { UseCases } from "@/components/sections/UseCases";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <PartnerLogos />
        <Problem />
        <Solution />
        <Ecosystem />
        <OperationalFlow />
        <Features />
        <AIAssistant />
        <Benefits />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
