import type { Achievement, Technology } from "./@types"

export const LS_LANGUAGE_KEY = 'language'

export const ACHIEVEMENT_CATEGORIES = [
  'project',
  'enterprise'
]

export const ACHIEVEMENTS: Array<Achievement> = [
  {
    title: 'proctorlms',
    technologies: ['Python', 'Svelte', 'Typescript', 'Django'],
    category: 'project',
  },
  {
    title: 'fsbuddy',
    technologies: ['C#', '.NET'],
    category: 'project',
    href: 'https://github.com/jdaar/FsBuddy'
  },
  {
    title: 'careerpal',
    technologies: ['Svelte', 'Typescript', 'MongoDB', 'SQL Server', 'Puppeteer'],
    category: 'project',
    href: 'https://github.com/jdaar/CareerPal'
  },
  {
    title: 'chordsapp',
    technologies: ['Svelte', 'Typescript'],
    category: 'project',
    href: 'https://chord.jasprilla.me/'
  },
  {
    title: 'unhorario',
    technologies: ['Vue', 'Typescript', 'Pinia'],
    category: 'project',
    href: 'https://unhorario.jasprilla.me/'
  },
  {
    title: 'alertbud',
    technologies: ['Go', 'Typescript', 'Svelte', 'MongoDB'],
    category: 'project',
    href: 'https://www.alertbud.co/'
  },
  {
    title: 'sapb1connector',
    technologies: ['C#', '.NET', 'SQL Server'],
    category: 'enterprise',
  },
  {
    title: 'fpkjobs',
    technologies: ['Python', 'Power Platform'],
    category: 'enterprise',
  },
  {
    title: 'trackpod',
    technologies: ['NestJS', 'React', 'Typescript', 'MongoDB'],
    category: 'enterprise',
  },
  {
    title: 'cartera',
    technologies: ['Typescript', 'ElectronJS'],
    category: 'enterprise',
  },
  {
    title: 'seguimiento',
    technologies: ['Python', 'Power Platform'],
    category: 'enterprise'
  },
  {
    title: 'targetdireccional',
    technologies: ['React', 'React Native', 'Typescript', 'Firebase', 'Redux'],
    category: 'enterprise'
  }
]

export const AVAILABLE_TECHNOLOGIES = [
  'C#',
  'Python',
  'Typescript',
  'Go',
  'React',
  'Svelte',
  'Vue',
  '.NET',
  'NestJS',
  'Javascript',
  'Django',
  'Puppeteer',
  'MongoDB',
  'React Native',
  'Dialogflow',
  'ElectronJS',
  'Power Platform',
  'SQL Server',
  'Redux',
  'Pinia',
  'Firebase'
]


export const LANGUAGE_TOKENS = [
  'about-me_label',
  'achievements_label',
  'contact_label',
  'continue_label',
  'about-me_subtitle_text',
  'about-me_paragraph_text',
  'achievements_button_label',
  'all_text',
  'project_label',
  'enterprise_label',
  'goto-github_label',
  'goto-linkedin_label'
]

export const AVAILABLE_LANGUAGES = [
  'es',
  'en'
]