import { useEffect, useState } from "react";
import { Sparkles, Heart } from "lucide-react";
import { SegmentConfig } from "./segmentConfig";

interface HeroSectionV2Props {
  clientName: string;
  config: SegmentConfig;
}

export const HeroSectionV2 = ({ clientName, config }: HeroSectionV2Props) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[hsl(220,20%,10%)] to-[hsl(220,25%,15%)]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Skandia Wrapped 2025</span>
        </div>
        
        <p className="text-2xl md:text-3xl text-white/80 mb-4 font-light">
          Hola <span className="text-primary font-semibold">{clientName}</span>, este es
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          {config.heroTitle}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8">
          {config.heroSubtitle}
        </p>

        {/* Mission Statement */}
        <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-primary/80 text-sm font-medium">Nuestra misión</span>
          </div>
          <p className="text-white/90 text-lg italic">
            "{config.missionStatement}"
          </p>
        </div>

        <div className="flex justify-center gap-4 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Scroll para descubrir tu historia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
