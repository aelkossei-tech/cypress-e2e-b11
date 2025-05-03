/// <reference types="cypress"/>

describe('Project 01', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/form-elements'); 
    })
    it('Test Case 01 - Validate the Contact Us Information', () => {
        cy.get('.is-size-3').should('be.visible', 'Contact Us'); 
        
        cy.get('#address').should('be.visible', '2800 S River Rd Suite 310, Des Plaines, IL 60018'); 

        cy.get('#email').should('be.visible', "info@techglobalschool.com");
        
        cy.get('#phone-number').should('be.visible', "(224) 580-2150");
    }); 

    it('Test Case 02 - Validate the Full name input box', () => {
        
    })

})