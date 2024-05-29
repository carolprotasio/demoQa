/// <reference types="cypress" />

describe('Upload & Download Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/upload-download', { headers: {"accept-Encoding": "gzip, deflate"}});
    });
    it('Download successfully', () => {
        cy.get('#downloadButton').click();
        
        cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
    });
    it('Upload successfully', () => {
        const filePath = 'cypress/downloads/sampleFile.jpeg';
        cy.get('#uploadFile').selectFile(filePath);;
        
        cy.get('#uploadedFilePath').should('contain.text', 'C:\\fakepath\\sampleFile.jpeg');
    });
});