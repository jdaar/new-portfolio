<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import type { Language } from '$lib/@types';
	import { LANGUAGE_DICTIONARIES } from '$lib/lang/dictionaries';
	import { goto } from '$app/navigation';
	import profile_picture from '$lib/assets/pp.jpg';
	import { onMount } from 'svelte';
	import chartjs from 'chart.js/auto';
	import { ACHIEVEMENTS } from '$lib/const';

	let language = getContext('language') as Writable<Language>;

	let chartLabels = ACHIEVEMENTS.map(v => v.technologies).reduce((acc, v) => [...acc, ...v], []).filter((v, i, arr) => arr.indexOf(v) == i)
	let chartData = chartLabels.map(v => ACHIEVEMENTS.filter(_v => _v.technologies.includes(v)).length)
	let ctx: CanvasRenderingContext2D | null;
	let chartCanvas: HTMLCanvasElement;

	onMount(async () => {
		ctx = chartCanvas.getContext('2d');
		if (ctx != null) {
			var chart = new chartjs(ctx, {
				type: 'bar',
				data: {
					labels: chartLabels,
					datasets: [
						{
							label: 'Cantidad de proyectos',
							backgroundColor: 'rgb(255, 226, 182)',
							borderColor: 'rgb(255, 226, 182)',
							data: chartData
						}
					]
				},
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
			});
		}
	});
</script>

<svelte:head>
	<title>Jhonatan David</title>
</svelte:head>

<div class="content"> 

<div class="card-header">
	<h1>Jhonatan David Asprilla Arango</h1>
	<img src={profile_picture} alt="Imagen personal" />
	<h2>{LANGUAGE_DICTIONARIES[$language]['about-me_subtitle_text']}</h2>
</div>
<p>
	{LANGUAGE_DICTIONARIES[$language]['about-me_paragraph_text']}
</p>
<div class="graphics">
  <canvas bind:this={chartCanvas} id="myChart" />
  <p style="grid-row: 2">{LANGUAGE_DICTIONARIES[$language]['metric-technology_label']}</p>
  <div class="counters">
    <div>
      <h2 style="color: var(--secondary-accent-color)">{ACHIEVEMENTS.filter(v => v.category == 'enterprise').length}</h2>
      <p style="font-size: var(--small-size); color: var(--secondary-accent-color)">{LANGUAGE_DICTIONARIES[$language]['enterprise_label']}</p>
    </div>
    <div>
      <h2 style="color: var(--accent-color)">{ACHIEVEMENTS.filter(v => v.category == 'project').length}</h2>
      <p style="font-size: var(--small-size); color: var(--accent-color)">{LANGUAGE_DICTIONARIES[$language]['project_label']}</p>
    </div>
  </div>
  <p>{LANGUAGE_DICTIONARIES[$language]['metric-category_label']}</p>
</div>
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

		margin-bottom: 0.5em;
	}

  .counters {
    display: grid;
    gap: 1em;
    margin-top: 2em;
    grid-template-columns: 1fr 1fr;
  }

  .counters > div > h2 {
    align-self: center;
  }

  .counters > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .counters > div > p {
    padding: 0
  }

  .content {
    overflow-y: scroll;
    height: 100%;
    max-height: 60vh;
  }

  .graphics {
    max-height: 200px;
    margin-bottom: 5em;
    margin-top: 2em;
    gap: 3em;
    align-items: center;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .graphics > canvas {
    max-width: 100%;
  }

	@media (max-width: 1012px) {
    .graphics {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 0.1fr 1fr 0.1fr;
    }
  }

  .graphics > p {
    font-size: var(--small-size);
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
		font-size: var(--small-size);
    margin: 0;
    padding-right: 1em
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
