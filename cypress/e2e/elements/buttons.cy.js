/// <reference types="cypress" /> 

describe('Validate Buttons Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/buttons');
    });
    it('Double click - Successfully', () => {
        cy.get('#doubleClickBtn').dblclick();      

        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
    });
    it('Right click - Successfully', () => {
        cy.get('#rightClickBtn').rightclick();     

        cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
    });
    it('Click Me - Successfully', () => {
        cy.contains('button', /^Click Me$/).click();
        cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
    });
});