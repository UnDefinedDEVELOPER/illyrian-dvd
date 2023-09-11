<script>
  let heigth;

  const scroll = () => {
    document.querySelector(".scroll").scrollBy(0, heigth);
    console.log("scrolled");
  };
</script>

<svelte:window bind:innerHeight={heigth} />

<button on:click={scroll}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
  >
    <circle cx="35" cy="35" r="35" fill="#010101" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M49.4034 29.0821L36.4403 44.2996C35.6449 45.2335 34.3551 45.2335 33.5597 44.2996L20.5966 29.0821C19.8011 28.1482 19.8011 26.6342 20.5966 25.7004C21.3921 24.7665 22.6818 24.7665 23.4773 25.7004L35 39.2271L46.5227 25.7004C47.3182 24.7665 48.6079 24.7665 49.4034 25.7004C50.1989 26.6342 50.1989 28.1482 49.4034 29.0821Z"
      fill="white"
    />
  </svg>
</button>

<style>
  svg {
    @media (max-width: 1024px) {
      width: 60px;
      height: 60px;
    }
    @media (max-width: 767px) {
      width: 50px;
      height: 50px;
    }
  }
</style>
