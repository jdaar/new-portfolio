<script lang="ts">
	import type { Language } from "$lib/@types";
	import { LANGUAGE_DICTIONARIES } from "$lib/lang/dictionaries";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

    let language = getContext('language') as Writable<Language>
</script>


<svelte:head>
	<title>{LANGUAGE_DICTIONARIES[$language]['prices_label']}</title>
</svelte:head>

<div class="card-header">
	<h1>{LANGUAGE_DICTIONARIES[$language]['prices_label']}</h1>
</div>