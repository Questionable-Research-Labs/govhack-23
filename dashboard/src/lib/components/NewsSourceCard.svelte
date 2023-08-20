<script lang="ts">
	import { calculateNewsOrgMetadata, type NewsOrgMetadata } from '$lib/data';
    export let source: NewsOrgMetadata;
    

    const stats = calculateNewsOrgMetadata(source.name);

    // on click send to /site/id 
    function handleClick() {
        window.location.href = `/site/${source.slug}`;
    }

    import Chart from 'chart.js/auto';
    import Gauge from 'chartjs-gauge';
	import { onMount } from 'svelte';

    let canvas_elm:HTMLCanvasElement;

    onMount(() => {
        let ctx = canvas_elm.getContext("2d");

        var chart = new Gauge(ctx, {
        type: 'gauge',
        data: {
            datasets: [{
                value: stats.leftRightLean,
                minValue: -10,
                data: [-5, 5, 10],
                backgroundColor: ['#f15a29', '#eeeeee', '#f15a29'],
            }]
        },
        options: {
            needle: {
                radiusPercentage: 2.5,
                widthPercentage: 5,
                lengthPercentage: 80,
                color: 'rgba(0, 0, 0, 1)'
            },
            valueLabel: {
                display: false,
                formatter: (value: number) => {
                    return value;
                },
                color: 'rgba(255, 255, 255, 1)',
                backgroundColor: 'rgba(0, 0, 0, 1)',
                borderRadius: 5,
                padding: {
                        top: 10,
                        bottom: 10
                }
            }
        },
        });
    })
</script>

<div class="container">
    <h1>{source.name}</h1>
    <p>Bias Score: {stats.leftRightLean.toPrecision(3)}</p>

    <div id="canvas-holder" style="width:100%">
        <canvas id="chart" bind:this={canvas_elm}></canvas>
    </div>


    <button on:click={handleClick}>View</button>
</div>


<style lang="scss">
    .container {
        background-color: #fff; 
        border-radius: 10px;
        padding: 1em;
        margin: 10px;
        width: 300px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    }
    button {
        background-color: #eeeeee;
        border: 0px solid black;
        border-radius: 5px;
        padding: 10px;
        // margin: 10px;
        width: 100px;
        height: 50px;
        font-size: 1.2em;
        font-weight: bolder;
        cursor: pointer;
        transition: 0.1s ease-in-out;
    }

    p {
        margin-top: 0;
        font-weight: bolder;
    }

    button:hover {
        background-color: #f15a29;
        border: #f15a29;
    }

    h2, h1 {
        margin:0.2em;
    }


    @media only screen and (max-width: 600px) {
        div {
            width: 100%;
            height: 100%;
        }
    }

    canvas {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;

    }

</style>