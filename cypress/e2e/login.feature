Feature: Login
    Scenario: Login Successfully
    Given I access admin portal
    When I enter a username
    And I enter a password 
    And I click login
    Then I should login in successfully