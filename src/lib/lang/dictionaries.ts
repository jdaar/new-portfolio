import type { Language, LanguageDictionary } from "$lib/@types"


const es_language_dictionary: LanguageDictionary = {
    'about-me_label': 'Sobre mi',
    'achievements_label': 'Mis logros',
    'contact_label': 'Como contactarme',
    'continue_label': 'Continuar',
    'about-me_subtitle_text': 'Desarrollador Fullstack',
    'about-me_paragraph_text': `Profesional innovador con más de 2 años de experiencia en desarrollo web full-stack, móvil y liderazgo de proyectos. Competente en desarrollo con frameworks para aplicaciones web, desarrollo para bases de datos, manejo de servidores (Linux & Windows) y configuración e implementación de herramientas para DevOps (Terraform, Github Actions, Ansible, Docker y Kubernetes).`,
    'achievements_button_label': 'Ver mas',
    'all_text': 'Ver todos',
    'project_label': 'Projectos',
    'enterprise_label': 'Empresariales',
    'goto-linkedin_label': 'Ir a Linkedin',
    'goto-github_label': 'Ir a Github'
}

const es_language_achievements = {
    "proctorlms": "ProctorLMS, LMS con WASM REPL",
    "fsbuddy": "FSBuddy, automatizacion del sistema de archivos",
    "careerpal": "CareerPal, extraccion de datos de ofertas laborales",
    "chordsapp": "Acordes, visualizador de acordes y selector de intervalos",
    "unhorario": "UNHorario, administracion de horarios academicos",
    "alertbud": "AlertBud, envia notificaciones en multiples plataformas",
    "sapb1connector": "Conector SAP B1, integracion con el ERP con Power Platform",
    "fpkjobs": "FPKJobs, extraccion de metricas e integracion con Power Platform",
    "trackpod": "Trackpod, recoleccion de POD (Pruebas de entrega)",
    "cartera": "Automatizacion para la segmentacion de la cartera",
    "seguimiento": "Automatizacion para extraccion de metricas a partir de actividad en Power Platform",
    "targetdireccional": "Target Direccional, calculo de metricas y guardado de informacion de excavaciones"
}

const en_language_dictionary: LanguageDictionary = {
    'about-me_label': 'About me',
    'achievements_label': 'My achievements',
    'contact_label': 'Contact me',
    'continue_label': 'Continue',
    'about-me_subtitle_text': 'Fullstack developer',
    'about-me_paragraph_text': `Innovative professional with more than 2 years of experience in full-stack web development, mobile and project leadership. Proficient in development with frameworks for web applications, database development, server management (Linux & Windows) and configuration and implementation of tools for DevOps (Terraform, Github Actions, Ansible, Docker and Kubernetes).`,
    'achievements_button_label': 'See more',
    'all_text': 'Include all',
    'project_label': 'Project',
    'enterprise_label': 'Enterprise',
    'goto-linkedin_label': 'Go to Linkedin',
    'goto-github_label': 'Go to Github'
}

const en_language_achievements = {
    "proctorlms": "ProctorLMS, LMS with WASM REPL",
    "fsbuddy": "FSBuddy, filesystem automation",
    "careerpal": "CareerPal, job posting scrapping",
    "chordsapp": "Chords, a chord visualizator and interval selector",
    "unhorario": "UNHorario, manage academic schedules",
    "alertbud": "AlertBud, send notifications on multiple platforms",
    "sapb1connector": "SAP B1 Connector, integrate with the ERP",
    "fpkjobs": "FPKJobs, extract metrics and integrate with Power Platform",
    "trackpod": "Trackpod, collect Proof of deliveries",
    "cartera": "Portfolio segmentation automation",
    "seguimiento": "Automation of extraction of metrics from activity in Power Platform",
    "targetdireccional": "Target Direccional, calculate metrics and save data from excavations"
}

type LanguageDictionaries = {
    [language in Language]: LanguageDictionary
}


export const LANGUAGE_ACHIEVEMENTS: { [language in Language]: { [key: string]: string } } = {
    en: en_language_achievements,
    es: es_language_achievements
}

export const LANGUAGE_DICTIONARIES: LanguageDictionaries = {
    es: es_language_dictionary,
    en: en_language_dictionary
}