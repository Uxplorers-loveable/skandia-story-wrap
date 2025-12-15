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
  welcomeGreeting: "Hola xxx, tus finanzas cambiaron durante el 2025.",
  welcomeHeadline: "Es momento de explorar tu futuro financiero este 2026.",
  modules: [
    {
      id: "resumen-2025",
      icon: "TrendingUp",
      headline: "Tu 2025 en números",
      title: "¡Así construiste tu patrimonio!",
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
          label: "Crecimiento vs 2024",
          value: "+22",
          suffix: "%",
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
      ],
      statCardsDisclaimer: "Cifras actualizadas al 30 de noviembre de 2025",
      closingMessage:
        "2026 viene con oportunidades para quienes crecen con estrategia, ¿te atreves a explorar tus posibilidades?",
    },
    {
      id: "oportunidades-2026",
      icon: "Lightbulb",
      headline: "Tus oportunidades 2026",
      title: "¡Este año potencia tu rendimiento!",
      summaryStatement: "Descubre alternativas diseñadas para tu perfil de crecimiento.",
      cards: [
        {
          title: "Fondos Alternativos",
          description:
            "Son inversiones que complementan tu portafolio con activos como Bitcoin o fondos de impacto, los cuales te permiten diversificar y captar nuevas fuentes de crecimiento.",
          bullets: [
            "Amplían tus fuentes de rentabilidad.",
            "Reducen la dependencia de mercados tradicionales.",
            "Brindan acceso a tendencias globales y nuevas economías.",
            "Complementan tu estrategia con activos innovadores.",
          ],
        },
      ],
      ctaLabel: "Contactar ahora",
    },
    {
      id: "herramientas",
      icon: "Compass",
      headline: "Kit Skandia",
      title: "Tus herramientas para avanzar hacia tus metas",
      summaryStatement: "Recursos exclusivos para potenciar tu estrategia financiera.",
      cards: [
        {
          title: "Inversiones 2.0",
          description: "Aprende estrategias avanzadas de los expertos.",
          ctaLabel: "Ver curso",
          ctaUrl: "https://channel.skandia.com.co/course/tu-clase-sobre-renta-fija-vs-renta-variable",
          icon: "BookOpen",
        },
        {
          title: "Informe del CEI",
          description: "Análisis detallado del panorama económico.",
          ctaLabel: "Ver informe",
          ctaUrl:
            "https://www.skandia.co/documents/39464/3278030/Informe+diario+-+10+de+Diciembre+de+2025.pdf/69e6d465-5980-de88-0d95-051cc0a7d664?t=1765403386383",
          icon: "FileText",
        },
        {
          title: "Perspectivas de inversión",
          description: "Visión experta del mercado y tendencias.",
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
