describe("GET /users", () => {
  it("returns a paginated list of users matching schema", () => {
    cy.fixture("schemas/userListSchema").then((schema) => {
      cy.request("GET", "/users?page=2").then((response) => {
        expect(response.status).to.eq(200);
        cy.validateSchema(response.body, schema);
      });
    });
  });

  it("returns a single user matching schema", () => {
    cy.fixture("schemas/userSchema").then((schema) => {
      cy.request("GET", "/users/2").then((response) => {
        expect(response.status).to.eq(200);
        cy.validateSchema(response.body, schema);
      });
    });
  });

  it("returns 404 for a non-existent user", () => {
    cy.request({
      method: "GET",
      url: "/users/999",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});