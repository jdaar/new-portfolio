import type {
	ACHIEVEMENT_CATEGORIES,
	AVAILABLE_LANGUAGES,
	AVAILABLE_TECHNOLOGIES,
	LANGUAGE_TOKENS
} from './const';

export type Technology = (typeof AVAILABLE_TECHNOLOGIES)[number];

export type AchievementCategory = (typeof ACHIEVEMENT_CATEGORIES)[number];

export type Achievement = {
	title: string;
	description?: string;
	technologies: Array<Technology>;
	href?: string;
	category: AchievementCategory;
	image?: Array<ImageDemo>;
};

export type ImageDemo = { still: string, animated?: string }

export type Language = (typeof AVAILABLE_LANGUAGES)[number];
export type LanguageToken = (typeof LANGUAGE_TOKENS)[number];

export type LanguageDictionary = {
	[key in LanguageToken]: string;
};
