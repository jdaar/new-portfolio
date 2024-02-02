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
	category_label: 'Categoria'
};

const es_language_achievements = {
	fsbuddy: 'FSBuddy',
	careerpal: 'CareerPal',
	chordsapp: 'Acordes',
	unhorario: 'UNHorario 🌟',
	alertbud: 'AlertBud',
	sapb1connector: 'Conector SAP B1',
	fpkjobs: 'FPKJobs',
	trackpod: 'Trackpod',
	cartera: 'Automatizacion de cartera',
	seguimiento: 'Extraccion de metricas',
	targetdireccional: 'Target Direccional 🌟',
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
	category_label: 'Category'
};

const en_language_achievements_description = {
	fsbuddy: 'Filesystem automation',
	careerpal: 'Job posting scrapping',
	chordsapp: 'A chord visualizator and interval selector',
	unhorario: 'Manage academic schedules',
	alertbud: 'Send notifications on multiple platforms',
	sapb1connector: 'Integrate with the ERP',
	fpkjobs: 'Extract metrics and integrate with Power Platform',
	trackpod: 'Collect Proof of deliveries',
	cartera: 'Portfolio segmentation automation',
	seguimiento: 'Automation of extraction of metrics from activity in Power Platform',
	targetdireccional: 'Calculate metrics and save data from excavations',
	clip: 'Clipboard management and cloud based on nodes',
	docs: 'Documentation center and knowledge management for the IT area',
	ns: 'Automation of calculation of distributor metrics and notification of results',
	accounting: ''
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
	accounting: ''
};

type LanguageDictionaries = {
	[language in Language]: LanguageDictionary;
};

export const LANGUAGE_ACHIEVEMENTS: { [language in Language]: {
	description: { [key: string]: string }, title: { [key: string]: string }
} } = {
	en: {
		title: en_language_achievements,
		description: en_language_achievements_description
	},
	es: {
		title: es_language_achievements,
		description: es_language_achievement_descriptions
	}
};

export const LANGUAGE_DICTIONARIES: LanguageDictionaries = {
	es: es_language_dictionary,
	en: en_language_dictionary
};
