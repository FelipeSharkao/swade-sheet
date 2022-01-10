import { Readable, writable } from 'svelte/store'

import IncrStoreMod from '../models/mod/incr_store_mod'
import RaiseTraitMod from '../models/mod/raise_trait_mod'
import Race from '../models/race'
import attrs from './attributes'
import skills from './skills'
import { armor, toughnessMod } from './stats'

import type Mod from '../models/mod'
export const racialAbilities: Record<string, Mod> = {
  agile: new RaiseTraitMod(
    'Agile',
    'Start with a d6 Agility, instead of a d4. This increases maximum Agility to d12+1.',
    attrs.agi
  ),
  frail: new IncrStoreMod('Frail', 'Apply -1 to Toughness', toughnessMod, -1),
  keenSenses: new RaiseTraitMod(
    'Keen Senses',
    'Start with a d6 in Notice, instead of d4. This increases maximum Notice to d12+1.',
    skills.notice
  ),
  spirited: new RaiseTraitMod(
    'Spirited',
    'Start with a d6 Spirit, instead of a d4. This increases maximum Spirit to d12+1.',
    attrs.spi
  ),
  tough: new RaiseTraitMod(
    'Tough',
    'Start with a d6 Vigor, instead of a d4. This increases maximum Vigor to d12+1.',
    attrs.vig
  ),
  toughness: new IncrStoreMod(
    'Toughness',
    'Apply +1 to Toughness',
    toughnessMod,
    1
  ),
  armor2: new IncrStoreMod('Armor +2', 'Apply +2 to Armor', armor, 2),
}

const ablt = racialAbilities

export const races = {
  android: new Race('Android', []),
  aquarian: new Race('Aquarian', [ablt.toughness]),
  avion: new Race('Avion', [ablt.frail, ablt.keenSenses]),
  dwarf: new Race('Dwarf', [ablt.tough]),
  elf: new Race('Elf', [ablt.agile]),
  halfElf: new Race('Half-Elf', []),
  halfFolk: new Race('Half-Folk', [ablt.spirited]),
  human: new Race('Human', []),
  rakashan: new Race('Rakashan', [ablt.agile]),
  saurian: new Race('Saurian', [ablt.armor2, ablt.keenSenses]),
} as const

const _race = writable<Race>(races.human)

export function selectRace(newRace: Race) {
  _race.update(current => {
    current.unregister()
    newRace.register()
    return newRace
  })
}

export const selectedRace = _race as Readable<Race>
