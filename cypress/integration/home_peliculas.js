describe('home peliculas', () =>
{
  beforeEach( () =>
  {
    cy.visit('http://localhost:8080')
  })
  it('listar enlances a los listados de peliculas', () =>
  {
    cy.get('h2')
    .should('contain', 'Página principal de peliculas')
    cy.get('a').contains('Peliculas Infantiles').click()
    cy.url().should('include', '/peliculas/A')
    cy.get('a').contains('Peliculas Adolescentes').click()
    cy.url().should('include', '/peliculas/B')
    cy.get('a').contains('Peliculas Adultos').click()
    cy.url().should('include', '/peliculas/C')
    cy.get('a').contains('Mostrar Variables').click()
    cy.url().should('include', '/mostrarDatos')
    cy.get('a').contains('Home').click()
    cy.url().should('include', '/')
  })
  })