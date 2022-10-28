describe("Toasts styles", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Adds success toast", () => {
    cy.addButtonClick();

    cy.checkColor("rgb(55, 226, 154)");
  });

  it("Adds error toast", () => {
    cy.selectVariant("error");

    cy.addButtonClick();

    cy.checkColor("rgb(226, 88, 55)");
  });

  it("Adds info toast", () => {
    cy.selectVariant("info");

    cy.addButtonClick();

    cy.checkColor("rgb(154, 64, 211)");
  });

  it("Adds warning toast", () => {
    cy.selectVariant("warning");

    cy.addButtonClick();

    cy.checkColor("rgb(244, 224, 72)");
  });

  it("Adds toast with custom color", () => {
    cy.get("#color").invoke("val", "#123456").trigger("change");

    cy.addButtonClick();

    cy.checkColor("rgb(55, 226, 154)");
  });
});
