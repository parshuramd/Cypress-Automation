
/// < reference types = "cypress"/>
import * as testPOM from "../support/TestPOM"
describe("Test Suite",()=>{
    it("TC- Create Account",()=>{
        testPOM.createAccount();
    })
    it("TC- Sign In",()=>{
        cy.log(testPOM.generateEmail);
        cy.intercept("GET","/shop/api/posts?page=1").as("api")
        cy.visit("https://qatest.commentsoldrt.com/webstore-login?destination=/account")
        cy.get("#email").clear().type(testPOM.generateEmail)
        cy.get("#password").clear().type(testPOM.generatePassword)
        cy.get('button.ws-v2-button-primary').contains("Log In").click();
        cy.contains("Confirm").click()
        cy.scrollTo(0, 500)
        cy.get("div.add-to-cart-text.desktop",{timeout:300000}).last().click()
        cy.get("#save-button").click()
        cy.get("#one").check()
        cy.get('[autocomplete="address-line1"]').clear().type("avbdhjr")
        cy.get('.street-address-line-2 > .default-input').type("dvhgsfyugsd")
        cy.get('#locality').type("dfjhgs")
        cy.get('.state > div > select').select("Georgia")
        cy.get('.zip-code > .default-input').type("41550")
        cy.get('#save-button').click()
        cy.get('#credit-card').check()
        //Handled Iframe here
        cy.get('[title="Secure card payment input frame"]').then(function(el){
            let body = el[0].contentDocument.body
            // let body = el[0].("body")
            cy.wrap(body).as("sunil")
            cy.get("@sunil").find('[name="cardnumber"]').type("4242 4242 4242 4242")
            cy.get("@sunil").find('[name="exp-date"]').type("03 34");
            cy.get("@sunil").find('[name="cvc"]').type("111");
            cy.get("@sunil").find('[name="postal"]').type("41550");
            cy.get('#stripe-button').click();
        })
        cy.get('._cta-button').click()
        // cy.get('[title="Secure card payment input frame"]').its("0.contentDocument.body").then((body)=>{
        //     cy.wrap(body).as("sunil")
        //     cy.get("@sunil").find('[name="cardnumber"]').type("4242 4242 4242 4242")
        //     cy.get("@sunil").find('[name="exp-date"]').type("03 34");
        //     cy.get("@sunil").find('[name="cvc"]').type("111");
        //     cy.get("@sunil").find('[name="postal"]').type("41550");
        //     cy.get('#stripe-button').click();
        // })
        // cy.frameLoaded('[title="Secure card payment input frame"]')
    
    
        // cy.iframe('[title="Secure card payment input frame"]').find('[name="cardnumber"]').type("4242 4242 4242 4242")

        // cy.get('[title="Secure card payment input frame"]').then((el)=>{
        //     cy.wrap(el[0].contentDocument.body).as("sunil")
        //     cy.get("@sunil").find('[name="cardnumber"]').type("4242 4242 4242 4242")
        // })
    })

})