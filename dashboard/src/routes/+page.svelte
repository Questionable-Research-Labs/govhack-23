<svelte:head>
    <title>BiasLenz</title>
</svelte:head>

<script lang="ts">
    import NewsSourceCard from '../lib/components/NewsSourceCard.svelte';
    import type { NewsSource } from "$lib/types";
    import Footer from '../lib/components/Footer.svelte';
	import { newsOrgData } from '$lib/data';
    
</script>

<div class='container'>
    <div class="title-box">
        <img src="/logo-text.svg" alt="BiasLenz Logo" class="logo"/>
        <h2>Bias detection harnessing the power of AI</h2>
    </div>
    <div class="news-sources">
        {#each Object.values(newsOrgData) as source}
            <NewsSourceCard source={source} />
        {/each}
    </div>
    <div class="about">
        <h2>You're probably wondering how this works.</h2>
        <p>BiasLenz gets photos from popular news sites and rates them on how they portray the individual.</p>

    </div>
    <Footer />
</div>


<style lang="scss">
    .container {
        width: 100%;
        min-height: 100vh;  
    }
    .title-box {
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .news-sources {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2em;
        margin-bottom: 6em;
        padding: 0 2em;
    }
    
    h2 {
        margin: 0;
        text-align: center;
        font-size: 3em;
        font-weight: 100;
    }

    .logo {
        width: 50%;
        height: auto;
    }

    .about {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        margin-bottom: 6em;
        padding: 0 2em;
        gap: 2em;

        h2 {
            grid-column: 1 / 3;
        }
    }

    p {
        font-size: 1.5em;
        font-weight: 100;
        text-align: center;
    }

    @media only screen and (max-width: 600px) {
        h2 {
            font-size: 2em;
        }

        .logo {
            width: 80%;
        }
    }
</style>