Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    
    // Input username and password
    cy.get('input[name="user_login"]').clear()
    cy.get('input[name="user_login"]').type('username')

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type('password')

    cy.get('input[name="submit"]').click()
})