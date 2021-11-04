import type Mod from './mod'

export default class Race {
  readonly name: string
  readonly mods: Mod[]

  constructor(name: string, mods: Mod[]) {
    this.name = name
    this.mods = mods
  }

  register() {
    this.mods.forEach(x => x.register())
  }

  unregister() {
    this.mods.forEach(x => x.unregister())
  }
}
