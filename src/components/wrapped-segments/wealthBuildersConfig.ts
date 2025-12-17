// Configuración de Wealth Builders para Skandia Wrapped

export interface WBModuleConfig {
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
  advisoryTitle?: string;
  advisoryDescription?: string;
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

export interface WBSegmentConfig {
  id: string;
  clientName: string;
  welcomeGreeting: string;
  welcomeHeadline: string;
  modules: WBModuleConfig[];
  finalMessage: string;
  hashtag: string;
}

export const wealthBuildersConfig: WBSegmentConfig = {
  id: "wealth-builders",
  clientName: "xxx",
  welcomeGreeting: "Hola xxx, eres un Wealth Builder: Así se ve el nivel de alguien que construye patrimonio.",
  welcomeHeadline: "Es momento de explorar tu futuro financiero este 2026.",
  modules: [
    {
      id: "resumen-2025",
      icon: "TrendingUp",
      headline: "Tu IQ Financiero 2025 es 70/100 – Nivel: Wealth Builder",
      title: "Estos son los números que te definen como Wealth Builder:",
      summaryStatement: "Tu constancia y estrategia marcaron la diferencia este año.",
      statCards: [
        {
          label: "Meses aportando",
          value: "10",
          suffix: "de 12",
          icon: "Calendar",
          highlight: true,
        },
        {
          label: "Saldo total en MFUND",
          value: "$100",
          suffix: "M",
          icon: "TrendingUp",
          highlight: true,
        },
        {
          label: "Aportes totales 2025",
          value: "$48",
          suffix: "M",
          icon: "DollarSign",
          highlight: false,
        },
        {
          label: "Valor total asegurado",
          value: "$250",
          suffix: "M",
          icon: "Shield",
          highlight: false,
        },
      ],
      statCardsDisclaimer: "Cifras actualizadas al 30 de noviembre de 2025",
      closingMessage:
        "2026 viene con oportunidades para quienes crecen con estrategia, ¿te atreves a explorar tus posibilidades?",
    },
    {
      id: "oportunidades-2026",
      icon: "Lightbulb",
      headline: "Tus oportunidades 2026",
      title: "En el 2026 encuentra tu potencial",
      summaryStatement: "Descubre alternativas diseñadas para tu perfil de crecimiento.",
      cards: [
        {
          title: "Activos Alternativos",
          description:
            "Incorporan activos que van más allá de la renta fija y las acciones tradicionales para diversificar tu portafolio y abrir nuevas fuentes de crecimiento.",
          bullets: [
            "Amplían tus fuentes de rentabilidad.",
            "Reducen la dependencia de los mercados tradicionales.",
            "Brindan acceso a tendencias globales y nuevas economías.",
            "Complementan tu estrategia con activos innovadores.",
          ],
          ctaLabel: "Ver más",
          ctaUrl: "https://inversiones.skandia.com.co/nuestros-portafolios-alternativos",
        },
      ],
      ctaLabel: "Contactar ahora",
      advisoryTitle: "Habla con tu Financial Planner.",
      advisoryDescription: "Te ayudará a entender en dónde están las oportunidades que pueden potenciar tu nivel.",
    },
    {
      id: "herramientas",
      icon: "Compass",
      headline: "Tu Centro de Herramientas",
      title: "Todo lo que necesitas para potenciar tu estrategia financiera",
      summaryStatement: "Recursos exclusivos para potenciar tu estrategia financiera.",
      cards: [
        {
          title: "SK Channel Inversiones 2.0",
          description: "Aprende estrategias avanzadas de los expertos.",
          ctaLabel: "Ver curso",
          ctaUrl: "https://channel.skandia.com.co/course/tu-clase-sobre-renta-fija-vs-renta-variable",
          icon: "BookOpen",
        },
        {
          title: "Skandia #SinFiltro Report",
          description: "2026: Presiona el botón de Reinicio Financiero.",
          ctaLabel: "Leer informe",
          ctaUrl: "https://bit.ly/3YELl0N",
          icon: "FileText",
        },
        {
          title: "Perspectivas de inversión",
          description: "Conoce #SinFiltro las perspectivas de los expertos para el 2026.",
          ctaLabel: "Ver video",
          ctaUrl: "https://youtu.be/ZTbDFmpB9Bs",
          icon: "Play",
        },
      ],
    },
  ],
  finalMessage:
    "Este año diste pasos firmes hacia tu libertad financiera, tu próximo nivel está en diversificar con inteligencia.",
  hashtag: "#LibérateconSkandia",
};
