import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given ("I am on calculate holiday entitlement page", () => {
  cy.visit("https://www.gov.uk/calculate-your-holiday-entitlement")
})

Given ("I accept cookies", () => {
  cy.get('[data-accept-cookies="true"]').click()
})

Then ("I start the application", () => {
  cy.get('[class="gem-c-button govuk-button govuk-button--start"]').click()
})