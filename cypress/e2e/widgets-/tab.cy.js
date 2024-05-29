/// <reference types="cypress" />

describe('Tabs Functionality', () => {
    before(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/tabs', { headers: {"accept-Encoding": "gzip, deflate"}} );
    });

    it('Successfully switches between tab', () => {          
        cy.get('#demo-tab-origin')
          .click()
          .should('have.class', 'active')
          .and('be.visible');
        cy.wait(2000)
        cy.get('#demo-tabpane-origin').should('contain.text', 'Contrary to popular belief, Lorem Ipsum is not simply random text');
        

        cy.get('#demo-tab-use')
          .click()
          .should('have.class', 'active')
          .and('be.visible');
        cy.wait(2000)
        cy.get('#demo-tabpane-use').should('contain.text', 'It is a long established fact that a reader');

        cy.get('#demo-tab-more')          
          .should('have.class', 'disabled');

          cy.get('#demo-tab-what') 
          .click()           
          .should('have.class', 'active')
          .and('be.visible');

        cy.wait(2000)
        cy.get('#demo-tabpane-what > .mt-3').should('contain.text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
        
        
        
    });
    it('Successfully switches Use Tab', () => {          
        
    });
    it('Successfully switches More Tab', () => {          
        
    });
    it('Successfully switches What Tab', () => {          
        
    });
});
