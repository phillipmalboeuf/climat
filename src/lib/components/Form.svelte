<script lang="ts">
  import type { Entry } from 'contentful'
  import type { TypeFormulaireSkeleton } from '$lib/clients/content_types'
  import Document from './document/Document.svelte'

  export let section: Entry<TypeFormulaireSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<form id={section.fields.id}>
  <h3>{section.fields.titre}</h3>

  <fieldset>
    {#each section.fields.inputs as input}
    <label for="{section.fields.id}_{input.fields.id}" class:full={['Radio', 'Checkbox', 'Textarea'].includes(input.fields.type)}>
      <h6>{input.fields.label}</h6>
      {#if input.fields.description}<Document body={input.fields.description} />{/if}

      {#if input.fields.type === 'Options'}
      <select name={input.fields.id} id="{section.fields.id}_{input.fields.id}">
        {#each input.fields.options as option}
        <option>{option}</option>
        {/each}
      </select>
      {:else if input.fields.type === 'Radio'}
      <fieldset class="options">
        {#each input.fields.options as option}
        <label for="{section.fields.id}_{input.fields.id}_{option.replaceAll(' ', '_')}"><input type="radio" name={input.fields.id} id="{section.fields.id}_{input.fields.id}_{option.replaceAll(' ', '_')}" value={option}> {option}</label>
        {/each}
      </fieldset>
      {:else if input.fields.type === 'Checkbox'}
      <fieldset class="options">
        {#each input.fields.options as option}
        <label for="{section.fields.id}_{input.fields.id}_{option.replaceAll(' ', '_')}"><input type="checkbox" name={input.fields.id} id="{section.fields.id}_{input.fields.id}_{option.replaceAll(' ', '_')}" value={option}> {option}</label>
        {/each}
      </fieldset>
      {:else if input.fields.type === 'Textarea'}
      <textarea name={input.fields.id} id="{section.fields.id}_{input.fields.id}"></textarea>
      {:else}
      <input type="text" name={input.fields.id} id="{section.fields.id}_{input.fields.id}">
      {/if}
    </label>
    {/each}

    <button type="submit">{section.fields.cta}</button>
  </fieldset>
</form>

<style lang="scss">
  form {
    padding: 10vw 20vw;
    margin: (-$gap);
    background-color: $faded_sage;

    @media (max-width: $mobile) { 
      padding: 10vw 10vw;
      margin: (-$mobile_gap);
    }

    fieldset {
      border: none;
      padding: 0;

      display: grid;
      column-gap: $base;
      row-gap: $gap * 1.5;
      grid-template-columns: repeat(2, 1fr);

      @media (max-width: $mobile) { 
        grid-template-columns: repeat(1, 1fr); 
        row-gap: $mobile_gap * 1;
      }
      // grid-template-rows: repeat(4, 1fr);

      label {
        cursor: pointer;

        input,
        textarea,
        select {
          width: 100%;
        }

        textarea {
          height: $gap * 5;
        }

        &.full {
          grid-column-start: 1;
          grid-column-end: 3;

          @media (max-width: $mobile) { 
            grid-column-end: 2;
          }
        }
      }

      &.options {
        row-gap: $base * 0.5;

        > label {
          display: flex;
          align-items: center;
        }
      }
    }

    h3 {
      font-family: $display;
      margin-bottom: ($base * $scale * 4);

      @media (max-width: $mobile) { 
        margin-bottom: ($mobile_base * $mobile_scale * 2);
      }
    }

    h6 {
      font-size: ($base);
      font-weight: normal;
      text-transform: none;
      margin-bottom: $base * 0.75;
    }

    input[type=radio],
    input[type=checkbox] {
      appearance: none;
      -webkit-appearance: none;
      border-radius: 50%;
      background-color: transparent;

      display: inline-block;
      flex-shrink: 0;
      width: 1em;
      height: 1em;
      border: 3px solid $pistachio;

      box-shadow: 0 0 0 1px currentColor;
      margin-right: $base;

      &:checked {
        background-color: currentColor;
      }
    }

    input[type=checkbox] {
      border-radius: 0.1em;
    }

    select {
      appearance: none;
      border: 1px solid;
    }

    button {
      grid-column-start: 1;
      grid-column-end: 3;
      margin-top: ($base * $scale * 2);

      @media (max-width: $mobile) { 
        grid-column-end: 2;
      }
    }
  }
</style>