<script>
    import TechStackBg from "../svg/TechStackBg.svelte";
</script>

<div class="stack">
    <div class="content w-full flex flex-col justify-start items-center gap-4">
        <p>My primary skills:</p>
        <img src="/tech-stack.png" alt="My primary tech stack" />
    </div>
    <div class="bg">
        <TechStackBg />
    </div>
</div>

<style lang="postcss">
    .stack {
        position: relative;
        height: 100%;
        /* background: url("/Rectangle 22.svg");
        background-position: top;
        background-size: fill;
        background-repeat: no-repeat    ; */
        .content {
            position: relative;
            z-index: 2;
            height: 100%;
            padding-top: 2rem;

            p {
                text-align: center;
                font-size: 2rem;
                font-weight: 300;
            }
            img {
                width: 70%;
                height: auto;
            }
        }
        .bg {
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            right: 0;
            z-index: 1;
        }
    }
</style>
