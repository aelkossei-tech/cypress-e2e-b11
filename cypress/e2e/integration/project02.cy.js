/// <reference types="cypress"/>

describe('Project 02', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/login'); 
    })
    it('Test Case 01 - Validate the login form', () => {
        const inputs = ['username', 'password']; // since we have look at both of these fields and they have the same format 
        // for their selectors [input#] + the tasks were going to be repetitive ==> used .forEach() to loop through 
        // and make sure both are: 1.) visible 2.) not required 
        inputs.forEach((ele) => { 
            cy.get(`input#${ele}`) // we embedded the "ele" of our array we created above 
             .should('be.visible') 
             .and('not.have.attr', 'required'); 

             cy.get(`label[for="${ele}"]`).should('have.text', `Please enter your ${ele}`); 

             cy.get('button#login_btn')
              .should('be.visible')
              .and('be.enabled'); 

        }); 


    }); 

})