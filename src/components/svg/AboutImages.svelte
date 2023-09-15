<script>
  let width;
  import { Image } from "astro:assets";
  import MePic from "../../assets/img/me_pic.png";
</script>

<svelte:window bind:innerWidth={width} />

<div class="img flex flex-col justify-center items-center gap-4">
  <!-- <img class="me_pic" src="/me_pic.png" width="420" height="438" /> -->
  <Image src={MePic} alt="A picture of me" width="420" height="438" />
  <!-- {#if width > 1700}
        <img class="logo" src="/full_logo_white.png" width="420" height="216" />
    {/if} -->
</div>

<style lang="postcss">
  .img {
    width: 40%;
    height: 100%;

    @media (min-width: 1441px) {
      min-height: 350px;
    }
    @media (max-width: 1440px) {
      flex-direction: row;
      justify-content: flex-end;
      position: relative;
      width: 100%;
      height: 30%;
    }
    @media (max-width: 320px) {
      height: 20%;
    }

    img.me_pic {
      height: 60%;
      width: max-content;
      border-radius: 110px;
      filter: drop-shadow(-5px 5px 25px rgba(0, 0, 0, 0.5));

      @media (max-width: 1440px) {
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        height: 100%;
        width: max-content;
      }
    }

    img.logo {
      height: max-content;
      width: 80%;

      @media (max-width: 1440px) {
        flex-direction: row;
        width: 40%;
        height: auto;
      }
    }
  }
</style>
