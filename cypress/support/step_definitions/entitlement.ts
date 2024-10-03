import { When } from '@badeball/cypress-cucumber-preprocessor'

When ("I select the entitlement type and continue", () => {
    cy.clickByValue('days-worked-per-week')
    cy.clickContinueButton()
})