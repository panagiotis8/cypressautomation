describe('Saucedemo Store Application Test', () => {
    it('Login and Add Products to Cart', () => {
      // this is going to the saucedemo page
      cy.visit('https://www.saucedemo.com/inventory.html')
  
      // login with the username and password given in the test page
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
  
      // to make sure the products in the page is loaded
      cy.url().should('include', '/inventory.html')
  
      // using the class of all the add to cart button
      // since the button is using the same class, it clicks all at once
      cy.get('.btn_primary').each(($btn) => {
        cy.wrap($btn).click()
      })
  
      // to check cart is not empty
      cy.get('.shopping_cart_badge').should('not.have.text', '0')
  
      // cart page button is clicked
      cy.get('.shopping_cart_link').click()
  
      // Verify if the cart page is loaded
      cy.url().should('include', '/cart.html')
    })
  })