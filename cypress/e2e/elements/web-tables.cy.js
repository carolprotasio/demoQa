/// <reference types="cypress" />

import faker from "faker";

describe('Web Tables Functionality', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/webtables');
    });

    it('Adding New User successfully',() => {
        cy.get('#addNewRecordButton').click();

        const form = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            age: faker.datatype.number({ min: 18, max: 80 }),
            salary: faker.datatype.number({ min:1500, max:5000}),
            department: faker.random.word()
        }
        cy.addUser(
            form.firstName,
            form.lastName,
            form.email,
            form.age,
            form.salary,
            form.department,)

    }) 
     it('Editing an email from New User successfully', () => {
        cy.get('#addNewRecordButton').click();

        const form = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            age: faker.datatype.number({ min: 18, max: 80 }),
            salary: faker.datatype.number({ min:1500, max:5000}),
            department: faker.random.word()
        }
        cy.addUser(
            form.firstName,
            form.lastName,
            form.email,
            form.age,
            form.salary,
            form.department,)
        
        const newEmail = faker.internet.email();       
        
        cy.get('#edit-record-4').click();
        cy.get('#userEmail')
          .clear()
          .type(newEmail);
        cy.get('#submit').click();
        
        cy.get('div.ReactTable.-striped.-highlight')
              .contains(newEmail)
              .should('be.visible');   
        
    }); 
    it('Delete a New User Registered successfully', () => {
        cy.get('#addNewRecordButton').click();

        const form = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            age: faker.datatype.number({ min: 18, max: 80 }),
            salary: faker.datatype.number({ min:1500, max:5000}),
            department: faker.random.word()
        }
        cy.addUser(
            form.firstName,
            form.lastName,
            form.email,
            form.age,
            form.salary,
            form.department,)
        
        cy.get('div.ReactTable.-striped.-highlight')
          .contains(form.firstName)
          .parents('div.rt-tr-group')
          .within(() => {
            cy.get('[title= "Delete"]').click();
          })

          cy.get('div.ReactTable.-striped.-highlight')
            .should('not.contain', form.firstName)  
        
    });
    it('Find a New User typing on Search Box field Successfully', () => {
        cy.get('#addNewRecordButton').click();

        const form = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            age: faker.datatype.number({ min: 18, max: 80 }),
            salary: faker.datatype.number({ min:1500, max:5000}),
            department: faker.random.word()
        }
        cy.addUser(
            form.firstName,
            form.lastName,
            form.email,
            form.age,
            form.salary,
            form.department,)
        cy.get('#searchBox').type(form.firstName);

        cy.get('div.ReactTable.-striped.-highlight')
            .should('contain', form.firstName)
        
    });
    it('Change Number of Rows on the table successfully', () => {
        cy.get("span.select-wrap.-pageSizeOptions > select").select('5');

        cy.get('div.ReactTable.-striped.-highlight div.rt-tr-group')
          .should('have.length', 5);
        
    });
});