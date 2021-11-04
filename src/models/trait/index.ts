import { Readable, Writable, derived, writable } from 'svelte/store'

import type Dice from '../dice'

export interface TraitOptions {
  initial?: Dice
  dice?: Dice
}

export default class Trait {
  private readonly _raises: Readable<number | null>
  readonly label: string
  readonly dice: Writable<Dice | null>
  readonly initial: Writable<Dice | null>

  constructor(label: string, options: TraitOptions = {}) {
    const { initial = null, dice = initial } = options
    this.label = label
    this.dice = writable(dice)
    this.initial = writable(initial)

    this._raises = derived(
      [this.dice, this.initial],
      ([$dice, $initial]) =>
        $dice && $dice.raises - ($initial ? $initial.raises : 0)
    )
  }

  get raises() {
    return this._raises
  }
}
