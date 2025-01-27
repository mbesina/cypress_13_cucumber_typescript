// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'
import { loginPage } from '../pages/PageLogin'
import { password, username } from './constants'

Cypress.Commands.add('login', () => {
  cy.intercept('/').as('loginPage')
  cy.visit('/')
  cy.wait('@loginPage').then(() => {
    loginPage.elements.loginPageTitle().should('be.visible')
  })

  loginPage.enterUsername(username)
  loginPage.enterPassword(password)
  loginPage.clickSignInLink()
})
