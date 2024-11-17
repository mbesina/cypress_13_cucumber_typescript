import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { loginPage } from '../pages/PageLogin'
import { incorrectPassword, beVisible, randomPassword } from '@support/constants'

Given('I open the homepage', () => {
  cy.visit('/')
})

Then('I see form title {string}', (title: string) => {
  loginPage.elements.loginPageTitle().should('be.visible')
})

Then('I see the username field', () => {
  loginPage.elements.usernameField().should(beVisible)
})

Then('I see the password field', () => {
  loginPage.elements.passwordField().should(beVisible)
})

Then('I see the Sign in button', () => {
  loginPage.elements.signinLink().should(beVisible)
})

When('I enter username {string}', (username: string) => {
  loginPage.enterUsername(username)
})

// ideal password location is hidden in env file or github secret
// for the purpose of this test, we are using Chance library for generating random password
When('I enter random password', () => {
  loginPage.enterPassword(randomPassword)
})

// Not valid since any password will login due to the test environment
When('I enter incorrect password', () => {
  loginPage.enterPassword(incorrectPassword)
})

When('I click the Sign in link', () => {
  loginPage.clickSignInLink()
})

Then('I see Total Balance section title', () => {
  loginPage.elements.totalBalanceDiv().should(beVisible)
})

Then('I see {string} section title', (sectiontitle: string) => {
  loginPage.elements.headerH6(sectiontitle).should(beVisible)
})
