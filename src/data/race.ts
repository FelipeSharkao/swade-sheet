import { d4, d6 } from '../utils/dice'
import Race from '../models/race'
import { Readable, writable } from 'svelte/store'

import attrs from './attributes'
import Mod from '../models/mod'
import { armor, toughnessMod } from './stats'
import skills from './skills'

export const racialAbilities: Record<string, Mod> = {
  agile: new Mod(
    'Agile',
    'Start with a d6 Agility, instead of a d4. This increases maximum Agility to d12+1.',
    {
      register() {
        attrs.agi.initial.set(d6)
        attrs.agi.dice.update($dice => $dice.next)
      },
      unregister() {
        attrs.agi.initial.set(d4)
        attrs.agi.dice.update($dice => $dice.prev)
      },
    }
  ),
  frail: new Mod('Frail', 'Apply -1 to Toughness', {
    register() {
      toughnessMod.update($mod => $mod - 1)
    },
    unregister() {
      toughnessMod.update($mod => $mod + 1)
    },
  }),
  keenSenses: new Mod(
    'Keen Senses',
    'Start with a d6 in Notice, instead of d4. This increases maximum Notice to d12+1.',
    {
      register() {
        skills.notice.initial.set(d6)
        skills.notice.dice.update($dice => $dice && $dice.next)
      },
      unregister() {
        skills.notice.initial.set(d4)
        skills.notice.dice.update($dice => $dice && $dice.prev)
      },
    }
  ),
  spirited: new Mod(
    'Spirited',
    'Start with a d6 Spirit, instead of a d4. This increases maximum Spirit to d12+1.',
    {
      register() {
        attrs.spi.initial.set(d6)
        attrs.spi.dice.update($dice => $dice.next)
      },
      unregister() {
        attrs.spi.initial.set(d4)
        attrs.spi.dice.update($dice => $dice.prev)
      },
    }
  ),
  tough: new Mod(
    'Tough',
    'Start with a d6 Vigor, instead of a d4. This increases maximum Vigor to d12+1.',
    {
      register() {
        attrs.vig.initial.set(d6)
        attrs.vig.dice.update($dice => $dice.next)
      },
      unregister() {
        attrs.vig.initial.set(d4)
        attrs.vig.dice.update($dice => $dice.prev)
      },
    }
  ),
  toughness: new Mod('Toughness', 'Apply +1 to Toughness', {
    register() {
      toughnessMod.update($mod => $mod + 1)
    },
    unregister() {
      toughnessMod.update($mod => $mod - 1)
    },
  }),
  armor2: new Mod('Armor +2', 'Apply +2 to Armor', {
    register() {
      armor.update($armor => $armor + 2)
    },
    unregister() {
      armor.update($armor => $armor - 2)
    },
  }),
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
