Cypress.Commands.add("addButtonClick", () => {
  cy.get("button").click();
});

Cypress.Commands.add("checkToastsLength", (len) => {
  cy.get("#toasts-container > div > div > div > div > div").should(
    "have.length",
    len
  );
});

Cypress.Commands.add("selectVariant", (variant) => {
  cy.get("#variant").select(variant);
});

Cypress.Commands.add("checkColor", (color) => {
  cy.get("#toasts-container > div > div > div").should(
    "have.css",
    "background-color",
    color
  );
});
