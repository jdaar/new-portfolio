import type { Language, LanguageDictionary } from '$lib/@types';

const es_language_dictionary: LanguageDictionary = {
	'about-me_label': 'Sobre mi',
	prices_label: 'Calculadora de precios',
	achievements_label: 'Mis logros',
	contact_label: 'Como contactarme',
	continue_label: 'Continuar',
	'about-me_subtitle_text': 'Desarrollador Fullstack',
	'about-me_paragraph_text': `Profesional con más de dos años de experiencia en desarrollo web full-stack y móvil con énfasis en automatización de procesos y de cadenas de suministro.`,
	achievements_button_label: 'Ver mas',
	all_text: 'Ver todos',
	project_label: 'Personales',
	enterprise_label: 'Empresariales',
	'goto-linkedin_label': 'Ir a Linkedin',
	'goto-github_label': 'Ir a Github',
	'metric-technology_label': 'Tecnologias frecuentes',
	'metric-category_label': 'Proyectos registrados',
	'modal-image_label': 'Imagen',
	'contact-subtitle_label': '¿Tienes algun problema de negocio que desees solucionar con Software?',
	technology_label: 'Tecnologia',
	category_label: 'Categoria',
	experience_label: 'Mi experiencia',
	'experience-related_label': 'Habilidades relacionadas',
	'contact-first_label': 'Contactemos primero'
};

const es_experience = {
	firplak: {
		title: 'Desarrollador Fullstack',
		description: `
$+ Automatización de la cadena de suministro para todos los documentos contables (+30 horas/semana de trabajo ahorradas, distribuidas entre 6 agentes 📈)🌟.
$+ Creación de productos a nivel de dominio que potenciaron al equipo de desarrollo para crear nuevas automatizaciones (+3 automatizaciones creadas utilizando productos a nivel de dominio 🤖)🌟.
$+ Migración y optimización de una aplicación empresarial interna crítica fuera de una plataforma propietaria (Reduciendo significativamente los tiempos de carga y disminuyendo los costos casi a 0 💸).
$+ Implementación de observabilidad y alertas para aplicaciones empresariales fundamentales (Reduciendo el tiempo de resolución de tickets aproximadamente en 0.5 días 🔎).
		`
	},
	zanacode: {
		title: 'Desarrollador de aplicaciones para móviles',
		description: `
$+ Implemente las fórmulas y la vinculación de datos requeridas por los ingenieros de Target Direccional 👩‍🔬🌟.
$+ Mejore la estabilidad de la aplicación en dispositivos Android ✅.
$+ Implemente el flujo de autenticación en el cliente React Native 🔒.
		`
	}
};

const en_experience = {
	firplak: {
		title: 'Fullstack developer',
		description: `
$+ Automation of the supply chain for all accounting documents (+30 hrs/week of work saved, distributed across 6 agents 📈)🌟.
$+ Creation of domain-level products that empowered the development team to create new automations (+3 automations created using domain-level products 🤖)🌟.
$+ Migration and optimization of a critical internal business app from a proprietary platform (Significantly reduced load times and decreased costs almost to 0 💸).
$+ Implemented observability and alerts for core business apps (Reduced the ticket resolution time by approximately 0.5 days 🔎).
		`
	},
	zanacode: {
		title: 'Mobile developer',
		description: `
$+ Implemented the formulas and data binding required by the Target Direccional engineers 👩‍🔬🌟.
$+ Improved app stability on Android devices ✅.
$+ Implemented the authentication flow in the React Native client 🔒.
		`
	}
};

const es_language_achievements = {
	fsbuddy: 'FSBuddy',
	careerpal: 'CareerPal',
	chordsapp: 'Acordes',
	unhorario: 'UNHorario',
	alertbud: 'AlertBud',
	sapb1connector: 'Conector SAP B1',
	fpkjobs: 'FPKJobs',
	trackpod: 'Trackpod',
	cartera: 'Automatizacion de cartera',
	seguimiento: 'Extraccion de metricas',
	targetdireccional: 'Target Direccional',
	clip: 'Clip',
	docs: 'Centro de documentacion',
	ns: 'Nivel de servicio',
	accounting: 'Automatizacion de la cadena de suministro de documentos contables'
};

