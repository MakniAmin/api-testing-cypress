![Cypress Tests](https://github.com/MakniAmin/api-testing-cypress/actions/workflows/cypress.yml/badge.svg)


# API Testing Portfolio — Cypress

Automated API test suite for [reqres.in](https://reqres.in), a public REST API, built with Cypress.

## What this covers
- Full CRUD test coverage (GET, POST, PUT, PATCH, DELETE)
- Positive and negative test cases (404, missing fields, invalid data)
- Chained requests simulating a real user lifecycle
- Authentication flow testing (valid/invalid login)
- Custom Cypress commands for reusable API calls
- Fixture-based test data (no hardcoded payloads)
- CI pipeline via GitHub Actions — tests run on every push

## Tech stack
Cypress · JavaScript · GitHub Actions

## Run locally
\`\`\`bash
npm install
npx cypress open   # interactive
npx cypress run    # headless
\`\`\`

## Test strategy notes
- reqres.in is a mock API — POST/PUT/DELETE don't persist data, so assertions target
  response shape and status codes rather than actual state changes.
- Negative cases (404, 400) are tested with `failOnStatusCode: false` to inspect
  error responses instead of letting Cypress auto-fail.
- Structure separates `users` and `auth` domains for readability as the suite grows.

## What this covers
- Full CRUD test coverage (GET, POST, PUT, PATCH, DELETE)
- Positive and negative test cases (404, missing fields, invalid data)
- JSON schema validation (ajv) to enforce API response contracts
- Chained requests simulating a real user lifecycle
- Authentication flow testing (valid/invalid login)
- Custom Cypress commands for reusable API calls
- Fixture-based test data
- CI pipeline via GitHub Actions