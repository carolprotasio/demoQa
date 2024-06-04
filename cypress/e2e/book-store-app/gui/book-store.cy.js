/// <reference types="cypress" />

const options = { env: { snapshotOnly: true } };

describe('Book Store Functionality', () => {    

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/login', { headers: {"accept-Encoding": "gzip, deflate"}} );
        cy.guiLogin();
        
    });            
     
    it('Search book Successfully', () => {
      
       cy.visit('https://demoqa.com/books');
      
       cy.get('#searchBox').clear().type('java', { delay: 200 });
       cy.get('.rt-tbody')
         .should('contain.text', 'Speaking JavaScript')
         .and('contain.text', 'Axel Rauschmayer')
         .and('contain.text', "O'Reilly Media");
         
    });
});
