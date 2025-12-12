import { SegmentHeroSection } from "@/components/wrapped-segments/SegmentHeroSection";
import { SegmentModuleSection } from "@/components/wrapped-segments/SegmentModuleSection";
import { SegmentShareSection } from "@/components/wrapped-segments/SegmentShareSection";
import { wealthBuildersConfig } from "@/components/wrapped-segments/wealthBuildersConfig";

const WrappedWealthBuilders = () => {
  const config = wealthBuildersConfig;
  const clientName = "Carlos"; // En producción vendría del backend

  return (
    <div className="bg-[hsl(220,20%,10%)] scroll-smooth">
      <SegmentHeroSection 
        clientName={clientName}
        greeting={config.welcomeGreeting}
        headline={config.welcomeHeadline}
        segmentLabel="Wealth Builders"
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

export default WrappedWealthBuilders;
