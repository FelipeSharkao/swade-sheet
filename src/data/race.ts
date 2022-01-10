import { Readable, writable } from 'svelte/store'

import Race from '../models/race'
import {
  agile, armor2, frail, keenSenses, spirited, tough, toughness,
} from './abilities'

export const races = {
  android: new Race('Android', []),
  aquarian: new Race('Aquarian', [toughness]),
  avion: new Race('Avion', [frail, keenSenses]),
  dwarf: new Race('Dwarf', [tough]),
  elf: new Race('Elf', [agile]),
  halfElf: new Race('Half-Elf', []),
  halfFolk: new Race('Half-Folk', [spirited]),
  human: new Race('Human', []),
  rakashan: new Race('Rakashan', [agile]),
  saurian: new Race('Saurian', [armor2, keenSenses]),
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
