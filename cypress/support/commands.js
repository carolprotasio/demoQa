Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    console.error('Exceção não tratada:', err.message, err.stack);
    return false
  })
Cypress.Commands.add('addUser', (
    firstName,
    lastName,
    email,
    age,
    salary,
    department) => { 


    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('#age').type(age);
    cy.get('#salary').type(salary);
    cy.get('#department').type(department);

    cy.get('#submit').click();

    const form = { firstName, lastName, email, age, salary, department };
    const fields = ['firstName', 'lastName', 'email', 'age', 'salary', 'department'];

    fields.forEach(field => {
        cy.get('div.ReactTable.-striped.-highlight')
          .contains(form[field])
          .should('be.visible');
    })
  });

  Cypress.Commands.add('checkLinkResponse', (linkId, expectedStatus, expectedText) => {
    cy.get(linkId).click();
    cy.get('#linkResponse').should('contain.text', `Link has responded with staus ${expectedStatus} and status text ${expectedText}`);
   });

 
