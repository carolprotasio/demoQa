Cypress.Commands.add('apiLogin', (user) => {
  return cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/GenerateToken',
      body: {
          userName: user.userName,
          password: user.password
      }
  }).then(response => {
      if (response.status !== 200) {
          cy.log(response.body);
          throw new Error('Failed to login');
      }
      
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('token');
      const token = response.body.token;
      
      // Adiciona o token ao objeto user e salva no arquivo fixture
      user.token = token;
      return cy.writeFile('cypress/fixtures/user.json', user).then(() => {
          return token;
      });
  });
});


function getUserAndLogin() {
  return cy.fixture('user').then(user => {
      if (!user.token) {
          return cy.apiLogin(user).then(token => {
              user.token = token;
              return cy.writeFile('cypress/fixtures/user.json', user).then(() => {
                  return user;
              });
          });
      } else {
          return user;
      }
  });
}

Cypress.Commands.add('getUserAndLogin', getUserAndLogin);

Cypress.Commands.add('deleteUserBooks', () => {
  cy.getUserAndLogin().then(userData => {
      const { token, id } = userData;
      cy.request({
          method: 'DELETE',
          url: `https://demoqa.com/BookStore/v1/Books?UserId=${id}`,
          headers: {
              Authorization: `Bearer ${token}`,
          }
      }).then(deleteResponse => {
          expect(deleteResponse.status).to.equal(204);
      });
  });
});
