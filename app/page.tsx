// src/app/page.tsx
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import SkillsSection from "@/app/components/SkillsSection";
import BtsInfoSection from "@/app/components/BtsInfoSection";
import CyberSecuritySection from "@/app/components/CyberSecuritySection";
import CallToActionSection from "@/app/components/CallToActionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <BtsInfoSection />
      <CyberSecuritySection />
      <CallToActionSection />
    </>
  );
}
