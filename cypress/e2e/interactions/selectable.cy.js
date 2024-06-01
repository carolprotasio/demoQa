/// <reference types="cypress" />

describe('Selectable Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/selectable', { headers: {"accept-Encoding": "gzip, deflate"}} );
          
        cy.wait(200);
      });
    it('Grid Selectable- Successfully', () => {
        cy.get('#demo-tab-grid').click();
        cy.get('#listContainer > div').should('be.visible');

        cy.get('#row1 > li:nth-child(1)').click().should('have.class', 'active');
        cy.get('#row2 > li:nth-child(3)').click().should('have.class', 'active');
        cy.get('#row3 > li:nth-child(2)').click().should('have.class', 'active');
        
    });
    it.only('Grid Selectable- Successfully', () => {
        cy.get('#demo-tab-list').click();
        cy.get('#demo-tabpane-list').should('be.visible');

        cy.get('#verticalListContainer > li:nth-child(1)').click().should('have.class', 'active');
        cy.get('#verticalListContainer > li:nth-child(3)').click().should('have.class', 'active');
        
        
    });
});
