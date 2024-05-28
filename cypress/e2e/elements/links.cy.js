/// <reference types="cypress" />

describe('Validate links functionality', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/links', { headers: {"accept-Encoding": "gzip, deflate"}});
    });
    it('HOME link => successfully', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click();
        cy.url().should('eq', 'https://demoqa.com/');
    });
    it('DYNAMIC link => successfully', () => {
        cy.get('#dynamicLink').invoke('removeAttr', 'target').click();
        cy.url().should('eq', 'https://demoqa.com/');
    });
    it('CREATED link => successfully', () => {
        cy.checkLinkResponse('#created', 201, 'Created');
    });    
    it('NO CONTENT link => successfully', () => {
        cy.checkLinkResponse('#no-content', 204, 'No Content');
    });
    it('MOVED link => successfully', () => {
        cy.checkLinkResponse('#moved', 301, 'Moved Permanently');
        
    });
    it('BAD REQUEST link => successfully', () => {
        cy.checkLinkResponse('#bad-request', 400, 'Bad Request')
        
    });
    it('UNAUTHORIZED link => successfully', () => {
        cy.checkLinkResponse('#unauthorized', 401, 'Unauthorized')
        
    });
    it('FORBIDDEN link => successfully', () => {
        cy.checkLinkResponse('#forbidden', 403, 'Forbidden')
        
    });
    it('NOT FOUND link => successfully', () => {
        cy.checkLinkResponse('#invalid-url', 404, 'Not Found')
        
    });
});