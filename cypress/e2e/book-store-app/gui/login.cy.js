/// reference types="cypress" />

const options = { env: { snapshotOnly: true } };

describe('Login SFunctionality', () => {
    let user;

    before(() => {
        cy.fixture('user').then(userData => {
            user = userData;
        });
    });
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/login', { headers: {"accept-Encoding": "gzip, deflate"}} );
      });
    it('GUI - Login Successfully', () => {
        cy.apiLogin(user);
   
    });
});