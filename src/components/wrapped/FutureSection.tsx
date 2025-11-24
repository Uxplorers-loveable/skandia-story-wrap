import { useEffect, useRef, useState } from "react";
import { Rocket, ArrowRight, Target, TrendingUp, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "./AnimatedCounter";
export const FutureSection = () => {
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
  const projections = {
    contributions2026: 18500000,
    pensionWeeks2026: 48,
    independence: 7.5
  };
  const actions = [{
    icon: TrendingUp,
    title: "Aumenta tus aportes",
    description: "Simula cómo pequeños cambios multiplican tu futuro",
    cta: "Calcular impacto",
    color: "primary"
  }, {
    icon: Target,
    title: "Revisa tu proyección pensional",
    description: "Descubre cuánto más necesitas para el retiro que sueñas",
    cta: "Ver proyección",
    color: "accent"
  }, {
    icon: PiggyBank,
    title: "Protege aún más",
    description: "Conoce seguros que se adaptan a tu nueva etapa",
    cta: "Explorar opciones",
    color: "secondary"
  }];
  return <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(220,20%,10%)] to-[hsl(220,25%,15%)] px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Tu 2026</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Proyecta tu{" "}
              <span className="block text-primary">crecimiento en 2026</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Si mantienes tu disciplina, estas son tus proyecciones de aportes para 2026
            </p>
          </div>

          {/* Projections */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6 text-center">
              <p className="text-white/70 mb-2 text-sm">Aportes proyectados 2026</p>
              <p className="text-4xl font-bold text-white mb-1">
                $<AnimatedCounter end={projections.contributions2026 / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
              </p>
              <p className="text-xs text-white/50">Si mantienes tu ritmo</p>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-secondary/20 border border-accent/30 rounded-2xl p-6 text-center">
              <p className="text-white/70 mb-2 text-sm">Aportes a pensión 2026</p>
              <p className="text-4xl font-bold text-white mb-1">
                <AnimatedCounter end={projections.pensionWeeks2026} suffix=" semanas" isVisible={isVisible} />
              </p>
              <p className="text-xs text-white/50">Cotizaciones proyectadas</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 border border-secondary/30 rounded-2xl p-6 text-center">
              <p className="text-white/70 mb-2 text-sm">Años para tu libertad financiera   </p>
              <p className="text-4xl font-bold text-white mb-1">
                <AnimatedCounter end={projections.independence} decimals={1} isVisible={isVisible} />
              </p>
              <p className="text-xs text-white/50">Si aceleras tu ahorro</p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4 mb-12">
            {actions.map((action, index) => {
            const Icon = action.icon;
            return <div key={index} className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{
              transitionDelay: `${index * 150}ms`
            }}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${action.color}/20 rounded-xl`}>
                      <Icon className={`w-6 h-6 text-${action.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{action.title}</h3>
                      <p className="text-white/60 text-sm mb-4">{action.description}</p>
                      <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary group-hover:translate-x-1 transition-transform">
                        {action.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>;
          })}
          </div>

          {/* Final message */}
          <div className="bg-gradient-to-r from-primary via-accent to-secondary p-1 rounded-3xl">
            <div className="bg-[hsl(220,20%,10%)] rounded-3xl p-12 text-center">
              <p className="text-3xl md:text-4xl text-white font-light leading-relaxed mb-6">
                Este año diste pasos <span className="font-bold text-primary">firmes</span> hacia tu independencia.
              </p>
              <p className="text-xl text-white/70 mb-8">
                Tus decisiones financieras reflejan la vida que estás construyendo.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] transition-all">
                Comienza tu mejor año
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};