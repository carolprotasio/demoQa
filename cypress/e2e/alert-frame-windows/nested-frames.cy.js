/// <reference types="cypress" />

describe('Nested Frames - Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/nestedframes');
        cy.wait(200);
    });
    it('Validate Nested Frame - successfully', () => {
        cy.get('#frame1').then($frame => {
            const $body = $frame.contents().find('body');

            cy.wrap($body).should('contain', 'Parent frame')

           cy.wrap($body).find('iframe').then($childFrame => {
                const $childBody = $childFrame.contents().find('body');

                cy.wrap($childBody).should('contain', 'Child Iframe');
            }); 
        });
  
    });
});