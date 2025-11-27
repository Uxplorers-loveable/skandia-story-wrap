import { useEffect, useRef, useState } from "react";
import { ArrowRight, Calculator, Phone, Compass, Settings, Target, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAAction } from "./segmentConfig";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  Phone,
  Compass,
  Settings,
  Target,
  Bell
};

interface CTASectionProps {
  actions: CTAAction[];
}

export const CTASection = ({ actions }: CTASectionProps) => {
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
      className="bg-gradient-to-b from-[hsl(220,20%,12%)] to-[hsl(220,20%,10%)] px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Qué sigue para ti?
          </h2>
          <p className="text-xl text-white/60">
            Acciones que pueden potenciar tu 2026
          </p>
        </div>

        {/* CTA Cards */}
        <div className="space-y-4">
          {actions.map((action, index) => {
            const Icon = iconMap[action.icon] || Calculator;
            
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{action.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{action.description}</p>
                    <Button 
                      variant="outline" 
                      className="bg-white/5 border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary group-hover:translate-x-1 transition-transform"
                    >
                      {action.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
