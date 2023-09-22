<script lang="ts">
  import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte'
  import AutoHeight from 'embla-carousel-auto-height'
  import AutoPlay from 'embla-carousel-autoplay'

  export let dots: number
  export let arrows = true

  let slider: EmblaCarouselType

  let options = {
    loop: true
  }

  let plugins = [AutoHeight(), AutoPlay({ playOnInit: true, stopOnMouseEnter: true })]

  function prev() {
    slider.scrollPrev()
  }

  function next() {
    slider.scrollNext()
  }

  function go(i: number) {
    slider.scrollTo(i, false)
  }
</script>

<section>
  <div class="slider" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={(event) => slider = event.detail}>
    <div class="slider__container">
      <slot />
    </div>
  </div>

  {#if arrows}
  <nav class="arrows">
    <button on:click={prev} class="button--none arrow arrow--prev">
      <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.64 30.3588L11.32 17.2004L29.64 4.0421L24 0L0 17.2004L24 34.4009L29.64 30.3588Z" fill="currentColor"/></svg>
    </button>
    <button on:click={next} class="button--none arrow arrow--next">
      <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 30.4663L18.32 17.308L0 4.14965L5.64 0.107544L29.64 17.308L5.64 34.5084L0 30.4663Z" fill="currentColor"/></svg>
    </button>
  </nav>
  {/if}
</section>

{#if dots}
<nav class="dots">
  {#each [...Array(dots).keys()] as _, i}
  <button on:click={() => go(i)} class="dot">{i}</button>
  {/each}
</nav>
{/if}

<style lang="scss">
  section {
    position: relative;
  }

  .slider {
    overflow: hidden;
    cursor: ew-resize;
  }

  .slider__container {
    display: flex;

    :global(.slider__slide) {
      flex: 0 0 100%;  
      min-width: 0;
      padding: 0 15vw;
    }
  }

  .arrows {

    .arrow {
      position: absolute;
      top: 50%;
      left: 0;

      &.arrow--next {
        left: auto;
        right: 0;
      }
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: $base * $scale / 2;

    .dot {
      font-size: 0;
      padding: $base / 3;
    }
  }
</style>
