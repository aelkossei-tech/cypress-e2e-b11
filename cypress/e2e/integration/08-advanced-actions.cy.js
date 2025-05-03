import '@4tw/cypress-drag-drop'
/// <reference types="cypress"/>

describe('Cypress Advanced Actions', () => {
    beforeEach(() => {
        cy.contains(".card", "Actions").click();
      });

    it('Type and clear actions', () => {
        let query = 'TechGlobal' // use variable if you've used something twice (more dynamic and easier)
        cy.get('#input_box')
         // .should('exist') is useless since we have other explicit assertions 
         .and('be.visible')
         .and('be.enabled')
         .and('have.attr', 'placeholder', 'Enter your message...')
         .and('have.attr', 'value', '') // 
         .type(query) // this method will type in whatever you want in the text box 
         .should('have.attr', 'value', query)
         .clear() // clear() --> clear the text in the text box 
         .and('have.attr', 'value', '');


        cy.get('#input_box').then(($inputElement) => { 
            const placeholder = $inputElement.attr('placeholder'); 
            expect(placeholder).to.include('Enter'); 

        })
        // selector in Cypress is a chainable ==> watch this part again in lecture video 
    })

    it('Right-Click and Double-Click', () => {
        cy.get('#right-click').rightclick(); 
        cy.get('#right_click_result')
         .should('be.visible')
         .and('have.text', 'You right-clicked on a button!'); 

         cy.get('#double-click').dblclick(); 
         cy.get('#double_click_result')
          .should('be.visible')
          .and('have.text', 'You double-clicked on a button!'); 
    }); 

    it('Drag and Drop', () => {
    // ** INTERVIEW QUESTION: How do you drag/drop an element? ** 
    // ** INTERVIEW QUESTION: What do you have in the support folder (command.js + e2e.js)? ** 
        cy.get('#drag_element').drag('#drop_element') // requires 4tw/cypress-drag-drop dependency 
        cy.get('#drag_and_drop_result')
         .should('be.visible')
         .and('have.text', 'An element dropped here!');
    });

    it('Hover Over', () => {
        // cy.get('#dropdown-testing').trigger('mouseover'); // does not work and requires cypress-real-events-dependency 
        cy.get('#dropdown-testing').realHover(); 
        cy.get('#backend-option').click();
        cy.url().should('include', 'backend'); 

        // cy.on() is used to listen if we get any "uncaught-exception"
        // and ignore it by returning false
        cy.on('uncaught:exception', () => {
            return false;
        })
      });
})
