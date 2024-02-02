<script lang="ts">
	/* eslint-disable */
	import { LANGUAGE_DICTIONARIES, LANGUAGE_EXPERIENCE } from '$lib/lang/dictionaries';
	import { getContext } from 'svelte';
	import type { Language } from '$lib/@types';
	import type { Writable } from 'svelte/store';
	import { EXPERIENCE } from '$lib/const';
	import { TECHNOLOGIES_LOGOS } from '$lib/logos';
	import SvelteTooltip from 'svelte-tooltip';

	let language = getContext('language') as Writable<Language>;
</script>

<svelte:head>
	<title>{LANGUAGE_DICTIONARIES[$language]['experience_label']}</title>
</svelte:head>

<div class="card-header">
	<h1>{LANGUAGE_DICTIONARIES[$language]['experience_label']}</h1>
</div>
<div class="social-networks">
	{#each EXPERIENCE as experience}
		{@const technologies_logos = experience.technologies.map((v) => ({
			name: v,
			...TECHNOLOGIES_LOGOS[v]
		}))}
		{@const experienceDuration = (experience.to?.getTime() ?? 0) - experience.from.getTime()}
		{@const attributes = LANGUAGE_EXPERIENCE[$language][experience.label].description.split('$+')}
		<div class="network extended">
			<div>
				<img src={experience.companyLogo} alt="Experience" />
				<div>
					<h2>{LANGUAGE_EXPERIENCE[$language][experience.label].title}</h2>
					<h4>
						{experience.company}
						{#if experience.to}
							<span
								>{`${experienceDuration / (1000 * 60 * 60 * 24 * 30 * 12)}`.slice(0, 3)} años</span
							>
						{:else}
							<span>Actualidad</span>
						{/if}
					</h4>
				</div>
			</div>
			<h5>{LANGUAGE_DICTIONARIES[$language]['experience-related_label']}</h5>
			<div class="skills">
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
			<ul>
				{#each attributes.slice(1, attributes.length) as attribute}
					{#if attribute.includes('🌟')}
						<li class="star">{attribute.replace('🌟', '').trim()}</li>
					{:else}
						<li>{attribute.trim()}</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/each}
</div>

<style>
	h1 {
		margin: 0;
		margin-bottom: 0.5em;
	}

	.network {
		width: 100%;
		padding: 1em;
	}

	.network > div > img {
		width: 76px;
		height: auto;
	}

	.network > :first-child {
		display: flex;
		width: 100%;
		flex-direction: row;
		gap: 10px;
	}

	.network > div > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		width: 100%;
	}

	.network > div > div > h4 > span {
		color: #d0d0d0;
		font-weight: 400;
	}

	.network > div > div > h4 {
		font-size: small;
	}

	.network > ul {
		margin: 0;
	}

	.social-networks {
		height: 100%;
		max-height: 70vh;
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(1fr, minmax(250px, 1fr));
		grid-template-rows: 1fr 1fr 1fr;
		margin-right: 1em;
		overflow-y: scroll;
		overflow-x: hidden;
		padding-bottom: 1em;
	}

	@media (max-width: 1024px) {
		.social-networks {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;
			max-height: 70vh;
		}
	}

	.extended {
		grid-column: span 2;
	}

	.network {
		border-radius: 5px;
		background-color: var(--background-color);
		border: 2px solid var(--border-color);
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding-bottom: 10px;
		grid-template-columns: 95%;
		justify-content: start;
		align-items: start;
	}

	h5 {
		margin: 0;
	}

	h2,
	h4 {
		margin: 0;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	ul {
		list-style: '+  ';
		margin: 0;
		padding: 1em;
	}

	ul > li {
		color: #75ff87;
	}

	.star {
		list-style: '🌟 ';
	}

	svg {
		z-index: 0;
	}
</style>
