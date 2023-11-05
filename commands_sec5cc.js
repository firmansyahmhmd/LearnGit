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

Cypress.Commands.add('pay_bills_form', () => {
    // Choose the bofa value from payee dropdown menu
    cy.get('#sp_payee')
    .select(1)
    .should('have.value', 'bofa')

    // Choose the Savings from account dropdown menu
    cy.get('#sp_account')
    .select(2)
    .should('have.value', 3)

    // Trying to typing amount
    cy.get('input[name="amount"]')
    .should('have.id', 'sp_amount')
    .type('49')

    // Trying to typing date
    cy.get('input[name="date"]')
    .should('have.id', 'sp_date')
    .type('2023-11-5')

    // Trying to typing description
    cy.get('input[name="description"]')
    .should('have.id', 'sp_description')
    .type('Send the bills', {force: true})

    // Press submit button or pay
    cy.get('input[type="submit"]')
    .should('have.value', 'Pay')
    .click()

}) 