import type { Writable } from 'svelte/store'
import Ability from './'

export default class IncrStoreAbility extends Ability {
  constructor(
    name: string,
    description: string,
    store: Writable<number>,
    value: number
  ) {
    const incrStore = (x: number) => store.update($store => $store + x)

    super(name, description, {
      register: () => incrStore(value),
      unregister: () => incrStore(-value),
    })
  }
}
