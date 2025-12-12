import { useEffect, useRef, useState } from "react";
import { 
  TrendingUp, PiggyBank, Shield, Lightbulb, Compass, Star, 
  Play, FileText, Globe, Calendar, BookOpen, Calculator,
  ArrowRight, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  PiggyBank,
  Shield,
  Lightbulb,
  Compass,
  Star,
  Play,
  FileText,
  Globe,
  Calendar,
  BookOpen,
  Calculator
};

interface CardConfig {
  title: string;
  description?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaUrl?: string;
  icon?: string;
}

interface ModuleConfig {
  id: string;
  icon: string;
  title: string;
  headline?: string;
  summaryStatement: string;
  cards?: CardConfig[];
  closingMessage?: string;
  ctaLabel?: string;
}

interface SegmentModuleSectionProps {
  modules: ModuleConfig[];
}

export const SegmentModuleSection = ({ modules }: SegmentModuleSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const gradients = [
    'from-primary/20 to-accent/20 border-primary/30',
    'from-accent/20 to-secondary/20 border-accent/30',
    'from-secondary/20 to-primary/20 border-secondary/30',
  ];

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b from-[hsl(220,25%,15%)] to-[hsl(220,20%,12%)] px-6 py-20"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {modules.map((module, moduleIndex) => {
          const Icon = iconMap[module.icon] || TrendingUp;
          const gradient = gradients[moduleIndex % gradients.length];

          return (
            <div 
              key={module.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${moduleIndex * 200}ms` }}
            >
              {/* Module Header */}
              <div className="text-center mb-8">
                {module.headline && (
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-medium">{module.headline}</span>
                  </div>
                )}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {module.title}
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  {module.summaryStatement}
                </p>
              </div>

              {/* Cards */}
              {module.cards && module.cards.length > 0 && (
                <div className="space-y-4">
                  {module.cards.map((card, cardIndex) => {
                    const CardIcon = card.icon ? iconMap[card.icon] : null;
                    
                    return (
                      <div 
                        key={cardIndex}
                        className={`bg-gradient-to-br ${gradient} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.01]`}
                      >
                        <div className="flex items-start gap-4">
                          {CardIcon && (
                            <div className="p-3 bg-white/10 rounded-xl shrink-0">
                              <CardIcon className="w-6 h-6 text-primary" />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                            {card.description && (
                              <p className="text-white/70 mb-4">{card.description}</p>
                            )}
                            {card.bullets && card.bullets.length > 0 && (
                              <ul className="space-y-2 mb-4">
                                {card.bullets.map((bullet, bulletIndex) => (
                                  <li key={bulletIndex} className="flex items-start gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {card.ctaLabel && (
                              <Button 
                                variant="outline" 
                                className="bg-white/5 border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary transition-all"
                              >
                                {card.ctaLabel}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Closing Message */}
              {module.closingMessage && (
                <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-lg text-white/80 italic">
                    "{module.closingMessage}"
                  </p>
                </div>
              )}

              {/* Module CTA */}
              {module.ctaLabel && (
                <div className="mt-6 text-center">
                  <Button 
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 px-8"
                  >
                    {module.ctaLabel}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
