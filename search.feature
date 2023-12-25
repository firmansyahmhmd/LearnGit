Feature: Search for user financial activity information data on the website http://zero.webappsecurity.com/index.html

    Checking user financial information data

    Scenario: Can access the website and search for user financial information data
        Given Open login and data search page
        When Input login data and search for financial data
        Then Displays data according to the keywords searched