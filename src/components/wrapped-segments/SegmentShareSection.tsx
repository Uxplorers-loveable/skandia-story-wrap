import { useEffect, useRef, useState } from "react";
import { Linkedin, Instagram, Share2, Heart } from "lucide-react";
interface SegmentShareSectionProps {
  clientName: string;
  finalMessage: string;
  hashtag: string;
}
export const SegmentShareSection = ({
  clientName,
  finalMessage,
  hashtag
}: SegmentShareSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="bg-background px-6 py-20">
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
            
            
            {/* Share buttons */}
            
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-12 px-4">
            <p className="text-muted-foreground text-xs leading-relaxed text-center">El contenido de la presente comunicación no constituye una recomendación profesional para realizar inversiones, en los términos del artículo 2.40.1.1.2 del Decreto 2555 de 2010. La Publicación no constituye recomendación, sugerencia, consejo ni asesoría alguna para la toma de decisiones. Skandia no promete ni garantiza el capital ni la obtención de rentabilidad, las obligaciones de Skandia son de medio y no de resultado. 
“Skandia INVEST-ED es un servicio que pertenece a la plataforma del Fondo Voluntario de Pensión Skandia Multifund, administrado por Skandia AFP - ACCAI S.A. Los portafolios pertenecientes al Fondo Voluntario de Pensión Skandia Multifund son distintos a los Fondos Obligatorios de Pensiones que prevé la Ley 100 de 1993”.
Fondo Voluntario de Pensión, administrado por Skandia AFP - ACCAI S.A. Los portafolios pertenecientes al Fondo Voluntario de Pensión Skandia Multifund son distintos a los Fondos Obligatorios de Pensiones que prevé la Ley 100 de 1993.


          </p>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            
          </div>
        </div>
      </div>
    </section>;
};