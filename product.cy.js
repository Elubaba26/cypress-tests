describe('Products Tests', () => {

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

  it('should show product prices', () => {
    cy.get('.inventory_item_price').first().should('be.visible')
  })

  it('should sort by price low to high', () => {
    cy.get('.product_sort_container').select('lohi')
  })

  it('should sort by name A to Z', () => {
    cy.get('.product_sort_container').select('az')
  })

})