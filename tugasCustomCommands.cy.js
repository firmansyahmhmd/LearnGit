/// <reference types="cypress" />

describe('Tugas custom commands', () => {
    beforeEach('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    });

    it('Login the website', () => {
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

        // Check close button beside green alert
        cy.get('[type="button"]')
        .should('have.class', 'close')
        .should('have.text', '×')

        // Check the green alert after press the pay button
        cy.get('title')
        .should('have.text', 'Zero - Pay Bills')

        // Input pay bills form
        cy.pay_bills_form()

    });

});