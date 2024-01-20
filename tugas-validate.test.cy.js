/// <reference types="cypress" />

describe('Validate', () => {
    it('Successfully validate header content-type and body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        // Validate Header
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
        // Validate Body
        cy.get('@pokemon').its('body').its('abilities')
        .wrap({
            "ability": {
                "name": "limber",
                "url": "https://pokeapi.co/api/v2/ability/7/"
            }
        })
        .should('have.property', 'ability')
        .and('have.property', 'name')
        .and('have.string', 'limber')
        
        // .its('ability')
        // .should('', 'ablility')
        // .should('have.keys', 'name')
        // .and('have.value', 'limber')
    });
});