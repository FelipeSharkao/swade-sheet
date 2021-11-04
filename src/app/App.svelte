<script lang="ts">
  import { parry, toughness } from '../data/stats'

  import Attributes from './Attributes.svelte'
  import Race from './Race.svelte'
  import Skills from './Skills.svelte'
</script>

<Race />

<Attributes />
<h4>Parry: <b>{$parry}</b>{'  |  '}Toghness: <b>{$toughness}</b></h4>
<Skills />
