/// <reference types="cypress" />

/*
TEST CASE: Validate Register Button 
    1. Go to Url 
    2. Click on "Register" buttons
    3. Validate "You clicked on Register" is visible 


TEST CASE: 
    1. Go to website
    2. Validate "Programming Languages" heading is visible 
    3. Validate "Automation Tools" heading is visible 
*/

describe('Cypress Selectors', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/html-elements'); 
    }); 

    it('Validate Register Button', () => {
        cy.get('#register_button')
        .should('be.visible')
        .and('be.enabled')
        .and('have.text', 'Register')
        .click(); 

        cy.get('.mt-1')
        .should('be.visible')
        .and('have.text','You clicked on “Register”'); 

        cy.contains('You clicked on “Register”').should('be.visible'); 
    }); 

    it('Validate Headings section', () => {
        cy.get('#languages_heading')
        .should('be.visible')
        .and('have.text', 'Programming Languages');

        cy.get('#tools_heading')
        .should('be.visible') 
        .and('have.text', 'Automation Tools'); 
    }); 

    it('Understanding CSS Syntax - Locating using tags', () => {
        cy.get('button'); 

        cy.get('h3');

        cy.get('li');

        cy.get('input'); 
    })

    it('Understanding CSS Syntax - Locating using class and ID', () => {
        cy.get('#checkbox-button-group'); // id 

        cy.get('.checkbox'); // class 
    })

    it('Understanding CSS Syntax - Locating web elements using multiple classes', () => {
        cy.get('label.checkbox.is-inline'); 
    })

    it('Understanding CSS Syntax - Locating child, descendant, adjacent', () => {
        
        /**
         * Child Selector (>) * 
         * 
         * Description: Target direct children of a specified parent. 
         */


        cy.get('#checkbox-button-group > div > label#apple_check > #checkbox_1'); 

        /**
         * Descendant Selector (space) * 
         * 
         * Description: Targets elements nested anywhere within a specificed parent. 
         */

        
        cy.get('#checkbox-button-group #microsoft_check');
        cy.get('div #microsoft_check');
        cy.get('div #unordered_list');


        // ( + ) Locates the immediate sibling of web element

        cy.get('#ordered_list #ordered_list_item1 +li +li ')

        // ( ~ ) Locates all the NEXT siblings of web element 

        cy.get('#ordered_list #ordered_list_item1 ~ li'); 

        /**
         * Grouping Selectors ( , ) *
         * 
         * Description: Combines multiple selectors into one rule set, 
         * allowing you to style diff. elements w/ the same set of styles. 
         */

        it('Validate Enter Text Bar and Facebook')
            cy.visit('https://www.techglobal-training.com/frontend/html-elements');
            
            cy.get('#text_input1, #facebook_link').should('be.visible'); 
    })

    it('Locating the element using Attribute Selectors', () => {
        // these are the proper way to locate the class and id 
        cy.get('#checkbox-button-group');
        cy.get('.checkbox');
        // Attributes 
        cy.get('[id="checkbox-button-group"]'); 
        cy.get('[class="class"]'); 

        cy.get('[data-identifier="Headings"]'); 
        cy.get('[value="Apple"]'); 
        cy.get('[type="checkbox"]'); 
    })

    it('Test Case', () => {
        /**
         * Navigate to Dynamic elements 
         * Locate the below box is displayed 
         * Box 1
         * Box 2 
         */
        cy.visit('https://www.techglobal-training.com/frontend/dynamic-elements'); 
        cy.get('li > #box_1_ece009').should('be.visible'); 
        cy.get('[class="DynamicElements_boxWrapper__maLme"]').should('be.visible'); 

        /**
         * @example 
         * [class=className]
         * [id="idName"]
         * [value="Apple"]
         * 
         * [id=box_1_c64167]
         * contains    => [id*=box_1_]
         * starts-with => [id^=box_1_]
         * ends-with   => [id$=box_1_]
         */
        cy.get('[id^=box_1_]');   
        cy.get('[id^=box_2_]');   

        cy.get('[id^=box_]').should('be.visible'); 
    })

    it('Pseudo Class', () => {
        cy.get('#ordered_list > li:first-child'); 
        cy.get('#ordered_list > li:last-child'); 
        cy.get('#ordered_list > li:nth-child(2)'); 

        cy.get('#microsoft_check input').check(); 
        // cy.get('#microsoft_check input').check().should('be.checked'); 

        cy.get('input:checked'); 

        cy.get('input:not([type=hidden])') // what Burak used to answer that interview question 
    })
}); 

 /**
 * 1. Navigate to TechGlobal frontend HTML Elements Page
 * 2. Validate "Enter Text Here" input bar is visible 
 * 3. Validate "Facebook" link is visible 
*/

