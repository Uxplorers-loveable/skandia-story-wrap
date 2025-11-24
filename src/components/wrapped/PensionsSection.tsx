import { useEffect, useRef, useState } from "react";
import { Clock, TrendingUp, Target } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
export const PensionsSection = () => {
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
  const pensionData = {
    weeksCotized: 248,
    totalContributed: 18500000,
    progressToGoal: 42,
    comparedToSimilar: 15
  };
  return <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(220,20%,12%)] to-[hsl(220,22%,14%)] px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Pensiones</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Tu futuro se construye{" "}
              <span className="block text-accent">hoy</span>
            </h2>
            <p className="text-xl text-white/70">
              Ya llevas{" "}
              <span className="text-white font-semibold">
                <AnimatedCounter end={pensionData.progressToGoal} decimals={0} suffix="%" isVisible={isVisible} />
              </span>{" "}
              del camino hacia tu retiro
            </p>
          </div>

          {/* Weeks Cotized Highlight */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 rounded-2xl p-8 text-center hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)] transition-all">
              <p className="text-sm text-white/70 mb-2">Semanas cotizadas en 2025</p>
              <p className="text-7xl font-bold text-white mb-2">
                <AnimatedCounter end={pensionData.weeksCotized} suffix="" isVisible={isVisible} />
              </p>
              <p className="text-lg text-white/80">Construyendo tu futuro semana a semana</p>
            </div>
          </div>

          {/* Progress Visualization */}
          <div className="mb-12">
            
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-2">
                    $<AnimatedCounter end={pensionData.totalContributed / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
                  </p>
                  <p className="text-sm text-white/60">Total aportado en 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-2">
                    +<AnimatedCounter end={pensionData.comparedToSimilar} suffix="%" isVisible={isVisible} />
                  </p>
                  <p className="text-sm text-white/80">Mejor que usuarios similares</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional message */}
          <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              "Cada aporte es un paso hacia la <span className="text-accent font-semibold">libertad</span> que sueñas"
            </p>
          </div>
        </div>
      </div>
    </section>;
};