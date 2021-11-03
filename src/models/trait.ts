import { Readable, Writable, derived, writable } from 'svelte/store'
import { d4 } from '../utils/dice'

import type Dice from './dice'

export interface TraitOptions {
  initial?: Dice
  dice?: Dice
}

export default class Trait {
  private readonly _raises: Readable<number>
  readonly label: string
  readonly dice: Writable<Dice>
  readonly initial: Writable<Dice>

  constructor(label: string, options: TraitOptions = {}) {
    const { initial = d4, dice = initial } = options
    this.label = label
    this.dice = writable(dice)
    this.initial = writable(initial)

    this._raises = derived(
      [this.dice, this.initial],
      ([$dice, $initial]) => $dice.raises - $initial.raises
    )
  }

  get raises() {
    return this._raises
  }
}
