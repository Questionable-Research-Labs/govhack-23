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
        <img src="/negative-positive-photo.svg" alt="example">
        <p>The editor's choice of images can give us a good idea on what the opinion or bias of the article will be. For example, if a news site uses a photo of a politician that makes them look angry, it's likely that the article will be negative.</p>
        <img src="/neural-net.svg" alt="neural net">
        <p>This is where our neural network comes in. We use this to classify if an image is portraying the individual in a good light or in a bad light.</p>
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 6em;
        padding: 0 2em;
        gap: 2em;

        img { 
            width: 60%;
            height: auto;
        }
        p {
            max-width: 60%;
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



        .about {
            img {
                width: 100%;
            }
            p {
                max-width: 100%;
            }
        }
    }
</style>