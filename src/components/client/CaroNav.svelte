<script is:inline>
  const scrollNext = () => {
    const scroller = document.querySelector(".scroller");
    const width = scroller.offsetWidth;

    scroller.scrollBy(width, 0);
  };

  const scrollPrev = () => {
    const scroller = document.querySelector(".scroller");
    const width = scroller.offsetWidth * -1;

    scroller.scrollBy(width, 0);
  };
</script>

<div class="caro-nav flex gap-4">
  <button on:click={scrollPrev}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="30"
      viewBox="0 0 20 30"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.9179 29.4034L0.700369 16.4403C-0.233457 15.6449 -0.233457 14.3551 0.70037 13.5597L15.9179 0.596611C16.8518 -0.198866 18.3658 -0.198866 19.2996 0.596611C20.2335 1.39209 20.2335 2.68181 19.2996 3.47729L5.7729 15L19.2996 26.5227C20.2335 27.3182 20.2335 28.6079 19.2996 29.4034C18.3658 30.1989 16.8518 30.1989 15.9179 29.4034Z"
        fill="white"
      />
    </svg></button
  >
  <button on:click={scrollNext}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="30"
      viewBox="0 0 20 30"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.08205 0.596608L19.2996 13.5597C20.2335 14.3551 20.2335 15.6449 19.2996 16.4403L4.08205 29.4034C3.14823 30.1989 1.6342 30.1989 0.700371 29.4034C-0.233455 28.6079 -0.233455 27.3182 0.700371 26.5227L14.2271 15L0.70037 3.47729C-0.233456 2.68181 -0.233456 1.39209 0.70037 0.596608C1.6342 -0.198869 3.14823 -0.198869 4.08205 0.596608Z"
        fill="white"
      />
    </svg></button
  >
</div>

<style lang="postcss">
  button {
    border-bottom: 5px solid rgba(255, 255, 255, 0);
    transition: 0.2s all ease-out;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
      height: 50px;
      width: 50px;
      svg {
        width: 15px;
        height: 25px;
      }
    }

    @media (max-width: 500px) {
      height: 50px;
      width: 50px;
      svg {
        width: 15px;
        height: 25px;
      }
    }

    &:hover {
      border-bottom: 5px solid rgba(255, 255, 255, 1);
    }
  }
</style>
