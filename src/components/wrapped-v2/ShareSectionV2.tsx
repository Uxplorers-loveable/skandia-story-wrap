import { useEffect, useRef, useState } from "react";
import { Linkedin, Instagram, Share2 } from "lucide-react";

interface ShareSectionV2Props {
  clientName: string;
}

export const ShareSectionV2 = ({ clientName }: ShareSectionV2Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b from-[hsl(220,20%,10%)] to-[hsl(220,20%,8%)] px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Final message with gradient border */}
          <div className="bg-gradient-to-r from-primary via-accent to-secondary p-1 rounded-3xl">
            <div className="bg-[hsl(220,20%,10%)] rounded-3xl p-12 text-center">
              <p className="text-3xl md:text-4xl text-white font-light leading-relaxed mb-6">
                <span className="text-primary font-semibold">{clientName}</span>, gracias por confiar en nosotros para construir{" "}
                <span className="font-bold text-primary">tu futuro</span>.
              </p>
              <p className="text-xl text-white/70 mb-8">
                Cada decisión cuenta. Seguimos contigo en 2026.
              </p>
              
              {/* Share buttons */}
              <div className="flex items-center justify-center gap-4">
                <p className="text-white/70 text-sm mr-2">Compartir tu Wrapped:</p>
                <button 
                  className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-full transition-all hover:scale-110"
                  aria-label="Compartir en LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </button>
                <button 
                  className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-full transition-all hover:scale-110"
                  aria-label="Compartir en Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </button>
                <button 
                  className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-full transition-all hover:scale-110"
                  aria-label="Más opciones para compartir"
                >
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-white/40 text-sm">
              Skandia Wrapped 2025 • Experiencia personalizada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
