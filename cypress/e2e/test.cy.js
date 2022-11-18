
/// < reference types = "cypress"/>
import * as testPOM from "../support/TestPOM"
describe("Test Suite",()=>{
    it("TC- Create Account",()=>{
        cy.log(testPOM.generateEmail);
        cy.visit("https://qatest.commentsoldrt.com/webstore-register?destination=/account")
        cy.get("#customer-first-name").clear().type("firstName")
        cy.get("#customer-last-name").clear().type("lastName")
        cy.get("#customer-email").clear().type(testPOM.generateEmail)
        cy.get("#customer-password").clear().type(testPOM.generatePassword)
        cy.get('button[type="submit"]').click();
    })
    it("TC- Sig In",()=>{
        cy.log(testPOM.generateEmail);
        cy.visit("https://qatest.commentsoldrt.com/webstore-login?destination=/account")
        cy.get("#email").clear().type(testPOM.generateEmail)
        cy.get("#password").clear().type(testPOM.generatePassword)
        cy.get('button.ws-v2-button-primary').contains("Log In").click();
    })
})