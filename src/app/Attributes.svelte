<script lang="ts">
  import attrs from '../data/attributes'
  import { unspentAttrPts } from '../data/stats'
  
  import Trait from './Trait.svelte'
</script>

<section>
  <h2>Attributes</h2>

  <h4>Attribute poits: <b>{$unspentAttrPts}</b></h4>
  {#each Object.values(attrs) as item}
    <Trait label={item.label} dice={item.dice} initial={item.initial} />
  {/each}
</section>
