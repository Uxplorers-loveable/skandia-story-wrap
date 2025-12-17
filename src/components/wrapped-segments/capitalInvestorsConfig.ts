// Configuración de Capital Investors para Skandia Wrapped

export interface CIModuleConfig {
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

export interface CISegmentConfig {
  id: string;
  clientName: string;
  welcomeGreeting: string;
  welcomeHeadline: string;
  modules: CIModuleConfig[];
  finalMessage: string;
  hashtag: string;
}

export const capitalInvestorsConfig: CISegmentConfig = {
  id: "capital-investors",
  clientName: "xxx",
  welcomeGreeting: "Hola xxx, eres un Capital Investor: Tú sí que sabes de estrategia.",
  welcomeHeadline: "Es momento de explorar tu futuro financiero este 2026.",
  modules: [
    {
      id: "resumen-2025",
      icon: "TrendingUp",
      headline: "Tu IQ Financiero es 88/100 – Nivel: Capital Investor",
      title: "Estos son los números que te definen como Capital Investor:",
      summaryStatement: "Tu visión estratégica y disciplina generaron resultados excepcionales.",
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
          value: "100",
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
        "Desde este nivel, el reto ya no es \"tener más\", sino decidir mejor cómo quieres que tu capital trabaje para ti.",
    },
    {
      id: "oportunidades-2026",
      icon: "Lightbulb",
      headline: "Tus oportunidades 2026",
      title: "¡Mantén tu visión Estratégica!",
      summaryStatement: "Soluciones sofisticadas diseñadas para inversionistas como tú.",
      cards: [
        {
          title: "El poder de los Alternativos.",
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
        {
          title: "Inversiones en dólares (Offshore)",
          description: "Diversifica tu portafolio, invirtiendo en dólares en Estados Unidos.",
          bullets: [
            "Acceso a una economía más robusta y diversificada.",
            "Protección ante la devaluación local.",
            "Oportunidad de invertir en sectores con alto potencial de crecimiento.",
          ],
          ctaLabel: "Ver más",
          ctaUrl: "https://www.skandia.co/invierte-en-usd",
        },
        {
          title: "El valor de estar seguro",
          description: "Seguro individual de pensiones para ahorrar una reserva a largo plazo.",
          bullets: [
            "Flexibilidad para determinar beneficiarios y sobrevivientes.",
            "Beneficio tributario según lo establecido por ley.",
            "Suma asegurada alcanzada en caso de muerte o incapacidad total y permanente.",
          ],
          ctaLabel: "Ver más",
          ctaUrl: "https://www.skandia.co/seguros-de-vida/seguro-de-pensiones-crea-patrimonio",
        },
      ],
      ctaLabel: "Contactar ahora",
    },
    {
      id: "herramientas",
      icon: "Compass",
      headline: "Tu Centro de Herramientas",
      title: "Todo lo que necesitas para seguir con tu estrategia financiera",
      summaryStatement: "Información exclusiva para tomar decisiones más informadas.",
      cards: [
        {
          title: "SK Channel Inversiones Internacionales",
          description: "Perspectiva experta de los principales mercados.",
          ctaLabel: "Ver curso",
          ctaUrl: "https://channel.skandia.com.co/course/inversiones-internacionales",
          icon: "BookOpen",
        },
        {
          title: "Informe del CEI",
          description: "Análisis detallado del panorama económico.",
          ctaLabel: "Ver informe",
          ctaUrl:
            "https://www.skandia.co/documents/39464/2061583/Informe+Econ%C3%B3mico+Semanal+-+08+al+12+de+Diciembre+de+2025.pdf/60b53799-df89-95d9-d5cd-7ab63afe4056?t=1765583894746",
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
    "Este año fortaleciste tu estrategia, el próximo trae un escenario global que abre nuevas y mejores oportunidades.",
  hashtag: "#LibérateconSkandia",
};
