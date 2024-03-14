describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid = "increment"]').click();
    cy.get('[data-testid = "count-value"]').contains("Count: 1");
    cy.get('[data-testid = "decrement"]').click();
    cy.get('[data-testid = "count-value"]').contains("Count: 0");
  });
});
