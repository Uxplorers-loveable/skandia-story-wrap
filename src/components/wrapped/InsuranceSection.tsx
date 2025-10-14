import { useEffect, useRef, useState } from "react";
import { Shield, Calendar, Heart } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export const InsuranceSection = () => {
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

  const insuranceData = {
    totalInsured: 250000000,
    daysProtected: 365,
    assistancesUsed: 8,
    yearPayments: 3200000,
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(220,22%,14%)] to-[hsl(30,15%,15%)] px-6 py-20"
    >
      <div className="max-w-5xl w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-medium">Seguros</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Protegimos lo que{" "}
              <span className="block text-secondary">más amas</span>
            </h2>
            <p className="text-xl text-white/70">
              <AnimatedCounter end={insuranceData.daysProtected} suffix=" días" isVisible={isVisible} />{" "}
              de tranquilidad este año
            </p>
          </div>

          {/* Main stat - Big number */}
          <div className="bg-gradient-to-br from-secondary/20 to-primary/10 border border-secondary/30 rounded-3xl p-12 mb-8 text-center hover:shadow-[0_0_40px_hsl(var(--secondary)/0.3)] transition-all">
            <p className="text-white/70 mb-4 text-lg">Valor total asegurado</p>
            <p className="text-6xl md:text-7xl font-bold text-white mb-2">
              $<AnimatedCounter end={insuranceData.totalInsured / 1000000} suffix="M" isVisible={isVisible} />
            </p>
            <p className="text-white/60">protegiendo tu futuro y el de tu familia</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-xl">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter end={insuranceData.assistancesUsed} isVisible={isVisible} />
                  </p>
                  <p className="text-sm text-white/60">Asistencias utilizadas</p>
                  <p className="text-xs text-white/40 mt-1">Siempre estuvimos contigo</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-2">
                    $<AnimatedCounter end={insuranceData.yearPayments / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
                  </p>
                  <p className="text-sm text-white/60">Invertido en protección</p>
                  <p className="text-xs text-white/40 mt-1">La tranquilidad no tiene precio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional message */}
          <div className="bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 border border-secondary/20 rounded-2xl p-8 text-center">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              "Proteger lo que amas es la inversión más <span className="text-secondary font-semibold">valiosa</span> que puedes hacer"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
