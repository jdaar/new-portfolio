<script lang="ts">
	import { fly } from 'svelte/transition';
    import type { PageData } from './$types';
	import { language_dictionaries, type Language } from '$lib/lang/dictionaries';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Achievement from '$lib/components/achievement.svelte';

    let language = getContext('language') as Writable<Language>;
    
    export let data: PageData;
</script>

<div transition:fly={{ y: -25, duration: 250, delay: 250}}>
    <div class="card-header">
        <h1>
            {language_dictionaries[$language]['achievements_label']}
        </h1>
        <select>
            <option value="test">Test</option>
        </select>
        <select>
            <option value="test">Test</option>
        </select>
    </div>
<div class="achievements">
    <Achievement></Achievement>
    <Achievement></Achievement>
    <Achievement></Achievement>
    <Achievement></Achievement>
    <Achievement></Achievement>
</div>
</div>

<style>
    .achievements {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
        height: 90%;
        max-height: 40vh;
        overflow-y: scroll;
    }

    .card-header {
        margin-bottom: 2em;
        display: grid;
        grid-template-columns: 0.25fr 0.25fr;
        grid-template-rows: 1fr 2.5em;
        column-gap: 1em;
    }

    select {
        background-color: var(--secondary-background-color);
        border: none;
        border-radius: 5px;
    }

    h1 {
        grid-column: span 4;
    }
</style>