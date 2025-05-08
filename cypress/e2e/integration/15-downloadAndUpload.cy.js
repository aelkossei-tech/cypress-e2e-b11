/// <reference types="cypress"/>

describe("File Download & File Upload", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.clickCard('File Download'); 
    });

    it('File Download', () => {
        cy.get('#file_download').click(); 

        cy.readFile('cypress/downloads/SampleText.txt')

        // ways to read file  -->  1.) cy.fixture() 2.) fs.readSync()
        // way to remove file -->  cy.fixture()
    }); 

    /**
       * Go to https://techglobal-training.com/frontend/
       * Click on the "File Upload" card
       * Send the path of the file as keys to the "Choose File" input box
       * Click on the "UPLOAD" button
       * Validate the result message equals "You Uploaded 'SampleText.txt'"
       */

    it.only('File Upload', () => {
        // give the path of file --> .selectFile('filePath"); 
        cy.get('#file_upload').selectFile('cypress/downloads/SampleText.txt');
        const fileName = 'SampleText.txt'
        // const downloadPath = path.join(cypress/downloads, fileName) --> more clarification for WINDOWS systems (makes it more normal for them to navigate)
        cy.get('#file_submit').realClick();
        cy.get('.is-success').should('be.visible').should('have.text', `You uploaded ${fileName}`);

        /*
        What if you want to --> upload multiple files: 
            cy.get('#file_upload').selectFile(['path1/file.txt', 'path2/file.txt'])

        Uploading with drag and drop 
            cy.get('#file_upload').selectFile(downloadPath, { action: "drag-drop" }); 
        */
    }); 
}); 