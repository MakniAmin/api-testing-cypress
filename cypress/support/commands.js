Cypress.Commands.add("apiCreateUser", (userData) => {
  return cy.request("POST", "/users", userData);
});

Cypress.Commands.add("apiGetUser", (id) => {
  return cy.request("GET", `/users/${id}`);
});