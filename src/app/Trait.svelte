<svelte:options immutable={true} />

<script lang="ts">
  import type {  Writable } from 'svelte/store'

  import type Dice from '../models/dice'
  import { accum } from '../utils/array'

  export let label: string
  export let dice: Writable<Dice>
  export let initial: Writable<Dice>
  export let selectedKey: string | undefined = undefined

  let options: Dice[] = []
  $: options = accum(dice => dice.next, Array.from({ length: 4 }), [$initial])
</script>

<tr>
  {#key selectedKey}
    <td>{label}</td>
    {#each options as opt}
      <td>
        <input
          type="checkbox"
          checked={opt.raises === $dice?.raises}
          on:click={e => ($dice = e.currentTarget.checked ? opt : $initial)}
        />
        {opt}
      </td>
    {/each}
  {/key}
</tr>

<style lang="stylus">
  td
    padding 0.4em
</style>
