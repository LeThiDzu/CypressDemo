import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-delete-downloads-folder').addCustomCommand();
require('cy-verify-downloads').addCustomCommand()

Cypress.Commands.add('clickElement', (locator, locatorType, ...args) => {
    if (locatorType == "xpath") {
        return cy.xpath(locator).click();
    } else if (locatorType == "cssSelector"){
        return cy.get(locator).click();
    }
});

Cypress.Commands.add('waitUntilElementVisible', (locator, locatorType, customTimeout) => {
    if (locatorType == "xpath") {
        return cy.xpath(locator, { timeout: customTimeout }).should('be.visible');
    } else if (locatorType == "cssSelector"){
        var status_display = cy.get(locator, { timeout: customTimeout}).should('be.visible')
        return status_display
    }
});

Cypress.Commands.add('setText', (locator, yourText,...args) => {
    return cy.get(`${locator}`).type(`${yourText}`).should('have.value', `${yourText}`);
});

Cypress.Commands.add('setPassword', (locator, yourPW, ...args) => {
    return cy.get(`${locator}`).type(`${yourPW}`)
});

Cypress.Commands.add('selectFirstItemInList', (groupList, ...args) => {
    return cy.get(`${groupList}`).first().trigger('mouseover').click();
});

Cypress.Commands.add('uploadFile', (locator, fileUpload, fileType = '') => {
    cy.get(locator).then(subject => {
        cy.fixture(fileUpload, 'base64').then(content => {
            const el = subject[0];
            const testFile = new File([content], fileUpload, { type: fileType });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(testFile);
            el.files = dataTransfer.files;
        });
    });
});

Cypress.Commands.add('deleteCVs', () => {
    while (cy.xpath("//div[4]/div/button[@data-testid='buttonDeleteCvs']").should('exist')) {
        cy.clickElementByXpath("//div[4]/div/button[@data-testid='buttonDeleteCvs']")
        cy.clickElement("[data-testid='btnConfirm']")
        cy.wait(5000)
    }
});

// Cypress.Commands.add('betaGenerateName', () => {
//     return dataTest[Math.floor( Math.random() * dataTest.lenght() )];
// });

