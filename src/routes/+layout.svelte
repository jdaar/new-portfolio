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
		<div
			class="content-slot"
		>
		 	{#key $page.url.pathname}
			<div
				class="not-scrollable"
				on:scroll={() => goto(routes[$page.url.pathname]['next'] ?? $page.url.pathname)}
			>
				<div class="scrollable" >
					<slot />
				</div>
			</div>
			{/key}
		</div>
		<div class="continue">
			<button on:click={() => goto(routes[$page.url.pathname]['next'] ?? $page.url.pathname)}
				>{LANGUAGE_DICTIONARIES[$language]['continue_label']}</button
			>
			<svg
				width="24"
				height="30"
				viewBox="0 0 24 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 5.23256L12.7269 4.49302C12.534 4.29705 12.2726 4.18697 12 4.18697C11.7274 4.18697 11.466 4.29705 11.2731 4.49302L12 5.23256ZM12 16.3953L11.2731 17.1349C11.466 17.3309 11.7274 17.4409 12 17.4409C12.2726 17.4409 12.534 17.3309 12.7269 17.1349L12 16.3953ZM8.53029 7.28372C8.3486 7.4821 8.24969 7.74449 8.25439 8.01561C8.25909 8.28673 8.36704 8.54541 8.55549 8.73715C8.74394 8.92889 8.99819 9.03872 9.26466 9.0435C9.53113 9.04828 9.78902 8.94765 9.984 8.76279L8.53029 7.28372ZM14.016 8.76279C14.1102 8.86561 14.2237 8.94808 14.3499 9.00528C14.4761 9.06247 14.6123 9.09323 14.7504 9.09571C14.8885 9.09819 15.0257 9.07234 15.1537 9.01971C15.2818 8.96707 15.3982 8.88873 15.4958 8.78936C15.5935 8.68998 15.6705 8.57161 15.7222 8.4413C15.774 8.31099 15.7994 8.17141 15.7969 8.0309C15.7945 7.89038 15.7643 7.75181 15.708 7.62344C15.6518 7.49506 15.5708 7.37953 15.4697 7.28372L14.016 8.76279ZM9.984 12.8651C9.88983 12.7623 9.77628 12.6798 9.65011 12.6226C9.52394 12.5654 9.38774 12.5347 9.24963 12.5322C9.11152 12.5297 8.97434 12.5556 8.84627 12.6082C8.71819 12.6608 8.60185 12.7392 8.50418 12.8386C8.40651 12.9379 8.32951 13.0563 8.27777 13.1866C8.22604 13.3169 8.20064 13.4565 8.20307 13.597C8.20551 13.7375 8.23574 13.8761 8.29196 14.0045C8.34818 14.1328 8.42923 14.2484 8.53029 14.3442L9.984 12.8651ZM15.4697 14.3442C15.5708 14.2484 15.6518 14.1328 15.708 14.0045C15.7643 13.8761 15.7945 13.7375 15.7969 13.597C15.7994 13.4565 15.774 13.3169 15.7222 13.1866C15.6705 13.0563 15.5935 12.9379 15.4958 12.8386C15.3982 12.7392 15.2818 12.6608 15.1537 12.6082C15.0257 12.5556 14.8885 12.5297 14.7504 12.5322C14.6123 12.5347 14.4761 12.5654 14.3499 12.6226C14.2237 12.6798 14.1102 12.7623 14.016 12.8651L15.4697 14.3442ZM0 12.2093V17.7907H2.05714V12.2093H0ZM24 17.7907V12.2093H21.9429V17.7907H24ZM10.9714 5.23256V16.3953H13.0286V5.23256H10.9714ZM11.2731 4.49302L8.53029 7.28372L9.984 8.76279L12.7269 5.97209L11.2731 4.49302ZM11.2731 5.97209L14.016 8.76279L15.4697 7.28372L12.7269 4.49302L11.2731 5.97209ZM12.7269 15.6558L9.984 12.8651L8.53029 14.3442L11.2731 17.1349L12.7269 15.6558ZM12.7269 17.1349L15.4697 14.3442L14.016 12.8651L11.2731 15.6558L12.7269 17.1349ZM24 12.2093C24 8.97119 22.7357 5.86571 20.4853 3.57602C18.2348 1.28633 15.1826 0 12 0V2.09302C14.637 2.09302 17.166 3.15884 19.0307 5.05601C20.8953 6.95318 21.9429 9.5263 21.9429 12.2093H24ZM12 30C13.5759 30 15.1363 29.6842 16.5922 29.0706C18.0481 28.457 19.371 27.5577 20.4853 26.424C21.5996 25.2902 22.4835 23.9443 23.0866 22.463C23.6896 20.9817 24 19.394 24 17.7907H21.9429C21.9429 20.4737 20.8953 23.0468 19.0307 24.944C17.166 26.8412 14.637 27.907 12 27.907V30ZM0 17.7907C0 21.0288 1.26428 24.1343 3.51472 26.424C5.76516 28.7137 8.8174 30 12 30V27.907C9.36299 27.907 6.83399 26.8412 4.96934 24.944C3.10469 23.0468 2.05714 20.4737 2.05714 17.7907H0ZM2.05714 12.2093C2.05714 9.5263 3.10469 6.95318 4.96934 5.05601C6.83399 3.15884 9.36299 2.09302 12 2.09302V0C8.8174 0 5.76516 1.28633 3.51472 3.57602C1.26428 5.86571 0 8.97119 0 12.2093H2.05714Z"
					fill="white"
				/>
			</svg>
		</div>
	</div>
	<nav>
		<ul>
			{#each Object.keys(routes) as route}
				<li>
					<a href={route} class:selected={route == $page.url.pathname} class:highlight={route == '/contact'}>
						{LANGUAGE_DICTIONARIES[$language][routes[route]['label']]}
					</a>
					{#if route == '/contact'} 
						<p class="subtitle">{LANGUAGE_DICTIONARIES[$language]['contact-subtitle_label']}
					{/if}
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
		color: var(--secondary-accent-color)
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
		max-height: 60vh;
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
			top: 1em;
			left: 1em;
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

	.continue > button {
		height: 100%;
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
		height: 80%;
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
