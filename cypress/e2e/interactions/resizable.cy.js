/// <reference types="cypress" />

describe('Selectable Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/resizable', { headers: {"accept-Encoding": "gzip, deflate"}} );
          
        cy.wait(200);
      });
    it('Limit Size- Successfully', () => {
        cy.get('#resizableBoxWithRestriction').should('be.visible').as('resizableElement')
       
        cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
            .trigger('mousedown', { clientX: 200, clientY: 200, force: true }) 
            .trigger('mousemove', { clientX: 500, clientY: 300, force: true }) 
            .trigger('mouseup', { force: true }); 

        
        cy.get('@resizableElement').should('have.css', 'width', '500px');
        cy.get('@resizableElement').should('have.css', 'height', '300px');
        
    });
    it.only('Unlimited Size- Successfully', () => {
        cy.get('#resizable').should('be.visible');
        cy.get('#resizable > .react-resizable-handle')
          .trigger('mousedown', {clientX: 200, clientY: 200, force: true } )
          .trigger('mousemove', { clientX: 700, clientY: 400, force: true })
          .trigger('mouseup', { force: true });
        
        cy.get('#resizable').should('have.css', 'width', '700px');
        cy.get('#resizable').should('have.css', 'height', '400px');

     
        
        
    });
});
