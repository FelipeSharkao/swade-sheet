import IncrStoreMod from '../models/mod/incr_store_mod'
import RaiseTraitMod from '../models/mod/raise_trait_mod'
import attrs from './attributes'
import skills from './skills'
import { armor, toughnessMod } from './stats'

export const agile = new RaiseTraitMod(
  'Agile',
  'Start with a d6 Agility, instead of a d4. This increases maximum Agility to d12+1.',
  attrs.agi
)

export const frail = new IncrStoreMod(
  'Frail',
  'Apply -1 to Toughness',
  toughnessMod,
  -1
)

export const keenSenses = new RaiseTraitMod(
  'Keen Senses',
  'Start with a d6 in Notice, instead of d4. This increases maximum Notice to d12+1.',
  skills.notice
)

export const spirited = new RaiseTraitMod(
  'Spirited',
  'Start with a d6 Spirit, instead of a d4. This increases maximum Spirit to d12+1.',
  attrs.spi
)

export const tough = new RaiseTraitMod(
  'Tough',
  'Start with a d6 Vigor, instead of a d4. This increases maximum Vigor to d12+1.',
  attrs.vig
)

export const toughness = new IncrStoreMod(
  'Toughness',
  'Apply +1 to Toughness',
  toughnessMod,
  1
)

export const armor2 = new IncrStoreMod(
  'Armor +2',
  'Apply +2 to Armor',
  armor,
  2
)
