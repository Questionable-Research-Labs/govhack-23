<svelte:head>
    <title>BiasLens</title>
</svelte:head>

<script lang="ts">
	import { goto } from '$app/navigation';
    import { page } from '$app/stores';
	import { findNewsOrgRows, newsOrgData } from '$lib/data';
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

    onMount(() => {
        // get slug from page store
        slug = $page.params.id;
        console.log(slug);
        let newsOrg = Object.values(newsOrgData).find((x)=>x.slug == slug);
        if (newsOrg) {
            photoList = findNewsOrgRows(newsOrg.name);
        } else {
            // goto('/404');
        }
        
    })
</script>
{#if photoList}
<LightboxGallery  enableImageExpand customization={{lightboxFooterProps: {style: "display: none;"}}} arrowsConfig={{color: "#fff",character: 'hide', enableKeyboardControl: true}} >
    <!-- Layout-->
    <svelte:fragment slot="thumbnail">
        <div class="galleryLayout">
            {#each photoList as image, i}
                <GalleryThumbnail id={i} >
                    <img src={`${HEADSHOT_ROOT}/${image.cropped_image_path}`} class="image-{i}"/>
                </GalleryThumbnail>
            {/each}
        </div>
    </svelte:fragment>
    {#each photoList as image, i}
        <GalleryImage id={i} title="ssss">
            <img src={`${FULL_ROOT}/${image.image_path}`}  class="image-{i}"/>
        </GalleryImage>
    {/each}
</LightboxGallery>
{/if}

<style lang="scss">

    .galleryLayout {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 1em;
        :global(.svelte-lightbox-thumbnail) {
            border-radius: 0.5em;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.5s ease;
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
</style>
