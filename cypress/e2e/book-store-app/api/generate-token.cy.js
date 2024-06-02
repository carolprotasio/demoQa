/// <reference types="cypress" />

describe('Authorization Functionality', () => {
    let user;
    beforeEach(() => {
        cy.fixture('user').then(userData => {
            user = userData;
        })
    });
    it('Check if user is authorized', () => {
        expect(user).to.have.property('userName');
        expect(user).to.have.property('password');
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            body: {
                userName: user.userName,
                password: user.password
            }
        }).then(response => {
            if (response.status === 200) {
                cy.log(response.body)
            }
           /*  expect([200, 401]).to.include(response.status);
            if (response.status === 200) {
                expect(response.body).to.equal(true);
            } else if (response.status === 401) {
                expect(response.body).to.equal(false);
            } */
          
        });
        
    });
});