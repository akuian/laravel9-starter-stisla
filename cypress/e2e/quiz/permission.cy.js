describe('Permission', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000/')
  })
  it('CRUD', () => {
    cy.get('input[name="email"]').type('superadmin@gmail.com')
    cy.get('input[name="password"]').type('password')
    cy.get('.btn')
    .contains('Login')
    .click()
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()
    cy.get(':nth-child(3) > .has-dropdown > span').click()
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click()
    cy.get('.card-header-action > .btn-icon').click()
    cy.get('input[name="name"]').type('user.hfp')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(5) > .page-link').click()
    cy.get(':nth-child(9) > .text-right > .d-flex > .ml-2 > .btn').click()
    
  })
})