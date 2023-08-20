<svelte:head>
    <title>BiasLenz</title>
</svelte:head>

<script lang="ts">
    import NewsSourceCard from '../lib/components/NewsSourceCard.svelte';
    import type { NewsSource } from "$lib/types";
    import Footer from '../lib/components/Footer.svelte';
	import { findNewsOrgRows, newsOrgData } from '$lib/data';
	import { GalleryImage, GalleryThumbnail, LightboxGallery } from 'svelte-lightbox';

    const HEADSHOT_ROOT = '/compiledHeadshots';
    const FULL_ROOT = '/compiledImages';

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
    {#each Object.values(newsOrgData) as source}
    <h2>{source.name}</h2>
    {@const photoList = findNewsOrgRows(source.name).sort((a,b)=>(a.sentiment - b.sentiment))}
    {#if photoList}
    <LightboxGallery  enableImageExpand customization={{lightboxFooterProps: {style: "display: none;"}}} arrowsConfig={{color: "#fff",character: 'hide', enableKeyboardControl: true}} >
        <!-- Layout-->
        <svelte:fragment slot="thumbnail">
            <div class="galleryLayout">
                {#each photoList as image, i}
                    <GalleryThumbnail id={i} >
                        <img src={`${HEADSHOT_ROOT}/${image.cropped_image_path}`} class="image-{i}" alt={image.mp_name}/>
                        <!-- <p>{image.mp_name}</p> -->
                    </GalleryThumbnail>
                {/each}
            </div>
        </svelte:fragment>
        {#each photoList as image, i}
            <GalleryImage id={i} title="ssss">
                <img src={`${FULL_ROOT}/${image.image_path}`}  class="image-{i}" alt={image.mp_name}/>
            </GalleryImage>
        {/each}
    </LightboxGallery>
    {/if}
    {/each}



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
    .galleryLayout {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 1em;
        padding: 1em;
        // p {
        //     position: absolute;
        //     bottom: 6px;
        //     width: 100%;
        //     text-align: center;
        // }
        :global(.svelte-lightbox-thumbnail) {
            border-radius: 0.5em;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.5s ease;
            aspect-ratio: 1;

            
            :global(img) {
                width: 100%;
                height: 100%;
                object-fit: cover;
                cursor: pointer;
            }
            
            
        }
        :global(.svelte-lightbox-thumbnail:hover) {
            transform: scale(1.02);
        }


    }

    :global(.svelte-lightbox-main) {
        width: 100vw !important;
        padding: 0 5em !important;
        :global(.svelte-lightbox-body) {
            aspect-ratio: 4/3;
            margin: 0 auto;
            :global(svg) {
                filter: drop-shadow(0px 0px 2.2px rgba(0, 0, 0, 0.067)) drop-shadow(0px 0px 5.3px rgba(0, 0, 0, 0.097)) drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 17.9px rgba(0, 0, 0, 0.143)) drop-shadow(0px 0px 33.4px rgba(0, 0, 0, 0.173)) drop-shadow(0px 0px 80px rgba(0, 0, 0, 0.2));
            }
            :global(img) {
                width: 100%;
            }
        }
    }
    @media screen and (max-width: 600px) {
        :global(.svelte-lightbox-main) {
            padding: 0 !important;
        }
        .galleryLayout {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    :global(.previous-button), :global(.next-button) {
        cursor: pointer;
    }
</style>