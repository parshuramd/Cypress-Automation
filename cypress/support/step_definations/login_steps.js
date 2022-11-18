// import cypress from "cypress"
import {Before,Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"
Given("I access admin portal",()=>{
    cy.visit("https://admin-demo.nopcommerce.com/")
})

When("I enter a username",()=>{
    cy.get("#Email").clear().type("admin@yourstore.com")
})
And("I enter a password",()=>{
    cy.get("#Password").clear().type("admin")
})
And("I click login",()=>{
    cy.get('[type="submit"]').click()
})
Then("I should login in successfully",()=>{
    
    cy.get("div.content-header > h1").should("contain","Dashboard")
})