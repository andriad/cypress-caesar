/// <reference types="cypress" />

describe('LightBox test', () => {
    beforeEach(() => {
      cy.visit('../../lightbox/lightbox.html');
    })

    it("should open a lightbox", () => {
        cy.dataCy('openLightbox').click()
        cy.dataCy('openLightbox').should('be.visible')
    })

    it("should close a lightbox", () => {
        cy.dataCy('openLightbox').click()
        cy.dataCy('closeLightbox').click()
        cy.get('body').click(0,0);
        cy.dataCy('closeLightbox').should('not.be.visible')
    })

    it("should add a like", () => {
        cy.dataCy('openLightbox').click()
        cy.dataCy('like').click()
        cy.dataCy('likesCountOverlay').should('contain', '1')
        cy.dataCy('likesCount').should('contain', '1')
    })

    it("should remove a like", () => {
        cy.dataCy('openLightbox').click()
        cy.dataCy('like').click()
        cy.dataCy('likesCountOverlay').should('contain', '1')
        cy.dataCy('likesCount').should('contain', '1')
        cy.dataCy('dislike').click()
        cy.dataCy('likesCountOverlay').should('contain', '0')
        cy.dataCy('likesCount').should('contain', '0')
    })

    it("should add a comment", () => {
        cy.dataCy('openLightbox').click()
        cy.dataCy('commentText').type('Pas mal le test')
        cy.dataCy('submit').click()
        cy.dataCy('comment').should('have.text', 'Pas mal le test')
    })

    it("submit should be disabled", () => {
        cy.dataCy('openLightbox').click()
        cy.dataCy('submit').should('be.disabled')
    })

    it("should hide comments", () => {
        cy.dataCy('openLightbox').click()
        cy.dataCy('commentText').type('Pas mal le test')
        cy.dataCy('submit').click()
        cy.dataCy('comment').should('have.text', 'Pas mal le test')
        cy.dataCy('hideComments').click()
        cy.dataCy('commentsSection').should('not.be.visible')
    })

    it("should count 1 comment", () => {
        cy.dataCy('openLightbox').click()
        cy.dataCy('commentText').type('Pas mal le test')
        cy.dataCy('submit').click()
        cy.dataCy('comment').should('have.text', 'Pas mal le test')
        cy.dataCy('hideComments').should('contain', '1')
        cy.dataCy('commentsCountOverlay').should('contain', '1')
    })

    it("should contain s", () => {
        cy.dataCy('openLightbox').click()
        cy.dataCy('commentText').type('Pas mal le test')
        cy.dataCy('submit').click()
        cy.dataCy('commentText').type('Pas mal le deuxieme test')
        cy.dataCy('submit').click()
        cy.dataCy('hideComments').should('contain', 'comments')
        cy.dataCy('commentsCountOverlay').should('contain', '2')
    })

    it("should delete the second comment", () => {
        cy.dataCy('openLightbox').click()
        cy.dataCy('commentText').type('1')
        cy.dataCy('submit').click()
        cy.dataCy('commentText').type('2')
        cy.dataCy('submit').click()
        cy.dataCy('commentText').type('3')
        cy.dataCy('submit').click()
        cy.dataCy('hideComments').should('contain', 'comments')
        cy.dataCy('deleteComment').eq(1).click()
        cy.dataCy('commentsCountOverlay').should('contain', '2')

    })
})

