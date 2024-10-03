export const getByClass = (classValue: string):Cypress.Chainable => {
    return cy.get(`[class="${classValue}"`)
}

export const clickByValue = (value: string):Cypress.Chainable => {
    return cy.get(`[value="${value}"`).click()
}

export const clickContinueButton =():Cypress.Chainable =>{
    return cy.getByClass('gem-c-button govuk-button gem-c-button--bottom-margin')
    .click()
}

export const getById =(id:string):Cypress.Chainable =>{
    return cy.get(`[id="${id}"]`)
}