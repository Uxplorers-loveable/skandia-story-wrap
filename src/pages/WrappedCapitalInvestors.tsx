import { SegmentHeroSection } from "@/components/wrapped-segments/SegmentHeroSection";
import { SegmentModuleSection } from "@/components/wrapped-segments/SegmentModuleSection";
import { SegmentShareSection } from "@/components/wrapped-segments/SegmentShareSection";
import { capitalInvestorsConfig } from "@/components/wrapped-segments/capitalInvestorsConfig";

const WrappedCapitalInvestors = () => {
  const config = capitalInvestorsConfig;
  const clientName = "Carlos"; // En producción vendría del backend

  return (
    <div className="bg-[hsl(220,20%,10%)] scroll-smooth">
      <SegmentHeroSection 
        clientName={clientName}
        greeting={config.welcomeGreeting}
        headline={config.welcomeHeadline}
        segmentLabel="Capital Investors"
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

export default WrappedCapitalInvestors;
