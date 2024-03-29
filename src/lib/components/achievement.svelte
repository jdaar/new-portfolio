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
		<img class="scaled-image" src={$selected_image} alt="Selected project" />
	</div></Modal
>
<div
	class="achievement"
	class:expanded={achievement.image != undefined && achievement.image != null}
>
	<div class="achievement-wrapper">
		<div />
		<h2 class="achievement-title">
			{LANGUAGE_ACHIEVEMENTS[$language].title[achievement.title]}
			<span class="badge" class:badge-secondary={achievement.category == 'enterprise'}
				>{LANGUAGE_DICTIONARIES[$language][`${achievement.category}_label`]}</span
			>
		</h2>
		<p class="achievement-description">
			{#if LANGUAGE_ACHIEVEMENTS[$language].description[achievement.title]
				.split('$+')[0]
				.trim().length > 0}
				{LANGUAGE_ACHIEVEMENTS[$language].description[achievement.title].split('$+')[0].trim()}.
			{/if}
			{#if LANGUAGE_ACHIEVEMENTS[$language].description[achievement.title].split('$+').length > 1}
				<ul>
					{#each LANGUAGE_ACHIEVEMENTS[$language].description[achievement.title]
						.split('$+')
						.slice(1) as attribute}
						{#if attribute.includes('🌟')}
							<li class="star">{attribute.replace('🌟', '').trim()}</li>
						{:else}
							<li>{attribute.trim()}</li>
						{/if}
					{/each}
				</ul>
			{/if}
		</p>
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
				<div
					class="project-image-wrapper"
					class:play-badge={image.animated != null && image.animated != undefined}
				>
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
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.actions {
		padding-top: 1em;
	}

	.actions > button {
		border: #272727 1px solid;
	}

	.img-gallery {
		overflow-x: scroll;
		display: flex;
		height: 100%;
	}

	.scaled-image {
		height: auto;
		width: 100%;
		max-height: 512px;
		object-fit: contain;
	}

	.project-image-wrapper {
		position: relative;
	}

	.image-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.play-badge > img {
		border: 2px solid;
		border-color: var(--accent-color);
	}

	.play-badge {
		position: relative;
	}

	.play-badge::after {
		content: '▶';
		position: absolute;
		bottom: 1.5em;
		right: 2em;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		background-color: var(--accent-color);
		color: var(--border-color);
		border-radius: 5px;
	}

	@keyframes breathing-border {
		0% {
			border-color: var(--accent-color);
			-webkit-box-shadow: 0px 0px 10px 0px rgba(255, 226, 182, 0.5);
			-moz-box-shadow: 0px 0px 10px 0px rgba(255, 226, 182, 0.5);
			box-shadow: 0px 0px 10px 0px rgba(255, 226, 182, 0.5);
		}
		30% {
			border-color: #1d1e22;
			-webkit-box-shadow: none;
			-moz-box-shadow: none;
			box-shadow: none;
		}
		90% {
			border-color: #1d1e22;
			-webkit-box-shadow: none;
			-moz-box-shadow: none;
			box-shadow: none;
		}
		100% {
			border-color: var(--accent-color);
			-webkit-box-shadow: 0px 0px 10px 0px rgba(255, 226, 182, 0.5);
			-moz-box-shadow: 0px 0px 10px 0px rgba(255, 226, 182, 0.5);
			box-shadow: 0px 0px 10px 0px rgba(255, 226, 182, 0.5);
		}
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
		padding-left: 0.5em;
		padding-right: 0.5em;
		color: var(--accent-color);
		border-radius: 1em;
		font-size: medium;
		margin: 0.2em;
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
		height: fit-content;
		display: grid;
		grid-template-columns: 90%;
		justify-content: center;
		align-items: center;
		gap: 0.1em;
		border-radius: 5px;
		grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
	}

	.achievement-title {
		width: 100%;
		margin: 0;
		padding: 0;
		height: fit-content;
		display: flex;
		gap: 0.2em;
		flex-wrap: wrap;
	}

	.achievement-description {
		color: #fdfdfdd2;
	}

	.achievement-description > ul {
		list-style: '+  ';
		padding-left: 1em;
	}

	.star {
		list-style: '🌟 ';
	}

	.achievement-description > ul > li {
		color: rgb(135, 255, 135);
	}

	.achievement-description > ul > li::after {
		content: '.';
		margin: 0;
		padding: 0;
		color: rgb(135, 255, 135);
	}

	.achievement-description > ul > li::marker {
		color: rgb(135, 255, 135);
	}

	.achievement-wrapper {
		width: 100%;
		padding-top: 1em;
		padding-bottom: 1em;
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
