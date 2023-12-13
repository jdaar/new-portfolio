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
					on:scroll={() => goto(routes[$page.url.pathname]['next'] ?? $page.url.pathname)}
				>
					<div class="scrollable">
						<slot />
					</div>
				</div>
			{/key}
		</div>
		<div class="continue">
			<div>
				<button on:click={() => goto(routes[$page.url.pathname]['next'] ?? $page.url.pathname)}
					>{LANGUAGE_DICTIONARIES[$language]['continue_label']}</button
				>
				<button on:click={() => window.open('https://www.linkedin.com/in/jasprilla/', '_blank')}>
					{LANGUAGE_DICTIONARIES[$language]['goto-linkedin_label']}
				</button>
			</div>
		</div>
	</div>
	<nav>
		<ul>
			{#each Object.keys(routes) as route}
				<li>
					<a
						href={route}
						class:selected={route == $page.url.pathname}
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
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5em;
		grid-template-rows: 1fr 1fr;
		justify-items: center;
		align-items: center;
		width: 100%;
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
			bottom: 1em;
			right: 1em;
			height: 4em;
			font-size: var(--subtitle-size);
			width: 4em;
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
		overflow: hidden;
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
