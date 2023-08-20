<svelte:head>
    <title>BiasLens</title>
</svelte:head>

<script lang="ts">
	import { goto } from '$app/navigation';
    import { page } from '$app/stores';
	import { NewsOrg, findNewsOrgRows, newsOrgData, type NewsOrgMetadata } from '$lib/data';
    import { onMount } from 'svelte';

    import {
        GalleryThumbnail,
        GalleryImage,
        LightboxGallery
    } from 'svelte-lightbox';


    let slug: string;
    let photoList: {
        source_url: string;
        image_url: string;
        image_path: string;
        mp_name: string;
        org_name: string;
        cropped_image_path: string;
        faces: null;
        sentiment_negative: number;
        sentiment_neutral: number;
        sentiment_positive: number;
        sentiment: number;
    }[] | null = null;

    const HEADSHOT_ROOT = '/compiledHeadshots';
    const FULL_ROOT = '/compiledImages';

    let newsOrg: NewsOrgMetadata = "";

    onMount(() => {
        // get slug from page store
        slug = $page.params.id;
        console.log(slug);
        newsOrg = Object.values(newsOrgData).find((x)=>x.slug == slug);
        if (newsOrg) {
            photoList = findNewsOrgRows(newsOrg.name).sort((a,b)=>(a.sentiment - b.sentiment));
        } else {
            // goto('/404');
        }
        
    })
</script>

<div class="header">
    <img src="/logo-text.svg" alt="BiasLens Logo" class="logo"/>
    <h2>Images from {newsOrg.name}</h2>
    <h3>Click on an image to learn more.</h3>
    <button on:click={() =>  (goto('/')) } >Go Back</button>
</div>
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

<style lang="scss">

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
    }

    :global(.previous-button), :global(.next-button) {
        cursor: pointer;
    }

    .logo {
        width: 50%;
        height: auto;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1em;
    }

    button {
        background-color: #00aeef;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        width: 100px;
        height: 50px;
        font-size: 1.2em;
        cursor: pointer;
        transition: 0.1s ease-in-out;
    }
    button:hover {
        background-color: #00a0e0;
    }

    h2 {
        margin: 0;
        text-align: center;
        font-size: 3em;
        font-weight: 100;
    }
    h3 {
        margin: 0;
        text-align: center;
        font-size: 1.5em;
        font-weight: 100;
    }

    @media only screen and (max-width: 600px) {
        h2 {
            font-size: 2em;
        }
        h3 {
            font-size: 1em;
        }
        .logo {
            width: 80%;
        }
    }
</style>
