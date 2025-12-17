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
      title: "¡Proyéctate hacia lo global!",
      summaryStatement: "Soluciones sofisticadas diseñadas para inversionistas como tú.",
      cards: [
        {
          title: "Estrategias sofisticadas de inversión",
          description: "Combinan diversificación global, análisis cuantitativo y estrategias de retorno absoluto.",
          bullets: [
            "Estrategias globales.",
            "Diversificación más allá de los mercados tradicionales.",
            "Mayor potencial de rendimiento ajustado al riesgo.",
          ],
        },
        {
          title: "Fondos Alternativos",
          description:
            "Inversiones que complementan tu portafolio, permitiendo diversificar y captar nuevas fuentes de crecimiento.",
          bullets: [
            "Posibilidades de aumentar la rentabilidad.",
            "Reducen la dependencia de los mercados tradicionales.",
            "Conectan con nuevas tendencias y economías emergentes.",
          ],
        },
        {
          title: "Inversiones en dólares (Offshore)",
          description: "Diversifica tu portafolio, invirtiendo en dólares en Estados Unidos.",
          bullets: [
            "100% digital y rápido.",
            "Asesoría y planificación en dólares.",
            "Inversión con libertad, liquidez y eficiencia fiscal.",
          ],
        },
        {
          title: "Crea Patrimonio",
          description: "Seguro individual de pensiones para ahorrar una reserva a largo plazo.",
          bullets: [
            "Flexibilidad para determinar beneficiarios y sobrevivientes.",
            "Beneficio tributario según lo establecido por ley.",
            "Suma asegurada alcanzada en caso de muerte o incapacidad total y permanente.",
          ],
        },
      ],
      ctaLabel: "Contactar ahora",
    },
    {
      id: "herramientas",
      icon: "Compass",
      headline: "Centro de herramientas",
      title: "Recursos que te guían, informan y ayudan a invertir con más claridad",
      summaryStatement: "Información exclusiva para tomar decisiones más informadas.",
      cards: [
        {
          title: "Análisis de mercados globales",
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
