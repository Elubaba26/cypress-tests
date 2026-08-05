describe('Login Tests', () => {

  it('should open the website', () => {
    cy.visit('https://www.saucedemo.com',{ timeout: 30000 } ) 
  })

  it('should have a login button', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#login-button').should('be.visible')
  })

  it('should login successfully', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_list').should('be.visible')
  })

  it('should show error with wrong password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('should logout', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('include', 'saucedemo.com')
  })

})