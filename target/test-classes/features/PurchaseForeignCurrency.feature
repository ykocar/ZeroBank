@smoke
Feature: Purchase Foreign Currency

  Background:
    Given the user is logged in
    And The user navigate to "Account Summary" page
    Given Go to "Pay Bills" module
    Given the user accesses the Purchase Foreign Currency tab


  Scenario: Available currencies
    Given Go to "Pay Bills" module
    And the user accesses the Purchase Foreign Currency tab
    Then following currencies should be available
      | Australia (dollar)    |
      | Canada (dollar)       |
      | Switzerland (franc)   |
      | China (yuan)          |
      | Denmark (krone)       |
      | Eurozone (euro)       |
      | Great Britain (pound) |
      | Japan (yen)           |
      | Mexico (peso)         |
      | Norway (krone)        |
      | New Zealand (dollar)  |
      | Singapore (dollar)    |


  Scenario: Error message for not selecting currency
    When user tries to calculate cost without selecting a currency
    Then error message should be displayed


  Scenario: Error message for not entering value
    When user tries to calculate cost without entering a value
    Then error message should be displayed