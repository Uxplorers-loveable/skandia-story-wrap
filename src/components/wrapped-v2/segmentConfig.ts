// Configuración de segmentos narrativos para Wrapped V2
export type CustomerSegment = 'investor' | 'newcomer' | 'declining' | 'irregular';

export interface SegmentConfig {
  id: CustomerSegment;
  heroTitle: string;
  heroSubtitle: string;
  missionStatement: string;
  overallMessage: string;
  improvementMessage: string;
  modules: ModuleConfig[];
  ctaActions: CTAAction[];
}

export interface ModuleConfig {
  id: string;
  icon: string;
  title: string;
  summaryStatement: string;
  emotionalOpener: string;
  highlightMetric?: {
    label: string;
    value: string;
    suffix?: string;
  };
  details: string[];
  insight: string;
}

export interface CTAAction {
  title: string;
  description: string;
  cta: string;
  icon: string;
}

// Cliente enfocado en inversión
export const investorSegment: SegmentConfig = {
  id: 'investor',
  heroTitle: 'Tu disciplina está dando frutos',
  heroSubtitle: 'Un año de decisiones inteligentes',
  missionStatement: 'En Skandia te acompañamos para mejorar tu futuro financiero. Este año, lo hiciste con determinación.',
  overallMessage: '2025 fue un año donde tu constancia se tradujo en crecimiento real.',
  improvementMessage: 'Si mantienes hábitos similares, podrías seguir fortaleciendo tu patrimonio de esta forma.',
  modules: [
    {
      id: 'investment',
      icon: 'TrendingUp',
      title: 'Tu historia de inversión',
      summaryStatement: 'Diversificaste con inteligencia y mantuviste el rumbo',
      emotionalOpener: 'Invertir es confiar en tu futuro. Este año, cada decisión sumó.',
      highlightMetric: { label: 'Crecimiento', value: '23', suffix: '%' },
      details: [
        'Mantuviste aportes constantes durante 10 meses',
        'Tu portafolio se diversificó en 3 categorías',
        'Superaste el promedio de clientes similares'
      ],
      insight: 'Tu paciencia es tu mayor activo. Los resultados lo demuestran.'
    },
    {
      id: 'savings',
      icon: 'PiggyBank',
      title: 'Tu ahorro programado',
      summaryStatement: 'Construiste un colchón financiero sólido',
      emotionalOpener: 'Ahorrar es prepararte para lo inesperado y lo soñado.',
      highlightMetric: { label: 'Ahorro total', value: '12.5', suffix: 'M' },
      details: [
        'Cumpliste tu meta de ahorro mensual en 8 de 12 meses',
        'Tu mejor mes fue septiembre'
      ],
      insight: 'Cada peso ahorrado es un paso hacia tu tranquilidad.'
    },
    {
      id: 'pension',
      icon: 'Shield',
      title: 'Tu pensión',
      summaryStatement: 'Sumaste semanas valiosas para tu retiro',
      emotionalOpener: 'Tu yo del futuro te agradecerá por cada semana cotizada.',
      highlightMetric: { label: 'Semanas cotizadas', value: '52', suffix: '' },
      details: [
        'Cotizaste todas las semanas del año',
        'Tu fondo de cesantías creció consistentemente'
      ],
      insight: 'La constancia de hoy es la tranquilidad de mañana.'
    }
  ],
  ctaActions: [
    { title: 'Simula tu siguiente paso', description: 'Descubre cómo pequeños ajustes multiplican tu futuro', cta: 'Abrir simulador', icon: 'Calculator' },
    { title: 'Habla con un experto', description: 'Agenda una sesión personalizada', cta: 'Agendar', icon: 'Phone' }
  ]
};

// Cliente nuevo o poco conectado
export const newcomerSegment: SegmentConfig = {
  id: 'newcomer',
  heroTitle: 'Tus primeros pasos importan',
  heroSubtitle: 'El inicio de un camino financiero',
  missionStatement: 'En Skandia te acompañamos para mejorar tu futuro financiero. Este año, comenzaste a construir.',
  overallMessage: '2025 fue el año donde decidiste tomar control de tu futuro.',
  improvementMessage: 'Cada pequeño paso cuenta. Si continúas, los resultados llegarán.',
  modules: [
    {
      id: 'first-steps',
      icon: 'Footprints',
      title: 'Tus primeros pasos',
      summaryStatement: 'Diste el paso más difícil: empezar',
      emotionalOpener: 'Comenzar es valiente. Ya estás aquí, y eso cuenta.',
      highlightMetric: { label: 'Meses activo', value: '6', suffix: '' },
      details: [
        'Abriste tu primera cuenta de ahorro',
        'Realizaste tu primer aporte voluntario',
        'Exploraste opciones de inversión'
      ],
      insight: 'El mejor momento para empezar fue ayer. El segundo mejor, es hoy.'
    },
    {
      id: 'habits',
      icon: 'Calendar',
      title: 'Construyendo hábitos',
      summaryStatement: 'Estás formando la disciplina del ahorro',
      emotionalOpener: 'Los grandes logros nacen de pequeños hábitos repetidos.',
      highlightMetric: { label: 'Aportes realizados', value: '4', suffix: '' },
      details: [
        'Realizaste aportes en 4 meses diferentes',
        'Tu constancia está creciendo'
      ],
      insight: 'Cada aporte es una semilla para tu futuro.'
    }
  ],
  ctaActions: [
    { title: 'Conoce tus opciones', description: 'Explora productos que se adaptan a ti', cta: 'Explorar', icon: 'Compass' },
    { title: 'Programa tu ahorro', description: 'Automatiza y olvídate de recordar', cta: 'Configurar', icon: 'Settings' }
  ]
};

