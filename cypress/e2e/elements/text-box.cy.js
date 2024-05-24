/// <reference types="Cypress" /> 

import faker from "faker";

describe('Text Box Functionality', () => {
   
    it('Validate Text Box successfully', () => {
        cy.visit('https://demoqa.com/text-box', { retryOnStatusCodeFailure: true, retryOnNetworkFailure: true })

        const textBox = {
            userName: faker.datatype.uuid(),
            email: faker.internet.email(),
            cAddress: faker.address.streetAddress(),
            pAddress: faker.address.streetAddress() 
        }
        cy.get('#userName').type(textBox.userName);
        cy.get('#userEmail').type(textBox.email);
        cy.get('#currentAddress').type(textBox.cAddress);
        cy.get('#permanentAddress').type(textBox.pAddress);
        cy.get('#submit').click();
        cy.get('.border').invoke('text').should('include', textBox.userName);
        cy.get('.border').invoke('text').should('include', textBox.email);
        cy.get('.border').invoke('text').should('include', textBox.cAddress);
        cy.get('.border').invoke('text').should('include', textBox.pAddress);
        

        
    });
});
