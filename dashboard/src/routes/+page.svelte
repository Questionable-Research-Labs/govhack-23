<svelte:head>

</svelte:head>

<script lang="ts">
    import NewsSourceCard from '../lib/components/NewsSourceCard.svelte';
    import type { NewsSource } from "$lib/types";
    import Footer from '../lib/components/Footer.svelte';

    let newsSources: NewsSource[] = [
        {
            name: "RNZ",
            value: 0
        },
        {
            name: "NZ Herald",
            value: 1
        },
        {
            name: "Stuff",
            value: -0.1
        },
        {
            name: "Random Placeholder",
            value: 0.5
        }
    ]


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
    <div class="about">

    </div>
    <Footer />
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
    .news-sources {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
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