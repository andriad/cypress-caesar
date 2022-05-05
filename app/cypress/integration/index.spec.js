/// <reference types="cypress" />

describe('Hello World !', () => {
    beforeEach(() => {
      cy.visit('../../index.html');
    })

    it("should display a paragraph with Hello World !", () => {
        cy.get('p').should('have.text', 'Hello World !');
    })
})