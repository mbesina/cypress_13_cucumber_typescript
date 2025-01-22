Feature: Login Scenario

  @login
  @skip
  Scenario: Navigate to Login Form
    Given I open the homepage
    Then I see form title "Login Form"
    And I see the username field
    And I see the password field
    And I see the Sign in button

  @login
  Scenario: Signin to the application
    Given I open the homepage
    And I see form title "Login Form"
    When I enter username "test@test.com"
    And I enter random password
    And I click the Sign in link
    Then I see "Financial Overview" section title
    And I see Total Balance section title
    And I see "Recent Transactions" section title

  @login
  Scenario: Login successfully by using cypress login command
    When I login by using cypress command
    Then I see "Financial Overview" section title
    And I see Total Balance section title
    And I see "Recent Transactions" section title
