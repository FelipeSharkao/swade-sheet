export default class Dice {
  readonly raises: number

  constructor(raises: number) {
    this.raises = raises
  }

  get next() {
    return new Dice(this.raises + 1)
  }

  get prev() {
    return new Dice(this.raises - 1)
  }

  get sides() {
    return 4 + Math.min(Math.max(this.raises, 0), 4) * 2
  }

  get mod() {
    if (this.raises < 0) return this.raises
    if (this.raises > 4) return this.raises - 4
    return 0
  }

  get half() {
    return this.raises + 2
  }

  toString() {
    const dice = 'd' + this.sides
    const mod = this.mod
    if (!mod) return dice
    if (mod > 0) return `${dice}+${mod}`
    else return dice + mod
  }
}
