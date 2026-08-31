describe("GET /users", () => {
  it("returns a paginated list of users", () => {
    cy.request("GET", "/users?page=2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("array");
      expect(response.body.page).to.eq(2);
    });
  });

  it("returns a single user by valid ID", () => {
    cy.request("GET", "/users/2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property("email");
      expect(response.body.data.id).to.eq(2);
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