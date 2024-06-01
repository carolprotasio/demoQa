/// <reference types="cypress" />

describe('Validate Frames Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/frames');
        cy.wait(200);
    });
    it('Validate bigger frame successfully', () => {
        cy.get('#frame1').then(($frame) => {
            const $iframeBody = $frame.contents().find('body');

            cy.wrap($iframeBody).find('h1').should('have.text', 'This is a sample page');
        });
        
    });
    it('Validate smaller frame successfully', () => {
        cy.get('#frame1').then(($frame) => {
            const $iframeBody = $frame.contents().find('body');

            cy.wrap($iframeBody).find('h1').should('have.text', 'This is a sample page');
        });
        
    });
});