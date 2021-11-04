import Skill from '../models/trait/skill'
import attrs from './attributes'
import { d4 } from '../utils/dice'

const skills = Object.fromEntries(
  (
    [
      ['academics', 'Academics', attrs.sma],
      ['athletics', 'Athletics', attrs.agi, true],
      ['battle', 'Battle', attrs.sma],
      ['boating', 'Boating', attrs.agi],
      ['commonKnowledge', 'Common Knowledge', attrs.sma, true],
      ['driving', 'Driving', attrs.agi],
      ['electronics', 'Electronics', attrs.sma],
      ['faith', 'Faith', attrs.spi],
      ['fighting', 'Fighting', attrs.agi],
      ['focus', 'Focus', attrs.spi],
      ['gambling', 'Gambling', attrs.sma],
      ['hacking', 'Hacking', attrs.sma],
      ['healing', 'Healing', attrs.sma],
      ['intimidation', 'Intimidation', attrs.spi],
      ['language', 'Language', attrs.sma],
      ['notice', 'Notice', attrs.sma, true],
      ['occult', 'Occult', attrs.sma],
      ['performance', 'Performance', attrs.spi],
      ['persuasion', 'Persuasion', attrs.spi, true],
      ['piloting', 'Piloting', attrs.agi],
      ['psionics', 'Psionics', attrs.sma],
      ['repair', 'Repair', attrs.sma],
      ['research', 'Research', attrs.sma],
      ['riding', 'Riding', attrs.agi],
      ['science', 'Science', attrs.sma],
      ['shooting', 'Shooting', attrs.agi],
      ['spellcasting', 'Spellcasting', attrs.sma],
      ['stealth', 'Stealth', attrs.agi, true],
      ['survival', 'Survival', attrs.sma],
      ['taunt', 'Taunt', attrs.sma],
      ['thievery', 'Thievery', attrs.agi],
      ['weirdScience', 'Weird Science', attrs.sma],
    ] as const
  ).map(([name, label, attr, isCore]) => [
    name,
    new Skill(label, attr, { initial: isCore ? d4 : undefined, isCore }),
  ])
)

export default skills
