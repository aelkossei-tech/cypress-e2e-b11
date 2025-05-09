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
        });

        const elements = [{ selector: '#login_btn', text: 'LOGIN' }, { selector: 'a[href="/frontend/login"]', text: 'Forgot Password?' }];
        elements.forEach((ele) => {
            cy.get(ele.selector)
                .should('be.visible')
                .and('have.text', ele.text)
                .and('not.be.disabled')
                .click();
        });
    });
    it('Test Case 02 & 03 - Validate the valid login & the logout', () => {
        const elements = [{ selector: '#username', text: 'TechGlobal' }, { selector: '#password', text: 'Test1234' }];
        elements.forEach((ele) => {
            cy.get(ele.selector).type(ele.text);
        });
        cy.get('#login_btn') .click(); 
       
        const login = [{ selector: '#success_lgn', text: 'You are logged in' }, { selector: '#logout', text: 'LOGOUT' }];
        login.forEach((ele) => {
            cy.get(ele.selector)
             .should('be.visible')
             .and('have.text', ele.text)
        }); 
        cy.get('#logout').click();
        cy.get('.has-background-white-ter').should('be.visible'); 
    });
    it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {
        cy.contains('a[href="/frontend/login"]', 'Forgot Password?').click(); 

        const modalElements = ['#sub_heading', 'button[aria-label="close"]', '#submit', 'label[for="email"]']
        modalElements.forEach((ele) => {
            cy.get(ele).should('be.visible');
        })
        
        cy.get('label[for="email"]').should('have.text', "Enter your email address and we'll send you a link to reset your password. ");

        cy.get('#submit')
         .should('be.enabled')
         .and('have.text', 'SUBMIT'); 
    }); 
    it('Test Case 05 - Validate the Reset Password modal close button', () => {
        cy.contains('a[href="/frontend/login"]', 'Forgot Password?').click(); 
        cy.get('.modal-card-body').should('be.visible'); 
        cy.get('button[aria-label="close"]').click(); 
        cy.get('.modal-card-body').should('not.exist'); 
    }); 
    it('Test Case 06 - Validate the Reset Password form submission', () =>{
        cy.contains('a[href="/frontend/login"]', 'Forgot Password?').click(); 
        cy.get('#email').type('ayahelkossie@gmail.com');
        cy.get('#submit').click(); 
        cy.get('#confirmation_message')
          .should('be.visible')
          .and('have.text', 'A link to reset your password has been sent to your email address.'); 
    }); 
    it('Test Case 07 - Validate the invalid login with empty credentials', () => {
        cy.get('#login_btn').click(); 
        cy.get('#error_message')
          .should('be.visible')
          .and('have.text', 'Invalid Username entered!'); 
    }); 
    it('Test Case 08 - Validate the invalid login with wrong username', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click(); 
        cy.get('#error_message')
         .should('contain.text', 'Invalid Username entered!')
         .and('be.visible'); 
    }); 
    it('Test Case 09 - Validate the invalid login with wrong password', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('1234')
        cy.get('#login_btn').click(); 
        cy.get('#error_message')
         .should('contain.text', 'Invalid Password entered!')
         .and('be.visible'); 
    }); 
    it.only('Test Case 10 - Validate the invalid login with the wrong username and password', () => {
        const invalidCred = [{selector: '#username', text: 'John'}, {selector: '#password', text: '1234'}]; 
        invalidCred.forEach((ele) => {
            cy.get(ele.selector).type(ele.text); 
        })
        cy.get('#login_btn').click(); 
        cy.get('#error_message')
          .should('contain.text', 'Invalid Username entered!')
          .and('be.visible'); 
    })
}); 