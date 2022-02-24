<svelte:options immutable={true} />

<script lang="ts">
  import { readable, Writable } from 'svelte/store'

  import type Attribute from '../models/trait/attribute'
  import type Dice from '../models/dice'
  import { accum } from '../utils/array'
  import { d4 } from '../utils/dice'

  export let label: string
  export let dice: Writable<Dice | null>
  export let initial: Writable<Dice | null>
  export let attribute: Attribute | undefined = undefined
  export let selectedKey: string | undefined = undefined

  const attrRaises = attribute?.raises ?? readable(null)

  let options: Array<{ dice: Dice; isUnderAttr: boolean }> = []
  $: options = accum(
    ({ dice }) => {
      const nextDice = dice.next
      return {
        dice: nextDice,
        isUnderAttr: $attrRaises != null && $attrRaises >= nextDice.raises,
      }
    },
    Array.from({ length: 4 }),
    [{ dice: $initial ?? d4, isUnderAttr: $attrRaises != null }]
  )
</script>

<tr class:null={$dice == null}>
  {#key selectedKey}
    <td title={attribute?.label}>{label}</td>
    {#each options as opt}
      <td class:under-attr={opt.isUnderAttr}>
        <input
          type="checkbox"
          checked={opt.dice.raises === $dice?.raises}
          on:click={e =>
            ($dice = e.currentTarget.checked ? opt.dice : $initial)}
        />
        {opt.dice}
      </td>
    {/each}
  {/key}
</tr>

<style lang="stylus">
  td
    padding 0.4em
    white-space nowrap

    &.under-attr
      color #0b0
      font-weight bold

  .null
    color #999
    transition .15s ease color

    &:hover
      color #333
</style>
