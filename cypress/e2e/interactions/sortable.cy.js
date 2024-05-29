/// <reference types="cypress" />

import 'cypress-drag-drop';


describe('Sortable Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/sortable', { headers: {"accept-Encoding": "gzip, deflate"}} );
          
        cy.wait(200);
      });
    it.only('Validate elements on the Grid - Successfully', () => {
        cy.get('#demo-tab-grid').click();
        cy.get('.create-grid').should('be.visible');

        cy.get('.create-grid > div').first().drag('.create-grid > div:last-child', {force: true});
        cy.wait(1000);
        cy.get('.create-grid > div').last().should('have.text', 'One');
        
        
    });
    it('Validate elements on the List - Successfully', () => {
        cy.get('#demo-tab-list').click();

        
    });
});