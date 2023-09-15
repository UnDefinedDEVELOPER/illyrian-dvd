<script lang="ts">
  import { onMount } from "svelte";

  export let bg: string;
  export let color: string;
  export let text: string;
  export let radius: string | undefined;
  export let bold: boolean | undefined;
  export let uppercase: boolean | undefined;
  export let submit: boolean;
  export let href: string;
</script>

{#if text == "Download CV"}
  <a
    {href}
    class="w-full h-auto"
    style="--bg-color: {bg}; --color: {color}; --radius: {radius}"
    target="_blank"
  >
    <button
      type={submit ? "submit" : "button"}
      class="{bold ? 'bold' : ''} {uppercase ? 'uppercase' : ''}"
    >
      {text}
    </button>
  </a>
{:else}
  <a
    {href}
    class="w-full h-auto"
    style="--bg-color: {bg}; --color: {color}; --radius: {radius}"
  >
    <button
      type={submit ? "submit" : "button"}
      class="{bold ? 'bold' : ''} {uppercase ? 'uppercase' : ''}"
    >
      {#if text == ""}
        <slot />
      {:else}
        {text}
      {/if}
    </button>
  </a>
{/if}

<!-- style="background-color: {bg}; color: {color}; border-radius: {radius}" -->
<style lang="postcss">
  button {
    padding: 0.675rem 1rem;
    font-size: 1.5em;
    width: 100%;
    background-color: var(--bg-color);
    color: var(--color);
    border-radius: var(--radius);

    transition: 0.3s all ease-in;

    &:hover {
      background-color: var(--color);
      color: var(--bg-color);
    }

    @media (max-width: 1440px) {
      padding: 0.5em;
      font-size: 1.25em;
    }
    @media (max-width: 768px) {
      padding: 0.5em;
      font-size: 1.175em;
    }
    @media (max-width: 300px) {
      padding: 0.5em;
      font-size: 1em;
    }
  }

  .bold {
    font-weight: 800;
    font-size: 1.75em;

    @media (max-width: 1440px) {
      font-size: 1.25em;
    }
  }

  .uppercase {
    text-transform: uppercase;
  }
</style>
