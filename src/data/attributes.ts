import Attribute from '../models/trait'
import { d4 } from '../utils/dice'

const attrs = Object.fromEntries(
  (
    [
      ['agi', 'Agility'],
      ['sma', 'Smarts'],
      ['spi', 'Spirit'],
      ['str', 'Strength'],
      ['vig', 'Vigor'],
    ] as const
  ).map(([name, label]) => [name, new Attribute(label, { initial: d4 })])
)

export default attrs
