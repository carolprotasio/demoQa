/// reference types="cypress" />

import faker from "faker";

function generatePassword() {
    const upperCase = faker.random.alpha({ count: 1, upcase: true });
    const lowerCase = faker.random.alpha({ count: 1, upcase: false });
    const digit = faker.random.number({ min: 0, max: 9 }).toString();
    const specialChar = faker.random.arrayElement(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+']);
    const remaining = faker.random.alphaNumeric(4); // Ajustado para completar o comprimento mínimo de 8 caracteres

    // Combinar todos os caracteres para formar a senha
    const passwordArray = [upperCase, lowerCase, digit, specialChar, ...remaining.split('')];
    const password = faker.helpers.shuffle(passwordArray).join('');

    return password;
}

describe('Create User Functionality', () => {
  
    it('Create User Successfully', () => {
        const newUser = {
            userName: faker.internet.userName(),
            password: generatePassword()
        }
        cy.writeFile('cypress/fixtures/user.json', newUser);

        cy.request({ 
            method: 'POST', 
            url: 'https://demoqa.com/Account/v1/User',
            body: newUser,
        }).then(response => {
            if(response.status !== 201) {
                cy.log(response.body);
            }
            expect(response.status).to.eq(201);
        });
                 
    });
});