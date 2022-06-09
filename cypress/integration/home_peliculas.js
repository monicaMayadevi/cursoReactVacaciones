describe('home peliculas', () =>
{
  beforeEach( () =>
  {
    cy.visit('http://localhost:8080')
  })
  it('listar enlances a los listados de peliculas', () =>
  {
    cy.get('a').contains('Peliculas Infantiles').click()
    cy.url().should('include', '/peliculas/A')
  })
  })