export default class LoginPage {
  elements = {
    loginPageTitle: () => cy.get('h4[class="auth-header"]'),
    usernameField: () => cy.get('input[id="username"]'),
    passwordField: () => cy.get('input[id="password"]'),
    signinLink: () => cy.get('a[id="log-in"]'),
    totalBalanceDiv: () => cy.get('div[class="balance-title"]'),
    headerH6: (sectionTitle: string) => cy.get('h6[class="element-header"]').contains(sectionTitle),
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
