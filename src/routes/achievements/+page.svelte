<script lang="ts">
	import { fly } from 'svelte/transition';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Achievement from '$lib/components/achievement.svelte';
	import type { Language } from '$lib/@types';
	import { LANGUAGE_DICTIONARIES } from '$lib/lang/dictionaries';
	import { ACHIEVEMENTS } from '$lib/const';

    let language = getContext('language') as Writable<Language>;
</script>

<div transition:fly={{ y: -25, duration: 250, delay: 250}}>
    <div class="card-header">
        <h1>
            {LANGUAGE_DICTIONARIES[$language]['achievements_label']}
        </h1>
        <select>
            <option value="test">Test</option>
        </select>
        <select>
            <option value="test">Test</option>
        </select>
    </div>
<div class="achievements">
    {#each ACHIEVEMENTS as achievement}
        <Achievement achievement={achievement}></Achievement>
    {/each}
</div>
</div>

<style>
    .achievements {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row: auto;
        gap: 1em;
        height: 90%;
        max-height: 40vh;
        overflow-y: scroll;
    }

    .card-header {
        margin-bottom: 2em;
        display: grid;
        grid-template-columns: 0.15fr 0.15fr;
        grid-template-rows: 1fr 2.5em;
        column-gap: 1em;
    }

    select {
        background-color: var(--secondary-background-color);
        border: none;
        border-radius: 5px;
        padding: 0.15em;
        padding-left: 0.5em;
        font-size: var(--text-size);
    }

    h1 {
        grid-column: span 4;
    }
</style>