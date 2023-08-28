var newTCPage = require('../../page/newPage_forPara') 
import helpers from '../support/helpers';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')

    // if (cy.waitUntilElementVisible("input[type='notSubmit_ehe']", "cssSelector", 3000) == true) {
    //   cy.log("Button display")
    // } else {
    //   cy.log("Button not display, do something here")
    // }

    // var elementExist = cy.verifyElementExist("input[name='note']")
    // cy.log("Result here: " + elementExist)
    var elementExist = helpers.verifyElementExist("input[type='submit']")
    cy.log("Result: " + elementExist)
    if (elementExist == true) {
      cy.log("Vô true")
    } else {
      cy.log("Vô false")
    }


    // newTCPage.checkEleExist("input[name='hmmNote']")
    // .then(e => {
    //   cy.log("Element exist")
    // })
    // .catch(e => {
    //   cy.log("Element not exist")
    // })


    // cy.get("input[name='notNote']", {timeout: 3000}).then($ele => {
    //   if ($ele.is(':visible')) {
    //     cy.log("Element visible")
    //   } else if(!$ele.is(':visible')){
    //     cy.log("Element not visible")
    //   }
    // })

    // cy.contains("input[type='submit']")
    //   .should(() => { })
    //   .then(($button) => {
    //     if (!$button.length) {
    //       // there is no button
    //       cy.log('there is no button')
    //       return
    //     } else {
    //       cy.window().then((win) => {
    //         cy.spy(win.console, 'log').as('log')
    //       })
    //       cy.wrap($button).click()
    //       cy.get('@log').should(
    //         'have.been.calledOnceWith',
    //         'Clicked',
    //       )
    //     }
    //   })


    // if (cy.get("input[type='notSubmit_ehe']").should('be.visible')) {
    //   cy.log('Button display')
    // } else {
    //   cy.log('Button not display')
    // }
    // cy.clickElement("input[type='submit']", "cssSelector")
  })
})