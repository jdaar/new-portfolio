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
	<div class="filter_input">
		<label for="technology_filter">
			{LANGUAGE_DICTIONARIES[$language]['technology_label']}
		</label>
		<select id="technology_filter" bind:value={technology_filter}>
			<option value="">{LANGUAGE_DICTIONARIES[$language]['all_text']}</option>
			{#each AVAILABLE_TECHNOLOGIES as technology}
				<option value={technology}>{technology}</option>
			{/each}
		</select>
	</div>
	<div class="filter_input">
		<label for="category_filter">
			{LANGUAGE_DICTIONARIES[$language]['category_label']}
		</label>
		<select id="category_filter" bind:value={category_filter}>
			<option value="">{LANGUAGE_DICTIONARIES[$language]['all_text']}</option>
			{#each ACHIEVEMENT_CATEGORIES as category}
				<option value={category}>{LANGUAGE_DICTIONARIES[$language][`${category}_label`]}</option>
			{/each}
		</select>
	</div>
</div>
<div class="achievements">
	{#each ACHIEVEMENTS.filter((v) => {
		return ((technology_filter !== '' && v.technologies.includes(technology_filter)) || technology_filter === '') && ((category_filter !== '' && v.category === category_filter) || category_filter === '');
	}) as achievement}
		{#key achievement['title']}
			<Achievement {achievement} />
		{/key}
	{/each}
	<div style="height: 30vh" />
</div>

<style>
	.achievements {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-row: auto;
		gap: 1em;
		padding-right: 10px; 
		max-height: 67.5vh;
		overflow-y: scroll;
	}

	.filter_input {
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: center;
		height: 100%;
		gap: 0.5em;
	}

	label {
		color: var(--secondary-text-color);
	}

	@media (max-width: 1024px) {
		.achievements {
			grid-template-columns: 1fr;
		}
	}

	.card-header {
		margin-bottom: 0.5em;
		display: grid;
		grid-template-columns: 0.3fr 0.3fr;
		grid-template-rows: 1fr 2.5em;
		column-gap: 1em;
		max-height: 15vh;
		width: 100%;
	}

	@media (max-width: 700px) {
		.filter_input {
			display: grid;
			grid-template-rows: max-content 1fr;
			grid-template-columns: 1fr;
		}

		.card-header {
			display: grid;
			grid-template-rows: 1fr 4em;
			grid-template-columns: 0.3fr 0.3fr;
			max-height: 20vh;
		}
	}

	select {
		background-color: var(--secondary-background-color);
		border: none;
		border-radius: 5px;
		padding: 0.15em;
		padding-left: 0.5em;
		min-width: 125px;
		width: 100%;
		height: 100%;
		font-size: var(--small-size);
	}

	h1 {
		grid-column: span 2;
		margin-top: 0;
		margin-bottom: 0.25em;
	}
</style>
