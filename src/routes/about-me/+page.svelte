<script lang="ts">
	import { getContext } from 'svelte';
    import type { PageData } from './$types';
	import type { Writable } from 'svelte/store';
    import { language_dictionaries, type Language } from '$lib/lang/dictionaries';

    let language = getContext('language') as Writable<Language>;
    
    export let data: PageData;
</script>

<div class="card-header">
    <h1>Jhonatan David Asprilla Arango</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbAPdbKWCW8JZRhrUGNhu0iPGABj_qkZEsxazxMk&s" alt="" srcset="">
    <h2>{language_dictionaries[$language]['about-me_subtitle_text']}</h2>
</div>

<p>
    Profesional innovador con más de 2 años de experiencia en desarrollo web full-stack, móvil y liderazgo de proyectos
</p>

<style>
    .card-header {
        display: grid;
        grid-template-columns: 1fr 0.3fr;
        grid-template-rows: 0.5fr 1fr;
        gap: 1em;
        width: 100%;
        min-height: 100px;

        margin-bottom: 2em;
    }

    img {
        grid-row: span 2;
        justify-self: center;
        border-radius: 100%;
    }

    h1 {
        font-size: var(--title-size);
        padding: 0;
        margin: 0;
    }

    h2 {
        font-size: var(--subtitle-size);
        font-weight: 600;
        padding: 0;
        margin: 0;
        text-justify: center;
    }
</style>