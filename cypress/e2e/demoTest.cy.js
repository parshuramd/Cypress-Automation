/// <reference types = "cypress"/>
import * as data from "../fixtures/example.json";
describe("", () => {
  it("Visit URL", () => {
    let myName = "Parshuram";
    let infoObjet = {
      ...data.info,
      myInformation: {
        ...data.info.myInformation,
        myName: myName,
      },
    };
    cy.log(infoObjet);
  });
});
