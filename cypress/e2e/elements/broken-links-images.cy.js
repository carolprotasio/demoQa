/// <reference types="cypress" />

describe('Validate broken links- images Functionality', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/broken', { retryOnStatusCodeFailure: true, retryOnNetworkFailure: true });
    });
    it('Should detected a valid image', () => {
        cy.get('img:nth-child(3)')
          .should('be.visible')
          .invoke('prop', 'naturalWidth')
          .should('be.gt', 0)
        
    });
    it('Should detected a broken image', () => {
        cy.get('img:nth-child(7)')
          .should('be.visible')
          .and('have.prop', 'naturalWidth', 0);
        
    });
   /*  it('Should detected a Valid Link', () => {
        cy.get('a[href="http://demoqa.com"]')
          .click({force: true});
        cy.url().should('eq', 'https://demoqa.com/')
        
    });
    it.only('Should detected a Broken Link', () => {
        cy.get('a[href="http://the-internet.herokuapp.com/status_codes/500"]')
          .click({force: true});
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes/500')
        
    }); */
});