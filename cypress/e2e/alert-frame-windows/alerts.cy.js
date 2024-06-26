/// <reference types="cypress" />

import faker from "faker";

describe('', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/alerts', { headers: {"accept-Encoding": "gzip, deflate"}});
        cy.wait(200);
    });
    it('Click button to see alert successfully', () => {
        cy.get('#alertButton').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('You clicked a button')
            
        });
    });
    it('Button click, alert will appear after 5 seconds  successfully', () => {
        cy.get('#timerAlertButton').click();
        cy.wait(6000)
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('This alert appeared after 5 seconds')
            
        });
    });
    it('YES - Button click, confirm box will appear successfully', () => {
        cy.get('#confirmButton').click();
        
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('Do you confirm action?')
            return true
           
        });
        cy.get('#confirmResult').should('have.text', 'You selected Ok'); 
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