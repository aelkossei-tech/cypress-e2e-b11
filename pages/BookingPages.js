export default class BookingPage {
    // Individual methods --> focuses more on each individual part of the page
    getOneWayRadio() {
        return cy.get('input[value="One way"]');
    }
    getRoundTripRadio() {
        return cy.get('input[value="Round trip"]');
    }
    getCabinClassLabel() {
        return cy.contains('label', 'Cabin Class'); 
    }
    getCabinClassDropdown() {
        return cy.contains('label', 'Cabin Class').parent().find('select'); 
    }
    getFromLabel() {
        return cy.contains('label', 'From'); 
    }
    getFromDropdown() {
        return cy.contains('label', 'From').parent().find('select'); 
    }
    getToLabel() {
        return cy.contains('label', 'To'); 
    }
    getToDropdown() {
        return cy.contains('label', 'To').parent().find('select'); 
    }
    getDepartLabel(){
        return cy.contains('label', 'Depart'); 
    }
    getDepartDropdown() {
        return cy.contains('label', 'Depart').parent().find('input[placeholder="MM/DD/YY'); 
    }
    getReturnLabel() {
        return cy.contains('label', 'Return'); 
    }
    getReturnDropdown() {
        return cy.contains('label', 'Return').parent().find('input[placeholder="MM/DD/YY'); 
    }
    getNumberOfPassengersLabel() {
        return cy.contains('label', 'Number of passengers'); 
    }
    getNumberofPassengersDropdown() {
        return cy.contains('label', 'Number of passengers').parent().find('select'); 
    }
    getPassenger1Label() {
        return cy.contains('label', 'Passenger 1'); 
    }
    getPassenger1Dropdown() {
        return cy.contains('label', 'Passenger 1').parent().find('select'); 
    }
    getPassenger2Dropdown(){
        return cy.contains('label', 'Passenger 2').parent().find('select'); 
    }
    getBookButton() {
        return cy.get('.Button_c_button__TmkRS '); 
    }
    getResultCard() {
        return cy.get('.ml-3'); 
    }
}