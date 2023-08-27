<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Achievement from '$lib/components/achievement.svelte';
	import type { Language } from '$lib/@types';
	import { LANGUAGE_DICTIONARIES } from '$lib/lang/dictionaries';
	import { ACHIEVEMENTS, ACHIEVEMENT_CATEGORIES, AVAILABLE_TECHNOLOGIES } from '$lib/const';

	let language = getContext('language') as Writable<Language>;

	let technology_filter: string;
	let category_filter: string;
</script>

<svelte:head>
	<title>{LANGUAGE_DICTIONARIES[$language]['achievements_label']}</title>
</svelte:head>

<div class="card-header">
	<h1>
		{LANGUAGE_DICTIONARIES[$language]['achievements_label']}
	</h1>
	<select bind:value={technology_filter}>
		<option value="">{LANGUAGE_DICTIONARIES[$language]['all_text']}</option>
		{#each AVAILABLE_TECHNOLOGIES as technology}
			<option value={technology}>{technology}</option>
		{/each}
	</select>
	<select bind:value={category_filter}>
		<option value="">{LANGUAGE_DICTIONARIES[$language]['all_text']}</option>
		{#each ACHIEVEMENT_CATEGORIES as category}
			<option value={category}>{LANGUAGE_DICTIONARIES[$language][`${category}_label`]}</option>
		{/each}
	</select>
</div>
<div class="achievements">
	{#each ACHIEVEMENTS.filter((v) => {
		return ((technology_filter !== '' && v.technologies.includes(technology_filter)) || technology_filter === '') && ((category_filter !== '' && v.category === category_filter) || category_filter === '');
	}) as achievement}
		{#key achievement['title']}
			<Achievement {achievement} />
		{/key}
	{/each}
	<div style="height: 10vh" />
</div>

<style>
	.achievements {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-row: auto;
		gap: 1em;
		max-height: 50vh;
		overflow-y: scroll;
	}

	@media (max-width: 1024px) {
		.achievements {
			grid-template-columns: 1fr;
		}
	}

	.card-header {
		margin-bottom: 0.5em;
		display: grid;
		grid-template-columns: 0.15fr 0.15fr;
		grid-template-rows: 1fr 2.5em;
		column-gap: 1em;
		max-height: 15vh;
	}

	select {
		background-color: var(--secondary-background-color);
		border: none;
		border-radius: 5px;
		padding: 0.15em;
		padding-left: 0.5em;
		min-width: 125px;
		font-size: var(--small-size);
	}

	h1 {
		grid-column: span 4;
		margin-top: 0;
		margin-bottom: 0.25em;
	}
</style>
