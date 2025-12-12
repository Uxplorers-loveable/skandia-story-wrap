import { SegmentHeroSection } from "@/components/wrapped-segments/SegmentHeroSection";
import { SegmentModuleSection } from "@/components/wrapped-segments/SegmentModuleSection";
import { financialExplorersConfig } from "@/components/wrapped-segments/financialExplorersConfig";
const WrappedFinancialExplorers = () => {
  const config = financialExplorersConfig;
  const clientName = "Carlos";
  return <div className="bg-[hsl(220,20%,10%)] scroll-smooth">
      <SegmentHeroSection clientName={clientName} greeting={config.welcomeGreeting} headline={config.welcomeHeadline} segmentLabel="Financial Explorers" />
      <SegmentModuleSection modules={config.modules} />
      
      {/* Final Message */}
      <section className="bg-gradient-to-b from-[hsl(220,20%,12%)] to-[hsl(220,20%,8%)] px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary p-1 rounded-3xl">
            <div className="bg-[hsl(220,20%,10%)] rounded-3xl p-12 text-center">
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-4">
                {config.finalMessage}
              </p>
              <p className="text-xl text-primary font-semibold">
                {config.hashtag}
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-white/40 text-sm">Skandia Wrapped 2025 • Experiencia personalizada</p>
          </div>
        </div>
      </section>
    </div>;
};
export default WrappedFinancialExplorers;