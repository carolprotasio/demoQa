/// <reference types="cypress" />

describe('Selected Menu Functionality', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('https://demoqa.com/select-menu', { headers: {"accept-Encoding": "gzip, deflate"}} );
        
      cy.wait(200);
    });

    it('Select Value - Successfully validate', () => { 
      cy.get('#withOptGroup')
        .click();

      cy.get('#react-select-2-option-1-0')
        .should('be.visible')
        .click();
      
      cy.get('#withOptGroup').should('contain.text', 'Group 2, option 1')
      
    });
    it('Select One- Successfully validate', () => { 
      cy.get('#selectOne')
        .click();

      cy.get('#react-select-3-input')
        .should('be.visible');

      cy.get('#react-select-3-group-0-heading')
        .should('be.visible');

      cy.get('#react-select-3-option-0-2')
        .click();
      
     cy.get('#selectOne').should('contain.text', 'Mrs.') 
      
    });
    it('Old Style Select Menu- Successfully validate', () => { 
      cy.get('#oldSelectMenu')
        .should('be.visible')
        .select('3');

        cy.get('#oldSelectMenu').then(select => {
          const selectedText = select.find('option:selected').text(); 
          const trimmedSelectedText = Cypress.$.trim(selectedText); 
          expect(trimmedSelectedText).to.equal('Yellow');
      });
    
      
    });
    it('Multiselect Drop Down- Successfully validate', () => { 
      cy.get('#selectMenuContainer > div:nth-child(8) > div > div')
        .should('be.visible')
        .click()
        cy.get('#react-select-4-option-0')
        .should('be.visible')
        .click();

      cy.get('#react-select-4-option-1')
        .should('be.visible')
        .click();
        
      cy.get('.css-1rhbuit-multiValue')
        .should('contain.text', 'Green')
        .and('contain.text', 'Blue');
    });
    it('Standard Multi Select- Successfully validate', () => { 
      cy.get('#cars')
        .should('be.visible')
        .select(['volvo', 'audi']);

      cy.get('#cars option:selected').then(selectedOptions => {
        const selectedValues=  [...selectedOptions].map(option => option.value);
        expect(selectedValues).to.include.members(['volvo', 'audi']);

      });
      
    });
});
