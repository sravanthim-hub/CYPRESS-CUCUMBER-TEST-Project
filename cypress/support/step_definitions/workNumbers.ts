import { When } from '@badeball/cypress-cucumber-preprocessor'
When ("I enter the number of days worked per week {string}", (number_of_days: string) => {
  cy.getById('response')
  .type(number_of_days)
  .clickContinueButton()
})