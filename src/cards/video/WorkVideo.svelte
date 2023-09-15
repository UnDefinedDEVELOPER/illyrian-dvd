<script>
  import Button from "../../components/client/Button.svelte";
  import CaroNav from "../../components/client/CaroNav.svelte";
  let tab = 1;
</script>

<div id="work-card">
  <div
    class="work-content flex flex-col align-center"
    style="{tab == 1
      ? "background-image: url('/tab-1.svg'); --color: #fff;"
      : ''} 
      {tab == 2 ? "background-image: url('/tab-2.svg'); --color: #000;" : ''}
      {tab == 3 ? "background-image: url('/tab-3.svg'); --color: #fff;" : ''}"
  >
    <nav class="flex gap-4 justify-center">
      <button
        on:click={() => {
          tab = 1;
        }}
        class={tab == 1 ? "active" : ""}>Whiteboard animations</button
      >
      <button
        on:click={() => {
          tab = 2;
        }}
        class={tab == 2 ? "active" : ""}>Motion graphics</button
      >
      <button
        on:click={() => {
          tab = 3;
        }}
        class={tab == 3 ? "active" : ""}>Video editing</button
      >
    </nav>
    {#if tab == 1}
      <div
        class="hero gap-8 flex self-center justify-self-center justify-center"
      >
        <div class="text gap-8 flex flex-col justify-center">
          <h1>An amazing medium<br />of conveying ideas.</h1>
          <p>
            Ideal for a video essay, self-help, philosophy & psychology content. <br
            />
            <strong>You name it - I animate it!</strong>
          </p>
        </div>
        <div class="img flex content-center justify-center gap-4">
          <img src="/tab-1/1.png" alt="example-1" />
          <img src="/tab-1/2.png" alt="example-2" />
          <img src="/tab-1/3.png" alt="example-3" />
          <img src="/tab-1/4.png" alt="example-4" />
        </div>
      </div>
      <footer class="flex justify-between">
        <div class="icons flex items-center gap-6">
          <img src="/videoscribe.png" alt="videoscribe" />
          <img src="/premiere.png" alt="premiere" />
          <img src="/illustrator.png" alt="illustrator" />
          <img src="/figma.png" alt="figma" />
        </div>
        <div class="buttons flex gap-2 items-center justify-center">
          <div class="cta-button">
            <Button
              bg="#000"
              color="#fff"
              text="Contact"
              radius="20px"
              uppercase={false}
              submit={false}
              href="/#contact-card"
              bold={false}
            />
          </div>
          <div class="cta-button">
            <Button
              bg="#000"
              color="#fff"
              text="Watch example"
              radius="20px"
              uppercase={false}
              submit={false}
              href="https://www.youtube.com/watch?v=CIAgfY0fi08"
              bold={false}
            />
          </div>
        </div>
      </footer>
    {/if}
    {#if tab == 2}
      <div
        class="hero gap-8 flex self-center justify-self-center justify-center"
      >
        <div class="text gap-8 flex flex-col justify-center">
          <h1>Creativity in the<br />flavor of professionalism!</h1>
          <p>
            Promote your product, visually identify your brand and share<br
            />your thoughts.<br />
            <strong>Do it with graphics in motion!</strong>
          </p>
        </div>
        <div class="img flex content-center justify-center gap-4">
          <img src="/tab-2/1.png" alt="example-1" />
          <img src="/tab-2/2.png" alt="example-2" />
          <img src="/tab-2/3.png" alt="example-3" />
          <img src="/tab-2/4.png" alt="example-4" />
        </div>
      </div>
      <footer class="flex justify-between">
        <div class="icons flex items-center gap-6">
          <img src="/fx.png" alt="fx" />
          <img src="/premiere.png" alt="premiere" />
          <img src="/photoshop.png" alt="photoshop" />
        </div>
        <div class="buttons flex gap-2 items-center justify-center">
          <div class="cta-button">
            <Button
              bg="#000"
              color="#fff"
              text="Contact"
              radius="20px"
              uppercase={false}
              submit={false}
              href="/#contact-card"
              bold={false}
            />
          </div>
          <div class="cta-button">
            <Button
              bg="#000"
              color="#fff"
              text="Watch example"
              radius="20px"
              uppercase={false}
              submit={false}
              href="https://www.youtube.com/watch?v=b4i6EpmaMe4"
              bold={false}
            />
          </div>
        </div>
      </footer>
    {/if}
    {#if tab == 3}
      <div
        class="hero gap-8 flex self-center justify-self-center justify-center"
      >
        <div class="text gap-8 flex flex-col justify-center">
          <h1>Turn good content<br />into perfect!</h1>
          <p>
            Tell a story, win an audience and make content speed through time.<br
            />
            <strong>That's the essence of editing!</strong>
          </p>
        </div>
        <div class="img flex content-center justify-center gap-4">
          <img src="/tab-3/1.png" alt="example-1" />
          <img src="/tab-3/2.png" alt="example-2" />
          <img src="/tab-3/3.png" alt="example-3" />
          <img src="/tab-3/4.png" alt="example-4" />
        </div>
      </div>
      <footer class="flex justify-between">
        <div class="icons flex items-center gap-6">
          <img src="/premiere.png" alt="premiere" />
          <img src="/photoshop.png" alt="photoshop" />
        </div>
        <div class="buttons flex gap-2 items-center justify-center">
          <div class="cta-button">
            <Button
              bg="#000"
              color="#fff"
              text="Contact"
              radius="20px"
              uppercase={false}
              submit={false}
              href="/#contact-card"
              bold={false}
            />
          </div>
          <!-- <div class="cta-button">
            <Button
              bg="#000"
              color="#fff"
              text="Watch example"
              radius="20px"
              uppercase={false}
              submit={false}
               href="https://www.youtube.com/watch?v=b4i6EpmaMe4"
              bold={false}
              
            />
          </div> -->
        </div>
      </footer>
    {/if}
  </div>
</div>

<style lang="postcss">
  #work-card {
    width: 100%;
    height: 100%;
    background-color: #fff;
    .work-content {
      width: 100%;
      height: 100%;
      padding-top: 4rem;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: 0.5s background ease-in-out;
      nav {
        @media (max-width: 500px) {
          width: 90%;
          margin: 0 auto;
          gap: 2rem;
        }

        @media (max-width: 320px) {
          flex-direction: column;
          gap: 0.5rem;
        }

        button {
          padding: 0.5rem 1.25rem;
          border-radius: 0px;
          color: var(--color);
          border-bottom: 5px solid var(--color);
          font-size: 1.25rem;
          font-weight: 500;
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0);
          transition: 0.3s all ease-in-out;
          /* transition: 0.3s background-color ease-in-out;
          transition: 0.5s color ease-in-out; */

          @media (max-width: 1400px) {
            font-size: 1.25rem;
          }
          @media (max-width: 1024px) {
            font-size: 1rem;
          }
          @media (max-width: 767px) {
            font-size: 0.875rem;
          }
          @media (max-width: 500px) {
            width: 100%;
          }

          &:hover {
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
          }

          &.active {
            background-color: rgba(0, 0, 0, 1);
            color: #fff;
            border-radius: 20px;
            border-bottom: none;
            @media (max-width: 500px) {
              border-radius: 10px;
            }
          }
        }
      }
      .hero {
        padding: 2rem 4rem;
        color: var(--color);
        flex-grow: 1;

        @media (max-width: 1024px) {
          gap: 0.5rem;
          padding: 2rem;
        }

        @media (max-width: 767px) {
          flex-direction: column;
          text-align: center;
          gap: 2rem;
        }

        @media (max-width: 320px) {
          padding-bottom: 4rem;
        }

        .text {
          width: auto;
          max-width: 600px;

          h1 {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: normal;

            @media (max-width: 1400px) {
              font-size: 2rem;
            }
            @media (max-width: 1200px) {
              font-size: 1.75rem;
            }
          }

          p {
            font-size: 1.75rem;
            font-weight: 300;
            line-height: 1.6;

            @media (max-width: 1400px) {
              font-size: 1.675rem;
            }
            @media (max-width: 1200px) {
              font-size: 1.5rem;
            }
            @media (max-width: 767px) {
              max-width: 70%;
              margin: 0 auto;
            }
            @media (max-width: 500px) {
              max-width: 90%;
              margin: 0 auto;
            }

            strong {
              font-weight: 700;
            }
          }
        }

        .img {
          width: auto;
          max-width: 50%;
          flex-wrap: wrap;

          @media (max-width: 1200px) {
            max-width: 60%;
          }

          @media (max-width: 767px) {
            align-self: center;
            height: auto;
            max-width: 80%;
          }

          img {
            max-width: 280px;
            width: 45%;
            height: fit-content;

            @media (max-width: 1400px) {
              width: 45%;
            }
          }
        }
      }
      footer {
        background-color: #fff;
        height: 200px;
        box-shadow: inset 0px -20px 50px rgba(0, 0, 0, 0.2);
        padding: 2rem 6rem;

        .cta-button {
          width: 12rem;
        }

        @media (max-width: 1400px) {
          padding: 2rem 4rem;
        }
        @media (max-width: 1200px) {
          padding: 2rem;
        }
        @media (max-width: 767px) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;

          .buttons {
            height: 40%;
            width: 100%;

            .cta-button {
              width: 50%;
            }
          }
        }
        @media (max-width: 500px) {
          height: 160px;
          justify-content: space-evenly;

          .buttons {
            width: 100%;
            height: auto;

            .cta-button {
              width: 50%;
            }
          }
        }

        .icons {
          height: 100%;
          @media (max-width: 1200px) {
            gap: 0.5rem;
          }
          @media (max-width: 767px) {
            height: fit-content;
          }

          img {
            height: 70%;
            width: fit-content;

            @media (max-width: 1400px) {
              height: 60%;
            }
            @media (max-width: 1200px) {
              height: 50%;
            }
            @media (max-width: 767px) {
              height: 80%;
            }
          }
        }
      }
    }
  }
</style>
