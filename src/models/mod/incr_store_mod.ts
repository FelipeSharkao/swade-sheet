import type { Writable } from 'svelte/store'
import Mod from './'

export default class IncrStoreMod extends Mod {
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
