/// <reference types="cypress" />

describe('Tugas e2e navbar links', () => {
    before('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/')
    });

    it('In website', () => {
        // Look the button more services then, scroll it
        cy.get('#online-banking')
        .scrollIntoView()
        .should('be.visible')
        .click()

        // Click into feedback page
        cy.get('#feedback')
        .should('be.visible')

        cy.contains('Feedback')
        .should('be.visible')
        .click()

        // Click into faq page
        cy.get('#description')
        .should('be.visible')

        cy.get('#faq-link')
        .should('have.text', 'Frequently Asked Questions')
        .click()

        // Choose each question
        cy.get('.questions')
        .should('be.visible')

        cy.get('a[href="/faq.html?question=1"]')
        .should('have.text', 'How can I edit my profile?')
        .click()

        cy.get('a[href="/faq.html?question=2"]')
        .should('have.text', 'How can I review my transaction history?')
        .click()

        // Trying to go to previous page
        cy.location('href').should('include', '/faq.html?question=2')

        cy.go('back')
        cy.location('pathname').should('not.include', '/faq.html?question=2')
        cy.location('href').should('include', '/faq.html?question=1')

        cy.go('back')
        cy.location('pathname').should('not.include', '/faq.html?question=2')
        cy.location('pathname').should('not.include', '/faq.html?question=1')
        cy.location('pathname').should('include', '/faq.html')

        cy.go('back')
        cy.location('pathname').should('not.include', '/faq.html?question=2')
        cy.location('pathname').should('not.include', '/faq.html?question=1')
        cy.location('pathname').should('not.include', '/faq.html')
        cy.location('pathname').should('include', '/feedback.html')

        cy.go('back')
        cy.location('pathname').should('not.include', '/faq.html?question=2')
        cy.location('pathname').should('not.include', '/faq.html?question=1')
        cy.location('pathname').should('not.include', '/faq.html')
        cy.location('pathname').should('not.include', '/feedback.html')
        cy.location('pathname').should('include', '/online-banking.html')

        cy.go('back')
        cy.location('pathname').should('not.include', '/faq.html?question=2')
        cy.location('pathname').should('not.include', '/faq.html?question=1')
        cy.location('pathname').should('not.include', '/faq.html')
        cy.location('pathname').should('not.include', '/feedback.html')
        cy.location('pathname').should('not.include', '/online-banking.html')
    });

});