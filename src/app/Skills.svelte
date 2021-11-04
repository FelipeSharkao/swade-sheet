<script lang="ts">
  import skills from '../data/skills'
  import { unspentSkillPts } from '../data/stats'
  import Trait from './Trait.svelte'
</script>

<section>
  <h2>Skills</h2>
  <h4>Skill poits: <b>{$unspentSkillPts}</b></h4>
  {#each Object.values(skills) as item}
    <Trait
      label={item.label}
      dice={item.dice}
      initial={item.initial}
      attribute={item.attribute}
    />
  {/each}
</section>

<style lang="stylus"></style>
