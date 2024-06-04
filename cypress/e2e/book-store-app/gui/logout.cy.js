/// reference types="cypress" />

const options = { env: { snapshotOnly: true } };

describe('Login Functionality', () => {
    let user;
    let userName;
    let password;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/login', { headers: {"accept-Encoding": "gzip, deflate"}} );
        cy.fixture('user').then(userData => {
            user = userData;
            userName = userData.userName;
            password = userData.password;
        });
    });    
        
     
    it('GUI - Login Successfully', () => {
       cy.get('#userName').type(userName);
       cy.get('#password').type(password);
       cy.get('#login').click();
       
       cy.url().should('eq', 'https://demoqa.com/profile');

       cy.get('#books-wrapper > .text-right > #submit').click();
       cy.url().should('eq', 'https://demoqa.com/login');
   
    });
});