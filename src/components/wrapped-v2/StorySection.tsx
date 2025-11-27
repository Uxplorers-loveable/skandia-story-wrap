import { useEffect, useRef, useState } from "react";
import { BookOpen } from "lucide-react";
import { SegmentConfig } from "./segmentConfig";
import { AccordionModule } from "./AccordionModule";

interface StorySectionProps {
  config: SegmentConfig;
}

export const StorySection = ({ config }: StorySectionProps) => {
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

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-[hsl(220,25%,15%)] to-[hsl(220,20%,12%)] px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Tu historia 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {config.overallMessage}
          </h2>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Descubre los momentos que definieron tu año financiero
          </p>
        </div>

        {/* Accordion Modules */}
        <div className="space-y-6">
          {config.modules.map((module, index) => (
            <AccordionModule key={module.id} module={module} index={index} />
          ))}
        </div>

        {/* Improvement Message */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-xl text-white/80 italic">
              "{config.improvementMessage}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
