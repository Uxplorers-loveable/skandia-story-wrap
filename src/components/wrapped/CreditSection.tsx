import { useEffect, useRef, useState } from "react";
import { CreditCard, Target, CheckCircle2, TrendingDown } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export const CreditSection = () => {
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

  const creditData = {
    totalCredit: 85000000,
    remainingBalance: 42500000,
    paidAmount: 42500000,
    completionPercentage: 50,
    monthlyPayments: 12,
    onTimePayments: 12,
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(220,20%,12%)] to-[hsl(220,25%,15%)] px-6 py-20"
    >
      <div className="max-w-5xl w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Crédito</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Tu progreso en
              <span className="block text-primary mt-2">el cumplimiento del crédito</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ya llevas{" "}
              <span className="text-white font-semibold">
                <AnimatedCounter end={creditData.completionPercentage} decimals={0} suffix="%" isVisible={isVisible} />
              </span>{" "}
              del camino recorrido
            </p>
          </div>

          {/* Progress Visualization */}
          <div className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white/70">Progreso del crédito</span>
                <span className="text-2xl font-bold text-primary">
                  <AnimatedCounter end={creditData.completionPercentage} decimals={0} suffix="%" isVisible={isVisible} />
                </span>
              </div>
              <div className="h-4 bg-white/10 rounded-full overflow-hidden mb-6">
                <div 
                  className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-2000 ${isVisible ? 'w-1/2' : 'w-0'}`}
                  style={{ width: isVisible ? `${creditData.completionPercentage}%` : '0%' }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-white/60 mb-1">Ya pagaste</p>
                  <p className="text-2xl font-bold text-white">
                    $<AnimatedCounter end={creditData.paidAmount / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/60 mb-1">Te falta por pagar</p>
                  <p className="text-2xl font-bold text-white">
                    $<AnimatedCounter end={creditData.remainingBalance / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Total Credit */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-white/70">Crédito total</span>
              </div>
              <p className="text-3xl font-bold text-white mb-2">
                $<AnimatedCounter end={creditData.totalCredit / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
              </p>
              <p className="text-sm text-white/80">Valor del crédito adquirido</p>
            </div>

            {/* Payment Consistency */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-white/50">Cuotas pagadas</span>
              </div>
              <p className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={creditData.onTimePayments} decimals={0} suffix={`/${creditData.monthlyPayments}`} isVisible={isVisible} />
              </p>
              <p className="text-sm text-white/60">100% de cumplimiento</p>
            </div>
          </div>

          {/* Emotional message */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              "Tu <span className="text-primary font-semibold">compromiso constante</span> es la clave hacia una{" "}
              <span className="text-accent font-semibold">mejor gestión financiera</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
