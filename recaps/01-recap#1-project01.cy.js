/// <reference types="cypress"/>

describe('Project 01', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/form-elements'); 
    })
    it('Test Case 01 - Validate the Contact Us Information', () => {
        // how Bilal would solve it 
        const expectedFields = ['Contact Us','2800 S River Rd Suite 310, Des Plaines, IL 60018', 'info@techglobalschool.com', "(224) 580-2150"]

        cy.get('.mb-5').children().each((ele, index) => {
            cy.wrap(ele).should('have.text', expectedFields[index]); 
        }); 
    }); 

    it('Test Case 02 - Validate the Full name input box', () => {
        cy.get('[for="name"]').as('label').parent().find('.input').should('be.visible')
         .and('have.attr', 'placeholder', 'Enter your full name')
         .and('have.attr', 'required')

         cy.get('@label').should('have.text', 'Full name *');
         //.as() --> renames it as a variable and you can access it w/ @
    }); 

    it('Test Case 03 - Validate the Gender radio button', () => {
       cy.contains('Gender *').should('have.text', 'Gender *');

       cy.get("[type='radio']").first().should('have.attr', 'required'); 

       const expectedRadio = ['Male', 'Female', 'Prefer not to disclose'];

       cy.get("[type='radio']").each((ele, index) => {
            cy.wrap(ele).parent().should('have.text', expectedRadio[index]); 
            cy.wrap(ele).should('be.enabled').and('not.be.selected')
       }); 

       cy.contains('Male').find('input').check().should('be.checked'); 
       cy.contains('Female').find('input').check().should('not.be.checked'); 
       cy.contains('Prefer not to disclose').find('input').check().should('not.be.checked'); 


       const checkRadioOption = (selectedOption, allOptions) => {
            allOptions = allOptions.filter(ele => ele !== selectedOption)

            for(let option of allOptions) {
                cy.contains(option).find('input').should('not.be.checked')
            };
       }; 

       checkRadioOption('Male', expectedRadio)
       checkRadioOption('Female', expectedRadio)
       checkRadioOption('Prefer not to disclose', expectedRadio)
    }); 
 
}); 