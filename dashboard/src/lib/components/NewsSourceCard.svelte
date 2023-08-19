<script lang="ts">
    import type { NewsSource } from "$lib/types";
    export let source: NewsSource;
    import { onMount } from 'svelte';

    // on click send to /site/id 
    function handleClick() {
        window.location.href = `/site/${source.id}`;
    }
</script>

<div>
    <h1>{source.name}</h1>
    <h2>{source.value}</h2>

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
    }
</style>