// Configuración de Financial Explorers para Skandia Wrapped

export interface FEModuleConfig {
  id: string;
  icon: string;
  title: string;
  headline?: string;
  summaryStatement: string;
  emotionalOpener?: string;
  highlightMetric?: {
    label: string;
    value: string;
    suffix?: string;
  };
  cards?: CardConfig[];
  statCards?: StatCardConfig[];
  statCardsDisclaimer?: string;
  details?: string[];
  insight?: string;
  closingMessage?: string;
  ctaLabel?: string;
}

export interface CardConfig {
  title: string;
  description?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaUrl?: string;
  icon?: string;
}

export interface StatCardConfig {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
  icon?: string;
  highlight?: boolean;
}

export interface FESegmentConfig {
  id: string;
  clientName: string;
  welcomeGreeting: string;
  welcomeHeadline: string;
  modules: FEModuleConfig[];
  finalMessage: string;
  hashtag: string;
}

export const financialExplorersConfig: FESegmentConfig = {
  id: "financial-explorers",
  clientName: "xxx",
  welcomeGreeting: "Hola xxx, eres un Financial Explorer: ya dejaste atrás el \"algún día\" y diste tu primer paso para ocuparte de tu futuro,",
  welcomeHeadline: "Es momento de explorar tu futuro financiero este 2026.",
  modules: [
    {
      id: "resumen-2025",
      icon: "TrendingUp",
      headline: "Tu IQ Financiero 2025 es: 52/100 – Nivel: Financial Explorer",
      title: "Estos son los números que te definen como Financial Explorer",
      summaryStatement: "Este año tus finanzas dieron un paso que marca la diferencia:",
      statCards: [
        {
          label: "Cotizadas en 2025",
          value: "48",
          suffix: "semanas",
          icon: "Calendar",
          highlight: true,
        },
        {
          label: "Ahorro pensional total",
          value: "48",
          suffix: "M",
          icon: "DollarSign",
          highlight: true,
        },
        {
          label: "Para recibir tu pensión",
          value: "18",
          suffix: "años",
          icon: "Calendar",
          highlight: false,
        },
        {
          label: "Saldo cesantías",
          value: "$8.5",
          suffix: "M",
          icon: "DollarSign",
          highlight: false,
        },
      ],
      statCardsDisclaimer: "Cifras actualizadas al 30 de noviembre de 2025",
      closingMessage:
        "Lo más difícil ya lo hiciste: empezar. ¡Es momento de subir de nivel en el 2026!",
    },
    {
      id: "oportunidades-2026",
      icon: "Lightbulb",
      headline: "Tus oportunidades 2026",
      title: "Es momento de llevar tu IQ #SinFiltro al siguiente nivel",
      summaryStatement: "Alternativas sencillas y accesibles para dar tus primeros pasos.",
      cards: [
        {
          title: "Invest-ed",
          description: "Una Herramienta de inversión:",
          bullets: [
            "100% digital de Skandia.",
            "Alineada con tus objetivos y metas de inversión.",
            "Gestionada por nuestro Centro Estratégico de Inversiones.",
            "Sin monto mínimo de inversión.",
          ],
          ctaLabel: "Saber más",
          ctaUrl: "https://inversiones.skandia.com.co/invested",
        },
        {
          title: "Los Universales",
          description: "Donde la inversión empieza con una simple elección:",
          bullets: [
            "Elige la opción que se adapta a ti y simula tu inversión.",
            "Puedes hacer tus aportes por PSE, débito o descuento por nómina.",
            "Tu dinero estará invertido en portafolios estables y conservadores.",
          ],
        },
      ],
      ctaLabel: "Contactar ahora",
    },
    {
      id: "herramientas",
      icon: "Compass",
      headline: "Centro de herramientas",
      title: "Recursos que te ayudan a mejorar tu futuro financiero",
      summaryStatement: "Contenido pensado para quienes están comenzando su camino.",
      cards: [
        {
          title: "Diseñar Riqueza",
          description: "Aprende a organizar tu plan financiero desde cero.",
          ctaLabel: "Ver curso",
          ctaUrl: "https://channel.skandia.com.co/course/mesa-redonda",
          icon: "BookOpen",
        },
        {
          title: "Perspectivas de inversión",
          description: "Aprende finanzas personales de forma sencilla.",
          ctaLabel: "Ver video",
          ctaUrl: "https://youtu.be/ZTbDFmpB9Bs",
          icon: "Play",
        },
      ],
    },
  ],
  finalMessage:
    "Cada avance te acerca a un futuro más estable, que el próximo año sea clave para asegurar tu bienestar a largo plazo.",
  hashtag: "#LibérateconSkandia",
};
