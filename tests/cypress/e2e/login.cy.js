describe("Amazon Login", () => {
  it("should log in successfully", () => {
    cy.visit("https://www.amazon.com");
    cy.get("#nav-link-accountList").click();
    cy.get("#ap_email").type("your-email@example.com");
    cy.get("#continue").click();
    cy.get("#ap_password").type("your-password");
    cy.get("#signInSubmit").click();

    cy.get("#nav-link-accountList-nav-line-1").should(
      "contain",
      "Hello, YourName"
    );
  });
});
