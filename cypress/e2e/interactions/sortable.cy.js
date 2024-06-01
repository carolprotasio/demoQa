/// <reference types="cypress" />

import 'cypress-drag-drop';


describe('Sortable Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/sortable', { headers: {"accept-Encoding": "gzip, deflate"}} );
          
        cy.wait(200);
      });
    it('Validate elements on the Grid - Successfully', () => {
        cy.get('#demo-tab-grid').click();
        cy.get('.create-grid').should('be.visible');

        cy.get('.create-grid > div').first().trigger('mousedown', { which: 1, button: 0 });
        cy.wait(200);
        cy.get('.create-grid > div').last().trigger('mousemove').trigger('mouseup');
        cy.wait(200);
        cy.get('.create-grid > div').last().should('have.text', 'One');
        
        
    });
    it('Validate elements on the List - Successfully', () => {
        cy.get('#demo-tab-list').click();
        cy.get('#demo-tabpane-list > div').should('be.visible');

        cy.get('#demo-tabpane-list > div > div').first().trigger('mousedown', { which: 1, button: 0 });
        cy.wait(200);
        cy.get('#demo-tabpane-list > div > div')
          .last()
          .trigger('mousemove')
          .trigger('mouseup');
        cy.wait(200);

        cy.get('#demo-tabpane-list > div')
          .last()
          .invoke('text')
          .should('contain', 'One');
    });
});