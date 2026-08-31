describe("POST /login", () => {
  it("logs in successfully with valid credentials", () => {
    cy.fixture("validLogin").then((creds) => {
      cy.request("POST", "/login", creds).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("token");
      });
    });
  });

  it("fails login with missing password", () => {
    cy.request({
      method: "POST",
      url: "/login",
      body: { email: "peter@klaven" },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq("Missing password");
    });
  });
});