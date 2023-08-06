<script lang="ts">
	import type { Language } from "$lib/lang/dictionaries";
	import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    const language = getContext('language') as Writeable<Language>
</script>

<div class="achievement">
    <div></div>
    <h2>
        Conector SAP B1
    </h2>
    <div class="technologies">
        test
    </div>
    <div class="actions">
        <button>{$language}</button>
    </div>
    <div></div>
</div>

<style>
    .achievement {
        border: 2px solid var(--border-color);
        display: grid;
        grid-template-columns: 90%;
        grid-template-rows: 10% 30% 20% 30% 10%;
        justify-content: center;
        align-items: center;
        min-height: 10em;
        border-radius: 5px;
    }
</style>