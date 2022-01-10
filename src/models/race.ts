import type Ability from './ability'

export default class Race {
  readonly name: string
  readonly mods: Ability[]

  constructor(name: string, mods: Ability[]) {
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
