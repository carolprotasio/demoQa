/// <reference types="cypress" />

describe('Dynamic Properties - Functionality', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/dynamic-properties');
    });
    it('Should get Dynamic ID', () => {
        cy.contains('p', 'This text has random Id').should('be.visible');
       
    });
    it('Should enable the button after 5 seconds', () => {
        
        cy.get('#enableAfter').should('be.visible');          
        cy.wait(6000)
        cy.get('#enableAfter').should('be.enabled');
    });
    it('Should Change Color after 5 seconds', () => {
        
        cy.get('#colorChange').should('be.visible');          
        cy.wait(6000)
        cy.get('#colorChange').should('have.css', 'color','rgb(220, 53, 69)');
    });
    it('Should be Visible after 5 seconds', () => {
        
        cy.get('#visibleAfter').should('exist');          
        cy.wait(6000)
        cy.get('#visibleAfter').should('be.visible');
    });
});