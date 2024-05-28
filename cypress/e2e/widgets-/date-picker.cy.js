/// <reference types="cypress" />



describe('Date Picker Functionality', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/date-picker', { headers: {"accept-Encoding": "gzip, deflate"}} );
    });    
    it('Select Date successfully', () => {
        const month = '6';
        const year = '2000';
        const date = 20
        const monthSelect = (parseInt(month) + 1).toString().padStart(2, '0');

        cy.get('#datePickerMonthYearInput')
          .click()
          .clear();

          cy.get('[data-layer="Content"]').select(month);          

        cy.get('.react-datepicker__year-select').select(year);
         
        cy.contains('.react-datepicker__day', date).click();

        cy.get('#datePickerMonthYearInput')
          .invoke('val')
          .should('contain', `${monthSelect}/${date}/${year}`);
    });
    it.only('Date and Time Successfully', () => {
        const month = 'July';
        const year = '2000';
        const date = 20;
        const hour = '11:00';
        const amPm = 'AM';

        const monthSelect = (parseInt(month) + 1).toString().padStart(2, '0');
        const formattedDate = `${month} ${date}, ${year}`;
        const formattedTime = `${hour} ${amPm}`;

        cy.get('#dateAndTimePickerInput')
          .click()
          .clear();

        cy.get('.react-datepicker__month-read-view').click();
        cy.contains('.react-datepicker__month-option', month).click();

        cy.get('.react-datepicker__year-read-view').click();
        function selectYear(year) {
          cy.get('.react-datepicker__year-dropdown')
              .find('.react-datepicker__year-option')
              .then(yearOptions => {
                  const years = yearOptions.map((i, option) => option.textContent).get();
                  if (!years.includes(year.toString())) {
                      
                      cy.get('.react-datepicker__navigation.react-datepicker__navigation--years.react-datepicker__navigation--years-previous').click();
                      cy.wait(500); 
                      selectYear(year);
                  } else {
                      cy.contains('.react-datepicker__year-option', year.toString()).click();
                  }
              });
        }
        cy.get('.react-datepicker__year-read-view')
          .invoke('text')
          .then(text => {
              if (text !== '2000') {
                  selectYear(2000);
              }
        });

        cy.contains('.react-datepicker__day', date).click();

        cy.get('.react-datepicker__time-list-item').contains(hour).click();

        cy.get('#dateAndTimePickerInput')
          .invoke('val')
          .should('contain', formattedDate)
          .and('contain', formattedTime);
  


    });
});