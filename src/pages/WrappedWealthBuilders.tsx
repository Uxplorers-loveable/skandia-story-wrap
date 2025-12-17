import { SegmentHeroSection } from "@/components/wrapped-segments/SegmentHeroSection";
import { SegmentModuleSection } from "@/components/wrapped-segments/SegmentModuleSection";
import { SegmentShareSection } from "@/components/wrapped-segments/SegmentShareSection";
import { wealthBuildersConfig } from "@/components/wrapped-segments/wealthBuildersConfig";
import wealthBuildersFooter from "@/assets/wealth-builders-footer.webp";

const WrappedWealthBuilders = () => {
  const config = wealthBuildersConfig;
  const clientName = "Carlos";

  return (
    <div className="bg-background scroll-smooth">
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
        customDisclaimer="El contenido de la presente comunicación no constituye una recomendación profesional para realizar inversiones, en los términos del artículo 2.40.1.1.2 del Decreto 2555 de 2010. La Publicación no constituye recomendación, sugerencia, consejo ni asesoría alguna para la toma de decisiones. Skandia no promete ni garantiza el capital ni la obtención de rentabilidad, las obligaciones de Skandia son de medio y no de resultado."
        footerImage={wealthBuildersFooter}
      />
    </div>
  );
};

export default WrappedWealthBuilders;
