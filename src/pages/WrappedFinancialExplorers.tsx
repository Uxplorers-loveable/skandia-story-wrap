import { SegmentHeroSection } from "@/components/wrapped-segments/SegmentHeroSection";
import { SegmentModuleSection } from "@/components/wrapped-segments/SegmentModuleSection";
import { SegmentShareSection } from "@/components/wrapped-segments/SegmentShareSection";
import { financialExplorersConfig } from "@/components/wrapped-segments/financialExplorersConfig";

const WrappedFinancialExplorers = () => {
  const config = financialExplorersConfig;
  const clientName = "Carlos"; // En producción vendría del backend

  return (
    <div className="bg-[hsl(220,20%,10%)] scroll-smooth">
      <SegmentHeroSection 
        clientName={clientName}
        greeting={config.welcomeGreeting}
        headline={config.welcomeHeadline}
        segmentLabel="Financial Explorers"
      />
      <SegmentModuleSection modules={config.modules} />
      <SegmentShareSection 
        clientName={clientName}
        finalMessage={config.finalMessage}
        hashtag={config.hashtag}
      />
    </div>
  );
};

export default WrappedFinancialExplorers;
