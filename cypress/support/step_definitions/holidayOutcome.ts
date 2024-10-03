import { Then } from '@badeball/cypress-cucumber-preprocessor'
Then ("I am on holiday entitlement outcome page", () => {
  cy.getByClass('gem-c-title__text govuk-heading-xl')
  .should('contain.text','Information based on your answers')
})

Then("holidays calculated matches {string}", (expected_number_of_holidays:string) => {
    cy.getByClass('summary')
    .should('contain.text', `The statutory holiday entitlement is ${expected_number_of_holidays} days holiday.`)
})