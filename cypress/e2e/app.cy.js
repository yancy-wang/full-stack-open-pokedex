describe('App', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5000', { failOnStatusCode: false })
    cy.contains('Pokemon')
  })
})