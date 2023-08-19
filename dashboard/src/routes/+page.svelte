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
        <img src="/logo-text.svg" alt="BiasLens Logo" height="150px"/>
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

    h1 {
        margin: 0;
        text-align: center;
        font-size: 5em;
        // color: #16697a;  
    }
    
    h2 {
        margin: 0;
        text-align: center;
        font-size: 3em;
        font-weight: 100;
    }
</style>