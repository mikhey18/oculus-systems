export type Language = 'en' | 'es' | 'ca' | 'ru';

export interface Translations {
  nav: {
    logo: string;
    contactMe: string;
  };
  hero: {
    headline: string;
    subhead: string;
    cta: string;
    systemOnline: string;
    features: {
      totalPrivacy: string;
      evidenceQuality: string;
      worksOffline: string;
    };
  };
  qualitySlider: {
    title: string;
    subtitle: string;
    dragInstruction: string;
    standardCamera: string;
    oculusSystem: string;
    standardCameraLabel: string;
    oculusSystemLabel: string;
    metrics: {
      standard: {
        title: string;
        points: string[];
      };
      oculus: {
        title: string;
        points: string[];
      };
    };
  };
  calculator: {
    title: string;
    subtitle: string;
    camerasLabel: string;
    archiveDaysLabel: string;
    totalStorage: string;
    perCameraDay: string;
    dailyTotal: string;
    recommended: string;
    hardDrive: string;
    channelNVR: string;
    requestQuote: string;
    note: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  whyMe: {
    title: string;
    subtitle: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  truth: {
    title: string;
    subtitle: string;
    cloud: {
      title: string;
      points: string[];
    };
    nvr: {
      title: string;
      points: string[];
    };
  };
  useCases: {
    title: string;
    subtitle: string;
    cases: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      phone: string;
      location: string;
      message: string;
    };
    submit: string;
  };
  footer: {
    links: {
      privacy: string;
      warranty: string;
      about: string;
    };
    descriptions: {
      privacy: string;
      warranty: string;
      about: string;
    };
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      logo: 'Oculus',
      contactMe: 'Contact Me',
    },
    hero: {
      headline: 'Professional Video Surveillance. No Clouds. No Monthly Fees.',
      subhead: 'Private NVR systems installed by an expert. Crystal clear 4K evidence, fully autonomous.',
      cta: 'Get a Quote via WhatsApp',
      systemOnline: 'System Online',
      features: {
        totalPrivacy: 'Total Privacy',
        evidenceQuality: '4K Evidence Quality',
        worksOffline: 'Works Offline',
      },
    },
    qualitySlider: {
      title: 'See the Difference. Evidence Grade Quality.',
      subtitle: 'Drag the slider to compare standard WiFi cameras vs Oculus 4K systems',
      dragInstruction: '← Drag to compare →',
      standardCamera: 'Standard WiFi Camera',
      oculusSystem: 'Oculus 4K System',
      standardCameraLabel: 'Standard WiFi Camera',
      oculusSystemLabel: 'Oculus 4K System',
      metrics: {
        standard: {
          title: 'Standard WiFi Camera',
          points: [
            'Blurry, low resolution',
            'Poor night vision',
            'Cloud-dependent',
            'Monthly fees',
          ],
        },
        oculus: {
          title: 'Oculus 4K System',
          points: [
            'Crystal clear 4K resolution',
            'Police-grade evidence quality',
            'Private local storage',
            'One-time payment',
          ],
        },
      },
    },
    calculator: {
      title: 'System Configurator',
      subtitle: 'Calculate your storage needs for a custom Oculus system',
      camerasLabel: 'Number of Cameras',
      archiveDaysLabel: 'Archive Days',
      totalStorage: 'Total Storage',
      perCameraDay: 'Per Camera/Day',
      dailyTotal: 'Daily Total',
      recommended: 'Recommended Configuration',
      hardDrive: 'TB Hard Drive',
      channelNVR: 'Channel NVR',
      requestQuote: 'Request Quote for this Setup',
      note: '* Storage estimates based on 4K H.265 compression. Actual usage may vary.',
    },
    gallery: {
      title: 'Our Work: Clean & Professional',
      subtitle: 'See the quality of our installations',
    },
    whyMe: {
      title: 'Why Me',
      subtitle: 'I install it myself.',
      points: [
        {
          title: 'Clean Cable Management',
          description: 'No mess, no visible wires. Professional installation that looks as good as it works.',
        },
        {
          title: 'Personal App Setup',
          description: 'I configure your mobile app personally, ensuring everything works perfectly from day one.',
        },
        {
          title: '1-Year Personal Warranty',
          description: 'Direct support from me. If something goes wrong, I fix it. No middlemen, no runaround.',
        },
      ],
    },
    truth: {
      title: 'The Truth',
      subtitle: 'Cloud Cameras vs. Oculus NVR',
      cloud: {
        title: 'Cloud Cameras',
        points: [
          'Unsafe - Your data stored on unknown servers',
          'Laggy - Delayed notifications and playback',
          'Monthly payment - Forever',
          'Requires constant internet',
          'Lower resolution streaming',
        ],
      },
      nvr: {
        title: 'Oculus NVR',
        points: [
          'Private - Data stays at your home',
          'Instant - Real-time alerts and playback',
          'One-time payment - No subscriptions',
          'Works without internet',
          'Police-grade 4K evidence quality',
        ],
      },
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'Where Oculus Systems Shine',
      cases: [
        {
          title: 'Apartment Security',
          description: 'Monitor entrances, hallways, and common areas. Crystal clear face recognition for evidence.',
        },
        {
          title: 'House Perimeter',
          description: 'Full coverage of your property boundaries. Night vision and motion detection included.',
        },
        {
          title: 'Entrance Monitoring',
          description: 'Know who enters and exits. 4K quality ensures you can identify faces clearly.',
        },
      ],
    },
    contact: {
      title: 'Get Your Quote',
      subtitle: 'Tell me about your security needs',
      fields: {
        name: 'Name',
        phone: 'Phone',
        location: 'Location',
        message: 'Message',
      },
      submit: 'Send via WhatsApp',
    },
    footer: {
      links: {
        privacy: 'Privacy Policy',
        warranty: 'Warranty Terms',
        about: 'About',
      },
      descriptions: {
        privacy: 'Your data stays private. All recordings are stored locally on your NVR system.',
        warranty: '1-year personal warranty on installation and setup. Direct support included.',
        about: 'Professional CCTV installation with a personal touch. Expert setup, clean installation.',
      },
      copyright: '© 2026 Oculus Systems. All rights reserved.',
    },
  },
  es: {
    nav: {
      logo: 'Oculus',
      contactMe: 'Contáctame',
    },
    hero: {
      headline: 'Videovigilancia Profesional. Sin Nubes. Sin Cuotas Mensuales.',
      subhead: 'Sistemas NVR privados instalados por un experto. Evidencia 4K cristalina, totalmente autónoma.',
      cta: 'Obtén una Cotización por WhatsApp',
      systemOnline: 'Sistema En Línea',
      features: {
        totalPrivacy: 'Privacidad Total',
        evidenceQuality: 'Calidad de Evidencia 4K',
        worksOffline: 'Funciona Sin Internet',
      },
    },
    qualitySlider: {
      title: 'Ve la Diferencia. Calidad de Grado de Evidencia.',
      subtitle: 'Arrastra el control deslizante para comparar cámaras WiFi estándar vs sistemas Oculus 4K',
      dragInstruction: '← Arrastra para comparar →',
      standardCamera: 'Cámara WiFi Estándar',
      oculusSystem: 'Sistema Oculus 4K',
      standardCameraLabel: 'Cámara WiFi Estándar',
      oculusSystemLabel: 'Sistema Oculus 4K',
      metrics: {
        standard: {
          title: 'Cámara WiFi Estándar',
          points: [
            'Borrosa, baja resolución',
            'Mala visión nocturna',
            'Dependiente de la nube',
            'Cuotas mensuales',
          ],
        },
        oculus: {
          title: 'Sistema Oculus 4K',
          points: [
            'Resolución 4K cristalina',
            'Calidad de evidencia de grado policial',
            'Almacenamiento local privado',
            'Pago único',
          ],
        },
      },
    },
    calculator: {
      title: 'Configurador del Sistema',
      subtitle: 'Calcula tus necesidades de almacenamiento para un sistema Oculus personalizado',
      camerasLabel: 'Número de Cámaras',
      archiveDaysLabel: 'Días de Archivo',
      totalStorage: 'Almacenamiento Total',
      perCameraDay: 'Por Cámara/Día',
      dailyTotal: 'Total Diario',
      recommended: 'Configuración Recomendada',
      hardDrive: 'TB Disco Duro',
      channelNVR: 'Canales NVR',
      requestQuote: 'Solicitar Cotización para esta Configuración',
      note: '* Las estimaciones de almacenamiento se basan en compresión 4K H.265. El uso real puede variar.',
    },
    gallery: {
      title: 'Nuestro Trabajo: Limpio y Profesional',
      subtitle: 'Ve la calidad de nuestras instalaciones',
    },
    whyMe: {
      title: 'Por Qué Yo',
      subtitle: 'Lo instalo yo mismo.',
      points: [
        {
          title: 'Gestión Limpia de Cables',
          description: 'Sin desorden, sin cables visibles. Instalación profesional que se ve tan bien como funciona.',
        },
        {
          title: 'Configuración Personal de la App',
          description: 'Configuro tu aplicación móvil personalmente, asegurando que todo funcione perfectamente desde el primer día.',
        },
        {
          title: 'Garantía Personal de 1 Año',
          description: 'Soporte directo de mí. Si algo sale mal, lo arreglo. Sin intermediarios, sin vueltas.',
        },
      ],
    },
    truth: {
      title: 'La Verdad',
      subtitle: 'Cámaras en la Nube vs. NVR Oculus',
      cloud: {
        title: 'Cámaras en la Nube',
        points: [
          'Inseguras - Tus datos almacenados en servidores desconocidos',
          'Con retraso - Notificaciones y reproducción tardías',
          'Pago mensual - Para siempre',
          'Requiere internet constante',
          'Transmisión de menor resolución',
        ],
      },
      nvr: {
        title: 'NVR Oculus',
        points: [
          'Privado - Los datos permanecen en tu hogar',
          'Instantáneo - Alertas y reproducción en tiempo real',
          'Pago único - Sin suscripciones',
          'Funciona sin internet',
          'Calidad de evidencia 4K de grado policial',
        ],
      },
    },
    useCases: {
      title: 'Casos de Uso',
      subtitle: 'Dónde Brillan los Sistemas Oculus',
      cases: [
        {
          title: 'Seguridad de Apartamento',
          description: 'Monitorea entradas, pasillos y áreas comunes. Reconocimiento facial cristalino para evidencia.',
        },
        {
          title: 'Perímetro de Casa',
          description: 'Cobertura completa de los límites de tu propiedad. Visión nocturna y detección de movimiento incluidas.',
        },
        {
          title: 'Monitoreo de Entrada',
          description: 'Saber quién entra y sale. La calidad 4K asegura que puedas identificar caras claramente.',
        },
      ],
    },
    contact: {
      title: 'Obtén tu Cotización',
      subtitle: 'Cuéntame sobre tus necesidades de seguridad',
      fields: {
        name: 'Nombre',
        phone: 'Teléfono',
        location: 'Ubicación',
        message: 'Mensaje',
      },
      submit: 'Enviar por WhatsApp',
    },
    footer: {
      links: {
        privacy: 'Política de Privacidad',
        warranty: 'Términos de Garantía',
        about: 'Acerca de',
      },
      descriptions: {
        privacy: 'Tus datos permanecen privados. Todas las grabaciones se almacenan localmente en tu sistema NVR.',
        warranty: 'Garantía personal de 1 año en instalación y configuración. Soporte directo incluido.',
        about: 'Instalación profesional de CCTV con un toque personal. Configuración experta, instalación limpia.',
      },
      copyright: '© 2026 Oculus Systems. Todos los derechos reservados.',
    },
  },
  ca: {
    nav: {
      logo: 'Oculus',
      contactMe: 'Contacta\'m',
    },
    hero: {
      headline: 'Videovigilància Professional. Sense Núvols. Sense Quotacions Mensuals.',
      subhead: 'Sistemes NVR privats instal·lats per un expert. Evidència 4K cristal·lina, totalment autònoma.',
      cta: 'Obtenir un Pressupost per WhatsApp',
      systemOnline: 'Sistema En Línia',
      features: {
        totalPrivacy: 'Privacitat Total',
        evidenceQuality: 'Qualitat d\'Evidència 4K',
        worksOffline: 'Funciona Sense Internet',
      },
    },
    qualitySlider: {
      title: 'Veure la Diferència. Qualitat de Grau d\'Evidència.',
      subtitle: 'Arrossega el control lliscant per comparar càmeres WiFi estàndard vs sistemes Oculus 4K',
      dragInstruction: '← Arrossega per comparar →',
      standardCamera: 'Càmera WiFi Estàndard',
      oculusSystem: 'Sistema Oculus 4K',
      standardCameraLabel: 'Càmera WiFi Estàndard',
      oculusSystemLabel: 'Sistema Oculus 4K',
      metrics: {
        standard: {
          title: 'Càmera WiFi Estàndard',
          points: [
            'Borrosa, baixa resolució',
            'Mala visió nocturna',
            'Depenent del núvol',
            'Quotacions mensuals',
          ],
        },
        oculus: {
          title: 'Sistema Oculus 4K',
          points: [
            'Resolució 4K cristal·lina',
            'Qualitat d\'evidència de grau policial',
            'Emmagatzematge local privat',
            'Pagament únic',
          ],
        },
      },
    },
    calculator: {
      title: 'Configurador del Sistema',
      subtitle: 'Calcula les teves necessitats d\'emmagatzematge per a un sistema Oculus personalitzat',
      camerasLabel: 'Nombre de Càmeres',
      archiveDaysLabel: 'Dies d\'Arxiu',
      totalStorage: 'Emmagatzematge Total',
      perCameraDay: 'Per Càmera/Dia',
      dailyTotal: 'Total Diari',
      recommended: 'Configuració Recomanada',
      hardDrive: 'TB Disc Dur',
      channelNVR: 'Canals NVR',
      requestQuote: 'Sol·licitar Pressupost per a aquesta Configuració',
      note: '* Les estimacions d\'emmagatzematge es basen en compressió 4K H.265. L\'ús real pot variar.',
    },
    gallery: {
      title: 'El Nostre Treball: Net i Professional',
      subtitle: 'Veure la qualitat de les nostres instal·lacions',
    },
    whyMe: {
      title: 'Per Què Jo',
      subtitle: 'Ho instalo jo mateix.',
      points: [
        {
          title: 'Gestió Neta de Cables',
          description: 'Sense desordre, sense cables visibles. Instal·lació professional que es veu tan bé com funciona.',
        },
        {
          title: 'Configuració Personal de l\'App',
          description: 'Configuro la teva aplicació mòbil personalment, assegurant que tot funcioni perfectament des del primer dia.',
        },
        {
          title: 'Garantia Personal d\'1 Any',
          description: 'Suport directe de mi. Si alguna cosa va malament, ho arreglo. Sense intermediaris, sense voltes.',
        },
      ],
    },
    truth: {
      title: 'La Veritat',
      subtitle: 'Càmeres al Núvol vs. NVR Oculus',
      cloud: {
        title: 'Càmeres al Núvol',
        points: [
          'Insegures - Les teves dades emmagatzemades en servidors desconeguts',
          'Amb retard - Notificacions i reproducció tardanes',
          'Pagament mensual - Per sempre',
          'Requereix internet constant',
          'Transmissió de menor resolució',
        ],
      },
      nvr: {
        title: 'NVR Oculus',
        points: [
          'Privat - Les dades romanen a casa teva',
          'Instantani - Alertes i reproducció en temps real',
          'Pagament únic - Sense subscripcions',
          'Funciona sense internet',
          'Qualitat d\'evidència 4K de grau policial',
        ],
      },
    },
    useCases: {
      title: 'Casos d\'Ús',
      subtitle: 'On Brillen els Sistemes Oculus',
      cases: [
        {
          title: 'Seguretat d\'Apartament',
          description: 'Monitoritza entrades, passadissos i àrees comunes. Reconeixement facial cristal·lí per a evidència.',
        },
        {
          title: 'Perímetre de Casa',
          description: 'Cobertura completa dels límits de la teva propietat. Visió nocturna i detecció de moviment incloses.',
        },
        {
          title: 'Monitoratge d\'Entrada',
          description: 'Saber qui entra i surt. La qualitat 4K assegura que puguis identificar cares clarament.',
        },
      ],
    },
    contact: {
      title: 'Obtenir el teu Pressupost',
      subtitle: 'Explica\'m sobre les teves necessitats de seguretat',
      fields: {
        name: 'Nom',
        phone: 'Telèfon',
        location: 'Ubicació',
        message: 'Missatge',
      },
      submit: 'Enviar per WhatsApp',
    },
    footer: {
      links: {
        privacy: 'Política de Privacitat',
        warranty: 'Termes de Garantia',
        about: 'Sobre',
      },
      descriptions: {
        privacy: 'Les teves dades romanen privades. Totes les gravacions s\'emmagatzemen localment al teu sistema NVR.',
        warranty: 'Garantia personal d\'1 any en instal·lació i configuració. Suport directe inclòs.',
        about: 'Instal·lació professional de CCTV amb un toc personal. Configuració experta, instal·lació neta.',
      },
      copyright: '© 2026 Oculus Systems. Tots els drets reservats.',
    },
  },
  ru: {
    nav: {
      logo: 'Oculus',
      contactMe: 'Связаться со мной',
    },
    hero: {
      headline: 'Профессиональное Видеонаблюдение. Без Облаков. Без Ежемесячных Платежей.',
      subhead: 'Частные системы NVR, установленные экспертом. Кристально четкие доказательства 4K, полностью автономные.',
      cta: 'Получить Расценку через WhatsApp',
      systemOnline: 'Система Онлайн',
      features: {
        totalPrivacy: 'Полная Конфиденциальность',
        evidenceQuality: 'Качество Доказательств 4K',
        worksOffline: 'Работает Без Интернета',
      },
    },
    qualitySlider: {
      title: 'Увидьте Разницу. Качество Доказательств.',
      subtitle: 'Перетащите ползунок, чтобы сравнить стандартные WiFi камеры и системы Oculus 4K',
      dragInstruction: '← Перетащите для сравнения →',
      standardCamera: 'Стандартная WiFi Камера',
      oculusSystem: 'Система Oculus 4K',
      standardCameraLabel: 'Стандартная WiFi Камера',
      oculusSystemLabel: 'Система Oculus 4K',
      metrics: {
        standard: {
          title: 'Стандартная WiFi Камера',
          points: [
            'Размытое, низкое разрешение',
            'Плохое ночное видение',
            'Зависит от облака',
            'Ежемесячные платежи',
          ],
        },
        oculus: {
          title: 'Система Oculus 4K',
          points: [
            'Кристально четкое разрешение 4K',
            'Качество доказательств полицейского уровня',
            'Частное локальное хранилище',
            'Единоразовая оплата',
          ],
        },
      },
    },
    calculator: {
      title: 'Конфигуратор Системы',
      subtitle: 'Рассчитайте ваши потребности в хранилище для индивидуальной системы Oculus',
      camerasLabel: 'Количество Камер',
      archiveDaysLabel: 'Дней Архива',
      totalStorage: 'Общее Хранилище',
      perCameraDay: 'На Камеру/День',
      dailyTotal: 'Ежедневный Итого',
      recommended: 'Рекомендуемая Конфигурация',
      hardDrive: 'ТБ Жесткий Диск',
      channelNVR: 'Каналов NVR',
      requestQuote: 'Запросить Расценку для Этой Конфигурации',
      note: '* Оценки хранилища основаны на сжатии 4K H.265. Фактическое использование может отличаться.',
    },
    gallery: {
      title: 'Наша Работа: Чисто и Профессионально',
      subtitle: 'Посмотрите качество наших установок',
    },
    whyMe: {
      title: 'Почему Я',
      subtitle: 'Я устанавливаю сам.',
      points: [
        {
          title: 'Аккуратное Управление Кабелями',
          description: 'Никакого беспорядка, никаких видимых проводов. Профессиональная установка, которая выглядит так же хорошо, как и работает.',
        },
        {
          title: 'Личная Настройка Приложения',
          description: 'Я лично настраиваю ваше мобильное приложение, обеспечивая идеальную работу с первого дня.',
        },
        {
          title: 'Личная Гарантия на 1 Год',
          description: 'Прямая поддержка от меня. Если что-то пойдет не так, я исправлю. Без посредников, без проволочек.',
        },
      ],
    },
    truth: {
      title: 'Правда',
      subtitle: 'Облачные Камеры vs. Oculus NVR',
      cloud: {
        title: 'Облачные Камеры',
        points: [
          'Небезопасно - Ваши данные хранятся на неизвестных серверах',
          'Задержки - Запоздалые уведомления и воспроизведение',
          'Ежемесячная оплата - Навсегда',
          'Требует постоянного интернета',
          'Потоковое вещание низкого разрешения',
        ],
      },
      nvr: {
        title: 'Oculus NVR',
        points: [
          'Частное - Данные остаются у вас дома',
          'Мгновенно - Уведомления и воспроизведение в реальном времени',
          'Единоразовая оплата - Без подписок',
          'Работает без интернета',
          'Качество доказательств 4K полицейского уровня',
        ],
      },
    },
    useCases: {
      title: 'Варианты Использования',
      subtitle: 'Где Системы Oculus Превосходны',
      cases: [
        {
          title: 'Безопасность Квартиры',
          description: 'Мониторинг входов, коридоров и общих зон. Кристально четкое распознавание лиц для доказательств.',
        },
        {
          title: 'Периметр Дома',
          description: 'Полное покрытие границ вашей собственности. Ночное видение и обнаружение движения включены.',
        },
        {
          title: 'Мониторинг Входа',
          description: 'Знайте, кто входит и выходит. Качество 4K гарантирует четкую идентификацию лиц.',
        },
      ],
    },
    contact: {
      title: 'Получите Расценку',
      subtitle: 'Расскажите мне о ваших потребностях в безопасности',
      fields: {
        name: 'Имя',
        phone: 'Телефон',
        location: 'Местоположение',
        message: 'Сообщение',
      },
      submit: 'Отправить через WhatsApp',
    },
    footer: {
      links: {
        privacy: 'Политика Конфиденциальности',
        warranty: 'Условия Гарантии',
        about: 'О нас',
      },
      descriptions: {
        privacy: 'Ваши данные остаются приватными. Все записи хранятся локально на вашей системе NVR.',
        warranty: 'Личная гарантия на 1 год на установку и настройку. Включена прямая поддержка.',
        about: 'Профессиональная установка CCTV с личным подходом. Экспертная настройка, чистая установка.',
      },
      copyright: '© 2026 Oculus Systems. Все права защищены.',
    },
  },
};
