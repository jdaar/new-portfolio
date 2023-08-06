<script lang="ts">
	import type { Achievement, Language } from '$lib/@types';
	import { LANGUAGE_ACHIEVEMENTS, LANGUAGE_DICTIONARIES } from '$lib/lang/dictionaries';
	import { TECHNOLOGIES_LOGOS } from '$lib/logos';
	import { getContext } from 'svelte';
	// @ts-ignore
	import SvelteTooltip from 'svelte-tooltip';
	import type { Writable } from 'svelte/store';

	const language = getContext('language') as Writable<Language>;

	export let achievement: Achievement;
	let technologies_logos = achievement['technologies'].map((v) => ({
		name: v,
		...TECHNOLOGIES_LOGOS[v]
	}));
</script>

<div class="achievement">
	<div />
	<h2>
		{LANGUAGE_ACHIEVEMENTS[$language][achievement.title]}<span
			class="badge"
			class:badge-secondary={achievement.category == 'enterprise'}
			>{LANGUAGE_DICTIONARIES[$language][`${achievement.category}_label`]}</span
		>
	</h2>
	<div class="technologies">
		{#each technologies_logos as technology}
			<SvelteTooltip tip={technology['name']}>
				<svg
					width={`${technology['width']}px`}
					height={`${technology['height']}px`}
					viewBox={technology['viewbox']}
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					preserveAspectRatio="xMidYMid"
				>
					{@html technology['path']}
				</svg>
			</SvelteTooltip>
		{/each}
	</div>
	<div class="actions">
		<button
			on:click={() => {
				window.open(achievement['href']);
			}}
			disabled={achievement.href == '' || achievement.href == undefined}
			class:disabled-btn={achievement.href == '' || achievement.href == undefined}
			>{LANGUAGE_DICTIONARIES[$language]['achievements_button_label']}</button
		>
	</div>
	<div />
</div>

<style>
	.actions {
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.disabled-btn {
		background-color: black;
		border: 2px solid var(--border-color);
		color: var(--border-color);
	}

	.badge {
		border: 2px solid var(--accent-color);
		background-color: var(--background-color);
		font-weight: 400;
		font-size: var(--text-size);
		width: fit-content;
		padding: 0.1em;
		padding-left: 1em;
		padding-right: 1em;
		color: var(--accent-color);
		border-radius: 1em;
		margin-left: 1em;
	}

	.badge-secondary {
		border-color: var(--secondary-accent-color);
		color: var(--secondary-accent-color);
	}

	h2 {
		display: flex;
		align-items: center;
	}

	.achievement {
		border: 2px solid var(--border-color);
		display: grid;
		grid-template-columns: 90%;
		justify-content: center;
		align-items: center;
		min-height: 10em;
		gap: 0.1em;
		border-radius: 5px;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
	}

	.technologies {
		display: grid;
		grid-template-columns: 30px 30px 30px 30px 30px 30px 30px 30px;
		gap: 10px;
	}

	h2 {
		margin: 0;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
	}
</style>
