/// <reference types="cypress" />

import '@4tw/cypress-drag-drop'


describe('Droppable Functionality', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/droppable', { headers: {"accept-Encoding": "gzip, deflate"}} );
          
        cy.wait(200);
      });
    it('Simple Tab- Successfully', () => {        
    
        cy.get('#draggable').drag('#droppable > p',  {force: true} );
        cy.get('#droppable > p').should('contain.text', 'Dropped!');
    });
    it('Accept Tab - ACCEPTABLE - Successfully', () => {
        cy.get('#droppableExample-tab-accept').click();
        cy.get('#droppableExample-tabpane-accept').should('be.visible');

        cy.get('#acceptable').drag('#acceptDropContainer > #droppable',  {force: true});
        cy.get('#acceptDropContainer > #droppable > p').should('contain.text', 'Dropped!');
    });
    it('Accept Tab - ACCEPTABLE - Successfully', () => {
        cy.get('#droppableExample-tab-accept').click();
        cy.get('#droppableExample-tabpane-accept').should('be.visible');

        cy.get('#notAcceptable').drag('#acceptDropContainer > #droppable',  {force: true});
        cy.get('#acceptDropContainer > #droppable > p').should('contain.text', 'Drop here');
    });
    it('Prevent Propagation Tab - OUTER- Successfully', () => {
        cy.get('#droppableExample-tab-preventPropogation').click();

        cy.get('#dragBox').drag('#notGreedyDropBox > :nth-child(1)', { force: true });
        cy.get('#notGreedyDropBox > :nth-child(1)').should('contain.text', 'Dropped!');
    });
    it('Prevent Propagation Tab - GREEDY- Successfully', () => {
        cy.get('#droppableExample-tab-preventPropogation').click();

        cy.get('#dragBox').drag('#greedyDropBoxInner', { force: true });
        cy.get('#greedyDropBoxInner > p').should('contain.text', 'Dropped!');
    });
    it('Revert Draggable - WILL REVERT - Successfully', () => {
        cy.get('#droppableExample-tab-revertable').click();

        cy.get('#revertable').then($el => {
            const initialPosition = $el.position();

            cy.get('#revertable').drag('#revertableDropContainer > #droppable', {force: true});
            cy.wait(200)

            cy.get('#revertable').should($ele => {
                const newPosition = $ele.position();
                expect(newPosition.top).to.equal(initialPosition.top);
                expect(newPosition.left).to.equal(initialPosition.left);
                
            });

        })
        cy.get('#revertableDropContainer > #droppable > p').should('have.text', 'Dropped!')
        
    });
    it.only('Revert Draggable - NOT REVERT - Successfully', () => {
        cy.get('#droppableExample-tab-revertable').click();

        cy.get('#notRevertable').then($el => {
            const initialPosition = $el.position();

            cy.get('#notRevertable').drag('#revertableDropContainer > #droppable', {force: true});
            cy.wait(200)

            cy.get('#revertable').should($ele => {
                const newPosition = $ele.position();
                expect(newPosition.top).not.to.equal(initialPosition.top);
                expect(newPosition).not.to.equal(initialPosition)
                
            });

        })
        cy.get('#revertableDropContainer > #droppable > p').should('have.text', 'Dropped!')
        
    });
});
