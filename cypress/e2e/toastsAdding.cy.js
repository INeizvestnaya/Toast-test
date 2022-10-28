describe("Adding and deleting toasts", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("adds adds toast with correct label", () => {
    const toastLabel = "success toast";

    cy.get("input").first().type(toastLabel);
    cy.addButtonClick();

    cy.get("#toasts-container").should("have.length", 1);
    cy.get("#toasts-container > div > div > div > div > div").should(
      "have.text",
      toastLabel
    );
  });

  it("manually deletes toast", () => {
    cy.addButtonClick();
    cy.addButtonClick();

    cy.checkToastsLength(2);

    cy.get("#toasts-container > div > div > div > img").first().click();

    cy.checkToastsLength(1);
  });

  it("deletes tests automatically when deleteTime is specified", () => {
    cy.get("#deleteTime").select("3");
    cy.addButtonClick();

    cy.checkToastsLength(1);

    cy.wait(3100);

    cy.checkToastsLength(0);
  });

  it("adds maximum 3 toasts", () => {
    cy.addButtonClick();
    cy.addButtonClick();
    cy.addButtonClick();
    cy.addButtonClick();

    cy.checkToastsLength(3);
  });
});
