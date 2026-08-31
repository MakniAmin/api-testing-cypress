describe("User lifecycle - chained requests", () => {
  let createdUserId;

  it("creates a user, then fetches, updates, and deletes it in sequence", () => {
    cy.fixture("newUser").then((userData) => {
      cy.request("POST", "/users", userData).then((createRes) => {
        expect(createRes.status).to.eq(201);
        createdUserId = createRes.body.id;

        cy.request("GET", `/users/2`).then((getRes) => {
          expect(getRes.status).to.eq(200);

          cy.request("PUT", `/users/2`, { job: "QA Automation Engineer" }).then((updateRes) => {
            expect(updateRes.status).to.eq(200);
            expect(updateRes.body.job).to.eq("QA Automation Engineer");

            cy.request("DELETE", `/users/2`).then((deleteRes) => {
              expect(deleteRes.status).to.eq(204);
            });
          });
        });
      });
    });
  });
});