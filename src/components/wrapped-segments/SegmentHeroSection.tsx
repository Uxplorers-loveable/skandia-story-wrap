import { useEffect, useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";
import skandiaLogo from "@/assets/skandia-logo.webp";
interface SegmentHeroSectionProps {
  clientName: string;
  greeting: string;
  headline: string;
  segmentLabel: string;
}
export const SegmentHeroSection = ({
  clientName,
  greeting,
  headline,
  segmentLabel
}: SegmentHeroSectionProps) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  // Personalizar el saludo con el nombre del cliente
  const personalizedGreeting = greeting.replace('xxx', clientName);
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Green corner decoration - like in the reference */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-full h-full bg-primary rounded-bl-[100px] transform rotate-0" />
      </div>

      <div className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Skandia Logo */}
        <img src={skandiaLogo} alt="Skandia" className="h-8 md:h-10 mx-auto mb-8 object-contain" />
        
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 mb-8 rounded-sm">
          <Sparkles className="w-5 h-5" />
          <span className="font-medium">Tu IQ Financiero #SinFiltro 2025</span>
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/70 mb-6 font-light">
          {personalizedGreeting.split('Financial Explorer').map((part, index, array) => <span key={index}>
              {part}
              {index < array.length - 1 && <strong className="font-bold">Financial Explorer</strong>}
            </span>)}
        </p>
        
        <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight leading-tight md:text-5xl">
          Es momento de descubrir cómo
          <br />
          <span className="text-primary">subir de nivel</span> en el 2026.
        </h1>

        {/* Scroll indicator */}
        <div className={`flex flex-col items-center gap-2 mt-16 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-sm text-muted-foreground">Scroll para descubrir tu historia</span>
          <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
        </div>
      </div>
    </section>;
};