describe('Accessibility Testing', () => {
    it('test accessibility violations', () => {
        cy.visit('https://www.gov.uk/calculate-your-holiday-entitlement/y')
        .a11y()
    })
})