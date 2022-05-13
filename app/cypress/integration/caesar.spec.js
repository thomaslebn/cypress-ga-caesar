/// <reference types="cypress" />

context('Caesar', () => {
    beforeEach(() => {
        cy.visit('../../caesar.html')
    })

    it('complete caesar form with Hello World! key: 3', () => {
        cy.get('[data-cy=cypher-key]').clear().type(3);
        cy.get('[data-cy=cypher-msg]').type('Hello World!');
        cy.get('[data-cy=cypher-btn]').click();
        cy.get('[data-cy=cypher-result]').contains('Khoor Zruog!');
    })
})