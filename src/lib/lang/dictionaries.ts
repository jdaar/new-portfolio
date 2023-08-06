export const language_tokens = [
    'about-me_label',
    'achievements_label',
    'contact_label',
    'about-me_subtitle_text',
    'about-me_paragraph_text'
]

export const available_languages = [
    'es',
    'en'
]

export type Language = typeof available_languages[number]
export type LanguageToken = typeof language_tokens[number]

export type LanguageDictionary = {
    [key in LanguageToken]: string
}

const es_language_dictionary: LanguageDictionary = {
    'about-me_label': 'Sobre mi',
    'achievements_label': 'Mis logros',
    'contact_label': 'Como contactarme',
    'about-me_subtitle_text': 'Desarrollador Fullstack',
    'about-me_paragraph_text': `Profesional innovador con más de 2 años de experiencia en desarrollo web full-stack, móvil y liderazgo de proyectos. Competente en desarrollo con frameworks para aplicaciones web, desarrollo para bases de datos, manejo de servidores (Linux & Windows) y configuración e implementación de herramientas para DevOps (Terraform, Github Actions, Ansible, Docker y Kubernetes).`
}

const en_language_dictionary: LanguageDictionary = {
    'about-me_label': 'About me',
    'achievements_label': 'My achievements',
    'contact_label': 'Contact me',
    'about-me_subtitle_text': 'Fullstack developer',
    'about-me_paragraph_text': `Innovative professional with more than 1 year of experience in full-stack web development, mobile and project leadership. Proficient in development with frameworks for web applications, database development, server management (Linux & Windows) and configuration and implementation of tools for DevOps (Terraform, Github Actions, Ansible, Docker and Kubernetes).`
}

type LanguageDictionaries = {
    [language in Language]: LanguageDictionary
}
export const language_dictionaries: LanguageDictionaries = {
    es: es_language_dictionary,
    en: en_language_dictionary
}