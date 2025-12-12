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
  id: 'capital-investors',
  clientName: 'xxx',
  welcomeGreeting: 'Hola xxx, tus finanzas cambiaron durante el 2025.',
  welcomeHeadline: 'Es momento de explorar tu futuro financiero este 2026.',
  modules: [
    {
      id: 'resumen-2025',
      icon: 'TrendingUp',
      headline: 'Tu 2025 en números',
      title: 'Así optimizaste tu rendimiento durante el año',
      summaryStatement: 'Tu visión estratégica y disciplina generaron resultados excepcionales.',
      statCards: [
        {
          label: 'Rentabilidad portafolio',
          value: '+18.5',
          suffix: '%',
          icon: 'TrendingUp',
          highlight: true
        },
        {
          label: 'vs Benchmark',
          value: '+3.2',
          suffix: 'pts',
          icon: 'Target',
          highlight: true
        },
        {
          label: 'Clases de activos',
          value: '5',
          suffix: 'diversificados',
          icon: 'PieChart',
          highlight: false
        },
        {
          label: 'Rendimientos generados',
          value: '$14.8',
          suffix: 'M',
          icon: 'DollarSign',
          highlight: false
        }
      ],
      closingMessage: '2026 puede ser el año para capitalizar nuevas oportunidades. Descubre las alternativas que ponemos a tu alcance.'
    },
    {
      id: 'oportunidades-2026',
      icon: 'Lightbulb',
      headline: 'Tus oportunidades 2026',
      title: 'Alternativas para maximizar tu capital',
      summaryStatement: 'Soluciones sofisticadas diseñadas para inversionistas como tú.',
      cards: [
        {
          title: 'Estrategias sofisticadas de inversión',
          description: 'Accede a portafolios gestionados con técnicas avanzadas.',
          bullets: [
            'Gestión activa por expertos del mercado',
            'Estrategias de cobertura y protección',
            'Optimización fiscal de inversiones'
          ],
          ctaLabel: 'Conocer más'
        },
        {
          title: 'Fondos Alternativos',
          description: 'Diversifica con activos no correlacionados al mercado tradicional.',
          bullets: [
            'Private equity y venture capital',
            'Real estate e infraestructura',
            'Hedge funds y estrategias absolutas'
          ],
          ctaLabel: 'Conocer más'
        },
        {
          title: 'Inversiones en dólares (Offshore)',
          description: 'Protege y diversifica tu patrimonio en moneda fuerte.',
          bullets: [
            'Acceso a mercados internacionales',
            'Diversificación geográfica',
            'Protección contra devaluación'
          ],
          ctaLabel: 'Conocer más'
        },
        {
          title: 'Crea Patrimonio',
          description: 'Construye un legado financiero para las siguientes generaciones.',
          bullets: [
            'Planificación patrimonial integral',
            'Estructuras eficientes de sucesión',
            'Protección de activos familiares'
          ],
          ctaLabel: 'Conocer más'
        }
      ],
      ctaLabel: 'Contactar ahora'
    },
    {
      id: 'herramientas',
      icon: 'Compass',
      headline: 'Centro de herramientas',
      title: 'Recursos que te guían, informan y ayudan a invertir con más claridad',
      summaryStatement: 'Información exclusiva para tomar decisiones más informadas.',
      cards: [
        {
          title: 'Análisis de mercados globales',
          description: 'Perspectiva experta de los principales mercados.',
          ctaLabel: 'Ver análisis',
          icon: 'Globe'
        },
        {
          title: 'Webinars de inversión',
          description: 'Sesiones exclusivas con nuestros estrategas.',
          ctaLabel: 'Ver calendario',
          icon: 'Calendar'
        },
        {
          title: 'Reportes trimestrales',
          description: 'Seguimiento detallado de tu portafolio.',
          ctaLabel: 'Ver reportes',
          icon: 'FileText'
        }
      ]
    }
  ],
  finalMessage: 'Este año fortaleciste tu estrategia, el próximo trae un escenario global que abre nuevas y mejores oportunidades.',
  hashtag: '#LibérateconSkandia'
};
