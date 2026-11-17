import { Translations } from './translations.type';
import { EXPERIMENT_PROMPT } from './data-maps-prompt';

export const ES: Translations = {
    navBar: {
        partners: 'PARTNERS',
        aboutUs: 'SOBRE NOSOTROS',
        awards: 'PREMIOS',
        whoTrustUs: 'QUIÉN CONFÍA',
        theGroup: 'EL GRUPO',
        joinUs: 'ÚNETE',
        contact: 'CONTACTO',
    },
    hero: {
        title: 'La única formación que termina en producción',
        subtitle: '41OPS',
        description: '41OPS es la única empresa de formación que llega a producción tecnológica: Formación → Preproducción → Producción. Arquitecturas Extendidas de Producción (EPAs) ligeras sobre tus sistemas heredados para consumir IA de forma eficiente.',
    },
    partStw: {
        titleHtml: 'Parte de <u>SciTheWorld</u>',
        lead: 'SciTheWorld es un negocio familiar de inversión de vanguardia: no un fondo, sino un conglomerado construido sobre su propio I+D. Algorithmization es la I. 41OPS es el D.',
        pipelineLabel: 'De la idea a la empresa',
        pipeline: [
            { title: 'Idea', text: 'Tiene sentido.' },
            { title: 'Borrador del paper', text: 'En Algorithmization.' },
            { title: 'Tecnología', text: 'Creada en 41OPS.' },
            { title: 'Probada', text: 'En la industria.' },
            { title: 'Paper publicado', text: 'Si es viable.' },
            { title: 'Producto o empresa', text: 'Sobre nuestras plataformas, o una nueva empresa.' },
        ],
        pipelineNote: 'Nuestro D no se queda en una prueba de concepto: termina en un producto final o en una nueva empresa. Es un D imbatible. Y cada producto y empresa que creamos hace crecer el conglomerado de SciTheWorld.',
        bridge: 'Tras crear productos y empresas en retos de vanguardia, vemos la foto completa de la maraña de sistemas, procesos y equipos de cada cliente, y por dónde empezar a desenredarla.',
        intro: 'Ayudamos a nuestros clientes a poner orden en sus retos de transformación mediante formación muy focalizada: la visión global de AI Ops (nuevos protocolos de trabajo), los habilitadores tecnológicos, el ML implicado y el riesgo de cada uno.',
        stepsLabel: 'Lo que ningún otro formador puede hacer',
        steps: [
            {
                number: '01',
                title: 'Un marco con todas las piezas',
                tag: 'Formación · CALM · Back to the Future',
                text: 'La formación se basa en los descubrimientos publicados en algorithmization.com. Lo que te llevas es tu propio artefacto final.',
            },
            {
                number: '02',
                title: 'Una app acordada con todos los usuarios',
                tag: 'Preproducción · Data MAPs',
                text: 'Conectamos tu artefacto a nuestra plataforma: Fractal si hay un sistema operativo de IA de por medio, Alpha Dynamics si se trata de inversión avanzada. De repente, tu artefacto es deeptech.',
            },
            {
                number: '03',
                title: 'Una app acordada con todos los stakeholders',
                tag: 'Producción · Data MAPs',
                text: 'Cumplimos con las necesidades de tu CTO, tu CISO, cumplimiento normativo y todos los demás, y definimos la arquitectura final que pasa a producción. De repente, te has transformado.',
            },
        ],
        stepsNote: 'Junto a ti, construimos una prueba de concepto muy focalizada. Después, recorre el camino entero con nosotros o detente donde decidas: formación, pre-producción o producción.',
        doorsLabel: 'Dos formas de empezar',
        doors: [
            {
                title: 'Conoces el problema',
                text: 'Traemos una prueba de concepto muy focalizada, conectada a tu stack tecnológico, y te enseñamos la solución funcionando. Vista, no contada.',
            },
            {
                title: 'Quieres transformarte',
                text: 'Tres paquetes, en orden: CALM (ranking, insights y formación focalizada), Back to the Future (prueba antes de comprar) y Data MAPs (tus procesos y tu stack tecnológico algoritmizados, sobre Fractal).',
            },
        ],
        modesLabel: 'Según el proyecto, somos',
        modes: [
            {
                title: 'De arriba abajo',
                text: 'Tu consultoría para la alta dirección, pero basada en tecnología ejecutable desde la base en lugar de en PowerPoints.',
            },
            {
                title: 'De abajo arriba',
                text: 'Tu consultoría tecnológica, pero creando SaaS a medida en lugar de los clásicos proyectos de la vieja escuela.',
            },
        ],
        closing: 'Después, puedes interconectar esos proyectos dentro de tu empresa (departamentos y sistemas heredados, hasta tu propio sistema operativo algorítmico) o con socios (desbloqueando confianza gracias a una auditabilidad sin precedentes).',
    },
    deeper: {
        label: 'Profundiza',
        title: 'Nuestra caja de herramientas y metodología',
        lead: 'Para quien quiera el detalle detrás del enfoque.',
        moreLabel: 'Abrir',
        toolkit: { title: 'Caja de herramientas', teaser: 'Nuestra tecnología entre bastidores, tu personalización, tu tecnología a medida por departamento y, a largo plazo, tu IA General Corporativa.' },
        teasers: [
            'De artesanos a profesionales de oficina orquestados.',
            'Burbujas de transformación hacia la extrema eficiencia.',
            'La fábrica de casos de uso algorítmicos, sobre Fractal y Alpha Dynamics.',
        ],
    },
    training: {
        label: 'Nuestra formación',
        title: 'Formación que termina en producción',
        lead: 'Programas muy focalizados, basados en la vanguardia publicada en algorithmization.com y aplicados a tus propios retos. El formato y la duración se adaptan a cada cliente.',
        audiences: [
            { who: 'Consejos', title: 'Board Programme', text: 'Presencial, con los cofundadores de SciTheWorld. Para consejos que necesitan criterio, no un certificado.' },
            { who: 'Directivos y mandos', title: 'CALM', text: 'Una agenda de transformación priorizada, insights y formación focalizada, para que todos compartan la misma visión antes de invertir.' },
            { who: 'Equipos', title: 'Back to the Future', text: 'Prueba antes de comprar: aprende los límites haciendo, sobre tus propios retos, y llévate tu propio artefacto.' },
        ],
    },
    tryIt: {
        label: "No te pierdas nuestro experimento",
        title: 'No te fíes de nuestra palabra. Pregúntale a tu IA.',
        text: 'Copia un prompt breve, pégalo en ChatGPT, Claude, Gemini o cualquier IA y juzga por ti mismo: ¿fuimos más rápidos y eficientes que las Big Tech y las grandes consultoras?',
        copy: 'Copiar el prompt',
        copied: 'Copiado. Ahora pégalo en tu IA',
        openIn: 'Abrir:',
        reopen: "No te pierdas nuestro experimento",
        close: 'Cerrar',
    },
    edge: {
        label: 'Confidencial por diseño',
        title: 'Tu ventaja sigue siendo tuya',
        text: 'Enseñamos abiertamente; lo que construyes con nosotros sigue siendo privado. Tus artefactos, tus datos y tu know-how están protegidos por diseño: federados, compartimentados y siempre tuyos.',
    },
    seo: {
        title: '41OPS | La única formación que termina en producción',
        description: '41OPS, parte de SciTheWorld, forma a tu equipo en AI Ops, habilitadores tecnológicos y ML, y lleva tu artefacto a preproducción y producción sobre Fractal o Alpha Dynamics. EPAs ligeras sobre tus sistemas heredados.',
    },
    approach: {
        eyebrow: 'Cómo trabajamos',
        title: 'Guiados por algoritmos, no por datos',
        lead: 'No puedes preguntar a un LLM qué hacer a continuación basándote en su conocimiento general. Las decisiones necesitan tus datos y modelos muy focalizados: predicción, recomendación, simulación y optimización.',
        columns: [
            {
                title: 'Guiado por datos',
                subtitle: 'Lo que conoces',
                steps: ['Recopilar datos', 'Limpiarlos', 'Modelizarlos', 'Esperar que operaciones les encuentre valor'],
                artifact: 'Su artefacto: la hoja de cálculo. Los datos, democratizados.',
            },
            {
                title: 'Guiado por algoritmos',
                subtitle: 'Lo opuesto, pero más realista',
                steps: ['El proyecto pide las operaciones', 'Las operaciones piden modelos', 'Los modelos piden datos', 'Los datos piden un modelo de datos y calidad de datos'],
                artifact: 'Su artefacto: un marco vivo, integrado rápido en las operaciones, y preciso.',
                highlight: true,
            },
        ],
        timeline: [
            { label: 'Ayer', title: 'La hoja de cálculo', text: 'Los datos, democratizados.' },
            { label: 'Hoy', title: 'El HTML', text: 'Más cerca de las operaciones y su integración, pero aún falta la ciencia.' },
            { label: 'Con nosotros', title: 'El artefacto algoritmizado', text: 'El marco para mejorar siempre: visiones de expertos, nuevos procesos y operaciones, y algoritmos que lo fusionan todo con más ciencia.' },
        ],
        m1Label: 'Nuestra ventaja · M1',
        m1Title: 'Modelos de ML nuevos, creados para cada problema',
        m1Text: 'Creamos modelos nuevos ajustados a tus datos y restricciones, en lugar de reutilizar modelos genéricos. Por eso un recomendador complejo supera a uno basado en LLMs.',
        plugLabel: 'Conectar y usar',
        plugTitle: 'Conecta tu artefacto a Fractal, y úsalo',
        plugLead: 'Una vez conectado, cada artefacto sigue ajustándose hacia la máxima precisión de sus protocolos (operaciones) y modelos.',
        layers: [
            { title: 'Agéntico', text: 'Estrategias, LLMs y agentes de ML trabajando juntos, para precisión, control, auditabilidad y trazabilidad.' },
            { title: 'Seguro', text: 'Más allá del grado militar: cerrado de extremo a extremo, como un Mac; diseñado asumiendo la brecha; federado para la máxima protección de la propiedad intelectual.' },
            { title: 'Algoritmizado', text: 'Modelos M1 a medida y la precisión de Alpha Dynamics: de los datos al algoritmo.' },
        ],
        closing: 'Ciencia aplicada, no solo ciencia que se aplica.',
    },
    highlights: {
        sectionTitle: 'HIGHLIGHTS',
        sectionSubtitle: 'Multitud de logros',
        testimonialsLabel: 'Testimonios:',
        copyPromptLabel: 'Primero, copia el prompt:',
        copyButtonLabel: 'Copiar prompt',
        copiedButtonLabel: '¡Copiado!',
        llmSectionLabel: 'Luego, compruébalo en estos LLMs:',
        cards: [
            {
                title: 'NACIÓN DE EFICIENCIA-EXTREMA',
                description: 'En 2025, nos convertimos en la primera compañía en la que se confió para transformar un país entero: España.\n\nSe basó en nuestro <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5136657" target="_blank">informe de geoestrategia e IA</a> e involucró al Ministerio de Economía (orientación de abajo hacia arriba de la política económica); El agente de crédito de España (ICO); un think tank de referencia (Elcano) y la asociación de las principales empresas familiares (IEF).\n\nLo primero fue establecer una metodología para ayudar a todas las empresas a detectar y priorizar sus proyectos de transformación. De hecho, ése es uno de los desafíos más complejos y menos avanzados por la industria hasta la fecha.',

                testimonials: [
                    {
                        name: 'País de la UE',
                        role: "Referencia bajo petición",
                        quote: "El documento fue un descubrimiento: ya había tanta literatura sólida y tecnología anticipada por SciTheWorld que seguir su ejemplo era una mera optimización del riesgo-recompensa. Más de 3000 empresas en el alcance."
                    }
                ]
            },
            {
                title: 'PIONEROS DE LA CAPA DE FEDERACIÓN QUE LE FALTA A LA IA AGÉNTICA',
                description: 'Gozamos de un sólido reconocimiento como pioneros mundiales de la IA Agéntica basada en estrategias - la Máquina en el Machine Learning. Comenzamos en 2015 y publicamos nuestros resultados en nuestro primer informe - Data MAPs.\n\nNo confíes solo en nuestra palabra. Pregúntale a tu LLM preferido, aquí.',
                prompt: EXPERIMENT_PROMPT,
                testimonials: [
                    {
                        name: 'Banco del IBEX',
                        role: "Referencia bajo petición",
                        quote: 'Vimos el potencial pronto y comenzamos juntos la transformación de nuestro Asset Manager: siguió una reducción del personal del 50 %.'
                    },
                    {
                        name: 'Empresa Energética Global',
                        role: "Referencia bajo petición",
                        quote: "Nos llevó tiempo entender la propuesta de SciTheWorld, pero su historial era impoluto y su enfoque gradual y realista. Estamos listos para continuar de forma holística - incluyendo speed-boats a modo de spin-offs."
                    }
                ]
            },
            {
                title: 'UN HISTORIAL DE RÉCORD EN INNOVACIÓN',
                description: 'Quienes nos conocen desde hace años ya han presenciado nuestro criterio en tiempo real.\n\nPara el resto, un buen KPI es ver cuánto anticipamos las wish-lists publicadas año tras año por Y Combinator. Por razones obvias no podemos dar detalles abiertamente, pero se pueden deducir con facilidad con nuestra <a href="http://www.Algorithmization.com" target="_blank">literatura</a> y <a href="https://www.linkedin.com/posts/scitheworld_y-combinator-once-more-converges-with-us-activity-7425140147408510976-5wwn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAALGt8sBGIKDVyYJmx48oPIQHtAVr9qqOHU" target="_blank">comunicaciones</a>.',
                testimonials: [
                    {
                        name: 'Universidad de primer nivel',
                        role: "Referencia bajo petición",
                        quote: 'Nos sorprendió enormemente su capacidad para ver con una claridad la hoja de ruta en innovación de diversas disciplinas. Decidimos aunar esfuerzos con ellos para comprender y valorar mejor a las empresas en un mundo donde los intangibles (por ejemplo, la innovación) han pasado a tener mayor protagonismo que nunca.'
                    }
                ]
            }
        ]
    },
    horizontalSections: [
        { title: 'TOOLKIT' },
        { title: 'HIGHLIGHTS' },
    ],
    aboutUsHorizontal: [
        {
            title: 'Transformación Corporativa',
            modalContent: `
<p>Es, simplemente, la transición de artesanos a operarios orquestados (<em>blue collars</em>), tal como ocurrió en el siglo pasado, pero llevado a las oficinas centrales; es decir, de artesanos a trabajadores del conocimiento orquestados (<em>white collars</em>). Es la forma en que las empresas pueden ayudar a sus profesionales a aportar valor en un mundo algorítmico: estableciendo la innovación como su operativa habitual (<em>Business-As-Usual</em>, BAU). Esto se logra a través de tres pasos principales que conforman un ciclo continuo:</p>

<ol>
    <li><strong>Revisión de las operaciones</strong> teniendo en cuenta todo el potencial que puede liberar la IA. Es decir, pasar de <em>Ops</em> a <em>AIOps</em>; de ahí nuestro nombre, 41OPS, concebido años antes de que esto se convirtiera en una tendencia dominante.</li>
    <li><strong>Creación de una Arquitectura Extendida de Producción (EPA)</strong> para que la IA pueda ser consumida de forma orgánica por los sistemas heredados (<em>legacy</em>) de la compañía. Por lo general, se trata de una interfaz a medida que da cabida a las primeras versiones de los algoritmos que ayudarán al departamento a ser más eficiente.</li>
    <li><strong>Iteración de métodos y modelos de IA</strong>, así como la incorporación de otros nuevos, para que los patrones se exploten, por fin, de manera realista y profesional.</li>
</ol>

<p>Un ciclo diseñado para que los empleados ejecuten la innovación como parte de su operativa habitual (BAU).</p>`,
        },
        {
            title: 'Metodología',
            modalContent: `
<p>Estamos en una posición única para implementar Burbujas de Transformación que liberen la Eficiencia Extrema. Aunque abarca infinidad de variables, destaquemos algunas:</p>

<ol>
    <li><strong>Transformación ascendente (<em>bottom-up</em>):</strong> otorga autonomía a los departamentos mientras la tecnología se encarga de garantizar las sinergias.</li>
    <li><strong>A medida:</strong> EPA departamental integrado sobre los sistemas heredados (<em>legacy</em>) de la compañía.</li>
    <li><strong>Sistema operativo orgánico:</strong> no se impone desde arriba; al contrario, surge como resultado natural de esta transformación departamental ascendente. A partir de ahí, permite tomar todo tipo de decisiones híbridas e interdepartamentales en tiempo real.</li>
</ol>

<p>Hasta donde sabemos, no solo somos los pioneros de esta metodología adaptada al ecosistema corporativo, sino también los únicos capaces de enseñarla y llevarla a producción.</p>`,
        },
        {
            title: 'Entre bastidores',
            modalContent: `
<p>Esto es lo que hace posibles la preproducción y la producción después de la formación.</p>
<p>Nuestro enfoque absoluto es la Máquina dentro del <em>Machine Learning</em>: M1, modelos nuevos creados para cada problema, y M2, la máquina que los gobierna.</p>

<p>Nuestro producto puede entenderse como la fábrica de casos de uso algorítmicos. O, dicho de otro modo:</p>

<ol>
    <li><strong>El andamiaje</strong> (la fábrica) que rodea un árbol para que las pértigas (los casos de uso) no solo alcancen la fruta más accesible (el impacto), sino cualquier fruto con facilidad.</li>
    <li><strong>La hoja de cálculo</strong> (la fábrica) donde tus empleados o proveedores externos pueden crear sus propios diseños (operaciones) y fórmulas (casos de uso).</li>
    <li><strong>El pastel</strong> (la fábrica) sobre el que por fin se puede colocar la guinda (los casos de uso); de lo contrario, caería directamente a la mesa sin generar ningún impacto.</li>
</ol>

<p>Y se implementa a través de dos plataformas:</p>

<ol>
    <li><strong>Fractal:</strong> la tecnología integral que utilizamos para operar todo el grupo no es el producto final, sino, lo que es más importante, el punto de partida para la transformación de cada departamento.</li>
    <li><strong>Alpha Dynamics:</strong> una plataforma de inversión avanzada que aún no está a disposición de la mayoría de los agentes financieros más reconocidos.</li>
</ol>`,
        },
    ],
    unbeatableVertical: [
        {
            title: 'Imbatibles',
            modalContent: `
<p>Como era de esperar, a la luz de esta información y aprovechando nuestra pertenencia al Grupo SciTheWorld, nos hemos posicionado a nivel global sin rival en términos de:</p>

<ol>
    <li><strong>Calidad:</strong> no solo podemos competir con cualquier firma algorítmica, sino que, lo que resulta más interesante, podemos integrarlas a todas; es decir, somos una opción Pareto-superior.</li>
    <li><strong>Precio:</strong> allí donde nuestros competidores exigen años e inversiones millonarias, nosotros podemos arrancar de forma gradual en menos de medio año y por menos de 500.000 €.</li>
    <li><strong>Tiempo de paso a producción <em>(Time-to-Production)</em>:</strong> una vez en marcha, proyectos que habitualmente toman meses se completan en tan solo 2 semanas.</li>
    <li><strong>Ciberseguridad:</strong> enfoques de desarrollo propio que aprovechan la naturaleza algorítmica nativa de los EPA. Especialmente clave cuando la amenaza proviene del interior (empleados, CNE...).</li>
    <li><strong>Protección de la Propiedad Intelectual (IP):</strong> nuestra arquitectura federada garantiza una separación estricta para cualquier rol.</li>
    <li><strong>Continuidad de negocio:</strong> desacoplable por diseño <em>(detachable by design)</em>.</li>
    <li><strong>Mitigación de la resistencia al cambio:</strong> empoderamos a los profesionales para que definan dinámicamente dónde pueden seguir aportando valor.</li>
    <li><strong>Protección de datos:</strong> estrategias avanzadas de gestión de permisos para compartir o integrar datos en el nivel adecuado.</li>
    <li><strong>Escalabilidad:</strong> al enfocarnos en la "M" del <em>Machine Learning</em>, dejamos que nuestros partners (o tus proveedores de IA de confianza) gestionen la dimensión humana de tus casos de uso.</li>
</ol>`,
        },
        {
            title: 'En un párrafo',
            customContent: `
        <p>
          <i>[Las EPAs son deeptech personalizado (custom deeptech) que se sitúa por encima de los legacys departamentales de nuestros clientes para desbloquear su naturaleza algorítmica. Progresivamente construyen los sistemas operativos de los clientes sobre los cuales cualquier caso de uso se edifica y, más interesante aún, se controla con facilidad.]</i>
        </p>
      `,
        },
    ],
    newVerticalSections: [
        {
            title: 'Sobre nosotros',
            subtitle: 'EL BRAZO EJECUTOR DE SCITHEWORLD',
            modalContent: `
        <p>41OPS es la compañía de transformación nativa-IA de SciTheWorld.</p>
        <p>Desde su inicio, ha jugado también un rol estructural en el Grupo: financiar el Centro de Excelencia para que Algorithmization pudiera mantenerse libre e independiente en su creación de propiedad intelectual.</p>
        <p>Esa independencia no es casual. La investigación de frontera y largo plazo —y la nuestra abarca más de una década— efectivamente no se financia con los mecanismos tradicionales. 41OPS existe, en parte, para cerrar la brecha estructural entre la ciencia aplicada y la realidad industrial.</p>
        <p>41OPS hereda de SciTheWorld:</p>
        <ul>
          <li>La disciplina de Algorithmization (metodología),</li>
          <li>Nuestras plataformas SaaS:
            <ol>
              <li>Plataforma Fractal (tecnología corporativa AI-native),</li>
              <li>Plataforma Alpha Dynamics (sistemas de toma de decisiones de inversión).</li>
            </ol>
          </li>
        </ul>
        <p>Esto garantiza coherencia entre teoría, arquitectura y ejecución.</p>
      `,
        },
        {
            title: 'Lo que realmente entregamos',
            subtitle: 'THE REAL DEAL',
            modalContent: `
        <p>41OPS vende Extreme-Efficiency. SciTheWorld es un ejemplo de Extreme-Efficient Group en sí mismo:</p>
        <ol>
          <li>Algorithmization: 2 personas (co-fundadores).</li>
          <li>Plataformas:
            <ul style="list-style-type: lower-alpha;">
              <li>Fractal: 4.5 personas (co-fundadores + personal rotativo por escalabilidad).</li>
              <li>Alpha Dynamics: 2 personas.</li>
            </ul>
          </li>
          <li>Learning-adaptive y SystematicMe: 2 personas.</li>
        </ol>
        <p>El Banco de España quedó tan sorprendido por esta capacidad que llegaron a enviar gente a auditar brevemente nuestra metodología.</p>
        <p>Los resultados típicos incluyen "Burbujas de Transformación" (Transformation Bubbles):</p>
        <ul>
          <li>Protocolos y flujos nativos-IA.</li>
          <li>Plataformas SaaS customizadas a la necesidad de cada departamento.</li>
        </ul>
        <p>El tiempo promedio a producción de los proyectos una vez somos "business-as-usual" sobre nuestras plataformas: ~2 semanas.</p>
      `,
        },
        {
            title: 'Marcas que confían en nosotros',
            subtitle: 'TODA CLASE DE TAMAÑOS Y MADUREZ DIGITAL',
            modalContent: `
        <p>Al ser el brazo ejecutor de nuestro Centro de Excelencia, nuestra trayectoria obviamente difiere de la mayoría de empresas de tecnología. Antes que los ingresos cortoplacistas hemos primado hacer que la tecnología acierte a todos los niveles.</p>
        <p>La razón yace en lo que llamamos "El Cubo" en el primer paper. ¿Cómo probamos la universalidad de nuestro descubrimiento?</p>
        <p>La respuesta de SciTheWorld fue empírica en vez de retórica probándolo con nosotros rellenando con usos de:</p>
        <ul>
          <li>múltiples sectores,</li>
          <li>gran variedad de tamaños (de pymes a IBEX),</li>
          <li>muy diferentes grados de madurez.</li>
        </ul>
        <p>Crucialmente, un uso no lo replicábamos hasta la saciedad, buscábamos el siguiente ortogonal. Esa aproximación optimizó solidez en lugar de caja.</p>
        <p>Como consecuencia ganamos la visibilidad (Universidades, foros profesionales...) para asesorar a entidades (antiguos mandatarios, CEOS de Silicon Valley, Gobiernos y Bancos Centrales) y optimizamos el valor de SciTheWorld a largo plazo.</p>
        <p>Así lo hemos explicado en Advances in Agentic AI: Back to the Future.</p>
      `,
        },
        {
            title: 'Dos vías de colaboración',
            subtitle: 'LA CLAVE ES INTERACTUAR HASTA COMPRENDER NUESTRA CALIDAD',
        },
        {
            title: 'Burbujas de transformación',
            subtitle: 'EL CAMINO ESCALABLE A LA NATIVIDAD IA',
            modalContent: `
        <p>41OPS entrega transformación por medio de las Transformation Bubbles.</p>
        <p>Una Transformation Bubble es una unidad acotada de altísimo impacto que:</p>
        <ul>
          <li>funciona sola,</li>
          <li>entrega valor medible rápidamente,</li>
          <li>y está diseñada para conectarse a futuras burbujas.</li>
        </ul>
        <p>Cada una tiene "efectos de red".</p>
        <h3>Ruta de transformación de SciTheWorld</h3>
        <p>Las burbujas se despliegan en esta escalera de la que no aconsejamos saltarse niveles (para evitar la fragilidad o caída política):</p>
        <p style="text-align: center; font-weight: 700; margin: 1rem 0;">productos → departamentos → compañías → sectores → naciones → sociedad</p>
        <p>41OPS es de las poquísimas organizaciones que ha operado en el plano de países con la metodología Extreme-Efficient Nations.</p>
      `,
        },
        {
            title: 'Puedes desenchufarnos. Por diseño',
            subtitle: 'NO QUEREMOS SER TU PRÓXIMA DEPENDENCIA',
            modalContent: `
        <p>Nuestra tecnología se conduce por estrategias y federada. Tu propiedad intelectual sigue siendo tuya, creada con nosotros u otros.</p>
        <p>En la práctica:</p>
        <ul>
          <li>Tú eres el propietario de la estrategia,</li>
          <li>de sus componentes (agregamos tu IA que decidas fácilmente),</li>
          <li>y retienes la capacidad para reconstruirlo y operarlo sin nosotros.</li>
        </ul>
        <p>Diseñamos los proyectos para que nos puedas desacoplar. De hecho, lo recomendamos para continuididad de negocio.</p>
        <p>Hay una diferencia sutil pero importante.</p>
        <p>Si sacas la plataforma, siguen operables las estrategias por el código estandarizado portátil.</p>
        <p>Lo que dejas atrás es nuestra eficiencia:</p>
        <ul>
          <li>flexibilidad arquitectónica,</li>
          <li>con ciberseguridad avanzada,</li>
          <li>y federación dinámica,</li>
        </ul>
        <p>Conservarás la propiedad intelectual pero perderás resiliencia en infraestructura y agilidad.</p>
      `,
        },
        {
            title: 'Dos velocidades en la transformación',
            subtitle: 'A MENUDO AMBAS CONVIVEN',
        },
        {
            title: 'Ecosistemas de Extreme-Efficiency',
            subtitle: 'NUESTROS AGENTES NO CONOCEN LÍMITES',
            modalContent: `
        <p>Nuestras Transformation Bubbles se diseñaron para escalar dentro de un ente y a través de múltiples.</p>
        <p>Construimos ecosistemas (las dimensiones orgánicas no se adaptan al molde exacto).</p>
        <h3>Dentro del grupo / empresa</h3>
        <p>Los "network effects" internos aceleran y afianzan a la par que SystematicMe los acompaña y entrena, brindando robustez enorme al éxito.</p>
        <p>Aquí es donde las transformaciones se hacen resilientes.</p>
        <h3>En múltiples entes independientes</h3>
        <h4>Fondos bajo un único control (Private Equity)</h4>
        <p>Desbloquea beneficios de todo estilo y colores.</p>
        <ul>
          <li>selección inteligente para adquisiciones (AI),</li>
          <li>velocidad sin bloqueos políticos,</li>
          <li>e interoperabilidad para potenciar las del fondo enormemente.</li>
        </ul>
        <h4>No compartiendo dueños</h4>
        <ul>
          <li>asociacionismo, cluster, etc.</li>
        </ul>
      `,
        },
    ],
    engagementModes: [
        {
            title: 'Proyectos abiertos',
            content: 'En los proyectos abiertos, el cliente impulsa la iniciativa.\n41OPS aporta profesionales súper-senior seleccionados no solo por sus habilidades técnicas sino, sobre todo, por la capacidad de análisis.\nAdemás del puro talento (staffing), aportamos un diferencial de valor:\n• rigurosa monitorización del proyecto,\n\n• concienciación de arquitectura profunda,\n\n• y apoyos en nuestra tecnología para afianzar éxitos y rapidez.\n\nDemuestra ser la manera idónea de forjar la confianza inicial (un aterrizaje de garantías) que conduce a las transformaciones core en cerrado.',
        },
        {
            title: 'Proyectos cerrados',
            content: 'En lo cerrado, 41OPS conduce la transformación.\nAquí, la encomienda es clara: subsanar una necesidad integral transformando mediante la Algorithmization las operaciones concretas. Los usos emplean Fractal y/o Alpha Dynamics (según sea el caso) para afianzar el AI-nativity en el ADN corporativo.\nEn otras palabras, y usando jerga:\n| 41OPS no vende solo proyectos de IA.\n\nDa un vuelco AI-nativo de flujos, jerarquías de dato, arquitecturas subyacentes e infraestructura para que:\n• todo sea profundo, no superficial,\n\n• transparente y analizable y ordenado.\n\nCambiamos tu forma de integrar la IA y el control económico/estructural que de ella sacas.',
        }
    ],
    transformationSpeeds: [
        {
            title: 'Transformación gradual (dentro de la org)',
            content: 'Para empresas queriendo transicionar core en un entorno muy seguro:\n• Comenzamos en áreas concretas.\n\n• Levantamos de nuevo esquemas y operaciones con infra preparada al respecto.\n\n• Customizamos los SaaS y APIs.\n\n• Progresivamente unificamos mediante extensiones más áreas.\n\nDando como resultado crecimientos predecibles e imparables.',
        },
        {
            title: 'Transformación de un golpe (speedboats / JVs)',
            content: 'Las inercias del pasado o normativas de los ecosistemas impiden avanzar deprisa por dentro.\n• Proponemos vehículos (entidades paralelas que vuelan desde primer momento).\n\n• Nacen en origen Natividad IA (sin taras pasadas).\n\n• La organización matriz acabará asimilando este modelo.\n\nEstupendo y exitoso ejemplo en:\n• Sectores con elevadísima regulación,\n\n• Cuerpos muy densos / elefánticos,,\n\n• Adquisiciones M&A (P.E.), etc.',
        }
    ],
    oldVerticalSections: [
        {
            title: 'Por qué existe Algorithmization',
            subtitle: 'VIMOS LA NECESIDAD UNA DÉCADA ANTES QUE LA INDUSTRIA',
            modalContent: '<p>La mayoría de los proyectos de IA fracasan no porque la IA sea inmadura, sino porque las organizaciones no están diseñadas para absorber inteligencia.</p><p>Algorithmization existe para resolver ese problema estructural.</p><p>No se trata de usar más IA.</p><p>Se trata de convertirse en un sistema algorítmico.</p>'
        },
        {
            title: 'UNA NUEVA DISCIPLINA',
            subtitle: 'LO QUE ES',
            modalContent: `<p style="margin-bottom: 2rem;">Algorithmization es una nueva disciplina de la ciencia aplicada enfocada a las transformaciones de estado avanzado.</p>
  <p style="margin-bottom: 2rem;">Su objetivo no es "meter IA" en las org., sino re-arquitectarlas para que las resoluciones, rutinas e I+D funcionen con lógica algorítmica.</p>
  <p>El resultado:</p>
  <ul style="display: flex; flex-direction: column; gap: 2rem; margin-bottom: 2rem;">
    <li>los avances operan con interés compuesto,</li>
    <li>la transformación deja de ser un evento y muta a algo persistente,</li>
    <li>la mejora estructural es tu moat o barrera.</li>
  </ul>
  <p>Algorithmization vertebra en fondo SciTheWorld e hila nuestros esfuerzos de spin-offs y plataformas.</p>`
        },
        {
            title: 'LOS 3 PILARES DE CONOCIMIENTO',
            subtitle: '',
        },
        {
            title: 'LA MISIÓN',
            subtitle: 'CIENCIA APLICADA NO ES LO MISMO QUE APLICAR CIENCIA',
            modalContent: `<p>Algorithmization sigue estrictamente el lazo ciencia-empresa:</p>
<h3 style="margin: 1rem 0; text-align: center; font-size: 1.25em;">Inventar → Formalizar → Demostrar → Industrializar</h3>
<p>La secuencia es intocable:</p>
<ul>
<li><strong>Inventar</strong><br>Buscamos ineficiencias o eslabones por resolver al juntar tres frentes: Economía, IA, y Arquitecturas SW.</li>
<li><strong>Formalizar</strong><br>Pasar las metodologías y hallazgos a teoremas estructurables, repetibles, rebatibles.</li>
<li><strong>Probar (Demostrar)</strong><br>Someter los constructos teóricos al stress mas duro y corporativo (precio de venta, compliance).</li>
<li><strong>Industrializar</strong><br>Que lo que demuestre firmeza, se estandarize o consolide a trazo grueso.</li>
</ul>
<p>El lazo siempre reitera desde nuestro Centro de Excelencia (CoE).</p>`
        },
        {
            title: 'OUTPUTS',
            subtitle: '',
        },
        {
            title: 'UN SUBPRODUCTO MUY ESPECIAL',
            subtitle: 'LO DISEÑAMOS UNA DÉCADA ANTES',
            modalContent: `<p>AI Agentic ahora lo permea todo.</p>
<p>Nosotros planteamos los diseños, las guías operacionales a implementar para sustentarse el concepto años antes de ser acuñado el argot.</p>
<p>Sometiéndolo a la inspección textual de nuestro capitulo 3er en el Paper inicial Data MAPs, los modelos lingüísticos concluyen por ellos mismos su condición innovadora pionera.</p>
<p>Pruébalo ahora debajo.</p>`,
        },
        {
            title: 'ALCANCE DE LA ALGORITMIZACIÓN',
            subtitle: 'UNA VISIÓN COHERENTE Y AMBICIOSA',
            modalContent: `<p>Algorithmization se pensó para ser escalar en un orden preciso:</p>
<p style="text-align: center; font-weight: 700; margin: 4rem 0 2rem 0; font-size: 1.2rem;">productos → departamentos → entes → agrupaciones/sectores → estado → civilización</p>
<p>Esto no es vanagloria ni meta – es una imposición forzosa por la complejidad combinatoria.</p>
<p>Nos enorgullece asentar proyectos de máximo nivel que incluso llegaron a la capa país e influyendo fuertemente en la academia la sociedad misma y formaciones humanistas de rigor.</p>`
        }
    ],
    pillarsList: [
        {
            title: 'Microeconomía',
            content: 'Toda empresa e incentivo cambia si se aborda desde variables regidas económicamente para balanceo natural. Nuestras resoluciones de cuellos las desengrasa.',
        },
        {
            title: 'IA / Aprendizaje Automático (ML)',
            content: 'Tratar sin la mística al avance para hacer de el orquestables conjuntos que entreguen impacto y gobierno total al cliente, desentrañándole todo poder pre-asignativo y siendo así los reales precursores en Agentes Corporativos.',
        },
        {
            title: 'Desarrollo SW Deeptech',
            content: 'Si todo lo bueno arriba hallado en teórica e inferencias no puede programarse eficientemente sin caer en atolladeros de servidores o parches, no sirve de nada en lo real. Nuestras plataformas y SaaS recogen con celo la mejor arquitectura imaginable al respecto.',
        }
    ],
    outputsList: [
        {
            title: 'Publicaciones Científicas (Papers)',
            content: 'Forman todo lo riguroso que no vendemos humos. En general, en contra de la academia clásica, lo teorizamos a toro pasado una vez comprobado de sobra que el sistema productivo funciona en casos.',
        },
        {
            title: 'Arquitecturas',
            content: 'Estructuras geniales que resguardan la estrategia sobre su esqueleto. Los "assets" base organizativos que unifican control.',
        },
        {
            title: 'Estándares y Modelajes',
            content: 'El método que salva de cometer costosos yerros al innovar. Unen pautas y reglas (cada vez más normalizadas).',
        },
        {
            title: 'Plataformas',
            content: 'Sistemas 100% terminados a cota superior que asimilan con máxima rapidez y estabilidad al usuario para explotar la IA.\n• Fractal — para la corporación general.\n• Alpha Dynamics — para inversiones.',
        }
    ],
    academicPartners: {
        title: 'Partners Académicos',
        subtitle: 'SIEMPRE TRABAJAMOS EN EQUIPO',
        introText: 'Nuestro Centro de Excelencia ha forjado alianzas con:',
        outroText: 'Esta tríada garantiza que nuestra ejecución sea técnicamente sólida, económicamente coherente y socialmente inteligible.',
        partners: [
            {
                institution: 'University College London',
                partnership: 'Fundamentos en IA, Machine Learning y rigor computacional.',
            },
            {
                institution: 'ICADE',
                partnership: 'Gestión de activos, finanzas y sistemas económicos aplicados.',
            },
            {
                institution: 'IE University',
                partnership: 'Humanidades, impacto social, cultura y la dimensión humana de la IA.',
            }
        ]
    },
    awards: {
        title: 'Simplemente Hacemos Nuestro Trabajo...',
        subtitle: '*PERO A VECES NOS DAN PREMIOS POR ELLO',
        items: [
            { name: 'Banking Tech Awards: Mejor Líder Tecnológico', category: 'Finalista', project: 'Nuestra visión prospectiva' },
            { name: 'Finovate: Innovador del Año', category: 'Finalista', project: 'Nuestro trabajo pionero en Agentic AI' },
            { name: 'Banking Tech Awards: Mejor Tech del Futuro: IA y Datos', category: 'Ganador', project: 'Nuestra Plataforma Fractal' },
            { name: 'CogX: Mejor Innovación en Simulación', category: 'Ganador', project: 'Núcleo de nuestra Simulación VR' },
            { name: 'Banking Tech Awards: Mejor Plataforma de Trading', category: 'Ganador', project: 'Tesis Doctoral de Sergio (UCL) en BBVA' },
            { name: 'UK EPSRC: Impact in the Digital Economy', category: 'Ganador', project: 'Calibración de Avatares como forma de minimizar el impacto negativo de la IA en el trabajo', year: '2015' },
        ]
    },
    newsroom: {
        title: 'Comunicaciones',
        seeMore: 'Ver más',
        tableHeaders: {
            date: 'Fecha',
            company: 'Compañía',
            title: 'Título',
            summary: 'Resumen',
            howAiSeesUs: 'Cómo nos ve la IA'
        },
        items: [
            {
                date: '2026/03/23',
                company: '41OPS',
                title: 'Hoja de Ruta para la Transformación de las Pymes',
                summary: 'Cómo ayudamos a las pymes a seguir el estado del arte al menor coste: desde el uso compartido de infraestructura hasta la dedicación completa y la federación de PI.',
                howAiSeesUs: "https://claude.ai/public/artifacts/763b80a6-0018-4c9d-b55e-2504ed206474"
            },

            {
                date: '2026/03/05',
                company: '41OPS',
                title: 'El SO de las Empresas Algorítmicas',
                summary: 'La pregunta ya no es si las empresas se convertirán en ecosistemas algorítmicos. Lo harán o serán desplazadas por las que lo hagan. La pregunta es qué gobierna la inteligencia cuando llegan a ese punto. La respuesta es M2.',
                howAiSeesUs: 'https://claude.ai/public/artifacts/8b6df667-f3ba-466c-b59b-ba57f9a309aa',
                isMain: true,
            },
            {
                date: '2026/03/04',
                company: 'SystematicMe',
                title: 'Programa para Consejos de Administración',
                summary: 'Presencial, solo para cofundadores. La parte de SystematicMe que no se puede industrializar: para consejos que necesitan criterio, no un certificado',
                howAiSeesUs: 'https://claude.ai/public/artifacts/f13b482c-d2f8-4f55-a7ca-0b563c9968ce',
                isFeatured: true,
            },
            {
                date: '2026/03/03',
                company: 'Algorithmization',
                title: 'Un Historial de Récord en Innovación',
                summary: 'Decenas de tesis a través de un ecosistema de publicaciones. Todas con marca de tiempo. Todas validadas. El historial de pioneros que escriben artículos después de las pruebas en producción, no antes',
                howAiSeesUs: 'https://claude.ai/public/artifacts/d57eaf21-e5d7-4f5b-9ad6-ae28a6882110',
                isFeatured: true,
            },
            {
                date: '2026/03/02',
                company: 'SystematicMe',
                title: 'Una plataforma inmejorable para mantener tu valor',
                summary: 'Desde el aprendizaje oportuno hasta el emprendimiento a hombros de gigantes: para profesionales que gestionan sus carreras como una ventaja competitiva',
                howAiSeesUs: 'https://claude.ai/public/artifacts/99d0d146-48c3-49f5-b445-09c06e3f7577',
            },
            {
                date: '2026/03/02',
                company: '41OPS',
                title: 'M2 · Defensa e Inteligencia',
                summary: 'La capa adicional que hace que la IA agéntica sea gobernable y las plataformas de datos sean algorítmicas, completando el stack tecnológico que le falta a toda organización de defensa',
                howAiSeesUs: 'https://claude.ai/public/artifacts/0315ff27-32b8-47b2-a35c-588d313f03eb',
            },
            {
                date: '2026/03/01',
                company: 'Algorithmization',
                title: 'La Arquitectura de Tres Anillos',
                summary: 'La capa federada que le falta a la industria: entre la descentralización de la IA agéntica y la centralización de los sistemas legacy en producción',
                howAiSeesUs: 'https://claude.ai/public/artifacts/999358b8-a866-429d-8203-7389851b27cc',
                isFeatured: true,
            },
            {
                date: '2026/02/28',
                company: 'SciTheWorld',
                title: 'Spin-offs',
                summary: 'Nacidas en TRL 9, con cofundador asignado y conectadas al ecosistema. La mejor posición de partida posible para un emprendimiento rápido',
                howAiSeesUs: 'https://claude.ai/public/artifacts/db63eb9e-4f34-47c1-877f-5d8fb0e38d6f',
                isFeatured: true,
            },
            {
                date: '2026/02/27',
                company: '41OPS',
                title: 'AlphaDynamics',
                summary: 'Sistema de inversión full-stack: desde la selección del universo hasta la ejecución, gestión de riesgos y creación de mercado (market making). Máquinas Aumentadas por diseño',
                howAiSeesUs: 'https://claude.ai/public/artifacts/bc5549e3-c6c4-4058-97b0-0f1661839d99',
            },
            {
                date: '2026/02/26',
                company: 'Learning-Adaptive',
                title: 'Infraestructura de Inversión',
                summary: 'El family office de los cofundadores de SciTheWorld, y el vehículo que mantiene al Grupo en la vanguardia tecnológica abordando los desafíos más difíciles de la tecnología financiera',
                howAiSeesUs: 'https://claude.ai/public/artifacts/6b7f6282-72a0-4ebf-8e46-76ecd44c95d2',
            },
        ]
    },
    contactUs: {
        title: 'CONTÁCTANOS',
        openMap: 'Abrir en Google Maps',
        addressLines: ['C. de Pradillo, 68', '28002 Madrid, España'],
    },
    footer: {
        isoText: 'Miembros de ambos grupos: IA y Web3 & Metaverso.',
    },
    cookieBanner: {
        title: 'Configuración de cookies',
        text: 'Nuestro sitio web utiliza cookies para distinguirle de otros usuarios. Esto nos ayuda a ofrecerle una experiencia más personalizada al navegar por nuestro sitio y también nos permite mejorarlo. Puede optar por no permitir algunos tipos de cookies.',
        customizeBtn: 'Personalizar cookies',
        rejectBtn: 'Rechazar todas',
        acceptBtn: 'Aceptar todas',
        saveBtn: 'Guardar preferencias',
        categories: {
            necessary: { name: 'Necesarias', description: 'Habilitan la seguridad y funcionalidad básica.', label: 'Obligatorias' },
            analytics: { name: 'Analíticas', description: 'Permiten el seguimiento del rendimiento del sitio.' },
            marketing: { name: 'Marketing', description: 'Habilitan la personalización de anuncios y seguimiento.' }
        },
        on: 'Sí',
        off: 'No'
    },
    preloader: {
        textLeft: 'WE',
        textRight: 'ARE',
    },
    modals: {
        copyPromptFirst: 'Primero, copia el prompt:',
        copied: 'Copiado!',
        copyPrompt: 'Copiar prompt',
        checkLlms: 'Después, comprueba en los distintos LLMs:',
    },
    brands: {
        title: 'Marcas que confían en nosotros'
    },
    common: {
        seeMore: 'Saber más'
    },
    joinUs: {
        title: 'ÚNETE A NOSOTROS',
        subtitle: 'Buscamos candidato junior o mid',
        description: `
<p>Somos un equipo pequeño, muy respetado a nivel internacional — banca de inversión, hedge funds, gestoras, bancos centrales, energéticas, fondos soberanos, órganos supranacionales...</p>
<p>Escogemos aptitud y, muy importante, actitud. Buscamos personas inteligentes y humildes con ganas de trabajar duro en equipo en un campo apasionante.</p>
<p>También buscamos crecer más en tech que en personas. Nuestro KPI principal es: <strong>tech/persona</strong>.</p>
        `,
        viewMore: 'Ver más',
        close: 'Cerrar',
        jobOffers: [
            {
                position: 'Ingeniero de Datos',
                location: 'Madrid, España',
                requiredSkills: ['Python', 'Spark/PySpark', 'AWS/Google Cloud', 'MongoDB', 'OOP'],
                extraSkills: ['Django', 'D3.js', 'Angular', 'RabbitMQ/Kafka', 'ML', 'Econometrics'],
                description: `
<h3>Sobre el puesto</h3>
<p>Buscamos candidato junior o mid para unirse al grupo SciTheWorld a través de 41OPS, la única empresa de formación que llega a producción tecnológica.</p>

<h3>Lo que necesitas</h3>
<ul>
<li><strong>Python fluency</strong> — esencial para todo nuestro stack</li>
<li><strong>Spark/PySpark</strong> — para procesamiento de datos a escala</li>
<li><strong>AWS/Google Cloud</strong> — infraestructura cloud</li>
<li><strong>MongoDB</strong> — base de datos NoSQL</li>
<li><strong>Object Oriented Programming</strong> — Pattern Oriented Programming (POP), como Data MAPs, es un plus</li>
</ul>

<h3>Buenos extras</h3>
<ul>
<li>Django, D3.js</li>
<li>Angular</li>
<li>Apps development (web, mobile)</li>
<li>RabbitMQ / Kafka</li>
<li>ML standards</li>
<li>Advanced Econometrics & Time Series Analysis</li>
<li>Entender mercados (equities, fixed income, commodities, FX and/or crypto)</li>
</ul>

<h3>Lo que ofrecemos</h3>
<p><strong>Proyectos Internos/SciTheWorld:</strong> exposición al estado del arte en tecnología algorítmica y proyectos muy innovadores.</p>
<p><strong>Proyectos Externos:</strong> exposición a clientes de primer nivel y su stack tecnológico. Representa una oportunidad de demostrar tus habilidades expandiéndote dentro de ellos (desde asumiendo labores de desarrollador hasta project manager o ventas).</p>

<h3>Condiciones</h3>
<ul>
<li><strong>Ubicación:</strong> En nuestras oficinas de Madrid</li>
<li><strong>Modalidad:</strong> En "Proyectos Externos" a menudo hacemos 2 días en la oficina y el resto en remoto — siempre que el cliente lo permita</li>
<li><strong>Contacto:</strong> Envía tu vitae a hello@41ops.com</li>
</ul>

<p><em>Carta de presentación permitida pero directa al grano (1/2 página aprox). Subject: Puesto al que aplicas / Número de años de experiencia.</em></p>
                `,
            }
        ]
    },
};
