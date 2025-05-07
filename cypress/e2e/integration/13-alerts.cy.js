/// <reference types="cypress"/>

describe("Handling Alerts", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.clickCard('Alerts')
    });
  
    it('handling the Warning Alert', () => {
        cy.get('#warning_alert').click(); 

        cy.on('window:alert', (str) => {
            console.log(`My warning alert text content is ${str}`)
            expect(str).to.eq('You are on TechGlobal Training application.'); 
        }); 
    }); 

    /**
   * CONFIRMATION ALERT
   * 1. Go to https://techglobal-training.com/frontend/
   * 2. Click on the "Alerts" card
   * 3. Click on the "Confirmation alert" button
   * 4. Validate the alert text equals "Would you like to stay on TechGlobal Training application?"
   * 5. Click on the "Cancel" button on the alert
   * 6. Validate the result message equals "You rejected the alert by clicking Cancel."
   */    

    it('Handling the Confirmation Alert', () => {
        cy.get('#confirmation_alert').click()
        
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Would you like to stay on TechGlobal Training application?'); 
            return false
        }); 
        
        cy.get('#confirmation_alert').click(); 
        cy.get('#action').should('have.text', 'You rejected the alert by clicking Cancel.'); 
    }); 

    // Clicks okay and sends message through the prompt 
    it('Handling Prompt Alert', () => {
        // Clicks cancel for the prompt error

        cy.window().then((win) => {
           cy.stub(win, 'prompt').returns(null) // return('inputMessage')
            // could also use return false instead of returns(null)
        })

        
        cy.get('#prompt_alert').click(); // only works when you put this AFTER 
        // because if you put it BEFORE --> it will make page freeze, so you are not able to manipulate anything 

        /*
        if you want to click OK

        cy.window().then((win) => {
           cy.stub(win, 'prompt').returns('')       
        })
        */

         /*
         Validate the alert message and click cancel 

        cy.window().then((win) => {
           cy.stub(win, 'prompt').callsFake((message) => {
            
            console.log(message)
            expect(message).to.eq('What would you like to say to TechGlobal?')' 
            
            return null 
            })       
        }); 
         */


        /*
         Validate the alert message and enter you prompt 

        cy.window().then((win) => {
           cy.stub(win, 'prompt').callsFake((message) => {
            expect(message).to.eq('What would you like to say to TechGlobal?')' 
            
            return 'My Message' 
            })       
        }); 
         */
    }); 
}); 