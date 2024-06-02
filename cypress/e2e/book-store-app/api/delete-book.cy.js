/// <reference types="cypress" />

describe('Delete Functionality', () => {
    let user;
    let token;
    let userId;

    before(() => {
        cy.getUserAndLogin().then(userData => {
            user = userData;
            token = userData.token;
            userId = userData.id;
        });
    });
    it('Delete Successfully', () => {
        cy.deleteUserBooks()
 
    });
});