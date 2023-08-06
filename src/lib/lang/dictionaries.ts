export const language_tokens = [
    'about-me_label',
    'achievements_label',
    'contact_label'
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
    'contact_label': 'Como contactarme'
}

type LanguageDictionaries = {
    [language in Language]: LanguageDictionary
}
export const language_dictionaries: LanguageDictionaries = {
    es: es_language_dictionary
}