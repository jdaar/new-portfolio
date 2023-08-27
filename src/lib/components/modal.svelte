<script lang="ts">
	export let title: string;
	export let visible: boolean;
	export let close_fn: () => void;
</script>

{#if visible}
	<div class="wrapper">
		<article>
			<header>
				<h2>{title}</h2>
				<button on:click={close_fn}>x</button>
			</header>
			<section>
				<slot />
			</section>
		</article>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="background-fade" on:click={close_fn} />
	</div>
{/if}

<style>
	.wrapper {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	article {
		z-index: 3;
		min-height: 20%;
		min-width: 50%;
		background-color: var(--background-color);
		border: 2px solid var(--border-color);
		border-radius: 5px;
		-webkit-box-shadow: 0px 0px 163px 100px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 0px 163px 100px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 0px 163px 100px rgba(0, 0, 0, 0.75);
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 1em;
	}
	section {
		padding: 1em;
	}
	header > button {
		align-self: flex-start;
	}
	.background-fade {
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 2;
	}
</style>
