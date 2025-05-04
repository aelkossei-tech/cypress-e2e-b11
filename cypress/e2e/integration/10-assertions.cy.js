/// <reference types="cypress"/>

describe('Cypress Assertions', () => { // work environment --> Epic name OR feature name 
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/');
    });

    it('Default Assertions 1', () => {
        cy.get('img[class^="Footer_logo"')
            .scrollIntoView() // scroll to this web element directly + THEN you can do those assertions 
            // .should('exist') --> not necessary to include since it's visible 
            // .and('be.visible')
            .and('have.attr', 'alt', 'Tech Global Logo');
    });

    it('Default Assertions 2', () => {
        cy.get('button').contains('Mock Interviews')
            // .should('be.enabled') --> not necessary b/c .click() sees if the element is clickable or not first and then clicks 
            .click();

        cy.url().should('eq', 'https://www.techglobal-training.com/login'); // implicit assertions --> retries 
    });

    it('Explicit Assertions with then()', () => {
        cy.get('#dropdown-testing').then(el => { // then() is used to convert Cypress selector --> jQuery Object 
            // cy.log(el)  --> <div#dropdown-testing.button.Header_button__eZN2O>
            const text = el.text(); // all jQuery methods 
            // could use all JS with this type of entity 

            // These logs CANNOT be done w/ Cypress commands [again b/c they don't return anything]
            // cy.log(cy.get('selector'))
            cy.log('Element color is', el.css('color'));
            cy.log('Background color is', el.css('background-color'));
            cy.log(text); // Testing 

            // Explicit Assertions
            expect(el).to.be.visible; 
            expect(text).eq('Testing');

            // To go from explicit --> implicit ==> .wrap() --> it's used to convert jQuery objecy back to Cypress chainable 
            cy.wrap(el).should('be.visible').and('have.text', 'Testing');
        });
    });
    
    it('Explicit Assertions with invoke()', () => {
        cy.get('#dropdown-testing').should('have.text', 'Testing'); // preferred way --> easiest way 

        cy.get('#dropdown-testing').invoke('text').should('eq', 'Testing');

        cy.get('#dropdown-testing').invoke('text').then((txt) => {
            expect(txt).eq('Testing');
        });
    });

    it.only('Explicit Assertions with each()', () => {
        /*
        - PRETTY USEFUL --> might use this in almost every sprint [.each()]
        Hover over Exercises Nav Item 
        Validate below options are visible/clickable/make sure their text is correct 
            Java Exercises
            JS Exercises 
        */
        const expectedOptions = ['Java Exercises', 'JS Exercises'];

        cy.get('#dropdown-exercises').realHover();

        cy.get('a[id*="j"').should('have.length', 2).each((el, index) => { // could also include indexes 
            // Explicit assertions 
            expect(el).to.be.visible;
            expect(el.text()).eq(expectedOptions[index]);

            // Implicit assertions 
            cy.wrap(el).should('be.visible').and('have.text', expectedOptions[index]); 
        })

        /*
                    // Primitive Way (one by one)
                    cy.get('#java-option')
                    .should('be.visible')
                    //.and('be.enabled')
                    .and('have.text', 'Java Exercises');
        
                    cy.get('#js-option')
                    .should('be.visible')
                    //.and('be.enabled')
                    .and('have.text', 'JS Exercises');
        
        */
    });

    it.only('Explicit Assertions w/ .each() 2', () => {
    /*
    Validate the 5 social media icons are visible in the footer 
    Validate all the links has "techglobal" in href attribute
    Validate all the links has target attribute value is "_blank" 
        - Try both explicit and implicit assertions 
    */
    }); 
});