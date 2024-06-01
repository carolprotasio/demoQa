Cypress.Commands.add('apiLogin', (user) => {
    
    cy.request({
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/GenerateToken',
        body: {
            userName: user.userName,
            password: user.password
        }
       }).then(response => {
         if (response.status !== 200) {
            cy.log(response.body)
         }
         expect(response.status).to.equal(200);
         expect(response.body).to.have.property('token');
       });
});