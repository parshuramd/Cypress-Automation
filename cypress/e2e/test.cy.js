
/// < reference types = "cypress"/>
// import { expect } from "chai";
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
        cy.intercept("GET","/shop/api/posts?page=1").as("api")
        cy.visit("https://qatest.commentsoldrt.com/webstore-login?destination=/account")
        cy.get("#email").clear().type(testPOM.generateEmail)
        cy.get("#password").clear().type(testPOM.generatePassword)
        cy.get('button.ws-v2-button-primary').contains("Log In").click();
        cy.contains("Confirm").click()
        // cy.wait("@api").then(({response,request})=>{
        //     expect(response.statusCode).to.eq(200)
        // })
        // cy.get("div.add-to-cart-text.desktop",{timeout:300000}).first().trigger("mousedown")
        cy.scrollTo(0, 500)
        cy.get("div.add-to-cart-text.desktop",{timeout:300000}).first().click()
        cy.get('svg[role="presentation"]').click();
        cy.contains("M").click();
        cy.get("#save-button").click()
        cy.get("#one").check()
        cy.get('[autocomplete="address-line1"]').clear().type("avbdhjr")
        cy.get('.street-address-line-2 > .default-input').type("dvhgsfyugsd")
        cy.get('#locality').type("dfjhgs")
        cy.get('.state > div > select').select("Georgia")
        cy.get('.zip-code > .default-input').type("41550")
        
        cy.get('#save-button').click()
        cy.get('#credit-card').check()
        // cy.get("iframe").then((el)=>{
        //     let body = el.contents().find("body")
        //     cy.wrap(body).as("sunil")
        //     cy.get("@sunil").find('[name="cardnumber"]').type("4242 4242 4242 4242")
        // })
        cy.get("iframe").invoke("removeAttr","src")
        cy.frameLoaded()
        cy.frameLoaded('[name="cardnumber"]',{timeout:10000}).type("4242 4242 4242 4242")
        cy.frameLoaded('[name="exp-date"]').type("0723")
        cy.frameLoaded('[name="cvc"]').type("111")
        cy.frameLoaded('[name="postal"]').type("41550")
    })
})