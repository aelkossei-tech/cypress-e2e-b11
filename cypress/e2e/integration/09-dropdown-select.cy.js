/// <reference types="cypress"/>

describe('Dropdown select', () => {
    beforeEach(() => {
        cy.contains(".card", "Dropdowns").click();
      });

    it('Select product & color', () => {
        //cy.get('#product_dropdown').select(2); // select() --> could either use the index of the item in the menu OR visible text (more preferred)
        // visible text should exactly match (case-sensitive)

      //  cy.get('#color_dropdown')
       // .select('Yellow')
        

        cy.get('#product_dropdown').select('Apple Watch Series 8'); 
        cy.get('#color_dropdown').select('Yellow'); 

        cy.get('product_dropdown option:selected').should('have.text', 'Apple Watch Series 8'); 
        cy.get('color_dropdown option:selected').should('have.text', 'Yellow'); 
    })

    it.only('Select product & color & delivery', () => {
        cy.get('product_dropdown option:selected').should('have.text', 'Select...');
        cy.get('product_dropdown').select('Apple Watch Series 8'); 
        cy.get('product_dropdown option:selected').select('Apple Watch Series 8'); 
    });

    it('Validate the result of selections', () => {
        /*
        Select "iPad Pro 11"
        Select "Green"
        Select "Pickup"
        Then click on "Submit" button
        You should your result under "Result". 
        Validate "Your Green iPad Pro 11 is ready to be picked up."
        */
    })
})