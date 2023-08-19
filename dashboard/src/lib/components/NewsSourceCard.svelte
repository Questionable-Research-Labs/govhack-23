<script lang="ts">
	import { calculateNewsOrgMetadata, type NewsOrgMetadata } from '$lib/data';
    export let source: NewsOrgMetadata;
    import { onMount } from 'svelte';

    const stats = calculateNewsOrgMetadata(source.name);

    // on click send to /site/id 
    function handleClick() {
        window.location.href = `/site/${source.slug}`;
    }
</script>

<div>
    <h1>{source.name}</h1>
    <h2>{stats.leftRightLean.toPrecision(3)}</h2>

    <button on:click={handleClick}>View</button>
</div>


<style lang="scss">
    div {
        background-color: #fff; 
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
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

    @media only screen and (max-width: 600px) {
        div {
            width: 100%;
            height: 100%;
        }
    }


</style>