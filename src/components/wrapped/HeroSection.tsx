import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export const HeroSection = () => {
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
      </div>

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Skandia Wrapped 2024</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Tu año en
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skandia
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12">
          Un recorrido por las decisiones que te acercaron a la vida que quieres construir
        </p>

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
