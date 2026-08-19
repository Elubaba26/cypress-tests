describe('Login Tests', () => {
  // your existing login test cases...
})

describe('Login Page UI/UX', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('should mask password input', () => {
    cy.get('#password').should('have.attr', 'type', 'password')
  })

  it('should show placeholder text in username field', () => {
    cy.get('#user-name').should('have.attr', 'placeholder', 'Username')
  })

  it('should show placeholder text in password field', () => {
    cy.get('#password').should('have.attr', 'placeholder', 'Password')
  })

  it('should NOT clear error message when user starts typing again', () => {
  cy.get('#login-button').click()
  cy.get('[data-test="error"]').should('be.visible')
  cy.get('#user-name').type('a')
  cy.get('[data-test="error"]').should('be.visible') // still there
})
})