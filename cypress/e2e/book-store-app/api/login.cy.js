/// <reference types="cypress" />

describe('Login Functionality', () => {
    let user;

    before(() => {
        cy.fixture('user').then(userData => {
            user = userData;
        })
    });
    it('Login Successfully', () => {
        cy.apiLogin(user);
        
    });
});