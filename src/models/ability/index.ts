export interface Effect {
  readonly register: () => void
  readonly unregister: () => void
}

export default class Ability {
  readonly name: string
  readonly description: string
  protected readonly effect: Effect

  constructor(name: string, description: string, effect: Effect) {
    this.name = name
    this.description = description
    this.effect = effect
  }

  register() {
    this.effect.register()
  }

  unregister() {
    this.effect.unregister()
  }
}
