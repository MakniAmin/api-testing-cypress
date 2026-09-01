import Ajv from "ajv";

Cypress.Commands.add("apiCreateUser", (userData) => {
  return cy.request("POST", "/users", userData);
});

Cypress.Commands.add("apiGetUser", (id) => {
  return cy.request("GET", `/users/${id}`);
});

Cypress.Commands.add("validateSchema", (data, schema) => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    cy.log("Schema validation errors:", JSON.stringify(validate.errors));
  }

  expect(valid, JSON.stringify(validate.errors)).to.be.true;
});