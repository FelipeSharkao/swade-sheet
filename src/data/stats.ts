import { derived, writable } from 'svelte/store'

import attrs from './attributes'

export const maxAttrPts = writable(5)
export const spentAttrPts = derived(
  Object.values(attrs).map(attr => attr.raises),
  raisesArray => raisesArray.reduce((acc, $raises) => acc + $raises, 0)
)
export const unspentAttrPts = derived(
  [spentAttrPts, maxAttrPts],
  ([$spent, $max]) => $max - $spent
)