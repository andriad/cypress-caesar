/// <reference types="cypress" />

describe('LightBox test', () => {
    beforeEach(() => {
      cy.visit('../../lightbox/lightbox.html');
    })

    it("should open a lightbox", () => {
        cy.get('div[data-cy=openLightbox]').click()
        cy.get('div[data-cy=openLightbox]').should('be.visible')
    })

    it("should close a lightbox", () => {
        cy.get('div[data-cy=openLightbox]').click()
        cy.get('div[data-cy=closeLightbox]').click()
        cy.get('body').click(0,0);
        cy.get('div[data-cy=closeLightbox]').should('not.be.visible')
    })

    it("should add a like", () => {
        cy.get('div[data-cy=openLightbox]').click()
        cy.get('[data-cy=like]').click()
        cy.get('[data-cy=likesCountOverlay]').should('contain', '1')
        cy.get('[data-cy=likesCount]').should('contain', '1')
    })

    it("should remove a like", () => {
        cy.get('div[data-cy=openLightbox]').click()
        cy.get('[data-cy=like]').click()
        cy.get('[data-cy=likesCountOverlay]').should('contain', '1')
        cy.get('[data-cy=likesCount]').should('contain', '1')
        cy.get('[data-cy=dislike]').click()
        cy.get('[data-cy=likesCountOverlay]').should('contain', '0')
        cy.get('[data-cy=likesCount]').should('contain', '0')
    })

    it("should add a comment", () => {
        cy.get('div[data-cy=openLightbox]').click()
        cy.get('[data-cy=commentText]').type('Pas mal le test')
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=comment]').should('have.text', 'Pas mal le test')
    })

    it("submit should be disabled", () => {
        cy.get('div[data-cy=openLightbox]').click()
        cy.get('[data-cy=submit]').should('be.disabled')
    })

    it("should hide comments", () => {
        cy.get('div[data-cy=openLightbox]').click()
        cy.get('[data-cy=commentText]').type('Pas mal le test')
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=comment]').should('have.text', 'Pas mal le test')
        cy.get('[data-cy=hideComments]').click()
        cy.get('[data-cy=commentsSection]').should('not.be.visible')
    })

    it("should count 1 comment", () => {
        cy.get('div[data-cy=openLightbox]').click()
        cy.get('[data-cy=commentText]').type('Pas mal le test')
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=comment]').should('have.text', 'Pas mal le test')
        cy.get('[data-cy=hideComments]').should('contain', '1')
        cy.get('[data-cy=commentsCountOverlay]').should('contain', '1')
    })

    it("should contain s", () => {
        cy.get('div[data-cy=openLightbox]').click()
        cy.get('[data-cy=commentText]').type('Pas mal le test')
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=commentText]').type('Pas mal le deuxieme test')
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=hideComments]').should('contain', 'comments')
        cy.get('[data-cy=commentsCountOverlay]').should('contain', '2')
    })

    it("should delete the second comment", () => {
        cy.get('div[data-cy=openLightbox]').click()
        cy.get('[data-cy=commentText]').type('1')
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=commentText]').type('2')
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=commentText]').type('3')
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=hideComments]').should('contain', 'comments')
        cy.get('[data-cy=deleteComment]').eq(1).click()
        cy.get('[data-cy=commentsCountOverlay]').should('contain', '2')

    })
})

