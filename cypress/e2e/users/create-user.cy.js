describe("POST /users", () => {
  it("creates a new user with valid data", () => {
    cy.fixture("newUser").then((userData) => {
      cy.request("POST", "/users", userData).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(userData.name);
        expect(response.body).to.have.property("id");
        expect(response.body).to.have.property("createdAt");
      });
    });
  });
});