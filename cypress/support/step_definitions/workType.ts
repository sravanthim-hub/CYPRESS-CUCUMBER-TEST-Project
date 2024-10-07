import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
Given ("I am on work type selection page", () => {
  cy.getByClass('govuk-fieldset__heading gem-c-radio__heading-text')
  .should('contain.text', 'Does the employee work irregular hours or for part of the year?')
})

When ("I select the work type {string} and continue", (work_type:string) => {
    cy.clickByValue(work_type)
    cy.clickContinueButton()
})
