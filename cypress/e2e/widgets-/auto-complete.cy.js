/// <reference types="cypress" />

describe('Auto Complete Functionality', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/auto-complete', { headers: {"accept-Encoding": "gzip, deflate"}});
    });
    it.only('Multiples color names - Successfully', () => {
        const name1 = 'g';
        const name2 = 'y';
        const nameSug1 = 'Green';
        const nameSug2 = 'Yellow';

        cy.get('#autoCompleteMultipleContainer').type(name1, { delayed: 200 });
        cy.get('.auto-complete__menu')
        .should('be.visible', { timeout: 10000 })
        .contains(nameSug1)
        .click();

        cy.get('#autoCompleteMultipleContainer').type(name2, { delayed: 200 });
        cy.get('.auto-complete__menu')
        .should('be.visible', { timeout: 10000 })
        .contains(nameSug2)
        .click();
        
        cy.get('.auto-complete__multi-value')
        .should('be.visible')
        .should('contain', nameSug1)
        .and('contain', nameSug2);
       
        
    });
    it('Single color names - Successfully', () => {
        const typedText = 'b'; 
        const suggestedName = 'Blue'; 
        cy.get('#autoCompleteSingle').type(typedText, { delay: 200 });
    
        cy.get('.auto-complete__menu')
          .should('be.visible', { timeout: 10000 })
          .contains(suggestedName)
          .click();
        
         cy.get('.auto-complete__single-value')
          .should('have.text', suggestedName);  
    });
});