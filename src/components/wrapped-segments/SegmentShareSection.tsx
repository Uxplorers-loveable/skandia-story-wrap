import { useEffect, useRef, useState } from "react";
import { Linkedin, Instagram, Share2, Heart } from "lucide-react";

interface SegmentShareSectionProps {
  clientName: string;
  finalMessage: string;
  hashtag: string;
}

export const SegmentShareSection = ({ clientName, finalMessage, hashtag }: SegmentShareSectionProps) => {
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
      className="bg-background px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Final message card */}
          <div className="bg-secondary rounded-3xl p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            
            <p className="text-2xl md:text-3xl text-secondary-foreground font-light leading-relaxed mb-4">
              {finalMessage}
            </p>
            
            <p className="text-xl text-primary font-semibold mb-8">
              {hashtag}
            </p>
            
            {/* Thank you message */}
            <p className="text-lg text-secondary-foreground/80 mb-8">
              <span className="text-primary font-semibold">{clientName}</span>, gracias por confiar en nosotros para construir tu futuro.
            </p>
            
            {/* Share buttons */}
            <div className="flex items-center justify-center gap-4">
              <p className="text-secondary-foreground/70 text-sm mr-2">Compartir tu Wrapped:</p>
              <button 
                className="p-3 bg-secondary-foreground/10 hover:bg-primary border border-secondary-foreground/20 hover:border-primary rounded-full transition-all hover:scale-110 group"
                aria-label="Compartir en LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </button>
              <button 
                className="p-3 bg-secondary-foreground/10 hover:bg-primary border border-secondary-foreground/20 hover:border-primary rounded-full transition-all hover:scale-110 group"
                aria-label="Compartir en Instagram"
              >
                <Instagram className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </button>
              <button 
                className="p-3 bg-secondary-foreground/10 hover:bg-primary border border-secondary-foreground/20 hover:border-primary rounded-full transition-all hover:scale-110 group"
                aria-label="Más opciones para compartir"
              >
                <Share2 className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              Skandia Wrapped 2025 • Experiencia personalizada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
