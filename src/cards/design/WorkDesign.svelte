<script>
  import Button from "../../components/client/Button.svelte";
  import CaroNav from "../../components/client/CaroNav.svelte";

  let width;
</script>

<svelte:window bind:innerWidth={width} />

<div id="work-design">
  <div class="work-content flex flex-col">
    <div class="title flex justify-between w-full">
      <strong><h1>PORTFOLIO</h1></strong>
      <CaroNav client:load />
    </div>
    <div class="scroller">
      <div class="projects flex justify-center items-center">
        <div class="project project1">
          <!-- <div class="col col-1">
            <img src="/chivalore-logo.png" alt="Chivalore logo" />
            <img src="/journal-logo.png" alt="Journal logo" />
          </div>
          <div class="col col-2">
            <img src="/cool-logo.png" alt="cool-logo" />
          </div>
          <div class="col col-3">
            <img src="/imedia-concept.png" alt="imedia-concept" />
            <img src="/icode-concept.png" alt="icode-concept" />
            <img src="/istudio-concept.png" alt="istudio-concept" />
          </div> -->
          {#if width > 1024}
            <img src="/design/project1.png" alt="project1" />
          {:else if width > 600}
            <img src="/design/project1-md.png" alt="project1" />
          {:else}
            <img src="/design/project1-sm.png" alt="project1" />
          {/if}
        </div>
        <div class="project project2">
          {#if width > 1024}
            <img src="/design/project2.png" alt="project2" />
          {:else if width > 600}
            <img src="/design/project2-md.png" alt="project2" />
          {:else}
            <img src="/design/project2-sm.png" alt="project2" />
          {/if}
          <!-- <div class="col col-1">
              <img src="/poster.png" alt="poster" />
              {#if width <= 1024}
                <img src="/screenshot.png" alt="screenshot" />
              {/if}
          </div>
          <div class="col col-2">
            <img src="/thumb-1.png" alt="thumb-1" />
            <img src="/thumb-2.png" alt="thumb-2" />
            {#if width <= 1024}
              <img src="/thumb-3.png" alt="thumb-3" />
            {/if}
          </div>
          {#if width > 1024}
            <div class="col col-3">
              <img src="/thumb-3.png" alt="thumb-3" />
              <img src="/screenshot.png" alt="screenshot" />
            </div>
          {/if} -->
        </div>
        <div class="project project3">
          {#if width > 1024}
            <img src="/design/project3.png" alt="project3" />
          {:else if width > 600}
            <img src="/design/project3-md.png" alt="project3" />
          {:else}
            <img src="/design/project3-sm.png" alt="project3" />
          {/if}
          <!-- <div class="col col-1">
            <img src="/project3.png" alt="project3" />
          </div>
          <div class="col col-2">
            <img src="/project2.png" alt="thumb-1" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="bg">
    <svg
      width="2008"
      height="482"
      viewBox="0 0 2008 482"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="1004" cy="241" rx="1004" ry="241" fill="#F2E2BD" />
    </svg>
  </div> -->
</div>

<style lang="postcss">
  #work-design {
    height: 100%;
    width: 100%;
    /* background-image: url('/design-work-bg.svg');
    background-size: contain;
    background-repeat: no-repeat; */
    background: linear-gradient(0deg, #f2e2bd -100%, #161411 80%);
    /* box-shadow: inset 200px 0px 200px #726148, inset -200px -200px 200px #726148; */
    position: relative;

    .bg {
      position: absolute;
      width: 200%;
      height: auto;
      left: -50%;
      bottom: -20vw;
      filter: blur(200px);
      z-index: 1;

      @media (max-width: 1024px) {
        bottom: 0;
        filter: blur(100px);
      }
      @media (max-width: 500px) {
        bottom: 0vw;
        filter: blur(50px);
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    .work-content {
      padding: 6rem 4rem;
      color: #fff;
      height: 100%;
      position: relative;
      z-index: 2;

      @media (max-width: 767px) {
        padding: 6rem 3rem;
      }

      @media (max-width: 500px) {
        padding: 6rem 2rem;
      }

      .title {
        padding: 0 4.5rem;

        @media (max-width: 1024px) {
          flex-direction: column;
          align-items: center;
          padding: 0;
        }

        strong h1 {
          font-size: 4rem;
          font-weight: 800;

          @media (max-width: 1024px) {
            font-size: 3rem;
          }
          /* @media (max-width: 767px) {
          font-size: 2.5rem;
        }*/
          @media (max-width: 320px) {
            text-align: center;
            padding: 0;
            padding-top: 2rem;
          }
        }
      }

      .scroller {
        flex-grow: 1;
        width: 100%;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        background-color: #fff;
        border-radius: 3rem;

        @media (max-width: 1024px) {
          border-radius: 3rem;
        }
        @media (max-width: 500px) {
          border-radius: 2rem;
        }

        .projects {
          height: 100%;
          width: 400%;
          display: flex;
          justify-content: space-evenly;

          .project {
            width: 30%;
            flex-grow: 1;
            scroll-snap-align: center;
            scroll-snap-stop: always;
            margin: 0 auto;
            overflow: hidden;

            max-width: 80vw;
            height: 100%;

            display: flex;
            align-items: center;

            @media (max-width: 1024px) {
              padding: 2rem;
            }

            img {
              margin: auto;
              max-height: 100%;
            }

            /* @media (max-width: 1500px) {
              max-width: 1100px;
            }
            @media (max-width: 1300px) {
              max-width: 1000px;
            }
            @media (max-width: 1200px) {
              max-width: 900px;
            }
            @media (max-width: 1100px) {
              max-width: 800px;
            }
            @media (max-width: 1024px) {
              max-width: 80vw;
            } */

            /* display: grid;
            grid-template-columns: repeat(3, auto);
            justify-content: center;
            gap: 1rem;
            &.project1 {
              gap: 1rem;
              grid-template-columns: repeat(3, 1fr);
              @media (max-width: 1024px) {
                grid-template-columns: repeat(2, 1fr);
                row-gap: 4rem;
                column-gap: 2rem;

                .col-1 {
                  justify-content: end;
                }

                .col-2 {
                  justify-content: start;
                }

                .col-3 {
                  grid-column-end: span 2;
                  grid-template-columns: repeat(3, 1fr);
                }
              }
            }
            &.project2 {
              /*grid-template-columns: repeat(3, auto);

              @media (max-width: 1024px) {
                max-height: 100%;
                grid-template-columns: repeat(2, auto);
                grid-template-rows: repeat(2, 20%);
                grid-column: ;
              }*/

            /*.col-1 {
                grid-template-rows: 100%;
                justify-content: end;
              }
              .col-2 {
                grid-template-rows: repeat(2, 45%);
                align-content: center;
              }
              .col-3 {
                grid-column-end: span 2;
                grid-template-columns: repeat(2, 50%);
              }
            }
            &.project3 {
              gap: 1rem;
              grid-template-columns: repeat(2, 1fr);
            }

            .col {
              height: 100%;
              width: 100%;
              display: grid;
              justify-content: center;
              align-items: center;
              gap: 1rem;

              img {
                height: 100%;
              }
            } */
          }
        }

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
</style>
