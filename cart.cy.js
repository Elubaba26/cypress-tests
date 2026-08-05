describe('Cart Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('should add item to cart', () => {
    cy.get('.btn_inventory').first().click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  it('should add 2 items to cart', () => {
    cy.get('.btn_inventory').eq(0).click()
    cy.get('.btn_inventory').eq(1).click()
    cy.get('.shopping_cart_badge').should('contain', '2')
  })

  it('should remove item from cart', () => {
    cy.get('.btn_inventory').first().click()
    cy.get('.btn_inventory').first().click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('should open cart page', () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', 'cart')
  })

})