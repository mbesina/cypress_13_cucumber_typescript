import Chance from 'chance'
const chance = new Chance()

// Login Form
export const loginPageTitleClass: string = 'auth-header'
export const usernameFieldId: string = 'username'
export const passwordFieldId: string = 'password'
export const signinLinkId: string = 'log-in'
export const incorrectPassword: string = 'incorrectPassword'
export const randomPassword: string = chance.string({ length: 8 }) // random password generator for purpose of using chance library

// Login Credentials from Environment secrets used in login cy command
export const username: string = Cypress.env('USERNAME')
export const password: string = Cypress.env('PASSWORD')

// Landing Page elements
export const totalBalanceDivClass: string = 'balance-title'
export const headerH6Class: string = 'element-header'
