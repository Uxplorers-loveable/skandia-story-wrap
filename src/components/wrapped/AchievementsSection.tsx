import { useEffect, useRef, useState } from "react";
import { Trophy, Star, Award, Zap } from "lucide-react";

export const AchievementsSection = () => {
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

  const achievements = [
    {
      icon: Trophy,
      title: "Constante",
      description: "12 meses consecutivos aportando a tu futuro",
      color: "primary",
    },
    {
      icon: Star,
      title: "Con visión",
      description: "Diversificaste tu portafolio en 5 sectores diferentes",
      color: "accent",
    },
    {
      icon: Award,
      title: "Con enfoque",
      description: "Superaste tu meta de ahorro en un 15%",
      color: "secondary",
    },
    {
      icon: Zap,
      title: "Sostenible",
      description: "El 40% de tus inversiones apoyaron proyectos verdes",
      color: "primary",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(30,15%,15%)] to-[hsl(220,20%,10%)] px-6 py-20"
    >
      <div className="max-w-5xl w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Tus Logros</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Cada decisión{" "}
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                cuenta una historia
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Este año no solo gestionaste tu dinero, construiste el camino hacia tus sueños
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const colorClasses = {
                primary: "bg-primary/20 text-primary border-primary/30",
                accent: "bg-accent/20 text-accent border-accent/30",
                secondary: "bg-secondary/20 text-secondary border-secondary/30",
              };

              return (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${colorClasses[achievement.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-white/70">{achievement.description}</p>
                </div>
              );
            })}
          </div>

          {/* Big emotional message */}
          <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary/30 rounded-3xl p-12 text-center">
            <p className="text-3xl md:text-4xl text-white font-light leading-relaxed mb-6">
              "Tu hábito de ahorro fue más{" "}
              <span className="font-bold text-primary">constante</span>{" "}
              que el de{" "}
              <span className="font-bold text-accent">78%</span>{" "}
              de nuestros clientes"
            </p>
            <p className="text-lg text-white/60">
              Y eso es solo el comienzo. Tu futuro financiero se ve brillante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
