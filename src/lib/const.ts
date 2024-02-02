import type { Achievement } from './@types';
import demo_alertbud from '$lib/assets/demo_alertbud.gif';
import demo_chords from '$lib/assets/demo_chords.gif';
import demo_fsbuddy from '$lib/assets/demo_fsbuddy.gif';
import demo_proctorlms from '$lib/assets/demo_proctorlms.gif';
import proctorlms_1 from '$lib/assets/proctorlms_1.png';
import fsbuddy_1 from '$lib/assets/fsbuddy_1.png';
import fsbuddy_2 from '$lib/assets/fsbuddy_2.png';
import target_1 from '$lib/assets/target_1.png';
import target_2 from '$lib/assets/target_2.png';
import target_3 from '$lib/assets/target_3.png';
import chords_1 from '$lib/assets/chords_1.png';
import chords_2 from '$lib/assets/chords_2.png';
import unhorario_1 from '$lib/assets/unhorario_1.png';
import unhorario_2 from '$lib/assets/unhorario_2.png';
import alertbud_1 from '$lib/assets/alertbud_1.png';
import alertbud_2 from '$lib/assets/alertbud_2.png';
import careerpal_1 from '$lib/assets/careerpal_1.png';
import careerpal_2 from '$lib/assets/careerpal_2.png';
import careerpal_3 from '$lib/assets/careerpal_3.png';
import careerpal_4 from '$lib/assets/careerpal_4.png';
import clip_1 from '$lib/assets/clip_1.png';
import clip_2 from '$lib/assets/clip_2.png';
import clip_3 from '$lib/assets/clip_3.png';
import trackpod_1 from '$lib/assets/trackpod_1.png';
import trackpod_2 from '$lib/assets/trackpod_2.png';
import trackpod_3 from '$lib/assets/trackpod_3.png';
import trackpod_4 from '$lib/assets/trackpod_4.png';
import trackpod_5 from '$lib/assets/trackpod_5.png';
import trackpod_6 from '$lib/assets/trackpod_6.png';
import trackpod_7 from '$lib/assets/trackpod_7.png';
import trackpod_8 from '$lib/assets/trackpod_8.png';
import trackpod_9 from '$lib/assets/trackpod_9.png';
import trackpod_10 from '$lib/assets/trackpod_10.png';
import sap_connector_1 from '$lib/assets/sap_connector_1.png';
import sap_connector_2 from '$lib/assets/sap_connector_2.png';
import docs_1 from '$lib/assets/docs_1.png';
import docs_2 from '$lib/assets/docs_2.png';
import docs_3 from '$lib/assets/docs_3.png';
import ns_1 from '$lib/assets/ns_1.png';
import demo_target from '$lib/assets/demo_target.gif';
import demo_clip from '$lib/assets/demo_clip.gif';
import demo_unhorario from '$lib/assets/demo_unhorario.gif';

export const LS_LANGUAGE_KEY = 'language';

export const ACHIEVEMENT_CATEGORIES = ['project', 'enterprise'];

export const ACHIEVEMENTS: Array<Achievement> = [
	{
		title: 'targetdireccional',
		technologies: ['React', 'React Native', 'Typescript', 'Firebase', 'Redux'],
		category: 'enterprise',
		image: [{ animated: demo_target, still: target_1 }, { still: target_2 }, { still: target_3 }]
	},
	{
		title: 'unhorario',
		technologies: ['Vue', 'Typescript', 'Pinia'],
		category: 'project',
		href: 'https://unhorario.jhonatan.tech/',
		image: [{ animated: demo_unhorario, still: unhorario_1 }, { still: unhorario_2 }]
	},
	{
		title: 'sapb1connector',
		technologies: ['C#', '.NET', 'SQL Server'],
		category: 'enterprise',
		image: [{ still: sap_connector_1 }, { still: sap_connector_2 }]
	},
	{
		title: 'fpkjobs',
		technologies: ['Python', 'Power Platform'],
		category: 'enterprise'
	},
	{
		title: 'trackpod',
		technologies: ['NestJS', 'React', 'Typescript', 'MongoDB'],
		category: 'enterprise',
		image: [
			{ still: trackpod_1 },
			{ still: trackpod_2 },
			{ still: trackpod_3 },
			{ still: trackpod_4 },
			{ still: trackpod_5 },
			{ still: trackpod_6 },
			{ still: trackpod_7 },
			{ still: trackpod_8 },
			{ still: trackpod_9 },
			{ still: trackpod_10 }
		]
	},
	{
		title: 'clip',
		technologies: ['Svelte', 'Typescript', 'Firebase'],
		category: 'project',
		href: 'https://clip.jhonatan.tech/',
		image: [{ animated: demo_clip, still: clip_1 }, { still: clip_2 }, { still: clip_3 }]
	},
	{
		title: 'fsbuddy',
		technologies: ['C#', '.NET'],
		category: 'project',
		href: 'https://github.com/jdaar/FsBuddy',
		image: [{ animated: demo_fsbuddy, still: fsbuddy_1 }, { still: fsbuddy_2 }]
	},
	{
		title: 'careerpal',
		technologies: ['Svelte', 'Typescript', 'MongoDB', 'SQL Server', 'Puppeteer'],
		category: 'project',
		href: 'https://github.com/jdaar/CareerPal',
		image: [
			{ still: careerpal_1 },
			{ still: careerpal_2 },
			{ still: careerpal_3 },
			{ still: careerpal_4 }
		]
	},
	{
		title: 'chordsapp',
		technologies: ['Svelte', 'Typescript'],
		category: 'project',
		href: 'https://chord.jhonatan.tech/',
		image: [{ animated: demo_chords, still: chords_1 }, { still: chords_2 }]
	},
	{
		title: 'alertbud',
		technologies: ['Go', 'Typescript', 'Svelte', 'MongoDB'],
		category: 'project',
		image: [{ animated: demo_alertbud, still: alertbud_1 }, { still: alertbud_2 }]
	},
	{
		title: 'cartera',
		technologies: ['Typescript', 'ElectronJS'],
		category: 'enterprise'
	},
	{
		title: 'seguimiento',
		technologies: ['Python', 'Power Platform'],
		category: 'enterprise'
	},
	{
		title: 'docs',
		technologies: ['Typescript', 'React'],
		category: 'enterprise',
		image: [{ still: docs_1 }, { still: docs_2 }, { still: docs_3 }]
	},
	{
		title: 'ns',
		technologies: ['Typescript', 'Puppeteer', 'Power Platform'],
		category: 'enterprise',
		image: [{ still: ns_1 }]
	}
];

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
];

export const LANGUAGE_TOKENS = [
	'about-me_label',
	'achievements_label',
	'contact_label',
	'continue_label',
	'about-me_subtitle_text',
	'about-me_paragraph_text',
	'achievements_button_label',
	'prices_label',
	'all_text',
	'project_label',
	'enterprise_label',
	'goto-github_label',
	'goto-linkedin_label',
	'metric-technology_label',
	'metric-category_label',
	'modal-image_label',
	'contact-subtitle_label'
];

export const AVAILABLE_LANGUAGES = ['es', 'en'];
