/// <reference types="cypress" />

describe('Browser Windows Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/browser-windows');
    });

    it('New Tab - Successfully', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        cy.get('#tabButton').click();

        cy.get('@windowOpen').should('be.called');
        cy.get('@windowOpen').then((stub) => {
            const newTabUrl = stub.args[0][0];
            cy.visit(newTabUrl);
        });
        cy.get('#sampleHeading').should('have.text', 'This is a sample page');
    });
    it('New Window - Successfully', () => {
        cy.window().then((win) => { 
            cy.stub(win, 'open').as('windowOpen');
        });
        cy.get('#windowButton').click();

        cy.get('@windowOpen').should('be.called');
        cy.get('@windowOpen').then((stub) => {
            const newWindow = stub.args[0][0];
            cy.visit(newWindow);
        });
        cy.get('#sampleHeading').should('have.text', 'This is a sample page');
     
    });
    it('New Window Message - Successfully', () => {
        cy.window().then((win) => { 
            cy.stub(win, 'open').as('windowOpen');
        });
        cy.get('#messageWindowButton').click();

        cy.get('@windowOpen').should('be.called');
        cy.get('@windowOpen').then((stub) => {
            const newWindow = stub.args[0][0];
            cy.visit(newWindow);
            cy.get('body', { timeout: 10000 }).should('exist');
            
        });
              
    });
});
