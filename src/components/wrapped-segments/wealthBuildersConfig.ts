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
  id: 'wealth-builders',
  clientName: 'xxx',
  welcomeGreeting: 'Hola xxx, tus finanzas cambiaron durante el 2025.',
  welcomeHeadline: 'Es momento de explorar tu futuro financiero este 2026.',
  modules: [
    {
      id: 'resumen-2025',
      icon: 'TrendingUp',
      headline: 'Tu 2025 en números',
      title: '¡Así construiste tu patrimonio!',
      summaryStatement: 'Tu constancia y estrategia marcaron la diferencia este año.',
      statCards: [
        {
          label: 'Meses aportando',
          value: '10',
          suffix: 'de 12',
          icon: 'Calendar',
          highlight: true
        },
        {
          label: 'Crecimiento vs 2024',
          value: '+22',
          suffix: '%',
          icon: 'TrendingUp',
          highlight: true
        },
        {
          label: 'Aportes totales 2025',
          value: '$48',
          suffix: 'M',
          icon: 'DollarSign',
          highlight: false
        }
      ],
      closingMessage: '2026 viene con oportunidades para quienes crecen con estrategia, ¿te atreves a explorar tus posibilidades?'
    },
    {
      id: 'oportunidades-2026',
      icon: 'Lightbulb',
      headline: 'Tus oportunidades 2026',
      title: '¡Este año potencia tu rendimiento!',
      summaryStatement: 'Descubre alternativas diseñadas para tu perfil de crecimiento.',
      cards: [
        {
          title: 'Fondos Alternativos',
          description: 'Son inversiones que complementan tu portafolio con activos como Bitcoin o fondos de impacto, los cuales te permiten diversificar y captar nuevas fuentes de crecimiento.',
          bullets: [
            'Amplían tus fuentes de rentabilidad.',
            'Reducen la dependencia de mercados tradicionales.',
            'Brindan acceso a tendencias globales y nuevas economías.',
            'Complementan tu estrategia con activos innovadores.'
          ]
        }
      ],
      ctaLabel: 'Contactar ahora'
    },
    {
      id: 'herramientas',
      icon: 'Compass',
      headline: 'Kit Skandia',
      title: 'Tus herramientas para avanzar hacia tus metas',
      summaryStatement: 'Recursos exclusivos para potenciar tu estrategia financiera.',
      cards: [
        {
          title: 'Maratón de inversiones',
          description: 'Aprende estrategias avanzadas de los expertos.',
          ctaLabel: 'Ver video',
          icon: 'Play'
        },
        {
          title: 'Informe del CEI',
          description: 'Análisis detallado del panorama económico.',
          ctaLabel: 'Ver informe',
          icon: 'FileText'
        },
        {
          title: 'Perspectivas de inversión',
          description: 'Visión experta del mercado y tendencias.',
          ctaLabel: 'Ver video',
          icon: 'Play'
        }
      ]
    }
  ],
  finalMessage: 'Este año diste pasos firmes hacia tu libertad financiera, tu próximo nivel está en diversificar con inteligencia.',
  hashtag: '#LibérateconSkandia'
};
