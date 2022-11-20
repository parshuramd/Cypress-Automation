
export const generateEmail = `testemail${Math.round((Math.random()*100000))}@gmail.com`;
export const generatePassword = `testPass${Math.round((Math.random()*100000))}`;
export const createAccount = ()=>{
    // cy.log(testPOM.generateEmail);
        cy.visit("https://qatest.commentsoldrt.com/webstore-register?destination=/account")
        cy.get("#customer-first-name").clear().type("firstName")
        cy.get("#customer-last-name").clear().type("lastName")
        cy.get("#customer-email").clear().type(generateEmail)
        cy.get("#customer-password").clear().type(generatePassword)
        cy.get('button[type="submit"]').click();
}