/// <reference types="cypress" />

describe('Create New User', () => {
    it('Sucessfully create new user', () => {
        var user = {
            "name" : "Firman",
            "job" : "Tester"
        }

        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal("Firman")
            expect(response.body.job).equal("Tester")
            expect(response.statusText).equal("Created")
        })
    });
});