/// <reference types="cypress" />



describe('Tool Tips Functionality - Hoover', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('https://demoqa.com/tool-tips', { headers: {"accept-Encoding": "gzip, deflate"}} );
    });

    it('Successfully hoover over a button', () => {
      cy.get('#toolTipButton').trigger('mouseover');

      cy.get('.tooltip-inner')
        .should('be.visible')
        .and('contain.text', 'You hovered over the Button')
    });
    it('Successfully hoover over Input Text', () => {
      cy.get('#toolTipTextField').trigger('mouseover');

      cy.get('.tooltip-inner')
      .should('be.visible')
      .and('contain.text', 'You hovered over the text field');

     
    });
    it('Successfully hoover over text', () => {
      cy.get('#texToolTopContainer > :nth-child(1)').trigger('mouseover');

      cy.get('.tooltip-inner')
      .should('be.visible')
      .and('contain.text', 'You hovered over the Contrary') 

     
    });
    it.only('Successfully hoover over numbers', () => {
      cy.get('#texToolTopContainer > :nth-child(2)').trigger('mouseover');

      cy.get('.tooltip-inner')
      .should('be.visible')
      .and('contain.text', 'You hovered over the 1.10.32') 

     
    });
});
