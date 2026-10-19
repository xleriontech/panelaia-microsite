export type Norma = {
  tema: string;
  aplica: string;
  correccion: string;
  verificar: string;
};

export const NORMAS: Norma[] = [
  {
    tema: "Constitución y objeto de la cooperativa",
    aplica: "Ley 79 de 1988, régimen cooperativo.",
    correccion: "Ninguna. Es la norma de base para una cooperativa de productores, sin ánimo de lucro y sin intermediación.",
    verificar: "Texto vigente en SUIN-Juriscol o en la Secretaría del Senado.",
  },
  {
    tema: "Vigilancia solidaria",
    aplica: "Ley 454 de 1998, Superintendencia de Economía Solidaria.",
    correccion: "Estar en constitución no implica, por sí solo, quedar vigilada. Depende de la actividad y del tamaño.",
    verificar: "Superintendencia de Economía Solidaria, antes de la inscripción definitiva.",
  },
  {
    tema: "Fideicomiso de administración",
    aplica: "Estatuto Orgánico del Sistema Financiero (Decreto 663 de 1993) y Decreto 2555 de 2010. Vigilancia: Superintendencia Financiera.",
    correccion: "La Ley 1328 de 2009 no es la norma que crea las fiducias. Es el régimen de protección al consumidor financiero y sí importa para los deberes de información hacia los asociados.",
    verificar: "Superintendencia Financiera y el contrato tipo que autorice Fiduagraria S.A.",
  },
  {
    tema: "Sector agropecuario",
    aplica: "Decreto 1071 de 2015, Decreto Único del sector administrativo agropecuario, pesquero y de desarrollo rural.",
    correccion: "El documento de trabajo cita el Decreto 1067 de 2015. Ese decreto es el DUR de Relaciones Exteriores, no el de agricultura.",
    verificar: "Función Pública / SUIN, Decreto 1071 de 2015.",
  },
  {
    tema: "Emprendimiento",
    aplica: "Ley 2069 de 2020, en lo que toque formalización y emprendimiento.",
    correccion: "No sustituye el régimen cooperativo ni acredita, por sí sola, beneficios de economía naranja.",
    verificar: "MinComercio y la norma tributaria vigente del beneficio que se quiera invocar.",
  },
  {
    tema: "Renta de la cooperativa",
    aplica: "Artículo 19-4 del Estatuto Tributario, adicionado por el artículo 142 de la Ley 1819 de 2016. Tarifa del 20% sobre beneficio neto o excedente, para cooperativas vigiladas.",
    correccion: "El documento de trabajo cita el artículo 197 del ET. Esa no es la norma del régimen cooperativo.",
    verificar: "Estatuto Tributario publicado por la DIAN y concepto vigente de la Subdirección de Normativa.",
  },
  {
    tema: "Pensión legal frente al fondo de retiro",
    aplica: "Ley 100 de 1993, Sistema General de Pensiones.",
    correccion: "Un fideicomiso cooperativo no crea, por sí solo, una mesada del régimen de prima media ni de ahorro individual. La cifra del documento es una estimación, no un derecho pensional adquirido.",
    verificar: "Colpensiones, el fondo privado del asociado si lo tiene, y Superfinanciera si el vehículo termina siendo un fondo voluntario de pensiones.",
  },
  {
    tema: "Datos de productores y compradores",
    aplica: "Ley 1581 de 2012, protección de datos personales.",
    correccion: "El pasaporte público del lote no publica el nombre del asociado. Solo código y vereda, salvo autorización.",
    verificar: "Política de tratamiento que adopte la cooperativa y el Registro Nacional de Bases de Datos, si queda obligada.",
  },
  {
    tema: "Buenas prácticas agrícolas",
    aplica: "Competencia del ICA sobre sanidad vegetal y BPA de la caña panelera.",
    correccion: "No se cita un número de resolución: no está verificado en el normograma ICA dentro de este prototipo.",
    verificar: "Normograma ICA antes de escribirlo en un acto o en un empaque.",
  },
  {
    tema: "Bagazo, aguas mieles y hornilla",
    aplica: "Competencia de la CAR Cundinamarca sobre vertimientos, emisiones y residuos del trapiche.",
    correccion: "No se inventa un número de acuerdo CAR. Usar bagazo como combustible de la hornilla CIMPA es aprovechamiento; no exime de orientar el sobrante y las aguas mieles.",
    verificar: "Normograma y ventanilla de la CAR, regional que atiende a Nocaima.",
  },
  {
    tema: "Exportación y deforestación",
    aplica: "Reglamento (UE) 2023/1115 solo si el producto está en su lista: bovinos, cacao, café, palma de aceite, caucho, soya y madera.",
    correccion: "La panela y la caña de azúcar no están en esa lista. No se debe prometer cumplimiento EUDR como requisito de exportación panelera.",
    verificar: "Texto consolidado del Reglamento en EUR-Lex, anexo I, el día de la exportación.",
  },
  {
    tema: "Categoría municipal",
    aplica: "Ley 617 de 2000, categorización de municipios.",
    correccion: "La categoría 6 se toma del documento base del proyecto. No se presenta como certificación de esta mesa de mando.",
    verificar: "Categorización vigente publicada por el municipio y la Contaduría / DNP.",
  },
];

export const ROADMAP = [
  {
    month: "1-2",
    title: "Constitución y censo de asociados",
    owner: "Cooperativa en formación y Secretaría de Desarrollo",
    detail: "Asamblea, estatutos bajo la Ley 79 de 1988 y lista de asociados con autorización de datos. Sin censo no hay meta agregada del fondo.",
  },
  {
    month: "3-4",
    title: "Línea base del trapiche",
    owner: "Jóvenes operadores IoT",
    detail: "Termopar en punteo, DHT22 solo para humedad ambiente, celda de carga en empaque. El DHT22 no mide 110 °C.",
  },
  {
    month: "5-7",
    title: "Piloto de hornilla CIMPA y molienda",
    owner: "Cooperativa",
    detail: "Automatización por estaciones: corte, molienda, hornilla, punteo, batido y empaque. El gemelo 3D se calibra con ese piloto, no al revés.",
  },
  {
    month: "8-9",
    title: "Trazabilidad fase 1",
    owner: "Cooperativa",
    detail: "Lote, QR y base centralizada. La huella SHA-256 es preparatoria. No hay anclaje Besu ni Polygon en esta fase.",
  },
  {
    month: "10-12",
    title: "Venta directa sin intermediarios",
    owner: "Community managers juveniles y comercial cooperativa",
    detail: "B2B Bogotá, mercados campesinos, suscripción y puerta de trapiche. Presupuesto documental de marketing: $2.000.000 COP al mes.",
  },
  {
    month: "11-13",
    title: "Instrucción del fideicomiso",
    owner: "Cooperativa y Fiduagraria S.A.",
    detail: "Solo después de que la fiduciaria autorice el contrato. Aporte del 5% al 8% por venta y referencia de $200.000 COP al mes.",
  },
  {
    month: "14-16",
    title: "Relevo generacional en operación",
    owner: "Jóvenes cooperativistas",
    detail: "Operación IoT y comunidad de marca Nocaima Dulce Origen. El relevo es parte del proceso, no un anexo.",
  },
  {
    month: "17-18",
    title: "Decisión de fase 2",
    owner: "Asamblea",
    detail: "Evaluar si conviene anclar en Hyperledger Besu o en Polygon. No se ancla antes de tener la fase 1 estable.",
  },
] as const;
