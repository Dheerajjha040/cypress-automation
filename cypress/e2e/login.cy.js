describe('parabanktestuite', () => {

  before(() =>{
    cy.visit('/index.htm')
    
  })

  it('Verify the login page opened', () => {

    cy.get('.logo').should('not.visible')
    cy.get('p').contains('Experience the difference').should('be.visible')
  
  })

})