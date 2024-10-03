import { getByClass,
    clickByValue, 
    clickContinueButton,
    getById } from "./helpers";

import { a11y } from "./step_definitions/a11y";

declare global {
    namespace Cypress {
        interface Chainable {
            getByClass: typeof getByClass
            clickByValue: typeof clickByValue
            clickContinueButton: typeof clickContinueButton
            getById: typeof getById
            a11y: typeof a11y
        }
    }
}

Cypress.Commands.add('getByClass', getByClass)
Cypress.Commands.add('clickByValue', clickByValue)
Cypress.Commands.add('clickContinueButton', clickContinueButton)
Cypress.Commands.add('getById', getById)
Cypress.Commands.add('a11y', a11y)