describe('Login Test - Sucesso', () => { 
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.get('.flash')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!')
  })
})
