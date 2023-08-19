<svelte:head>
    <title>BiasLens</title>
</svelte:head>

<script lang="ts">
    import NewsSourceCard from '../lib/components/NewsSourceCard.svelte';
    import type { NewsSource } from "$lib/types";
    import Footer from '../lib/components/Footer.svelte';
	import { newsOrgData } from '$lib/data';
    
</script>

<div class='container'>
    <div class="title-box">
        <img src="/logo-text.svg" alt="BiasLens Logo" class="logo"/>
        <h2>Bias detection harnessing the power of AI</h2>
    </div>
    <div class="news-sources">
        {#each Object.values(newsOrgData) as source}
            <NewsSourceCard source={source} />
        {/each}
    </div>
    <div class="about">

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
        gap: 2em
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

    @media only screen and (max-width: 600px) {
        h2 {
            font-size: 2em;
        }

        .logo {
            width: 80%;
        }

        .news-sources {
            flex-direction: column;
        }
    }
</style>