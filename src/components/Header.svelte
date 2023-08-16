<script lang="ts">
    let width: number;
    let showMenu = false;
</script>

<svelte:window bind:innerWidth={width} />

<header
    style={showMenu
        ? "height: 100%; background-color: #161411"
        : "background-color: linear-gradient(rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%);"}
>
    <h1>ILLYRIAN</h1>
    {#if width > 767}
        <nav>
            <a href="/development">DEV</a>
            <a href="/video">VIDEO</a>
            <a href="/design">DESIGN</a>
        </nav>
        <div class="static-nav">
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
        </div>
    {:else}
        <button
            on:click={() => {
                showMenu = !showMenu;
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                /></svg
            >
        </button>
    {/if}

    <div class="blur" style={showMenu ? "backdrop-filter: blur(40px);" : ""} />
</header>

<style lang="postcss">
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        width: 100%;
        margin: auto;
        padding: 1rem 5% 1rem 5%;
        position: absolute;
        color: #fff;
        z-index: 100;
        overflow: hidden;
        transition: 0.4s all ease-in-out;

        @media (min-width: 1440px) {
            height: 80px;
        }

        .blur {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(70px);
        }

        /* h1,
        a {
            text-shadow: 1px 1px 5px #000, 1px 1px 5px #000, 1px 1px 5px #000;
        } */

        h1 {
            font-family: "Righteous", sans-serif;
            font-size: 2rem;
            font-weight: 400;
            z-index: 200;
        }

        button {
            z-index: 200;
            svg {
                height: 25px;
                width: auto;
                fill: #fff;
            }
        }

        nav,
        .static-nav {
            display: flex;
            gap: 1.5rem;
            z-index: 200;

            a {
                font-size: 1.25rem;
                font-weight: 300;
                transition: 0.25s all ease-in;
                /* background-color: var(--primary); */

                &:hover {
                    color: var(--primary);
                    background-color: #fff;
                }
            }
        }
    }
</style>
