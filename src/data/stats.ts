import { derived, writable } from 'svelte/store'

import attrs from './attributes'
import skills from './skills'

export const maxAttrPts = writable(5)
export const spentAttrPts = derived(
  Object.values(attrs).map(attr => attr.raises),
  raisesArray => raisesArray.reduce((acc, $raises) => acc + $raises, 0)
)
export const unspentAttrPts = derived(
  [spentAttrPts, maxAttrPts],
  ([$spent, $max]) => $max - $spent
)

export const maxSkillPts = writable(12)
export const spentSkillPts = derived(
  Object.values(skills).map(skill =>
    derived(
      [skill.raises, skill.attribute.raises],
      ([$raises, $attrRaises]) => {
        const $dice = $raises ?? 0
        return (
          ($dice <= $attrRaises
            ? $dice
            : $attrRaises + ($dice - $attrRaises) * 2) +
          (!skill.isCore && $raises != null ? 1 : 0)
        )
      }
    )
  ),
  ptsArray => ptsArray.reduce((acc, $pts) => acc + $pts, 0)
)
export const unspentSkillPts = derived(
  [spentSkillPts, maxSkillPts],
  ([$spent, $max]) => $max - $spent
)

export const armor = writable(0)

export const parryMod = writable(0)
export const toughnessMod = writable(0)

export const parry = derived(
  [skills.fighting.dice, parryMod],
  ([$dice, $parryMod]) => ($dice ? $dice.half : 2) + $parryMod + 2
)

export const toughness = derived(
  [attrs.vig.dice, toughnessMod, armor],
  ([$dice, $toughnessMod, $armor]) => $dice.half + $toughnessMod + $armor + 2
)
