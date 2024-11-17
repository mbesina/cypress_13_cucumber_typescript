import {
  loginPageTitleClass,
  passwordFieldId,
  signinLinkId,
  totalBalanceDivClass,
  usernameFieldId,
  headerH6Class,
} from '@support/constants'

export default class LoginPage {
  elements = {
    loginPageTitle: () => cy.get(`h4[class="${loginPageTitleClass}"]`),
    usernameField: () => cy.get(`input[id="${usernameFieldId}"]`),
    passwordField: () => cy.get(`input[id="${passwordFieldId}"]`),
    signinLink: () => cy.get(`a[id="${signinLinkId}"]`),
    totalBalanceDiv: () => cy.get(`div[class="${totalBalanceDivClass}"]`),
    headerH6: (sectionTitle: string) => cy.get(`h6[class="${headerH6Class}"]`).contains(sectionTitle),
  }

  enterUsername(username: string) {
    this.elements.usernameField().type(username)
  }

  enterPassword(password: string) {
    this.elements.passwordField().type(password, { log: false })
  }

  clickSignInLink() {
    this.elements.signinLink().click()
  }
}
export const loginPage = new LoginPage()
