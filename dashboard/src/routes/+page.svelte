<svelte:head>

</svelte:head>

<script>
    import NewsSourceCard from '../lib/components/NewsSourceCard.svelte';
    // import { newsSources } from '../lib/newsSources.json';
    let newsSources = [{"id": "news1", "value": -1}, {"id": "news2", "value": 0.5}]
</script>

<div class='container'>
    <div class="title-box">
        <h1>BiasLens</h1>
        <h2>Bias dectection harnessing the power of AI</h2>
    </div>
    <div class="news-sources">
        {#each newsSources as source}
            <NewsSourceCard source={source} />
        {/each}
    </div>
</div>


<style lang="scss">
    .container {
        background-color: #ede7e3;
        width: 100%;
        min-height: 100vh;  
    }
    .title-box {
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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