<script lang="ts">
  import { races, selectRace } from '../data/race'

  import { isInputElement } from '../utils/dom'
  import { isProp } from '../utils/object'

  function onChange({ target }: Event) {
    if (isInputElement(target) && isProp(target.value, races))
      selectRace(races[target.value])
  }
</script>

<select value="human" on:change={onChange}>
  {#each Object.entries(races) as [k, race] (k)}
    <option value={k}>{race.name}</option>
  {/each}
</select>

<style lang="stylus">

</style>
