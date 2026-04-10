import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import WhyChasingSection from "@/components/WhyChasingSection";
import SolutionSection from "@/components/SolutionSection";
import InsideSection from "@/components/InsideSection";
import TransformSection from "@/components/TransformSection";
import ForWhomSection from "@/components/ForWhomSection";
import OfferSection from "@/components/OfferSection";
import ValueVsPriceSection from "@/components/ValueVsPriceSection";
import OrderBumpSection from "@/components/OrderBumpSection";
import FaqSection from "@/components/FaqSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => (
  <main>
    <HeroSection />
    <ScrollReveal><PainSection /></ScrollReveal>
    <ScrollReveal><WhyChasingSection /></ScrollReveal>
    <ScrollReveal><SolutionSection /></ScrollReveal>
    <ScrollReveal><InsideSection /></ScrollReveal>
    <ScrollReveal><TransformSection /></ScrollReveal>
    <ScrollReveal><ForWhomSection /></ScrollReveal>
    <ScrollReveal><OfferSection /></ScrollReveal>
    <ScrollReveal><ValueVsPriceSection /></ScrollReveal>
    <ScrollReveal><OrderBumpSection /></ScrollReveal>
    <ScrollReveal><FaqSection /></ScrollReveal>
    <ScrollReveal><ClosingSection /></ScrollReveal>
  </main>
);

export default Index;
