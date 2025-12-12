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
  id: 'financial-explorers',
  clientName: 'xxx',
  welcomeGreeting: 'Hola xxx, tus finanzas cambiaron durante el 2025.',
  welcomeHeadline: 'Es momento de explorar tu futuro financiero este 2026.',
  modules: [
    {
      id: 'resumen-2025',
      icon: 'TrendingUp',
      headline: 'Tu 2025 en números',
      title: 'Así va la construcción de tus finanzas',
      summaryStatement: 'Cada paso que diste este año te acerca a un futuro más seguro.',
      statCards: [
        {
          label: 'Cotizadas en 2025',
          value: '48',
          suffix: 'semanas',
          icon: 'Calendar',
          highlight: true
        },
        {
          label: 'Ahorro pensional total',
          value: '48',
          suffix: 'M',
          icon: 'DollarSign',
          highlight: true
        },
        {
          label: 'Para recibir tu pensión',
          value: '18',
          suffix: 'años',
          icon: 'Calendar',
          highlight: false
        },
        {
          label: 'Saldo cesantías',
          value: '$8.5',
          suffix: 'M',
          icon: 'DollarSign',
          highlight: false
        }
      ],
      closingMessage: 'Los pasos que das hoy, transformarán tu mañana. ¡Descubre cómo fortalecer tu futuro para el 2026!'
    },
    {
      id: 'oportunidades-2026',
      icon: 'Lightbulb',
      headline: 'Tus oportunidades 2026',
      title: 'Construye bienestar a futuro con estas opciones',
      summaryStatement: 'Alternativas sencillas y accesibles para dar tus primeros pasos.',
      cards: [
        {
          title: 'Invest-ed',
          description: 'Una herramienta de diversificación e inversión, probando diferentes activos.',
          bullets: [
            '100% digital.',
            'Libertad de invertir cualquier monto.',
            'Solución tecnológica que facilita la estrategia de inversión.'
          ]
        },
        {
          title: 'Universales',
          description: 'Portafolios diseñados para invertir, ahorrar o construir un respaldo para el futuro.',
          bullets: [
            'Pagos por PSE, débito o descuento por nómina.',
            'Inversiones en portafolios estables y conservadores.',
            'Retiros sin costo.'
          ]
        }
      ],
      ctaLabel: 'Contactar ahora'
    },
    {
      id: 'herramientas',
      icon: 'Compass',
      headline: 'Centro de herramientas',
      title: 'Recursos que te ayudan a mejorar tu futuro financiero',
      summaryStatement: 'Contenido pensado para quienes están comenzando su camino.',
      cards: [
        {
          title: 'Back to Skool',
          description: 'Aprende a organizar tu plan financiero desde cero.',
          ctaLabel: 'Ver video',
          icon: 'Play'
        },
        {
          title: 'Perspectivas de inversión',
          description: 'Aprende finanzas personales de forma sencilla.',
          ctaLabel: 'Ver videos',
          icon: 'Play'
        }
      ]
    }
  ],
  finalMessage: 'Cada avance te acerca a un futuro más estable, que el próximo año sea clave para asegurar tu bienestar a largo plazo.',
  hashtag: '#LibérateconSkandia'
};
