/// <reference types="cypress" />

import faker from "faker";

describe('', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/alerts');
    });
    it('Click button to see alert successfully', () => {
        cy.get('#alertButton').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('You clicked a button')
            cy.get('button').contains('OK').click();
        });
    });
    it('Button click, alert will appear after 5 seconds  successfully', () => {
        cy.get('#timerAlertButton').click();
        cy.wait(6000)
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('You clicked a button')
            cy.get('button').contains('OK').click();
        });
    });
    it('YES - Button click, confirm box will appear successfully', () => {
        cy.get('#confirmButton').click();
        cy.wait(6000)
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('Do you confirm action?')
            cy.wait(4000)
            cy.get('button').contains('OK').click();
            cy.get('#confirmResult').should('contains', "Ok");
        });
        
    });
    it('CANCEL - Button click, confirm box will appear successfully', () => {
        cy.get('#confirmButton').click();
        cy.wait(6000)
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('Do you confirm action?')
            cy.wait(4000)
            cy.get('button').contains('Cancelar').click();
            cy.get('#confirmResult').should('contains', "Cancelar");
        });
        
    });
    
    it('YES - on button click, prompt box will appear - successfully', () => {
        cy.get('#promtButton').click();
        
        cy.on('window:prompt', (promptText) => {
            expect(promptText).to.equal('Please enter your name');

            const fakeName = faker.name.firstName();
            promptCallback(fakeName)

            cy.get('#promptResult').should('contain', fakeName);
            
        });
        
    });
});