describe("PUT /users/:id", () => {
  it("updates an existing user", () => {
    const updatedData = { name: "Amin Makni", job: "Senior QA Engineer" };

    cy.request("PUT", "/users/2", updatedData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.job).to.eq("Senior QA Engineer");
      expect(response.body).to.have.property("updatedAt");
    });
  });

  it("partially updates a user with PATCH", () => {
    cy.request("PATCH", "/users/2", { job: "QA Lead" }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.job).to.eq("QA Lead");
    });
  });
});