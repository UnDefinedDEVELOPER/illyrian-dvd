<script>
    let height;
    let width;
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />

<!-- <div
    class="content"
    style="{width < 1001
        ? `height: ${parseInt(height - 64)}px;`
        : `height: ${parseInt(height - 66)}px;`} 
        {width < 501
        ? `height: ${parseInt(height - 62)}px;`
        : `height: ${parseInt(height - 66)}px;`}"
> -->
<div class="content" style="height: {parseInt(height)}px">
    <slot />
</div>

<style lang="postcss">
    .content {
        /* overflow: auto; */
        scroll-behavior: smooth;
        position: relative;
        z-index: 1;

        & > section {
            scroll-snap-align: start;
            scroll-snap-stop: always;
            overflow: hidden;
            z-index: 3;
        }

        &::-webkit-scrollbar {
            width: 10px;
            opacity: 0.3;

            @media (max-width: 1000px) {
                width: 3px;
            }
        }

        &::-webkit-scrollbar-track {
            background-color: var(--primary);
            border-radius: 1rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: var(--secondary);
            border-radius: 1rem;
        }

        & > img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            z-index: 2;
        }
    }
</style>
