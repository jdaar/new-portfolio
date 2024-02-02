<script lang="ts">
	import { LANGUAGE_DICTIONARIES } from '$lib/lang/dictionaries';
	import { getContext } from 'svelte';
	import type { Language } from '$lib/@types';
	import type { Writable } from 'svelte/store';

	let language = getContext('language') as Writable<Language>;
</script>

<svelte:head>
	<title>{LANGUAGE_DICTIONARIES[$language]['contact_label']}</title>
</svelte:head>

<div class="card-header">
	<h1>{LANGUAGE_DICTIONARIES[$language]['contact_label']}</h1>
</div>
<div class="social-networks">
	<div class="network extended">
		<svg
			width="100"
			height="100"
			viewBox="0 0 122 122"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M60.9998 10.1667C54.3243 10.1667 47.7141 11.4815 41.5468 14.0361C35.3794 16.5907 29.7756 20.3351 25.0552 25.0554C15.5221 34.5885 10.1665 47.5182 10.1665 61C10.1665 83.4683 24.7557 102.531 44.9365 109.292C47.4782 109.698 48.2915 108.123 48.2915 106.75V98.1592C34.2107 101.209 31.2115 91.3475 31.2115 91.3475C28.8732 85.4508 25.569 83.875 25.569 83.875C20.9432 80.7233 25.9248 80.825 25.9248 80.825C31.0082 81.1808 33.7023 86.0608 33.7023 86.0608C38.1248 93.7875 45.5973 91.5 48.4948 90.28C48.9523 86.9758 50.274 84.7392 51.6973 83.4683C40.4123 82.1975 28.5682 77.8258 28.5682 58.4583C28.5682 52.8158 30.4998 48.2917 33.804 44.6825C33.2957 43.4117 31.5165 38.125 34.3123 31.2625C34.3123 31.2625 38.5823 29.89 48.2915 36.4475C52.3073 35.3292 56.679 34.77 60.9998 34.77C65.3207 34.77 69.6923 35.3292 73.7082 36.4475C83.4173 29.89 87.6873 31.2625 87.6873 31.2625C90.4832 38.125 88.704 43.4117 88.1957 44.6825C91.4998 48.2917 93.4315 52.8158 93.4315 58.4583C93.4315 77.8767 81.5365 82.1467 70.2007 83.4175C72.0307 84.9933 73.7082 88.0942 73.7082 92.8217V106.75C73.7082 108.123 74.5215 109.749 77.114 109.292C97.2948 102.48 111.833 83.4683 111.833 61C111.833 54.3245 110.518 47.7143 107.964 41.5469C105.409 35.3795 101.665 29.7757 96.9444 25.0554C92.2241 20.3351 86.6203 16.5907 80.4529 14.0361C74.2855 11.4815 67.6754 10.1667 60.9998 10.1667Z"
				fill="white"
			/>
		</svg>
		<button on:click={() => window.open('https://github.com/jdaar', '_blank')}
			>{LANGUAGE_DICTIONARIES[$language]['goto-github_label']}</button
		>
	</div>
	<div class="network extended">
		<svg
			width="100"
			height="100"
			viewBox="0 0 130 90"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M102.667 0C105.54 0 108.295 1.14137 110.327 3.17301C112.359 5.20465 113.5 7.96015 113.5 10.8333V86.6667C113.5 89.5398 112.359 92.2953 110.327 94.327C108.295 96.3586 105.54 97.5 102.667 97.5H26.8333C23.9602 97.5 21.2047 96.3586 19.173 94.327C17.1414 92.2953 16 89.5398 16 86.6667V10.8333C16 7.96015 17.1414 5.20465 19.173 3.17301C21.2047 1.14137 23.9602 0 26.8333 0H102.667ZM99.9583 83.9583V55.25C99.9583 50.5667 98.0979 46.0752 94.7863 42.7637C91.4747 39.4521 86.9833 37.5917 82.3 37.5917C77.6958 37.5917 72.3333 40.4083 69.7333 44.6333V38.6208H54.6208V83.9583H69.7333V57.2542C69.7333 53.0833 73.0917 49.6708 77.2625 49.6708C79.2737 49.6708 81.2026 50.4698 82.6247 51.8919C84.0469 53.3141 84.8458 55.2429 84.8458 57.2542V83.9583H99.9583ZM37.0167 30.1167C39.4301 30.1167 41.7448 29.1579 43.4513 27.4513C45.1579 25.7448 46.1167 23.4301 46.1167 21.0167C46.1167 15.9792 42.0542 11.8625 37.0167 11.8625C34.5888 11.8625 32.2604 12.827 30.5437 14.5437C28.827 16.2604 27.8625 18.5888 27.8625 21.0167C27.8625 26.0542 31.9792 30.1167 37.0167 30.1167ZM44.5458 83.9583V38.6208H29.5417V83.9583H44.5458Z"
				fill="white"
			/>
		</svg>
		<button on:click={() => window.open('https://www.linkedin.com/in/jasprilla/', '_blank')}
			>{LANGUAGE_DICTIONARIES[$language]['goto-linkedin_label']}</button
		>
	</div>
	<div class="network extended">
		<svg
			width="100"
			height="100"
			viewBox="0 0 107 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M29.3184 43.16C35.6905 54.48 45.9566 63.72 58.4794 69.52L68.2145 60.72C69.4092 59.64 71.1793 59.28 72.728 59.76C77.6841 61.24 83.0384 62.04 88.5254 62.04C90.9592 62.04 92.9504 63.84 92.9504 66.04V80C92.9504 82.2 90.9592 84 88.5254 84C46.9743 84 13.2998 53.56 13.2998 16C13.2998 13.8 15.2911 12 17.7248 12H33.2125C35.6462 12 37.6375 13.8 37.6375 16C37.6375 21 38.5225 25.8 40.1598 30.28C40.6465 31.68 40.2925 33.24 39.0535 34.36L29.3184 43.16Z"
				fill="white"
			/>
		</svg>
		<button disabled class="accent-text"
			>{LANGUAGE_DICTIONARIES[$language]['contact-first_label']}</button
		>
	</div>
	<div class="network extended">
		<svg
			width="100"
			height="100"
			viewBox="0 0 123 123"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.5 102.5C17.6813 102.5 15.2674 101.496 13.2584 99.4865C11.2494 97.4775 10.2466 95.0653 10.25 92.25V30.75C10.25 27.9313 11.2545 25.5174 13.2635 23.5084C15.2725 21.4994 17.6847 20.4966 20.5 20.5H102.5C105.319 20.5 107.733 21.5045 109.742 23.5135C111.751 25.5225 112.753 27.9347 112.75 30.75V92.25C112.75 95.0687 111.746 97.4826 109.737 99.4916C107.728 101.501 105.315 102.503 102.5 102.5H20.5ZM61.5 66.625L102.5 41V30.75L61.5 56.375L20.5 30.75V41L61.5 66.625Z"
				fill="white"
			/>
		</svg>
		<button disabled class="accent-text">hi@jhonatan.tech</button>
	</div>
</div>

<style>
	h1 {
		margin: 0;
		margin-bottom: 0.5em;
	}

	.accent-text {
		border: 2px solid var(--border-color);
		color: var(--foreground-color);
		background-color: var(--background-color);
	}

	.social-networks {
		height: 100%;
		max-height: 70vh;
		display: grid;
		gap: 1em;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		margin-right: 1em;
		overflow-y: scroll;
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
		display: grid;
		gap: 10px;
		padding-bottom: 10px;
		grid-template-columns: 80%;
		justify-content: center;
		align-items: center;
		grid-template-rows: 70% 20%;
	}

	.network > * {
		align-self: center;
		justify-self: center;
	}

	button {
		border: #272727 1px solid;
	}
</style>
