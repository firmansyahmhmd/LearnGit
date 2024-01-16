/// <reference types="cypress" />

describe('API Testing', () => {
    it('Login Via API', () => {
        Cypress.Commands.add('LoginViaAPI', (
            email = Cypress.env('tomsmith'),
            password = Cypress.env('SuperSecretPassword!')
        ) => {
            cy.request('POST', `${Cypress.env('https://the-internet.herokuapp.com/')}/login`, {
                username: email,
                password,
            }).then((response) => {
                expect(response.status).to.eq(200);
                cy.setCookie('sessionId', response.body.sessionId);
                cy.setCookie('userId', response.body.userId);
                cy.setCookie('userName', response.body.userName);
                cy.visit('/#!/main');
            })
        });
    });
});

