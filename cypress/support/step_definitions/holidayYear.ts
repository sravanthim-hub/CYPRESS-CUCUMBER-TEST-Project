import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
When ("I select the holiday year type and continue", () => {
  cy.clickByValue('full-year')
  .clickContinueButton()
})