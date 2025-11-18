import { useEffect, useRef, useState } from "react";
import { TrendingUp, DollarSign, ArrowDownCircle, ArrowUpCircle, Sparkles, Receipt } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export const OverviewSection = () => {
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

  const overviewData = {
    totalInvested: 125000000,
    totalContributions: 48000000,
    contributionGrowth: 22.5,
    totalWithdrawals: 12500000,
    totalReturns: 14800000,
    capitalCreated: 62800000,
    taxBenefit: 8400000,
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(220,25%,15%)] to-[hsl(220,20%,12%)] px-6 py-20"
    >
      <div className="max-w-6xl w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Tu Año en Números</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Tu historia financiera
              <span className="block text-primary mt-2">en un vistazo</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Cada decisión cuenta. Este es el resumen de tu crecimiento en Skandia
            </p>
          </div>

          {/* Main Stats - Top Row */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Total Invested */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-8 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs text-white/70">Total invertido</span>
              </div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                $<AnimatedCounter end={overviewData.totalInvested / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
              </p>
              <p className="text-sm text-white/80">Tu compromiso total con tu futuro</p>
            </div>

            {/* Capital Created */}
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 rounded-2xl p-8 hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs text-white/70">Capital creado</span>
              </div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                $<AnimatedCounter end={overviewData.capitalCreated / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
              </p>
              <p className="text-sm text-white/80">Aportes + Rendimientos generados</p>
            </div>
          </div>

          {/* Secondary Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {/* Contributions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <ArrowUpCircle className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">
                $<AnimatedCounter end={overviewData.totalContributions / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
              </p>
              <p className="text-xs text-white/60 mb-2">Aportes totales</p>
              <div className="flex items-center gap-1">
                <span className="text-primary text-sm font-semibold">
                  +<AnimatedCounter end={overviewData.contributionGrowth} decimals={1} suffix="%" isVisible={isVisible} />
                </span>
                <span className="text-xs text-white/50">vs. 2023</span>
              </div>
            </div>

            {/* Withdrawals */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <ArrowDownCircle className="w-6 h-6 text-accent" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">
                $<AnimatedCounter end={overviewData.totalWithdrawals / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
              </p>
              <p className="text-xs text-white/60">Retiros realizados</p>
            </div>

            {/* Returns */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">
                $<AnimatedCounter end={overviewData.totalReturns / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
              </p>
              <p className="text-xs text-white/60">Rendimientos generados</p>
            </div>

            {/* Tax Benefit */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Receipt className="w-6 h-6 text-accent" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">
                $<AnimatedCounter end={overviewData.taxBenefit / 1000000} decimals={1} suffix="M" isVisible={isVisible} />
              </p>
              <p className="text-xs text-white/60">Beneficio tributario</p>
            </div>
          </div>

          {/* Emotional message */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              "Este año transformaste <span className="text-primary font-semibold">${(overviewData.totalContributions / 1000000).toFixed(1)}M</span> en{" "}
              <span className="text-accent font-semibold">${(overviewData.capitalCreated / 1000000).toFixed(1)}M</span> de patrimonio"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
