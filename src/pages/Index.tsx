import { HeroSection } from "@/components/wrapped/HeroSection";
import { SavingsSection } from "@/components/wrapped/SavingsSection";
import { PensionsSection } from "@/components/wrapped/PensionsSection";
import { InsuranceSection } from "@/components/wrapped/InsuranceSection";
import { AchievementsSection } from "@/components/wrapped/AchievementsSection";
import { FutureSection } from "@/components/wrapped/FutureSection";

const Index = () => {
  return (
    <div className="bg-[hsl(220,20%,10%)] scroll-smooth">
      <HeroSection />
      <SavingsSection />
      <PensionsSection />
      <InsuranceSection />
      <AchievementsSection />
      <FutureSection />
    </div>
  );
};

export default Index;
