describe("Amazon Checkout", () => {
  it("should proceed to checkout", () => {
    cy.visit("https://www.amazon.com");
    cy.get("#twotabsearchtextbox").type("laptop");
    cy.get("#nav-search-submit-button").click();

    cy.get(".s-main-slot .s-result-item")
      .first()
      .find(".s-add-to-cart-button")
      .click();
    cy.get("#nav-cart").click();
    cy.get('[name="proceedToRetailCheckout"]').click();

    cy.get("#sc-subtotal-amount-activecart").should("contain", "$");
  });
});
