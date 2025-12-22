import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Compass, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import skandiaLogo from "@/assets/skandia-logo.webp";
const NotFound = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setVisible(true);
  }, []);
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Green corner decoration - matching Wrapped style */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-full h-full bg-primary rounded-bl-[100px] transform rotate-0" />
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-[10%] w-32 h-32 rounded-full bg-primary/10 blur-3xl transition-all duration-1000 delay-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute bottom-1/4 right-[15%] w-48 h-48 rounded-full bg-primary/5 blur-3xl transition-all duration-1000 delay-500 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-secondary/5 blur-2xl transition-all duration-1000 delay-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      </div>

      {/* Animated path lines - metaphor for exploration */}
      <svg className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg">
        <path d="M-50 400 Q 200 300 400 350 T 800 300 T 1200 350 T 1600 300" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.1" className="animate-pulse" />
        <path d="M-50 500 Q 250 400 500 450 T 1000 400 T 1500 450" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" opacity="0.08" />
      </svg>

      <div className={`relative z-10 text-center px-6 max-w-2xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Skandia Logo */}
        <img src={skandiaLogo} alt="Skandia" className="h-8 md:h-10 mx-auto mb-8 object-contain" />

        {/* Visual element - Compass icon with animation */}
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <Compass className="w-10 h-10 text-primary animate-pulse" strokeWidth={1.5} />
        </div>

        {/* Headline */}
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Este Wrapped no pudo encontrarse
        </h1>

        {/* Subheadline */}
        <p className={`text-xl md:text-2xl text-foreground/70 mb-6 font-light transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          No te preocupes, tu <span className="text-primary font-medium">futuro financiero</span> sigue en movimiento.
        </p>

        {/* Supporting text */}
        <p className={`text-base md:text-lg text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          El enlace al que intentas acceder no está disponible o ya expiró. 
          Pero en Skandia seguimos acompañándote a construir tu futuro financiero 
          con información, herramientas y asesoría a tu medida.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Primary CTA */}
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium group" onClick={() => window.location.href = 'https://skandia.com.co'}>
            Explorar mi futuro financiero
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Secondary CTA */}
          
        </div>

        {/* Microcopy */}
        
      </div>
    </section>;
};
export default NotFound;