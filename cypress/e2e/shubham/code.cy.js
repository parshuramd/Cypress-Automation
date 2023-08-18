

describe('url',()=>{
    it('validate',()=>{
        cy.visit('https://github.com/parshuramd/Cypress-Automation')
        cy.log(cy.url())
        cy.lig("shubham")
    })
})