<script>
    let height;

    console.log(height);
</script>

<svelte:window bind:innerHeight={height} />

<div class="scroll" style="height: {parseInt(0.95 * height)}px;">
    <slot />
</div>

<style lang="postcss">
    .scroll {
        overflow: auto;
        scroll-snap-type: y mandatory;
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