const es_language_achievement_descriptions = {
	fsbuddy: 'Automatizacion del sistema de archivos',
	careerpal: 'Extraccion de datos de ofertas laborales',
	chordsapp: 'Visualizador de acordes y selector de intervalos',
	unhorario: `
Administracion de horarios academicos para estudiantes de la Universidad Nacional de Colombia
$+ Mas de 1000 usuarios activos en tiempos de inscripcion de materias 🌟
$+ Mas de 3000 materias registradas extraidas de la plataforma de la universidad 🌟
`,
	alertbud: 'Envia notificaciones en multiples plataformas',
	sapb1connector: `
Integracion del ERP con Power Platform, ofreciendo un API REST para otras integraciones
$+ 3 automatizaciones creadas usando el conector como base 🌟
$+ Compatibilidad con Power Platform (Power Apps y Power Automate)
$+ Conexion con SAP B1 de manera segura usando SAP B1 DI API
`,
	fpkjobs: `
Libreria de Python que implementa un modelo de programacion restrictivo que permite automatizar la extraccion de metricas e integracion con Power Platform
$+ 2 automatizaciones creadas usando la libreria como base 🌟
$+ Observabilidad de todas las acciones realizadas por las automatizaciones
$+ Sincronizacion con Power Platform e introduccion de datos en Dataverse
`,
	trackpod: `Recoleccion de POD (Pruebas de entrega)`,
	cartera: 'Automatizacion para la segmentacion de la cartera',
	seguimiento: `
Automatizacion para extraccion de metricas a partir de actividad en Power Platform
$+ Visualizacion de los datos extraidos en un dashboard de Power BI 🌟
$+ Seguimiento detallado de las acciones realizadas por los usuarios en Microsoft Teams
`,
	targetdireccional: `
Calculo de metricas y guardado de informacion de excavaciones
$+ Visualizacion de metricas y ayuda en la toma de decisiones 🌟
$+ Extraccion de datos de excavaciones almacenados offline 
$+ Sincronizacion de los datos de excavacion y calculo de metricas 
`,
	clip: 'Nube y gestion del portapapeles basado en nodos',
	docs: `
Centro de documentacion y gestion del conocimiento para el area de TI
$+ Documentacion de procesos de negocio relacionados al area de TI 🌟
$+ Documentacion de artefactos de software y guias de uso 
`,
	ns: `
Automatizacion de calculo de metricas de distribuidores y notificacion de resultados
$+ Costo de implementacion cero con despliegue en la nube de Google 💰🌟
$+ Mas de 200 reportes generados mensualmente y distribuidos mediante correo electronico a los distribuidores 
`,
	accounting: `
$+ Mas de 30 horas de trabajo ahorrados semanalmente distribuido entre 6 agentes 💰🌟
$+ Mas de 100 solicitudes de aprobacion para documentos contables procesados mensualmente 🌟
$+ Mas de 10000 correos electronicos procesados anualmente 🌟
`
};

const en_language_dictionary: LanguageDictionary = {
	'about-me_label': 'About me',
	achievements_label: 'My achievements',
	prices_label: 'Price calculator',
	contact_label: 'Contact me',
	continue_label: 'Continue',
	'about-me_subtitle_text': 'Fullstack developer',
	'about-me_paragraph_text': `Professional with more than two years of experience in full-stack web and mobile development with emphasis on process and supply chain automation.`,
	achievements_button_label: 'See more',
	all_text: 'Include all',
	project_label: 'Personal',
	enterprise_label: 'Enterprise',
	'goto-linkedin_label': 'Go to Linkedin',
	'goto-github_label': 'Go to Github',
	'metric-technology_label': 'Frequent technologies',
	'metric-category_label': 'Registered projects',
	'modal-image_label': 'Image',
	'contact-subtitle_label': 'Have any business problem you want to fix with Software?',
	technology_label: 'Technology',
	category_label: 'Category',
	experience_label: 'My experience',
	'experience-related_label': 'Related skills',
	'contact-first_label': "Let's contact first"
};

