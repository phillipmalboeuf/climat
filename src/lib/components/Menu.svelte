<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import type { TypeLienSkeleton } from '$lib/clients/content_types'
  import type { Entry } from 'contentful'

  import Logo from './Logo.svelte'
  import Links from './Links.svelte'

  export let liens: Entry<TypeLienSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[]

  let visible = false
</script>

<div>
  <button class="button--none" on:click={() => visible = true}>
    <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 17.0104H34V14.1753H0V17.0104ZM0 9.92274H34V7.08767H0V9.92274ZM0 0V2.83507H34V0H0Z" fill="currentColor"/></svg>
  </button>

  {#if visible}
  <nav transition:fly={{ y: -100 }}>
    <header>
      <a href="/">
        <Logo />
      </a>

      <button class="button--none" on:click={() => visible = false}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 2.51786L22.4821 0L12.5 9.98214L2.51786 0L0 2.51786L9.98214 12.5L0 22.4821L2.51786 25L12.5 15.0179L22.4821 25L25 22.4821L15.0179 12.5L25 2.51786Z" fill="currentColor"/></svg>
      </button>
    </header>

    <Links {liens} on:click={() => visible = false} />
  </nav>
  {/if}
</div>

<style lang="scss">
  div {
    @media (min-width: $mobile) { display: none; }
  }

  nav {
    position: fixed;
    z-index: 40;
    inset: 0;
    width: 100vw;
    height: 100vh;

    color: $black;
    background-color: $banana;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: $base;

      > a {
        :global(svg) {
          border: 1px solid;
        }
      }
    }

    :global(> a) {
      display: block;
      padding: $base;
      font-size: $gap;
      border-top: 1px solid;

      &:last-child {
        border-bottom: 1px solid;
      }
    }

    :global(> a.button) {
      border-radius: 0;
      color: $banana;
      background: $black;
    }
  }
</style>