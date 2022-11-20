

/// < reference types="cypress"/>
describe("API test suite",()=>{
    it("first test",()=>{
        cy.request("GET","https://reqres.in/api/users?page=2").then((res)=>{
            expect(res.status).to.deep.equal(200)
            cy.log(res.body.data[0].email)
            cy.log(res.headers.date)
            cy.log(res.headers)
        })
    })
})