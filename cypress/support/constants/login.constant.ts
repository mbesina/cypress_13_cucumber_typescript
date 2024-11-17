import Chance from 'chance'
const chance = new Chance()

export const incorrectPassword: string = 'incorrectPassword'
export const randomPassword: string = chance.string({ length: 8 })
