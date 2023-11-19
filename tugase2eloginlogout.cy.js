/// <reference types="cypress" />

describe('Tugas e2e login & logout', () => {
    before('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/')
    });
    
    it('Login & logout test', () => {
        // Press sign in button
        cy.get('button[type="button"]')
        .should('be.visible')

        cy.get('i')
        .should('have.class', 'icon-signin')
        
        cy.contains('Signin')
        .click()
        
        // Input username and password
        cy.login('username', 'password')

        // Then, choose the menu pay bills
        cy.get('a[href="/bank/redirect.html?url=pay-bills.html"]')
        .should('have.text', 'Pay Bills')
        .click()

        // Then, choose the menu pay saved payee
        cy.get('a[href="#ui-tabs-1"]')
        .should('have.text', 'Pay Saved Payee')
        .click()

        // Check form pay saved payee
        cy.get('form[method="post"]')
        .should('have.attr', 'action', '/bank/pay-bills-saved-payee.html')
        .should('have.class', 'form-horizontal')
        .should('be.visible')

        // Check the header tag
        cy.get('h2')
        .should('have.class', 'board-header')
        .should('have.text', 'Make payments to your saved payees')

        // Check the payee label 
        cy.get('label[for="sp_payee"]')
        .should('have.text', 'Payee')
        
        // Check the payee dropdown menu
        cy.get('#sp_payee')
        .select('Sprint', 'Bank of America', 'Apple', 'Wells Fargo')
        .invoke('val')
        .should('deep.equal', 'sprint', 'bofa', 'apple', 'wellsfargo')

        // Check the account label 
        cy.get('label[for="sp_account"]')
        .should('have.text', 'Account')

        // Check the account dropdown menu
        cy.get('#sp_account')
        .select(0,1,2,3,4,5)
        .invoke('val')
        .should('deep.equal', '1', '2', '3', '4', '5', '6')

        // Check the amount label
        cy.get('label[for="sp_amount"]')
        .should('have.text', 'Amount')

        // Check the date label
        cy.get('label[for="sp_date"]')
        .should('have.text', 'Date')

        // Check the description label
        cy.get('label[for="sp_description"]')
        .should('have.text', 'Description')

        // Look to submit button or pay
        cy.get('input[type="submit"]')
        .should('have.value', 'Pay')

        // Choose to logout the website
        cy.get('a')
        .should('have.class', 'dropdown-toggle')
        .should('be.visible')

        cy.get('i')
        .should('have.class', 'icon-user')
        
        cy.contains('username')
        .click()

        cy.get('ul')
        .should('have.class', 'dropdown-menu')
        .should('be.visible')

        cy.get('a[href="/logout.html"]')
        .should('have.id', 'logout_link')
        .should('have.text', 'Logout')
        .click()
    });
    
});