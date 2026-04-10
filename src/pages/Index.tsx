import ScrollReveal from "@/components/ScrollReveal";
import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import WhyChasingSection from "@/components/WhyChasingSection";
import InsideSection from "@/components/InsideSection";
import TransformSection from "@/components/TransformSection";
import ForWhomSection from "@/components/ForWhomSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import ValueVsPriceSection from "@/components/ValueVsPriceSection";
import FaqSection from "@/components/FaqSection";
import ClosingSection from "@/components/ClosingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main>
    <UrgencyBar />
    <HeroSection />
    <ScrollReveal><PainSection /></ScrollReveal>
    <ScrollReveal><WhyChasingSection /></ScrollReveal>
    <ScrollReveal><InsideSection /></ScrollReveal>
    <ScrollReveal><TransformSection /></ScrollReveal>
    <ScrollReveal><ForWhomSection /></ScrollReveal>
    <ScrollReveal><TestimonialsSection /></ScrollReveal>
    <ScrollReveal><OfferSection /></ScrollReveal>
    <ValueVsPriceSection />
    <ScrollReveal><FaqSection /></ScrollReveal>
    <ScrollReveal><ClosingSection /></ScrollReveal>
    <FooterSection />
  </main>
);

export default Index;
