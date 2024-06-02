/// <reference types="cypress" />

describe('Get User by ID Functionality', () => {
    let user;

    beforeEach(() => {
        cy.fixture('user').then(userData => {
            user = userData;
            // Usar cy.apiLogin para obter o token e armazená-lo em uma variável
            cy.apiLogin(user).then(token => {
                // Agora o token está disponível aqui
                cy.wrap(token).as('token');
            });
        });
    });

    it('Get User Successfully', function () {
        // Use o token retornado pela função cy.apiLogin
        const token = this.token;

        expect(user).to.have.property('userName');
        expect(user).to.have.property('password');
        expect(user).to.have.property('id');

        cy.request({
            method: 'GET',
            url: `https://demoqa.com/Account/v1/User/${user.id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => {
            expect(response.status).to.equal(200);
        });
    });
});
