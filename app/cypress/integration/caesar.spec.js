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

        cy.dataCy('cypher-key').clear().type(3);
        cy.dataCy('cypher-message').type('A');
        cy.dataCy('cypher-btn').click();
        cy.dataCy('cypher-result').should('have.text', 'D');
    })
})