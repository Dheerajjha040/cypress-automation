/// <reference types="cypress" />

describe('all suites', () => {

    it('all links suites', () => {

       cy.visit('/index.htm')
       cy.get('a').then(($input) => {
        const inputs = [...$input]
        const values = []

        inputs.forEach((value) => {
            values.push(value.href)

          
            
        })
        cy.writeFile('cypress/fixtures/example.json',values)

       })
        
    });
    
});