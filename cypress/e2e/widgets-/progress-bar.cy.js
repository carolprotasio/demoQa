/// <reference types="cypress" />

describe('Slider Functionality', () => {
    before(() => {
        cy.visit('/progress-bar', { headers: {"accept-Encoding": "gzip, deflate"}} );
    });

    it('Successfully moves the progress bar', () => {      
      
        cy.get('#progressBar').then(($progressBar) => {            
            const initialWidth = $progressBar.css('width');

            cy.get('#startStopButton')
              .click()
              .wait(2000)
              .click();
            cy.get('#progressBar').should('not.have.css', 'width', initialWidth);
        });
     
    });
});
