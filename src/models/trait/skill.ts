import type Attribute from './attribute'
import Trait from '.'
import type { TraitOptions } from '.'

interface SkillOptions extends TraitOptions {
  isCore?: boolean
}

export default class Skill extends Trait {
  readonly attribute: Attribute
  readonly isCore: boolean

  constructor(label: string, attribute: Attribute, options?: SkillOptions) {
    const { isCore = false, ...traitOptions } = options || {}
    super(label, traitOptions)
    this.attribute = attribute
    this.isCore = isCore
  }
}
