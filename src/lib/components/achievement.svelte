<script lang="ts">
	import type { Achievement, ImageDemo, Language } from '$lib/@types';
	import { LANGUAGE_ACHIEVEMENTS, LANGUAGE_DICTIONARIES } from '$lib/lang/dictionaries';
	import { TECHNOLOGIES_LOGOS } from '$lib/logos';
	import { getContext } from 'svelte';
	/* eslint-disable */
	// @ts-ignore
	import SvelteTooltip from 'svelte-tooltip';
	import { writable, type Writable } from 'svelte/store';
	import Modal from './modal.svelte';

	const language = getContext('language') as Writable<Language>;

	export let achievement: Achievement;
	let technologies_logos = achievement['technologies'].map((v) => ({
		name: v,
		...TECHNOLOGIES_LOGOS[v]
	}));

	let modal_open = writable(false);
	let selected_image = writable('');

	const DEFAULT_IMAGE: ImageDemo = {
		still: '',
		animated: ''
	};

	function handleMouseEnter(evt: Event) {
		(evt.target as HTMLImageElement).src =
			(evt.target as HTMLImageElement).dataset.srcAnimated ?? DEFAULT_IMAGE['animated'] ?? '';
	}
	function handleMouseLeave(evt: Event) {
		(evt.target as HTMLImageElement).src =
			(evt.target as HTMLImageElement).dataset.srcStill ?? DEFAULT_IMAGE['still'];
	}
	function lazyload(node: HTMLElement) {
		(node as HTMLImageElement).src = node.dataset.srcStill ?? DEFAULT_IMAGE['still'];
		if (node.dataset.srcAnimated != undefined && node.dataset.srcAnimated != null) {
			node.addEventListener('mouseenter', handleMouseEnter);
			node.addEventListener('mouseleave', handleMouseLeave);
		}
	}
</script>

<Modal
	title={LANGUAGE_DICTIONARIES[$language]['modal-image_label']}
	visible={$modal_open}
	close_fn={() => {
		$modal_open = false;
	}}
	><div class="image-wrapper">
		<img class="scaled-image" src={$selected_image} alt="Selected image" />
	</div></Modal
>
<div
	class="achievement"
	class:expanded={achievement.image != undefined && achievement.image != null}
>
	<div>
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
	{#if achievement.image != null && achievement.image != undefined}
		<div class="img-gallery">
			{#each achievement.image as image}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img
					on:click={() => {
						$selected_image = image.animated ?? image.still;
						$modal_open = true;
					}}
					use:lazyload
					data-src-still={image.still}
					data-src-animated={image.animated}
					alt="Imagen del proyecto"
				/>
			{/each}
		</div>
	{/if}
</div>

<style>
	.actions {
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.img-gallery {
		overflow-x: scroll;
		display: flex;
	}

	.scaled-image {
		height: 400px;
		width: auto;
	}

	.image-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.image-wrapper > img {
		margin: 0;
	}

	img {
		height: 200px;
		width: 200px;
		border-radius: 5px;
		margin-right: 20px;
		margin-bottom: 10px;
		object-fit: cover;
	}

	.disabled-btn {
		background-color: black;
		border: 2px solid var(--border-color);
		color: var(--border-color);
	}

	.expanded {
		grid-row: span 2;
		grid-template-rows: 1fr 1fr;
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
		width: 100%;
	}

	@media (max-width: 612px) {
		h2 {
			flex-direction: column;
			align-items: flex-start;
		}

		span {
			margin-left: 0 !important;
			margin-top: 1em;
		}
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
