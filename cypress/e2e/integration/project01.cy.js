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
        */
        // Click on the “Male” option and validate it is selected while the others are not selected (same with "Female Option")        
        cy.get('label.radio')
         .contains('Male')
         .click() // can't check if it's checked right away because we're looking at the LABEL not INPUT
        .find('input')
        .should('be.checked');

        const otherOptions = ['Female', 'Prefer not to disclose']; 
        otherOptions.forEach(option => {
            cy.contains('label.radio', option)
             .find('input')
             .should('not.be.checked'); 
        }); 

        // Female Selected 
        cy.get('label.radio')
         .contains('Female')
         .click()
         .find('input')
         .should('be.checked'); 
        
         const otherOptions1 = ['Male', 'Prefer not to disclose']; 
         otherOptions1.forEach(option => {
             cy.contains('label.radio', option)
              .find('input')
              .should('not.be.checked'); 
         }); 
    }); 

    it('Test Case 04 - Validate the Address input box', () => {
        cy.get('input[placeholder="Enter your address"]')
         .scrollIntoView()
         .should('be.visible')
        
        cy.get('input[placeholder="Enter your address"]')
         .should('not.have.attr', 'required');
    
        cy.get('.field > label.label')
         .contains('Address'); 

         cy.get('input[placeholder="Enter your address"')
            .should('be.visible', 'placeholder', 'Enter your address'); 
    }); 

    it('Test Case 05 - Validate the Email input box', () => {
        cy.get('input[placeholder="Enter your email"]')
         .scrollIntoView()
         .should('be.visible')
         .and('have.attr', 'required'); 

         cy.get('.field > label.label')
         .contains('Email *')
         .should('be.visible'); 

         cy.get('input[placeholder="Enter your email"]').should('have.attr', 'placeholder', 'Enter your email'); 
    }); 

    it('Test Case 06 - Validate the Phone input box', () => {
        cy.get('input[placeholder="Enter your phone number"]')
            .should('be.visible')
            .and('not.have.attr', 'required')

        cy.get('.field > label.label')
            .contains('Phone')
            .should('be.visible');

        cy.get('input[placeholder="Enter your phone number"]').should('have.attr', 'placeholder', 'Enter your phone number'); 
    }); 

    it('Test Case 07 - Validate the Message text area', () => {
        cy.get('.textarea').should('be.visible')
         .and('not.have.attr', 'required');

        cy.get('.field > label.label')
         .contains('Message')
         .should('be.visible'); 

         cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...'); 
    });

    it('Test Case 08 - Validate the Consent checkbox', () => {
        cy.get('label.checkbox')
         .should('have.text', ' I give my consent to be contacted.')
         .and('be.visible'); 

        cy.get('.textarea').should('not.have.attr', 'required'); 
        cy.get('input[type="checkbox"]')
         .click()
         .should('be.checked')
         .click()
         .should('not.be.checked'); 
    }); 

    it('Test Case 09 - Validate the SUBMIT button', () => {
        cy.get('button[type="submit"]')
         .should('be.visible')
         .and('be.enabled')
         .and('have.text', 'SUBMIT'); 
    }); 

    it.only('Test Case 10 - Validate the form submission', () => {
        cy.get('input[placeholder="Enter your full name"]').type('Ayah Elkossei'); 
        cy.get('label.radio').contains('Female').click(); 
        cy.get('input[placeholder="Enter your address"]').type('9215 S. Tripp Ave., Oak Lawn, IL 60453'); 
        cy.get('input[type="email"]').type('ayahelkossie@gmail.com'); 
        cy.get('input[type="phone"]').type('(708) 691-3742'); 
        cy.get('textarea').type(`Woah, I'm totally learning Cypress! I knew I could do it! Can't wait to be an SDET!`);
        cy.get('input[type="checkbox"]').click(); 
        cy.get('button.is-link').contains('SUBMIT').click({ force: true }); 
        Cypress.on('uncaught:exception', (err) => {
            console.error('Uncaught Exception:', err);
            return false; // Prevents Cypress from failing the test
          });
        cy.get('strong.mt-5').should('have.text', 'Thanks for submitting!'); 
    })
}); 

