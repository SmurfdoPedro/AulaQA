describe('Login Test - Campos Obrigatórios', () => { 
  it('Deve mostrar erro ao tentar enviar sem preencher o usuário', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.get('.flash').should('be.visible').and('contain.text', 'Your username is invalid!')
  })

  it('Deve mostrar erro ao tentar enviar sem preencher a senha', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('button[type="submit"]').click()
    cy.get('.flash').should('be.visible').and('contain.text', 'Your password is invalid!')
  })
})
