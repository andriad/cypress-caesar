/// <reference types="cypress" />

describe('Caesar test', () => {
    beforeEach(() => {
      cy.visit('../../caesar/caesar.html');
    })

    it("should complete caesar form and show result", () => {
        cy.get('input[name=cypher-key]').clear().type(3);
        cy.get('textarea').type('A');
        cy.get('button').click();
        cy.get('#result').should('have.text', 'D');
    })
})