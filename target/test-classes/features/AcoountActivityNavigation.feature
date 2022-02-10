@smoke
Feature:    Navigating	to	specific	accounts	in	Accounts	Activity

  Scenario Outline: Select Account <link>
    Given the user is logged in
    And The user navigate to "Account Summary" page
    When the user clicks on	"<link>" on	the	Account	Summary	page
    Then the "Account Activity" page should	be displayed
    And Account	drop down should have "<link>" selected

    Examples:

      | link        |
      | Savings     |
      | Brokerage   |
      | Checking    |
      | Credit Card |
      | Loan        |