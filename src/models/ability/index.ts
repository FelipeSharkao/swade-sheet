export interface Effect {
  readonly register: () => void
  readonly unregister: () => void
}

export default class Ability {
  constructor(
    readonly name: string,
    readonly description: string,
    protected readonly effect?: Effect
  ) {}

  register() {
    this.effect?.register()
  }

  unregister() {
    this.effect?.unregister()
  }
}
