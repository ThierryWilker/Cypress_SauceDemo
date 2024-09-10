describe('Verificação do titulo da Página', () => {
  it('TC01 - Verificar o titulo da página - Positivo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should("eq", "OrangeHRM")
  })
  
  it('TC02 - Verificar o titulo da página - Positivo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should("eq", "OrangeHRM123")
  })
})