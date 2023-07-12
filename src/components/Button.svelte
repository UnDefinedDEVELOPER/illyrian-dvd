<script lang="ts">
    export let bg: string;
    export let color: string;
    export let text: string;
    export let radius: string | undefined;
    export let bold: boolean | undefined;
    export let uppercase: boolean | undefined;

    console.log(bg, color, text, bold, uppercase);
</script>

<div
    class="w-full h-full"
    style="--bg-color: {bg}; --color: {color}; --radius: {radius}"
>
    <button class="{bold ? 'bold' : ''} {uppercase ? 'uppercase' : ''}"
        >{text}</button
    >
</div>

<!-- style="background-color: {bg}; color: {color}; border-radius: {radius}" -->
<style define:vars={{ bg, color }}>
    button {
        padding: 0.675rem 1rem;
        font-size: 1.5rem;
        width: 100%;
        background-color: var(--bg-color);
        color: var(--color);
        border-radius: var(--radius);

        transition: 0.3s all ease-in;

        &:hover {
            background-color: var(--color);
            color: var(--bg-color);
        }
    }

    .bold {
        font-weight: 800;
        font-size: 1.75rem;
    }

    .uppercase {
        text-transform: uppercase;
    }
</style>
