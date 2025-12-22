import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import skandiaLogo from "@/assets/skandia-logo.webp";

const NotFound = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[hsl(220,20%,10%)] to-[hsl(220,25%,15%)]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Floating path lines - visual metaphor for exploration */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,200 Q200,100 400,300 T800,200 T1200,350"
            fill="none"
            stroke="hsl(150, 100%, 41%)"
            strokeWidth="2"
            className="animate-pulse"
          />
          <path
            d="M-50,400 Q300,300 500,450 T900,350 T1300,500"
            fill="none"
            stroke="hsl(150, 80%, 55%)"
            strokeWidth="1.5"
            className="animate-pulse delay-500"
          />
        </svg>
      </div>

      <div className={`relative z-10 text-center px-6 max-w-2xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo */}
        <div className={`mb-8 transition-all duration-700 delay-100 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img 
            src={skandiaLogo} 
            alt="Skandia" 
            className="h-8 md:h-10 mx-auto brightness-0 invert opacity-80"
          />
        </div>

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2.5 mb-8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Compass className="w-4 h-4 text-primary" />
          <span className="text-primary font-medium text-sm">Skandia Wrapped</span>
        </div>

        {/* Headline */}
        <h1 className={`text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Este Wrapped no pudo encontrarse
        </h1>

        {/* Subheadline */}
        <p className={`text-lg md:text-xl text-white/70 mb-8 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          No te preocupes, tu futuro financiero sigue en movimiento.
        </p>

        {/* Support text card */}
        <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            El enlace al que intentas acceder no está disponible o ya expiró.
            <br className="hidden md:block" />
            <span className="text-white/60"> Pero en Skandia seguimos acompañándote a construir tu futuro financiero con información, herramientas y asesoría a tu medida.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-700 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button 
            onClick={() => navigate("/")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span>Explorar mi futuro financiero</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Microcopy */}
        <div className={`mt-12 transition-all duration-700 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-2 text-white/40">
            <Sparkles className="w-4 h-4 text-primary/60" />
            <p className="text-sm italic">
              Tu futuro no se detiene. Nosotros tampoco.
            </p>
            <Sparkles className="w-4 h-4 text-primary/60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
