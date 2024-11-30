describe("Amazon Search", () => {
  it("should return results for a search query", () => {
    cy.visit("https://www.amazon.com");
    cy.get("#twotabsearchtextbox").type("laptop");
    cy.get("#nav-search-submit-button").click();

    cy.get(".s-main-slot .s-result-item").first().should("contain", "laptop");
  });
});
