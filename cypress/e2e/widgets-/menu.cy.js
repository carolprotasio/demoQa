/// <reference types="cypress" />

import 'cypress-real-events/support';


describe('Menu Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/menu', { headers: {"accept-Encoding": "gzip, deflate"}} );
    });

    it('Validate Main Item 1 Successfully', () => {   
        cy.get('#nav > li:nth-child(1) > a').click();
        cy.url().should('eq', 'https://demoqa.com/menu#');
    });

    it('Validate Main Item 2 and Sub Sub Items Successfully', () => {   
        
        cy.get('#nav > li:nth-child(2) > a')
            .realHover();
        cy.wait(1000);  

        
        cy.get('#nav > li:nth-child(2) > ul')
            .should('exist')
            .and('be.visible');
        
        cy.get('#nav > li:nth-child(2) > ul > li:nth-child(3) > a')
            .realHover();
        cy.wait(1000);  

        cy.get('#nav > li:nth-child(2) > ul > li:nth-child(3) > ul')
            .should('exist')
            .and('be.visible');

        // Verify Sub Sub Item 1 is visible
        cy.get('#nav > li:nth-child(2) > ul > li:nth-child(3) > ul > li:nth-child(1)')
            .should('be.visible');
        
        cy.get('#nav > li:nth-child(2) > ul > li:nth-child(3) > ul > li:nth-child(2)')
            .should('be.visible');
    });
    it.only('Validate Main Item 1 Successfully', () => {   
        cy.get('#nav > li:nth-child(3) > a')
          .click();
        cy.url().should('eq', 'https://demoqa.com/menu#');
        
    });
});
