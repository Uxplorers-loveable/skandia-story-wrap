import { SegmentHeroSection } from "@/components/wrapped-segments/SegmentHeroSection";
import { SegmentModuleSection } from "@/components/wrapped-segments/SegmentModuleSection";
import { SegmentShareSection } from "@/components/wrapped-segments/SegmentShareSection";
import { capitalInvestorsConfig } from "@/components/wrapped-segments/capitalInvestorsConfig";
import capitalInvestorsFooter from "@/assets/capital-investors-footer.webp";

const WrappedCapitalInvestors = () => {
  const config = capitalInvestorsConfig;
  const clientName = "Carlos";

  return (
    <div className="bg-background scroll-smooth">
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
        customDisclaimer={"El contenido de la presente comunicación no constituye una recomendación profesional para realizar inversiones, en los términos del artículo 2.40.1.1.2 del Decreto 2555 de 2010. La Publicación no constituye recomendación, sugerencia, consejo ni asesoría alguna para la toma de decisiones. Skandia no promete ni garantiza el capital ni la obtención de rentabilidad, las obligaciones de Skandia son de medio y no de resultado.\n\nCREA AHORRO y CREA PATRIMONIO, son productos que pertenecen a la compañía Skandia Seguros S.A.\n\nSkandia Valores S.A. Sociedad Comisionista de Bolsa promociona y oferta los negocios y servicios de AIVA Investments S.A. y de BCP Advisors LLC del mercado de valores del exterior, en virtud de un contrato de corresponsalía firmado con dichas sociedades."}
        footerImage={capitalInvestorsFooter}
      />
    </div>
  );
};

export default WrappedCapitalInvestors;