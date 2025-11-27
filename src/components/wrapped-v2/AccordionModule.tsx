import { useEffect, useRef, useState } from "react";
import { ChevronDown, TrendingUp, PiggyBank, Shield, Footprints, Calendar, Eye, Lightbulb, Star, Activity, Umbrella, Wallet } from "lucide-react";
import { AnimatedCounter } from "../wrapped/AnimatedCounter";
import { ModuleConfig } from "./segmentConfig";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  PiggyBank,
  Shield,
  Footprints,
  Calendar,
  Eye,
  Lightbulb,
  Star,
  Activity,
  Umbrella,
  Wallet
};

interface AccordionModuleProps {
  module: ModuleConfig;
  index: number;
}

export const AccordionModule = ({ module, index }: AccordionModuleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const moduleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (moduleRef.current) {
      observer.observe(moduleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = iconMap[module.icon] || TrendingUp;

  // Gradient colors based on index
  const gradients = [
    'from-primary/20 to-accent/20 border-primary/30',
    'from-accent/20 to-secondary/20 border-accent/30',
    'from-secondary/20 to-primary/20 border-secondary/30',
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <div
      ref={moduleRef}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={module.id} className="border-none">
          <div className={`bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden`}>
            {/* Summary Card (Always visible) */}
            <div className="p-6">
              {/* Emotional Opener */}
              <p className="text-white/60 text-sm italic mb-4">
                "{module.emotionalOpener}"
              </p>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{module.title}</h3>
                  <p className="text-white/80 text-lg">{module.summaryStatement}</p>
                </div>
                {module.highlightMetric && (
                  <div className="text-right shrink-0">
                    <p className="text-4xl font-bold text-primary">
                      {isVisible && (
                        <AnimatedCounter 
                          end={parseFloat(module.highlightMetric.value)} 
                          decimals={module.highlightMetric.value.includes('.') ? 1 : 0}
                          suffix={module.highlightMetric.suffix || ''}
                          isVisible={isVisible}
                        />
                      )}
                    </p>
                    <p className="text-white/60 text-sm">{module.highlightMetric.label}</p>
                  </div>
                )}
              </div>

              <AccordionTrigger className="w-full mt-4 py-3 px-4 bg-white/5 hover:bg-white/10 rounded-xl text-white/70 hover:text-white transition-all [&[data-state=open]]:bg-white/10 hover:no-underline">
                <span className="text-sm font-medium">Ver más detalles</span>
              </AccordionTrigger>
            </div>

            {/* Expanded Details */}
            <AccordionContent className="px-6 pb-6">
              <div className="pt-4 border-t border-white/10">
                <ul className="space-y-3 mb-6">
                  {module.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-3 text-white/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Insight */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <p className="text-primary font-medium text-sm mb-1">💡 Reflexión</p>
                  <p className="text-white/90 italic">{module.insight}</p>
                </div>
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
