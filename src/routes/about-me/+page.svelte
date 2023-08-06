<script lang="ts">
	import { getContext } from 'svelte';
    import type { PageData } from './$types';
	import type { Writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import type { Language } from '$lib/@types';
	import { LANGUAGE_DICTIONARIES } from '$lib/lang/dictionaries';

    let language = getContext('language') as Writable<Language>;
</script>

<div transition:fly={{ y: -25, duration: 250, delay: 250}}>
    <div class="card-header">
        <h1>Jhonatan David Asprilla Arango</h1>
        <img src="https://media.licdn.com/dms/image/C4D03AQHTXQvetVMWQg/profile-displayphoto-shrink_400_400/0/1644779343317?e=1697068800&v=beta&t=g088zn6P89PJypIzneaQUUHS5x0BB6NCvywonBaGgs0" alt="" srcset="">
        <h2>{LANGUAGE_DICTIONARIES[$language]['about-me_subtitle_text']}</h2>
    </div>
    <p>
        {LANGUAGE_DICTIONARIES[$language]['about-me_paragraph_text']}
    </p>
</div>

<style>
    .card-header {
        display: grid;
        grid-template-columns: 1fr 0.3fr;
        grid-template-rows: 0.6fr 0.3fr;
        gap: 0.5em;
        width: 100%;
        min-height: 140px;
        align-items: end;

        margin-bottom: 2em;
    }

    img {
        grid-row: span 2;
        justify-self: center;
        border-radius: 100%;
        max-width: 110px;
        min-width: 60px;
        width: 100%;
        align-self: center;
    }

    h1 {
        font-size: var(--title-size);
        padding: 0;
        margin: 0;
        height: fit-content;
    }

    p {
        font-size: var(--text-size);
    }

    h2 {
        font-size: var(--subtitle-size);
        font-weight: 600;
        padding: 0;
        margin: 0;
        text-justify: center;
        align-self: self-start;
    }
</style>