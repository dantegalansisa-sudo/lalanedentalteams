export interface Service {
  slug: string;
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  details: string[];
  longDesc: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'ortodoncia',
    number: '01',
    icon: '◈',
    title: 'ORTODONCIA',
    subtitle: 'Alineación de Precisión',
    desc: 'Brackets y alineadores invisibles. Tecnología digital para planificar tu sonrisa antes de comenzar.',
    details: ['Alineadores invisibles Invisalign', 'Brackets metálicos y cerámicos', 'Ortodoncia lingual', 'Simulación 3D del resultado'],
    longDesc: 'Nuestro departamento de ortodoncia combina las técnicas más avanzadas con tecnología de planificación digital para ofrecerte el tratamiento más eficiente y cómodo. Desde brackets tradicionales hasta alineadores transparentes, diseñamos un plan personalizado que se adapta a tu estilo de vida.',
    benefits: ['Sonrisa alineada y armónica', 'Mejora de la mordida y función masticatoria', 'Prevención de desgaste dental', 'Mayor facilidad para la higiene oral'],
    faqs: [
      { q: '¿Cuánto dura el tratamiento de ortodoncia?', a: 'Depende de cada caso, pero generalmente entre 12 y 24 meses. Los alineadores invisibles pueden ser más rápidos en casos leves.' },
      { q: '¿Los alineadores invisibles funcionan igual que los brackets?', a: 'Sí, para la mayoría de los casos. En casos complejos, los brackets pueden ser más efectivos.' },
    ],
  },
  {
    slug: 'estetica-dental',
    number: '02',
    icon: '◇',
    title: 'ESTÉTICA',
    subtitle: 'Arte en tu Sonrisa',
    desc: 'Carillas de porcelana, blanqueamiento LED y diseño de sonrisa digital.',
    details: ['Carillas de porcelana ultrafinas', 'Blanqueamiento LED profesional', 'Diseño digital de sonrisa (DSD)', 'Resinas estéticas de alta gama'],
    longDesc: 'La estética dental es donde la ciencia se encuentra con el arte. Utilizamos tecnología de diseño digital de sonrisa (DSD) para que veas tu resultado antes de comenzar. Nuestras carillas de porcelana ultrafinas y tratamientos de blanqueamiento LED te darán la sonrisa que siempre soñaste.',
    benefits: ['Sonrisa natural y luminosa', 'Resultados inmediatos con blanqueamiento', 'Corrección de forma, color y tamaño', 'Autoestima y confianza renovadas'],
    faqs: [
      { q: '¿Las carillas dañan los dientes?', a: 'No. Las carillas ultrafinas requieren mínima preparación dental y protegen la superficie del diente.' },
      { q: '¿Cuánto dura el blanqueamiento?', a: 'Los resultados duran entre 1 y 3 años dependiendo de tus hábitos alimenticios y de higiene.' },
    ],
  },
  {
    slug: 'implantes-dentales',
    number: '03',
    icon: '◉',
    title: 'IMPLANTES',
    subtitle: 'Raíces Permanentes',
    desc: 'Implantes de titanio con guía quirúrgica. Resultados que duran toda la vida.',
    details: ['Implantes de titanio grado médico', 'Cirugía guiada por computadora', 'Carga inmediata', 'Rehabilitación sobre implantes'],
    longDesc: 'Los implantes dentales son la solución más avanzada y duradera para reemplazar dientes perdidos. Utilizamos implantes de titanio grado médico con cirugía guiada por computadora para máxima precisión y mínima invasividad. Con la técnica de carga inmediata, puedes salir con dientes el mismo día.',
    benefits: ['Solución permanente y duradera', 'Aspecto y función como dientes naturales', 'Preservación del hueso maxilar', 'No afecta dientes adyacentes'],
    faqs: [
      { q: '¿Los implantes duelen?', a: 'El procedimiento se realiza con anestesia local. Las molestias postoperatorias son mínimas y se controlan con medicación.' },
      { q: '¿Cuánto duran los implantes?', a: 'Con buen cuidado, los implantes pueden durar toda la vida. La corona sobre el implante puede necesitar reemplazo después de 15-20 años.' },
    ],
  },
  {
    slug: 'endodoncia',
    number: '04',
    icon: '◎',
    title: 'ENDODONCIA',
    subtitle: 'Salvamos tu Diente',
    desc: 'Tratamientos de conducto con microscopio dental. Sin dolor.',
    details: ['Microscopio operatorio', 'Rotatorios de níquel-titanio', 'Retratamiento de conductos', 'Apicoectomía'],
    longDesc: 'La endodoncia moderna no tiene nada que ver con lo que era antes. Con microscopio operatorio y sistemas rotatorios de última generación, realizamos tratamientos de conducto precisos, rápidos y prácticamente sin dolor. Nuestro objetivo es siempre salvar tu diente natural.',
    benefits: ['Eliminación del dolor dental', 'Conservación del diente natural', 'Procedimiento rápido (1-2 sesiones)', 'Éxito superior al 95%'],
    faqs: [
      { q: '¿La endodoncia duele?', a: 'No. Se realiza con anestesia local completa. De hecho, la endodoncia elimina el dolor causado por la infección.' },
      { q: '¿Un diente con endodoncia dura menos?', a: 'No necesariamente. Con una buena restauración (corona), un diente tratado puede durar toda la vida.' },
    ],
  },
  {
    slug: 'odontopediatria',
    number: '05',
    icon: '◦',
    title: 'ODONTOPEDIATRÍA',
    subtitle: 'Desde Pequeños',
    desc: 'Atención especializada para niños. Técnicas mínimamente invasivas.',
    details: ['Sellantes de fosas y fisuras', 'Flúor profesional', 'Pulpotomías', 'Mantenedores de espacio'],
    longDesc: 'Nuestro equipo de odontopediatría está especialmente entrenado para crear experiencias positivas en los más pequeños. Utilizamos técnicas de manejo conductual y procedimientos mínimamente invasivos para que cada visita sea agradable y libre de miedo.',
    benefits: ['Ambiente amigable para niños', 'Prevención temprana de problemas dentales', 'Técnicas sin dolor', 'Educación en higiene dental'],
    faqs: [
      { q: '¿A qué edad debo llevar a mi hijo al dentista?', a: 'La primera visita debe ser al cumplir el primer año o cuando salga el primer diente.' },
      { q: '¿Los dientes de leche necesitan tratamiento?', a: 'Sí. Los dientes de leche mantienen el espacio para los permanentes y son importantes para la masticación y el habla.' },
    ],
  },
  {
    slug: 'periodoncia',
    number: '06',
    icon: '◌',
    title: 'PERIODONCIA',
    subtitle: 'La Base de Todo',
    desc: 'Tratamiento de encías. La salud de tu sonrisa comienza por las raíces.',
    details: ['Limpieza profunda (curetaje)', 'Cirugía periodontal', 'Injertos de encía', 'Mantenimiento periodontal'],
    longDesc: 'Las encías son la base de una sonrisa saludable. Nuestro departamento de periodoncia trata las enfermedades de las encías con técnicas avanzadas, desde limpiezas profundas hasta cirugías regenerativas. La prevención y el mantenimiento son clave para conservar tus dientes toda la vida.',
    benefits: ['Encías saludables y firmes', 'Prevención de pérdida dental', 'Eliminación de mal aliento', 'Base sólida para otros tratamientos'],
    faqs: [
      { q: '¿Cómo sé si tengo enfermedad periodontal?', a: 'Signos comunes: encías que sangran al cepillarse, enrojecimiento, inflamación, mal aliento persistente o dientes que se mueven.' },
      { q: '¿La enfermedad periodontal tiene cura?', a: 'En etapas tempranas (gingivitis) es completamente reversible. En etapas avanzadas se puede controlar y estabilizar.' },
    ],
  },
  {
    slug: 'cirugia-oral',
    number: '07',
    icon: '✦',
    title: 'CIRUGÍA ORAL',
    subtitle: 'Precisión Máxima',
    desc: 'Extracciones y cirugía reconstructiva con protocolos de última generación.',
    details: ['Extracción de cordales', 'Injertos óseos', 'Cirugía pre-protésica', 'Biopsia de tejidos orales'],
    longDesc: 'Nuestro equipo de cirugía oral realiza desde extracciones simples hasta procedimientos reconstructivos complejos. Utilizamos protocolos quirúrgicos de última generación con planificación digital para minimizar el tiempo de recuperación y maximizar los resultados.',
    benefits: ['Mínima invasividad', 'Recuperación rápida', 'Planificación digital previa', 'Protocolos de bioseguridad estrictos'],
    faqs: [
      { q: '¿Debo extraerme las muelas del juicio?', a: 'No siempre. Solo se recomienda cuando causan problemas o no tienen espacio para erupcionar correctamente.' },
      { q: '¿Cuánto tarda la recuperación?', a: 'Depende del procedimiento. Una extracción simple: 2-3 días. Cirugía de cordales: 5-7 días.' },
    ],
  },
  {
    slug: 'diagnostico-3d',
    number: '08',
    icon: '⬡',
    title: 'DIAGNÓSTICO 3D',
    subtitle: 'Ver Antes de Tratar',
    desc: 'Escáner intraoral y planificación digital. Diagnóstico perfecto.',
    details: ['Tomografía Cone Beam (CBCT)', 'Escáner intraoral digital', 'Radiografía panorámica', 'Fotografía clínica profesional'],
    longDesc: 'El diagnóstico preciso es el primer paso hacia un tratamiento exitoso. Contamos con tecnología de imagen de última generación que nos permite ver tu anatomía oral en 3D, planificar tratamientos con precisión milimétrica y mostrarte los resultados esperados antes de comenzar.',
    benefits: ['Diagnóstico preciso al 100%', 'Planificación predecible', 'Menor radiación que métodos convencionales', 'Resultados inmediatos'],
    faqs: [
      { q: '¿La tomografía 3D es segura?', a: 'Sí. La radiación es mínima, mucho menor que una tomografía médica convencional.' },
      { q: '¿Para qué sirve el escáner intraoral?', a: 'Reemplaza las impresiones con pasta. Es más cómodo, preciso y permite ver tu boca en 3D al instante.' },
    ],
  },
];
