/// <reference types="cypress" />

describe('Tugas Test Script', () => {
    it('Clicking "type" navigates to new url', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email').type('firman@qaautomation.com').should('have.value', 'firman@qaautomation.com')
    });
});