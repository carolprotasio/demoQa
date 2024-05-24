/// <reference types="cypress" />

// import { faker } from '@faker-js/faker';
import faker from 'faker';


describe('Forms Functionality', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });
    it('Registration Form Successfully', () => {
        const form = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            mobile: faker.datatype.number( { min: 1000000000, max: 9999999999 }),
            subject: faker.random.words(2),
            address: faker.address.streetAddress(),
               
        }
        const file = 'cypress/assets/demo.png'

        cy.get('#firstName').type(form.firstName);
        cy.get('#lastName').type(form.lastName);
        cy.get('#userEmail').type(form.email);
        cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
          .click();
        cy.get('#userNumber').type(form.mobile);

        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('11');
        cy.get('.react-datepicker__year-select').select('1978');
        cy.get(`.react-datepicker__day--015`).click(); 

        cy.get('#subjectsInput').type(form.subject);
        cy.get("label[for='hobbies-checkbox-3']").click();
        cy.get('#uploadPicture').selectFile(file);

        cy.get('#currentAddress').type(form.address);

        cy.get('#state > div > div.css-1hwfws3').click()
        cy.get('#react-select-3-option-1').click()
        
        cy.get('#submit').click();

        cy.get('.modal-header')
          .should('contain.text', 'Thanks for submitting the form')
        cy.wait(1000); 
        cy.get('#closeLargeModal').click( { force: true });

    });
});