const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

Given('Open login and data search page', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When('Input login data and search for financial data', () => {
    //Process of the username typing
    cy.get('button[type="button"]')
    .should('have.id', 'signin_button')
    .children('i')
    .should('have.class', 'icon-signin')
    .and('have.text', '')
    .click()

    cy.get('.control-group')
    .children('label')
    .contains('Login')

    cy.get('.controls')
    .children('input[type="text"]')
    .should('have.id', 'user_login')
    .type('username')

    //Process of the password typing
    cy.get('.control-group')
    .children('label')
    .contains('Password')

    cy.get('.controls')
    .children('input[type="password"]')
    .should('have.id', 'user_password')
    .type('password')

    //Press sign in button
    cy.get('.form-actions')
    .children('input[type="submit"]')
    .should('have.value', 'Sign in')
    .click()

    //Search the data with account keyword
    cy.get('li')
    .children('form[action="/search.html"]')
    
    cy.get('input[type="text"]')
    .should('have.id', 'searchTerm')
    .and('have.class', 'search-query')
    .and('have.attr', 'placeholder', 'Search')
    .type('account{enter}')
})

Then('Displays data according to the keywords searched', () => {
    //Some data displayed with account keyword 
    cy.get('li')
    .children('a[href="/bank/account-summary.html"]')
    .contains('Zero - Account Summary')

    cy.get('li')
    .children('a[href="/bank/account-activity.html"]')
    .contains('Zero - Account Activity')
})