const en_language_achievements_description = {
	unhorario: `
Academic schedule management for students at the National University of Colombia
$+ More than 1000 active users during course registration periods 🌟
$+ More than 3000 registered courses extracted from the university platform 🌟
	`,
	alertbud: 'Sends notifications on multiple platforms',
	sapb1connector: `
Integration of ERP with Power Platform, offering a REST API for other integrations
$+ 3 automations created using the connector as a foundation 🌟
$+ Compatibility with Power Platform (Power Apps and Power Automate)
$+ Secure connection with SAP B1 using SAP B1 DI API
	`,

	fsbuddy: 'File system automation',
	careerpal: 'Extraction of job offer data',
	chordsapp: 'Chord viewer and interval selector',
	fpkjobs: `
	Python library that implements a restrictive programming model enabling automation of metric extraction and integration with Power Platform
	$+ 2 automations created using the library as a foundation 🌟
	$+ Observability of all actions performed by the automations
	$+ Synchronization with Power Platform and introduction of data into Dataverse
	`,
	trackpod: `Collection of POD (Proof of Delivery)`,
	cartera: 'Automation for portfolio segmentation',
	seguimiento: `
	Automation for metric extraction based on activity in Power Platform
	$+ Visualization of extracted data in a Power BI dashboard 🌟
	$+ Detailed tracking of actions performed by users in Microsoft Teams
	`,
	targetdireccional: `
	Calculation of metrics and storage of excavation information
	$+ Visualization of metrics and assistance in decision-making 🌟
	$+ Extraction of excavation data stored offline
	$+ Synchronization of excavation data and metric calculation
	`,
	clip: 'Cloud and clipboard management based on nodes',
	docs: `
	Documentation center and knowledge management for the IT area
	$+ Documentation of business process related to the IT area 🌟
	$+ Documentation of software artifacts and usage guides
	`,
	ns: `
	Automation of distributor metrics calculation and result notification
	$+ Zero implementation cost with deployment on Google Cloud 💰🌟
	$+ More than 200 reports generated monthly and distributed via email to distributors
	`,
	accounting: `
	$+ More than 30 hours of work saved weekly distributed among 6 agents 💰🌟
	$+ More than 100 approval requests for accounting documents processed monthly 🌟
	$+ More than 10,000 emails processed annually 🌟
	`
};

const en_language_achievements = {
	fsbuddy: 'FSBuddy',
	careerpal: 'CareerPal',
	chordsapp: 'Acordes',
	unhorario: 'UNHorario',
	alertbud: 'AlertBud',
	sapb1connector: 'SAP B1 Connector',
	fpkjobs: 'FPKJobs',
	trackpod: 'Trackpod',
	cartera: 'Portfolio segmentation automation',
	seguimiento: 'Metric extraction automation',
	targetdireccional: 'Target Direccional',
	clip: 'Clip',
	docs: 'Documentation center',
	ns: 'Service level',
	accounting: 'Automation of the supply chain for accounting documents'
};

type LanguageDictionaries = {
	[language in Language]: LanguageDictionary;
};

export const LANGUAGE_ACHIEVEMENTS: {
	[language in Language]: {
		description: { [key: string]: string };
		title: { [key: string]: string };
	};
} = {
	en: {
		title: en_language_achievements,
		description: en_language_achievements_description
	},
	es: {
		title: es_language_achievements,
		description: es_language_achievement_descriptions
	}
};

export const LANGUAGE_EXPERIENCE = {
	es: es_experience,
	en: en_experience
};

export const LANGUAGE_DICTIONARIES: LanguageDictionaries = {
	es: es_language_dictionary,
	en: en_language_dictionary
};
