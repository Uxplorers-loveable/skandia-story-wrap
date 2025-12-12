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
      title: 'Opciones para comenzar a crecer',
      summaryStatement: 'Alternativas sencillas y accesibles para dar tus primeros pasos.',
      cards: [
        {
          title: 'Invest-ed',
          description: 'Tu entrada al mundo de las inversiones de forma simple y educativa.',
          bullets: [
            'Aprende mientras inviertes',
            'Montos accesibles para comenzar',
            'Acompañamiento paso a paso',
            'Contenido educativo incluido'
          ],
          ctaLabel: 'Conocer más'
        },
        {
          title: 'Universales',
          description: 'Seguros que protegen y a la vez te ayudan a ahorrar.',
          bullets: [
            'Protección para ti y tu familia',
            'Componente de ahorro incluido',
            'Flexibilidad en aportes',
            'Beneficios tributarios'
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
      title: 'Recursos que te ayudan a mejorar tu futuro financiero',
      summaryStatement: 'Contenido pensado para quienes están comenzando su camino.',
      cards: [
        {
          title: 'Guía del ahorro',
          description: 'Consejos prácticos para empezar a ahorrar hoy.',
          ctaLabel: 'Ver guía',
          icon: 'BookOpen'
        },
        {
          title: 'Calculadora de metas',
          description: 'Proyecta cuánto necesitas para cumplir tus sueños.',
          ctaLabel: 'Usar calculadora',
          icon: 'Calculator'
        },
        {
          title: 'Videos educativos',
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
