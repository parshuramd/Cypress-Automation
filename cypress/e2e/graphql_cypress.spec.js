/// < reference types="cypress"/>
import { it, Runner } from 'mocha';
context('GraphQL API test', () => {
  afterEach(function () {
    if (!this.currentTest.state.toString().toLowerCase().match('pending')) {
      cy.log('pending');
    }
    if (this.currentTest.state.toString().toLowerCase().match('fail')) {
      cy.log('pass');
    }
  });
  it('should fetch user data', () => {
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
      url: 'https://rahulshettyacademy.com/gq/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }).then((response) => {
      cy.log(response.body.data.location.id);
    });
  });
  it.only('Second test case', () => {
    // cy.log(this.currentTest);
    cy.get('#33');
  });
});
