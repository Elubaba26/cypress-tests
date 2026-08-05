describe('Saucedemo Tests', () => {

  it('should open the website', () => {
    cy.visit('https://www.saucedemo.com')
  })

}) 
    describe('Saucedemo Tests', () => {

  it('should open the website', () => {
    cy.visit('https://www.saucedemo.com')
  })

  it('should login successfully', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click() 
    cy.url().should('include', 'inventory') 
  })

}) 
    it('should have a login button', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#login-button').should('be.visible')
  })

  it('should show error with wrong password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  }) 
   it('should have a login button', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#login-button').should('be.visible')
  })

  it('should show error with wrong password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
   it('should have a login button', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#login-button').should('be.visible')
  })

  it('should show error with wrong password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
   describe('Saucedemo Tests', () => {

  // LOGIN BEFORE EACH TEST
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('should show products page', () => {
    cy.get('.inventory_list').should('be.visible')
  })

  it('should show 6 products', () => {
    cy.get('.inventory_item').should('have.length', 6)
  })

  it('should show products title', () => {
    cy.get('.title').should('contain', 'Products')
  })

  it('should add item to cart', () => {
    cy.get('.btn_inventory').first().click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

   })  

it('should open cart page', () => {
  cy.visit('https://www.saucedemo.com')
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()
  cy.get('.shopping_cart_link').click()
  cy.url().should('include', 'cart')
})