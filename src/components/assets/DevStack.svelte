<script>
    import TechStackBg from "../svg/TechStackBg.svelte";
</script>

<div class="stack">
    <div class="content w-full flex flex-col justify-center items-center gap-4">
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

            @media (max-width: 500px) {
                padding: 0 2rem;
            }

            p {
                text-align: center;
                font-size: 2rem;
                font-weight: 300;

                @media (max-width: 500px) {
                    font-size: 1.5rem;
                }
            }
            img {
                width: 70%;
                height: auto;

                @media (max-width: 1024px) {
                    max-height: 70%;
                    width: auto;
                }

                @media (max-width: 500px) {
                    max-height: 50%;
                    width: auto;
                }
                /* @media (max-width: 1024px) {
                    width: 60%;
                    height: auto;
                } */
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
