import { useEffect, useRef, useState } from "react";
import { TrendingUp, PiggyBank, Shield, Lightbulb, Compass, Star, Play, FileText, Globe, Calendar, BookOpen, Calculator, ArrowRight, DollarSign, Target, PieChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/wrapped/AnimatedCounter";
const iconMap: Record<string, React.ComponentType<{
  className?: string;
}>> = {
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
  Calculator,
  DollarSign,
  Target,
  PieChart
};
interface CardConfig {
  title: string;
  description?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaUrl?: string;
  icon?: string;
}
interface StatCardConfig {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
  icon?: string;
  highlight?: boolean;
}
interface ModuleConfig {
  id: string;
  icon: string;
  title: string;
  headline?: string;
  summaryStatement: string;
  cards?: CardConfig[];
  statCards?: StatCardConfig[];
  closingMessage?: string;
  ctaLabel?: string;
}
interface SegmentModuleSectionProps {
  modules: ModuleConfig[];
}
export const SegmentModuleSection = ({
  modules
}: SegmentModuleSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="bg-background px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        {modules.map((module, moduleIndex) => {
        const Icon = iconMap[module.icon] || TrendingUp;
        return <div key={module.id} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: `${moduleIndex * 200}ms`
        }}>
              {/* Module Header */}
              <div className="text-center mb-10">
                {module.headline && <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 mb-4 rounded-sm">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{module.headline}</span>
                  </div>}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {module.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {module.summaryStatement}
                </p>
              </div>

              {/* Stat Cards - Grid layout for numerical data */}
              {module.statCards && module.statCards.length > 0 && <div className={`grid gap-4 mb-8 ${module.statCards.length === 3 ? 'md:grid-cols-3' : module.statCards.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'}`}>
                  {module.statCards.map((stat, statIndex) => {
              const StatIcon = stat.icon ? iconMap[stat.icon] : null;
              const numericMatch = stat.value.match(/([+-]?)(\d+(?:\.\d+)?)/);
              const prefix = numericMatch ? numericMatch[1] : '';
              const numericValue = numericMatch ? parseFloat(numericMatch[2]) : 0;
              const hasNumeric = numericMatch !== null;
              return <div key={statIndex} className={`rounded-2xl p-6 border transition-all duration-500 hover:scale-[1.02] hover:shadow-lg ${stat.highlight ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted border-border'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{
                transitionDelay: `${moduleIndex * 200 + statIndex * 100 + 300}ms`
              }}>
                        {StatIcon && <div className={`p-3 rounded-xl w-fit mb-4 ${stat.highlight ? 'bg-primary-foreground/20' : 'bg-primary/10'}`}>
                            <StatIcon className={`w-6 h-6 ${stat.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                          </div>}
                        <p className={`text-3xl md:text-4xl font-bold mb-1 ${stat.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                          {hasNumeric ? <AnimatedCounter end={numericValue} duration={2000} decimals={stat.value.includes('.') ? 1 : 0} prefix={prefix} suffix="" isVisible={isVisible} /> : stat.value}
                          {stat.suffix && <span className={`text-lg md:text-xl ml-1 ${stat.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                              {stat.suffix}
                            </span>}
                        </p>
                        <p className={`text-sm ${stat.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                          {stat.label}
                        </p>
                        {stat.description && <p className={`text-xs mt-2 ${stat.highlight ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                            {stat.description}
                          </p>}
                      </div>;
            })}
                </div>}

              {/* Regular Cards */}
              {module.cards && module.cards.length > 0 && <div className="space-y-4">
                  {module.cards.map((card, cardIndex) => {
              const CardIcon = card.icon ? iconMap[card.icon] : null;
              return <div key={cardIndex} className={`bg-muted rounded-2xl p-6 border border-border transition-all duration-500 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{
                transitionDelay: `${moduleIndex * 200 + cardIndex * 150 + 400}ms`
              }}>
                        <div className="flex items-start gap-4">
                          {CardIcon && <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                              <CardIcon className="w-6 h-6 text-primary" />
                            </div>}
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
                            {card.description && <p className="text-muted-foreground mb-4">{card.description}</p>}
                            {card.bullets && card.bullets.length > 0 && <ul className="space-y-2 mb-4">
                                {card.bullets.map((bullet, bulletIndex) => <li key={bulletIndex} className="flex items-start gap-3 text-foreground/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>{bullet}</span>
                                  </li>)}
                              </ul>}
                            {card.ctaLabel && <a
    href="https://channel.skandia.com.co/course/back-to-skool-1"
    target="_blank"
    rel="noopener noreferrer"
  ><Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                                {card.ctaLabel}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>}
                          </div>
                        </div>
                      </div>;
            })}
                </div>}

              {/* Closing Message */}
              {module.closingMessage && <div className={`mt-8 bg-muted border border-border rounded-2xl p-6 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{
            transitionDelay: `${moduleIndex * 200 + 600}ms`
          }}>
                  <p className="text-lg text-foreground/80 italic">
                    {module.closingMessage}
                  </p>
                </div>}

              {/* Module CTA */}
              {module.ctaLabel && <div className={`mt-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{
            transitionDelay: `${moduleIndex * 200 + 700}ms`
          }}>
                  <div className="bg-muted border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-lg md:text-xl font-semibold text-foreground">
                        Fortalece tu seguridad financiera el 2026
                      </p>
                      <p className="text-muted-foreground">con tu Financial Planner</p>
                    </div>
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 shadow-lg transition-all shrink-0 rounded-full">
                      {module.ctaLabel}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>}
            </div>;
      })}
      </div>
    </section>;
};