Feature: Fill the name
    Scenario: Fill the name to see with hello
        When I go to URL "https://angularjs.org/"
        When I add "Tulio" in the name field
        Then I should see Hello with the username