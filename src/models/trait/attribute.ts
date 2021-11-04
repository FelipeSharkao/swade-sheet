import { Readable, Writable, derived, writable } from 'svelte/store'

import type Dice from '../dice'
import Trait from '.'
import type { TraitOptions } from '.'
import { d4 } from '../../utils/dice'

export interface AttributeOptions extends TraitOptions {}

export default class Attribute extends Trait {
  private readonly _attrRaises: Readable<number>
  readonly dice: Writable<Dice>
  readonly initial: Writable<Dice>

  constructor(label: string, options: AttributeOptions = {}) {
    const { initial = d4, dice = initial } = options
    super(label, { ...options, initial })
    this.dice = writable(dice)
    this.initial = writable(initial)

    this._attrRaises = derived(
      [this.dice, this.initial],
      ([$dice, $initial]) => $dice.raises - $initial.raises
    )
  }

  get raises() {
    return this._attrRaises
  }
}
