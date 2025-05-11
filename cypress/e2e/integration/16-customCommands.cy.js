/// <reference types="cypress"/>

describe("Cypress Custom Commands", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.clickCard('HTML Elements'); 
    });

/*
function clickSearchButton() {
  cy.get('.searchButton').click()
}

function searchUser(userName) {
  cy.get('.searchBar').type(userName)
  this.clickSearchButton()
  cy.get('.row').contains(userName).should('have.text', userName)
}

function editOrShowUserByName(buttonType ,userName) {
  cy.get('.row').contains(userName).find(buttonType).click()
  cy.url().should('eq', '/edit/user/18')
}

function searchAndEditOrShowUserByName(buttonType ,userName){
  this.searchUser()
  this.editOrShowUserByName(buttonType ,userName)
}
*/
    it('Parent Commannd', () => {
        /*Parent Commands --> called ONLY by cy. */
        // cy.get()
        // cy.url()
        // cy.title()
        // cy.wrap()
        // cy.window()

        /*
        ALWAYS starts like this --> Cypress.Commands.add('methodName', (callbackFun/parameters) => {
            })
        */

       // cy.selectDropdown('#company_dropdown1', 'Apple'); 

        cy.loginApp('randomEmail@gmail.com', 'TechGlobal'); 
    }); 

    it.only('Child Commands', () =>{
        /* Child Commands */
        // .should()
        // .find()
        // .click()
        // all the action methods 

        cy.get('#main_heading').logText(); 
        cy.get('#main_heading').haveText('HTML Elements'); 

        cy.log(Cypress.env('SITE_URL'));
        cy.log(Cypress.env('UI_USERNAME'));
        cy.log(Cypress.env('UI_PASSWORD'));
    }); 
}); 

