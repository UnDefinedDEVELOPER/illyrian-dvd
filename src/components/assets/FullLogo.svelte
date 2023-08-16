<script lang="ts">
    export let width: string;
    export let height: string;
    export let color: string;

    let windowWidth: number;
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if windowWidth > 767}
    <img
        class="logo"
        src="/full_logo_{color}.png"
        {width}
        {height}
        alt="logotype"
    />
{/if}

<style>
    img {
        height: 100%;
        width: auto;
    }
</style>
