/// <reference types="cypress" />

describe('Accordion Functionality', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/accordian');
    });    
    it('What is Lorem Ipsum? - successfully', () => {        
        cy.get('#section1Content > p').should('contain.text', 'Lorem Ipsum');          

    });
    it('Where does it come from? - successfully', () => {     
        cy.get('#section2Heading').click();   
        cy.get('#section2Content > p').should('contain.text', 'Contrary to popular belief');          

    });
    it('Why do we use it? - successfully', () => {     
        cy.get('#section3Heading').click();   
        cy.get('#section3Content > p').should('contain.text', 'The point of using Lorem Ipsum');          

    });
});