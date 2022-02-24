<script lang="ts">
  import { parry, toughness } from '../data/stats'

  import Attributes from './Attributes.svelte'
  import Skills from './Skills.svelte'
</script>

<main class="container">
  <h4>Parry: <b>{$parry}</b>{'  |  '}Toghness: <b>{$toughness}</b></h4>
  <div class="grid">
    <Attributes />
    <Skills />
  </div>
</main>
