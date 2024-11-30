describe("Amazon Cart", () => {
  it("should add a product to the cart", () => {
    cy.visit("https://www.amazon.com");
    cy.get("#twotabsearchtextbox").type("laptop");
    cy.get("#nav-search-submit-button").click();

    cy.get(".s-main-slot .s-result-item")
      .first()
      .find(".s-add-to-cart-button")
      .click();

    cy.get("#nav-cart-count").should("not.have.text", "0");
  });
});
