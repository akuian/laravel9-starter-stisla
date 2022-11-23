describe('Entering the website', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000/')
  })
  it('Email and password filled', () => {
    cy.get('input[name="email"]').type('superadmin@gmail.com')
    cy.get('input[name="password"]').type('password')
    cy.get('.btn')
    .contains('Login')
    .click()
  })

  describe('User', () => {
  it('Checking user list', () => {
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas')
    .click()
    cy.get(':nth-child(2) > .has-dropdown > span').click()
    cy.get('.active > .dropdown-menu > li > .nav-link')
    .click()
  })
})
})