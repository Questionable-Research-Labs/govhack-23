<script lang="ts">
    import type { NewsSource } from "$lib/types";
    export let source: NewsSource;
    import { onMount } from 'svelte';

</script>

<div>
    <h1>{source.name}</h1>
    <h1>{source.value}</h1>
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
        justify-content: center;
    }
</style>