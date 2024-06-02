/// <reference types="cypress" />

describe('BookStore API Test', () => {
    it('Should retrieve books from the BookStore API', () => {
      cy.request('GET', 'https://demoqa.com/BookStore/v1/Books')
        .then((response) => {
          expect(response.status).to.eq(200);          
        });
    });
  });
  