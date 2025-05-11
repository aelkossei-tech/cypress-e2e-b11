/// <reference types="cypress"/>

describe("Debugging", () => {
    beforeEach(() => {
        cy.visit("https://www.techglobal-training.com/frontend");
        cy.clickCard("HTML Elements");
    });

    it("cy.wait() - Hard wait", () => {
        cy.get('#checkbox_1').check(); 

        // cy.wait(10000);  --> just use it when you need it, and then delete it 

        cy.get('#checkbox_2').check(); 
    });

    it("cy.pause() - Debugging using pause", () => { // more recommended 
        cy.visit("https://www.techglobal-training.com/frontend");
        cy.clickCard("Login Function");

        cy.get('#username').type(Cypress.env('UI_USERNAME')); 

        cy.pause(); 

        cy.get('#password').type(Cypress.env('UI_PASSWORD'));
        
        cy.get('#login_btn').click(); 
    });

    it('cy.debug() - Debugging using debug', () => {
        cy.visit("https://www.techglobal-training.com/frontend");
        cy.clickCard("Login Function");

        cy.get('#username').type(Cypress.env('UI_USERNAME')); 

        cy.pause(); 

        cy.get('#password').type(Cypress.env('UI_PASSWORD'));
        
        cy.get('#login_btn').click(); 

        /*
            use setTimeout(function() {
                debugger
            }, 2000)
        */
    })
}); 