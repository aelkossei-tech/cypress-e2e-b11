/// <reference types="cypress"/>

describe('Project 01', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/form-elements'); 
    })
    it('Test Case 01 - Validate the Contact Us Information', () => {
        // Validate the heading is “Contact Us”
        cy.get('.is-size-3').should('be.visible', 'Contact Us'); 
        // Validate the address is "2800 S River Rd Suite 310, Des Plaines, IL 60018"
        cy.get('#address').should('be.visible', '2800 S River Rd Suite 310, Des Plaines, IL 60018'); 
        // Validate the email is "info@techglobalschool.com"
        cy.get('#email').should('be.visible', "info@techglobalschool.com");
        // Validate the phone number is “(224) 580-2150”
        cy.get('#phone-number').should('be.visible', "(224) 580-2150");
    }); 

    it('Test Case 02 - Validate the Full name input box', () => {
        // Validate that the Full name input box is displayed + Validate that the Full name input box is required
        cy.get('input[placeholder="Enter your full name"]')
        .should('be.visible')
        .and('have.attr', 'required'); 
        // Validate that the label of the Full name input box is “Full name *” 
        cy.get('label[for="name"]').should('be.visible', 'Full name *'); 
        // Validate that the placeholder of the Full name input box is “Enter your full name”
       cy.get('input[placeholder="Enter your full name"]').should('be.visible', 'placeholder', 'Enter your full name'); 
    })

    it('Test Case 03 - Validate the Gender radio button', () => {
        // Validate the label is “Gender *”
        cy.get('label.label')
         .contains('Gender *')
         .should('be.visible')
        // Validate that Gender is required 
        cy.get('input[name="question"]').should('have.attr', 'required')
        // Validate the options are “Female”, “Male” and “Prefer not to disclose” + options are clickable and NOT selected 
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each((ele) => {
            cy.wrap(ele).should('not.be.checked').check().should('be.checked'); 
        })
        /*
        Could have used .each() somehow to not repeat the same code and loop through those options 
        cy.get('label.radio').contains('Male')
         .should('not.be.checked')
         .check()
         .should('be.checked');
        cy.get('label.radio').contains('Female').click()
         .should('not.be.checked')
         .check()
         .should('be.checked');
        cy.get('label.radio').contains('Prefer not to disclose').click()
         .should('not.be.checked')
         .check()
         .should('be.checked');
        })
        */
        // Click on the “Male” option and validate it is selected while the others are not selected (same with "Female Option")
        cy.get('label.radio').contains('Male').click() // can't check if it's checked right away because we're looking at the LABEL not INPUT

        cy.get('label.radio')
         .contains('Male')
         .find('input')// selector used to filter matching descendent DOM elements 
         .should('be.checked'); 
        
         // not the most dynamic way to do this --> I'm guessing using another .each() method heere 
         cy.get('label.radio')
         .contains('Female')
         .find('input')
         .should('not.be.checked');  
       
         cy.get('label.radio')
         .contains('Prefer not to disclose')
         .find('input')
         .should('not.be.checked'); 

        // Female Selected 
        cy.get('label.radio').contains('Female').click(); 
        cy.get('label.radio')
         .contains('Female')
         .find('input')
         .should('be.checked');

         cy.get('label.radio')
          .contains('Male')
          .find('input')
          .should('not.be.checked');

          cy.get('label.radio')
          .contains('Prefer not to disclose')
          .find('input')
          .should('not.be.checked');

        /*
        OR: 
        const options = ['Male', 'Female', 'Prefer not to disclose']; 

        */
    }); 

    it('Test Case 04 - Validate the Address input box', () => {
        cy.get('input[placeholder="Enter your address"]')
        .scrollIntoView()
        .should('be.visible'); 
    }); 

})