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

const es_language_dictionary = {
    'about-me_label': 'Sobre mi',
    'achievements_label': 'Mis logros',
    'contact_label': 'Como contactarme',
    'about-me_subtitle_text': 'Desarrollador Fullstack'
}

const en_language_dictionary = {
    'about-me_label': 'About me',
    'achievements_label': 'My achievements',
    'contact_label': 'Contact me',
    'about-me_subtitle_text': 'Fullstack developer'
}

type LanguageDictionaries = {
    [language in Language]: LanguageDictionary
}
export const language_dictionaries: LanguageDictionaries = {
    es: es_language_dictionary,
    en: en_language_dictionary
}