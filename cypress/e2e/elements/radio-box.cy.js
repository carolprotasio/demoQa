/// <reference types="cypress" />

describe('Radio Button Functionality', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/radio-button');
    })
    it('Check Radio Box YES successfully', () => {
        cy.get("label[for='yesRadio']").click();
        cy.get('.text-success').should('have.text', "Yes");
        
    });
    it('Check Radio Box Impressive successfully', () => {
        cy.get("label[for='impressiveRadio']").click();
        cy.get('.text-success').should('have.text', "Impressive");
        
    });
});