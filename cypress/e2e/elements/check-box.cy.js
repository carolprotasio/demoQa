/// <reference types="Cypress" /> 

describe('Check Box Functionality', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/checkbox');
    });
    it('Checked on Office box Successfully- ', () => {                
        
        cy.get("button[title='Expand all']", {force: true} ).click()
        cy.get("label[for='tree-node-office'] span[class='rct-title']")
          .should('contain.text', 'Office')
          .click();
        cy.get('.rct-option-collapse-all').click();
        
        cy.get('#result').invoke('text').should('include', 'office')
        

    });
    it('Checked on Desktop box Successfully- ', () => {                
        
        cy.get("button[title='Expand all']", {force: true} ).click()
        cy.get("#tree-node > ol > li > ol > li:nth-child(1) > span")
          .should('contain.text', 'Desktop')
          .click();
        cy.get('.rct-option-collapse-all').click();
        
        cy.get('#result').invoke('text').should('include', 'desktop')
        

    });
    it('Checked on Documents/WokSpace box Successfully- ', () => {                
        
        cy.get("button[title='Expand all']", {force: true} ).click()
        cy.get("#tree-node > ol > li > ol > li:nth-child(2) > span")
          .should('contain.text', 'Documents')
          .click();
        cy.get('#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > span > label > span.rct-checkbox')
          .click();
        cy.get('.rct-option-collapse-all').click();
        
        cy.get('#result').invoke('text').should('include', 'workspace')
        

    });
    it('Checked on Download box Successfully- ', () => {                
        
        cy.get("button[title='Expand all']", {force: true} ).click()
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1)')
          .should('contain.text', 'Downloads')
          .click();
        cy.get('.rct-option-collapse-all').click();
        
        cy.get('#result').invoke('text').should('include', 'downloads')
        

    });
});