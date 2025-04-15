Feature: test Home page

Scenario: login with valid user
    Given user launches url
    When user enters username and password
    Then verified home page
    Then user Logged out 
  
