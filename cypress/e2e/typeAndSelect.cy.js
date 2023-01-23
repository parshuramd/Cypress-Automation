describe("cypress", () => {
  it("type", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.typeAndSelect("input#autocomplete", "benin", "benin");
  });
});
