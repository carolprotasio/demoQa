/// <reference types="cypress" />

describe('Slider Functionality', () => {
    before(() => {
        cy.visit('https://demoqa.com/slider', { headers: {"accept-Encoding": "gzip, deflate"}} );
    });

    it('Successfully moves the slider to a specific value', () => {       
        const stepTo = ($el, target) => {
            const step = $el[0].getAttribute('step') || 1
            const current = $el[0].value
            const diff = target - current
            const steps = Math.abs(diff * step)
            
            if (diff > 0) {
              $el[0].stepUp(steps)
            }else {
              $el[0].stepDown(steps)
            }
          }
        const newValor = 65;
        cy.get('input[type="range"]')
          .then($el => stepTo($el, newValor) )  
          .trigger('change')
        cy.get('#sliderValue').should('have.value', newValor)

     
    });
});
