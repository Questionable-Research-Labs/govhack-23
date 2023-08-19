<svelte:head>
    <title>BiasLens</title>
</svelte:head>

<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let slug: string;

    onMount(() => {
        // get slug from page store
        slug = $page.params.slug;
        console.log();
    })
</script>