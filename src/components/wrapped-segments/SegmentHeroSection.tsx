import { useEffect, useState } from "react";
import { Sparkles, Rocket } from "lucide-react";
import skandiaLogo from "@/assets/skandia-logo.webp";

interface SegmentHeroSectionProps {
  clientName: string;
  greeting: string;
  headline: string;
  segmentLabel: string;
}

export const SegmentHeroSection = ({ clientName, greeting, headline, segmentLabel }: SegmentHeroSectionProps) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  // Personalizar el saludo con el nombre del cliente
  const personalizedGreeting = greeting.replace('xxx', clientName);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[hsl(220,20%,10%)] to-[hsl(220,25%,15%)]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Skandia Logo */}
        <img 
          src={skandiaLogo} 
          alt="Skandia" 
          className="h-8 md:h-10 mx-auto mb-8 object-contain"
        />
        
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Tu Wrapped 2025</span>
        </div>
        
        <p className="text-xl md:text-2xl text-white/80 mb-6 font-light">
          {personalizedGreeting}
        </p>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
          {headline}
        </h1>

        {/* Decorative element */}
        <div className={`flex items-center justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <Rocket className="w-6 h-6 text-primary animate-bounce" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
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
