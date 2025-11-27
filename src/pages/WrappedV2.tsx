import { HeroSectionV2 } from "@/components/wrapped-v2/HeroSectionV2";
import { StorySection } from "@/components/wrapped-v2/StorySection";
import { CTASection } from "@/components/wrapped-v2/CTASection";
import { ShareSectionV2 } from "@/components/wrapped-v2/ShareSectionV2";
import { getSegmentConfig, clientData, CustomerSegment } from "@/components/wrapped-v2/segmentConfig";
import { useSearchParams } from "react-router-dom";

const WrappedV2 = () => {
  const [searchParams] = useSearchParams();
  
  // Get segment from URL or use default from clientData
  const segmentParam = searchParams.get('segment') as CustomerSegment | null;
  const segment = segmentParam && ['investor', 'newcomer', 'declining', 'irregular'].includes(segmentParam) 
    ? segmentParam 
    : clientData.segment;
  
  const config = getSegmentConfig(segment);

  return (
    <div className="bg-[hsl(220,20%,10%)] scroll-smooth">
      <HeroSectionV2 clientName={clientData.name} config={config} />
      <StorySection config={config} />
      <CTASection actions={config.ctaActions} />
      <ShareSectionV2 clientName={clientData.name} />
    </div>
  );
};

export default WrappedV2;
