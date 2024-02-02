<script lang="ts">
	import './styles.css';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { goto } from '$app/navigation';
	import { LS_LANGUAGE_KEY } from '$lib/const';
	import { browser } from '$app/environment';
	import type { Language } from '$lib/@types';
	import { LANGUAGE_DICTIONARIES } from '$lib/lang/dictionaries';
	import Analytics from '$lib/components/analytics.svelte';

	let language = writable<Language>('es');
	if (browser) {
		const cached_language = localStorage.getItem(LS_LANGUAGE_KEY);
		$language = cached_language ?? $language;
	}

	let routes: { [key: string]: { label: string; next: string } } = {
		'/': {
			label: 'about-me_label',
			next: '/achievements'
		},
		'/achievements': {
			label: 'achievements_label',
			next: '/contact'
		},
		'/contact': {
			label: 'contact_label',
			next: '/'
		}
	};

	setContext('language', language);
	let routeNameArr: string[];
	let routeName: string;
	$: routeNameArr = $page.url.pathname.split('/');
	$: routeName = `/${routeNameArr.slice(routeNameArr.length - 1).join('/')}`;
</script>

<svelte:head>
	<meta name="title" content="Jhonatan David" />
	<meta
		name="description"
		content="A comprehensive portfolio showcasing the work and projects of Jhonatan David. Discover valuable insights into his professional accomplishments."
	/>
	<meta
		name="keywords"
		content="portafolio,developer,fullstack,backend,frontend,medellin,remote,remoto,desarrollador,analista,administrador,sistemas,ingeniero,freelance,job,trabajo,remote,administrator,linux,windows,svelte,react,reactnative,native,html,css,js,python,c#"
	/>
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="30 days" />
	<meta name="author" content="Jhonatan David" />
</svelte:head>
<Analytics />

<div class="main-container">
	<button
		class="language standalone"
		on:click={() => {
			$language = $language == 'es' ? 'en' : 'es';
			localStorage.setItem(LS_LANGUAGE_KEY, $language);
		}}>{$language == 'es' ? `🇺🇸` : `🇪🇸`}</button
	>
	<div class="main-content">
		<div class="content-slot">
			{#key $page.url.pathname}
				<div
					class="not-scrollable"
					on:scroll={() => goto(routes[routeName]['next'] ?? $page.url.pathname)}
				>
					<div class="scrollable">
						<slot />
					</div>
				</div>
			{/key}
		</div>
		<div class="continue">
			<div>
				<button on:click={() => goto(routes[routeName]['next'] ?? $page.url.pathname)}
					>{LANGUAGE_DICTIONARIES[$language]['continue_label']}</button
				>
				<a href="https://www.linkedin.com/in/jasprilla/" target="_blank" rel="noopener noreferrer">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="3em" height="3em"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"/><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"/><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677 c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638 c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001 c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"/><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"/></svg>
				</a>
			</div>
		</div>
	</div>
	<nav>
		<ul>
			{#each Object.keys(routes) as route}
				<li>
					<a
						href={route}
						class:selected={route == routeName}
						class:highlight={route == '/contact'}
					>
						{LANGUAGE_DICTIONARIES[$language][routes[route]['label']]}
					</a>
					{#if route == '/contact'}
						<p class="subtitle">
							{LANGUAGE_DICTIONARIES[$language]['contact-subtitle_label']}
						</p>{/if}
				</li>
			{/each}
			<li class="language">
				<button
					on:click={() => {
						$language = $language == 'es' ? 'en' : 'es';
						localStorage.setItem(LS_LANGUAGE_KEY, $language);
					}}>{$language == 'es' ? `🇺🇸 English` : `🇪🇸 Español`}</button
				>
			</li>
		</ul>
	</nav>
</div>

<style>
	.highlight {
		color: var(--secondary-accent-color);
	}

	.subtitle {
		font-weight: 400;
		margin-top: 0;
		color: #646464;
		font-size: var(--small-size);
		display: block;
	}

	.scrollable {
		height: 1000px;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	.not-scrollable {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		max-height: 80vh;
	}

	.not-scrollable::-webkit-scrollbar {
		display: none;
	}

	.main-container {
		display: grid;
		grid-template-columns: 1fr 0.4fr;
		grid-template-rows: 1fr;
		align-items: center;
		gap: 1em;
		height: 100%;
		width: 90%;
	}

	.continue {
		width: 100%;
	}

	.continue > div {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.continue > div > button {
		border: #272727 1px solid;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
	}

	.continue > div {
		display: flex;
		gap: 0.5em;
	}

	.standalone {
		display: none;
	}

	@media (max-width: 612px) {
		nav {
			display: none;
		}

		.standalone {
			display: block;
			position: absolute;
			top: 1em;
			right: 1em;
			height: 4em;
			font-size: var(--subtitle-size);
			width: 2.5em;
			border: #272727 1px solid;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
			padding: 0;
		}

		.main-container {
			grid-template-columns: 1fr;
			gap: 0.1em;
		}
	}

	.language {
		grid-row: 5;
	}

	.language > button {
		border: #272727 1px solid;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
	}

	.content-slot {
		width: 100%;
		height: 100%;
	}

	.main-content {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 6em;
		justify-items: center;
	}

	.main-container > * {
		height: 90%;
	}

	.selected {
		color: var(--accent-color);
	}

	.selected::before {
		content: '';
		display: block;
		position: absolute;
		margin-top: 2px;
		left: -10px;
		border-radius: 100%;

		width: 20px;
		height: 20px;
		background-color: var(--accent-color);
	}

	nav {
		position: relative;
	}

	ul::before {
		content: '';
		display: block;
		position: absolute;
		margin-top: 2px;
		left: -5px;
		top: -5px;
		border-radius: 100%;

		width: 10px;
		height: 10px;
		background-color: var(--border-color);
	}

	ul::after {
		content: '';
		display: block;
		position: absolute;
		margin-top: 2px;
		left: -5px;
		bottom: -5px;
		border-radius: 100%;

		width: 10px;
		height: 10px;
		background-color: var(--border-color);
	}

	nav > ul {
		display: grid;
		grid-template-rows: 2em 2em 2em 1fr 4em;
		grid-template-columns: 1fr;
		list-style: none;
		padding: 0;
		margin: 0;
		justify-items: end;
		align-content: center;
		height: 100%;
		width: 100%;
		gap: 2em;
		border-left: 2px solid var(--border-color);
	}

	nav > ul > li {
		width: 90%;
	}

	nav > ul > li > a {
		text-decoration: none;
		color: var(--foreground-color);
		font-size: var(--subtitle-size);
		font-weight: 600;
		transition: 0.5s;
	}
</style>
