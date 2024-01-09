import SearchPage from "./search.page";
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('Open login and data search page', () => {
    SearchPage.visit(URL);
})

When('Input login data and search for financial data', () => {
    //Getting the signin button
    SearchPage.gettingSigninButton();
    
    //Process of the username typing
    SearchPage.usernameTyping();

    //Process of the password typing
    SearchPage.passwordTyping();

    //Press sign in button
    SearchPage.pressSignIn();

    //Search the data with account keyword
    SearchPage.searchAccountKeyword();
})

Then('Displays data according to the keywords searched', () => {
    //Some data displayed with account keyword 
    SearchPage.dataResult();
})