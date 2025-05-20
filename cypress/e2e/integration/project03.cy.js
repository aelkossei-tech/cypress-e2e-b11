/// <reference types="cypress"/>
import BookingPage from "../../../pages/BookingPages";

describe('Project 03', () => {
  const bookingPage = new BookingPage;

  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/booking');
  })

  it('Test Case 01 - Validate the default Book your trip form', () => {
    bookingPage.getOneWayRadio().should('be.enabled').and('be.visible').and('be.checked');
    bookingPage.getRoundTripRadio().should('be.enabled').and('be.visible').and('not.be.checked');

    const labels =
      [bookingPage.getCabinClassLabel(),
      bookingPage.getFromLabel(),
      bookingPage.getToLabel(),
      bookingPage.getDepartLabel(),
      bookingPage.getReturnLabel(),
      bookingPage.getNumberOfPassengersLabel(),
      bookingPage.getPassenger1Label()
      ]

    labels.forEach((ele) => {
      ele.should('be.visible');
    });

    const dropdowns = 
      [ 
        bookingPage.getCabinClassDropdown(), 
        bookingPage.getFromDropdown(), 
        bookingPage.getToDropdown(), 
        bookingPage.getDepartDropdown(), 
        bookingPage.getReturnDropdown(), 
        bookingPage.getNumberofPassengersDropdown(), 
        bookingPage.getPassenger1Dropdown()
      ]; 

      dropdowns.forEach(ele => {
        ele.should('be.visible'); 
      }); 

      bookingPage.getReturnDropdown().should('be.not.enabled'); 
      bookingPage.getNumberofPassengersDropdown().find(':selected').should('have.value', 1); 
      bookingPage.getPassenger1Dropdown().find(':selected').should('have.text', 'Adult (16-64)'); 
      bookingPage.getBookButton().should('be.visible').and('be.enabled'); 
  });

  it('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {
    bookingPage.getRoundTripRadio().click().should('be.enabled');
    bookingPage.getOneWayRadio().should('not.be.selected');

    const labels =
      [bookingPage.getCabinClassLabel(),
      bookingPage.getFromLabel(),
      bookingPage.getToLabel(),
      bookingPage.getDepartLabel(),
      bookingPage.getReturnLabel(),
      bookingPage.getNumberOfPassengersLabel(),
      bookingPage.getPassenger1Label()
      ]

    labels.forEach((ele) => {
      ele.should('be.visible');
    });

    const dropdowns =
      [
        bookingPage.getCabinClassDropdown(),
        bookingPage.getFromDropdown(),
        bookingPage.getToDropdown(),
        bookingPage.getDepartDropdown(),
        bookingPage.getReturnDropdown(),
        bookingPage.getNumberofPassengersDropdown(),
        bookingPage.getPassenger1Dropdown()
      ];

    dropdowns.forEach(ele => {
      ele.should('be.visible');
    });
  });

  it('Test Case 03 - Validate the booking for 1 passenger and one way', () => {
    bookingPage.getOneWayRadio().click().should('be.checked'); 
    bookingPage.getCabinClassDropdown().select('Business'); 
    bookingPage.getFromDropdown().select('Illinois'); 
    bookingPage.getToDropdown().select('Florida'); 
  
    bookingPage.getDepartDropdown().then(input => {
      cy.wrap(input).click()
      cy.get('div[aria-label="Choose Monday, May 26th, 2025"]').click(); 
    }); 
    bookingPage.getNumberofPassengersDropdown().select('1');
    bookingPage.getPassenger1Dropdown().select('Senior (65+)');
    bookingPage.getBookButton().click(); 

    const results = [
      'DEPART', 
      'IL to FL', 
      'Mon May 26 2025', 
      'Number of Passengers: 1', 
      'Passenger 1: Senior (65+)',
      'Cabin class: Business'
    ]
    
    results.forEach(ele => {
      bookingPage.getResultCard().should('include.text', ele).should('be.visible'); 
    }); 

  }); 

  it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {
    bookingPage.getRoundTripRadio().click().should('be.checked');
    bookingPage.getCabinClassDropdown().select('First'); 
    bookingPage.getFromDropdown().select('California'); 
    bookingPage.getToDropdown().select('Illinois'); 

    bookingPage.getDepartDropdown().then(input => {
      cy.wrap(input).click(); 
      cy.get('div[aria-label="Choose Monday, May 26th, 2025"]').click(); 
    }); 

    bookingPage.getReturnDropdown().then(input => {
      cy.wrap(input).click(); 
      cy.get('button[aria-label="Next Month"]').click(); 
      cy.get('div[aria-label="Choose Thursday, June 26th, 2025"]').click();
    }); 

    bookingPage.getNumberofPassengersDropdown().select('1');
    bookingPage.getPassenger1Dropdown().select('Adult (16-64)');
    bookingPage.getBookButton().click();

    const results = [
      'DEPART',
      'CA to IL',
      'Mon May 26 2025', 
      'Number of Passengers: 1',
      'Passenger 1: Adult (16-64)',
      'Cabin class: First', 
      'RETURN', 
      'IL to CA', 
      'Thu Jun 26 2025'
    ]

    results.forEach(ele => {
      bookingPage.getResultCard().contains(ele).should('be.visible');
    }); 
  }); 

  it('Test Case 05 - Validate the booking for 2 passengers and one way', () => {
    bookingPage.getOneWayRadio().click(); 
    bookingPage.getCabinClassDropdown().select('Premium Economy'); 
    bookingPage.getFromDropdown().select('New York'); 
    bookingPage.getToDropdown().select('Texas'); 
    bookingPage.getDepartDropdown().then(input => {
      cy.wrap(input).click(); 
      cy.get('div[aria-label="Choose Wednesday, May 21st, 2025"]').click(); 
    }); 
    bookingPage.getNumberofPassengersDropdown().select('2'); 
    bookingPage.getPassenger1Dropdown().select('Adult (16-64)'); 
    bookingPage.getPassenger2Dropdown().select('Child (2-11)'); 
    bookingPage.getBookButton().click(); 

    const results = [
      'DEPART',
      'NY to TX',
      'Wed May 21 2025', 
      'Number of Passengers: 2',
      'Passenger 1: Adult (16-64)',
      'Passenger 2: Child (2-11)',
      'Cabin class: Premium Economy'
    ]

    results.forEach(ele => {
      bookingPage.getResultCard().contains(ele).should('be.visible');
    }); 
  }); 
}); 