// Cliente con comportamiento negativo
export const decliningSegment: SegmentConfig = {
  id: 'declining',
  heroTitle: 'Un año de aprendizajes',
  heroSubtitle: 'Cada día es una nueva oportunidad',
  missionStatement: 'En Skandia te acompañamos para mejorar tu futuro financiero. Estamos aquí para ayudarte a retomar el camino.',
  overallMessage: '2025 tuvo sus desafíos, pero cada momento es una oportunidad de cambio.',
  improvementMessage: 'Aquí tienes oportunidades para mejorar y retomar el control de tus finanzas.',
  modules: [
    {
      id: 'situation',
      icon: 'Eye',
      title: 'Tu situación actual',
      summaryStatement: 'Es momento de hacer una pausa y reflexionar',
      emotionalOpener: 'Reconocer dónde estamos es el primer paso para llegar a donde queremos.',
      details: [
        'Tus aportes disminuyeron respecto al año anterior',
        'Realizaste algunos retiros de tu ahorro',
        'Tu portafolio necesita atención'
      ],
      insight: 'No importa cuántas veces caigas, sino cuántas te levantas.'
    },
    {
      id: 'opportunities',
      icon: 'Lightbulb',
      title: 'Tus oportunidades',
      summaryStatement: 'Pequeños cambios pueden hacer una gran diferencia',
      emotionalOpener: 'El futuro no está escrito. Tú tienes el poder de cambiarlo.',
      details: [
        'Retomar aportes regulares, aunque sean pequeños',
        'Revisar tu estrategia con un asesor',
        'Establecer metas alcanzables a corto plazo'
      ],
      insight: 'Un paso a la vez. Estamos aquí para acompañarte.'
    }
  ],
  ctaActions: [
    { title: 'Habla con un asesor', description: 'Sin compromiso, solo orientación', cta: 'Agendar llamada', icon: 'Phone' },
    { title: 'Plan de recuperación', description: 'Diseña un plan que funcione para ti', cta: 'Comenzar', icon: 'Target' }
  ]
};

// Cliente con hábitos irregulares
export const irregularSegment: SegmentConfig = {
  id: 'irregular',
  heroTitle: 'Un año de altibajos',
  heroSubtitle: 'La constancia puede transformar tus resultados',
  missionStatement: 'En Skandia te acompañamos para mejorar tu futuro financiero. Juntos podemos encontrar tu ritmo.',
  overallMessage: '2025 tuvo momentos brillantes. Imagina qué pasaría si fueran más frecuentes.',
  improvementMessage: 'Si logras mayor regularidad, tus resultados podrían multiplicarse significativamente.',
  modules: [
    {
      id: 'highlights',
      icon: 'Star',
      title: 'Tus momentos destacados',
      summaryStatement: 'Tuviste meses excepcionales',
      emotionalOpener: 'Ya demostraste que puedes. Ahora, hazlo con más frecuencia.',
      highlightMetric: { label: 'Mejor mes', value: '2.3', suffix: 'M' },
      details: [
        'En tus mejores meses, superaste expectativas',
        'Tu potencial es evidente',
        'La oportunidad está en la consistencia'
      ],
      insight: 'Tienes todo para lograrlo. Solo necesitas un poco más de ritmo.'
    },
    {
      id: 'consistency',
      icon: 'Activity',
      title: 'El poder de la constancia',
      summaryStatement: 'Pequeños ajustes, grandes resultados',
      emotionalOpener: 'No se trata de perfección, sino de progreso constante.',
      details: [
        'Aportes automáticos pueden ayudarte',
        'Metas más pequeñas y frecuentes funcionan mejor',
        'Un recordatorio mensual puede hacer la diferencia'
      ],
      insight: 'La constancia no es hacer mucho, es no dejar de hacer.'
    }
  ],
  ctaActions: [
    { title: 'Automatiza tus aportes', description: 'Deja que el sistema trabaje por ti', cta: 'Configurar', icon: 'Settings' },
    { title: 'Establece recordatorios', description: 'Nunca olvides un aporte importante', cta: 'Activar', icon: 'Bell' }
  ]
};

// Función para obtener configuración según segmento
export const getSegmentConfig = (segment: CustomerSegment): SegmentConfig => {
  const segments: Record<CustomerSegment, SegmentConfig> = {
    investor: investorSegment,
    newcomer: newcomerSegment,
    declining: decliningSegment,
    irregular: irregularSegment
  };
  return segments[segment];
};

// Datos del cliente (simulados - en producción vendrían del backend)
export const clientData = {
  name: 'Carlos',
  segment: 'investor' as CustomerSegment,
  year: 2025
};
