/// <reference types="cypress"/>

describe("Handling Alerts", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.clickCard('Alerts')
    });
  
    it.only('Mouse Actions using Cypress events', () => {
       // cy.get('#dropdown-testing').trigger('mouseover'); // it will cancel out quickly 
       cy.get('#dropdown-testing').realHover(); 
    }); 

    it.only('Keyboard Actions', () => { 
        cy.visit("https://www.techglobal-training.com/frontend");
        cy.clickCard('HTML Elements')

        cy.get('#text_input1')
         .realClick()
         .realPress('KeyA')
         .realPress('Tab')
         .realPress('KeyB')
         .realPress('ArrowLeft')
         .realPress('KeyR')
         .realPress('Backspace')
         .realPress(['ShiftLeft', 'KeyA'])
    })
}); 