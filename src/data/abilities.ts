import IncrStoreAbility from '../models/ability/incr_store_ability'
import RaiseTraitAbility from '../models/ability/raise_trait_ability'
import attrs from './attributes'
import skills from './skills'
import { armor, toughnessMod } from './stats'

export const agile = new RaiseTraitAbility(
  'Agile',
  'Start with a d6 Agility, instead of a d4. This increases maximum Agility to d12+1.',
  attrs.agi
)

export const frail = new IncrStoreAbility(
  'Frail',
  'Apply -1 to Toughness',
  toughnessMod,
  -1
)

export const keenSenses = new RaiseTraitAbility(
  'Keen Senses',
  'Start with a d6 in Notice, instead of d4. This increases maximum Notice to d12+1.',
  skills.notice
)

export const spirited = new RaiseTraitAbility(
  'Spirited',
  'Start with a d6 Spirit, instead of a d4. This increases maximum Spirit to d12+1.',
  attrs.spi
)

export const tough = new RaiseTraitAbility(
  'Tough',
  'Start with a d6 Vigor, instead of a d4. This increases maximum Vigor to d12+1.',
  attrs.vig
)

export const toughness = new IncrStoreAbility(
  'Toughness',
  'Apply +1 to Toughness',
  toughnessMod,
  1
)

export const armor2 = new IncrStoreAbility(
  'Armor +2',
  'Apply +2 to Armor',
  armor,
  2
)
