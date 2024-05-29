/// <reference types="cypress" />

describe('Modal Dialogs - Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/modal-dialogs');
    });
    it('Validate Small Modal - Successfully', () => {
        cy.get('#showSmallModal').click();

        cy.get('.modal-content').within(() => {
            cy.get('.modal-body').should('have.text', 'This is a small modal. It has very less content');
            cy.get('.modal-footer button').contains('Close').click();
        });
    });
    it.only('Validate Large Modal - Successfully', () => {
        cy.get('#showLargeModal').click();

        cy.get('.modal-content').within(() => {
            cy.get('#example-modal-sizes-title-lg').should('have.text', 'Large Modal');
            cy.get('#closeLargeModal').contains('Close').click();
        });
    });
        
});
