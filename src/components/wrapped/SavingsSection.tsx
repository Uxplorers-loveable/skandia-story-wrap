import { useEffect, useRef, useState } from "react";
import { TrendingUp, Sparkles, PiggyBank } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export const SavingsSection = () => {
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

  const savingsData = {
    growth: 24.5,
    totalSaved: 45800000,
    bestMonth: "Octubre",
    yearComparison: 18.2,
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(220,25%,15%)] to-[hsl(220,20%,12%)] px-6 py-20"
    >
      <div className="max-w-5xl w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <PiggyBank className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Ahorro e Inversión</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Creciste un{" "}
              <span className="text-primary">
                <AnimatedCounter end={savingsData.growth} decimals={1} suffix="%" isVisible={isVisible} />
              </span>
            </h2>
            <p className="text-xl text-white/70">
              Tu patrimonio alcanzó los{" "}
              <span className="text-white font-semibold">
                $<AnimatedCounter end={savingsData.totalSaved / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
              </span>
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-white/50">vs. 2023</span>
              </div>
              <p className="text-3xl font-bold text-white mb-2">
                +<AnimatedCounter end={savingsData.yearComparison} decimals={1} suffix="%" isVisible={isVisible} />
              </p>
              <p className="text-sm text-white/60">Más que el año anterior</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs text-white/50">Mejor mes</span>
              </div>
              <p className="text-3xl font-bold text-white mb-2">{savingsData.bestMonth}</p>
              <p className="text-sm text-white/60">Tu mes más activo</p>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-white/70">Proyección</span>
              </div>
              <p className="text-3xl font-bold text-white mb-2">
                $<AnimatedCounter end={(savingsData.totalSaved * 1.245) / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
              </p>
              <p className="text-sm text-white/80">Proyección 2025</p>
            </div>
          </div>

          {/* Emotional message */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              "Tu <span className="text-primary font-semibold">constancia</span> te acercó más a tus metas que a{" "}
              <span className="text-accent font-semibold">78%</span> de nuestros usuarios"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
