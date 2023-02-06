/// < reference types="cypress"/>
describe("GraphQL API test", () => {
  it("should fetch user data", () => {
    const query = `
      query{
  
        location(locationId:1072) {
          id
          name
          type
          dimension
          created
        }  
        }
      `;

    cy.request({
      url: "https://rahulshettyacademy.com/gq/graphql",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }).then((response) => {
      cy.log(response.body.data.location.id);
    });
  });
});
