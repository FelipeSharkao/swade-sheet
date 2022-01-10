import { d4, d6 } from '../../utils/dice'
import Ability from './'

import type Trait from '../trait'

export default class RaiseTraitAbility extends Ability {
  constructor(name: string, description: string, trait: Trait) {
    super(name, description, {
      register() {
        trait.initial.set(d6)
        trait.dice.update($dice => $dice && $dice.next)
      },
      unregister() {
        trait.initial.set(d4)
        trait.dice.update($dice => $dice && $dice.prev)
      },
    })
  }
}
