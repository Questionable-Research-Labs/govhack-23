<script lang="ts">
    import type { NewsSource } from "$lib/types";
    export let source: NewsSource;
    import { onMount } from 'svelte';

    import chartjs from 'chart.js/auto';
	let chartValues = [20, 10, 5, 2, 20, 30, 45];
	let chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    let ctx;
	let chartCanvas;
    
    onMount(async () => {
		  ctx = chartCanvas.getContext('2d');
			var chart = new chartjs(ctx, {
				type: 'line',
				data: {
						labels: chartLabels,
						datasets: [{
								label: 'Revenue',
								backgroundColor: 'rgb(255, 99, 132)',
								borderColor: 'rgb(255, 99, 132)',
								data: chartValues
						}]
				}
		});
	});
</script>

<div>
    <h1>{source.name}</h1>
    <h1>{source.value}</h1>
    <canvas bind:this={chartCanvas} id="myChart"></canvas>
</div>


<style lang="scss">
    div {
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>