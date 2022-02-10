@smoke
Feature: User login


  Scenario: User should not be able to login with invalid credentials
    Given the user is on the login page
    When the user logs in using "username" or "user123"
    Then the user should not be able to login


