/// <reference types="cypress" />

describe('Validate content', () => {
    it('Successfully validating content', () => {
        const pokemon_1 = {
            "abilities": [
                {
                    "ability": {
                        "name": "limber",
                        "url": "https://pokeapi.co/api/v2/ability/7/"
                    },
                }
            ],
        }
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto', pokemon_1).then((response) => {
            expect(response.body.abilities[0].ability.name).to.eq(pokemon_1.abilities[0].ability.name);
            expect(response.body.abilities[0].ability.url).to.eq(pokemon_1.abilities[0].ability.url);
        });
    });
});