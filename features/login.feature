Feature: Login Page Validation

    Background:
        Given Launch the Browser

    @smoke
    Scenario: Validate the Valid credentials
        When Enter the username "testone"
        And Enter the password "Admin"
        Then Validate the home page

    
    Scenario: Validate the invalid Creditionals
        When Enter the username "testtwo"
        And Enter the password "Admin321"
        Then validate the home page


    Scenario Outline: Validate the Login details
        When Enter the username "<username>"
        And Enter the password "<password>"
        Then click the login button
        Examples:
            | username| password |
            | Giri  | 123giri |
            | Yuvaraj  | 123yuva |
            | Ravi | 321ravi |