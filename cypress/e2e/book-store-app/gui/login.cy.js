/// reference types="cypress" />

const options = { env: { snapshotOnly: true } };

describe('Login Functionality', () => {    

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/login', { headers: {"accept-Encoding": "gzip, deflate"}} );        
    });           
     
    it('GUI - Login Successfully', () => {
      cy.guiLogin();
      cy.url().should('eq', 'https://demoqa.com/profile')
   
    });
});
