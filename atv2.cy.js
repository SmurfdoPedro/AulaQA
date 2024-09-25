describe('Login Test - Credenciais Incorretas', () => { 
  it('Deve mostrar erro com usuário inválido', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('usuarioInvalido')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.get('.flash').should('be.visible').and('contain.text', 'Your username is invalid!')
  })

  it('Deve mostrar erro com senha inválida', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('senhaInvalida')
    cy.get('button[type="submit"]').click()
    cy.get('.flash').should('be.visible').and('contain.text', 'Your password is invalid!')
  })
})
