import helpers from '../support/helpers';

describe('template spec', () => {
  it('delete cv', () => {
    cy.visit('https://staging.thecv.app/')

    cy.clickElement("button[value='signin']", "cssSelector")

    const email = "tranhuuhoan254@gmail.com"
    cy.setText("[data-testid='formSignInEmail']", email)

    cy.setPassword("[data-testid='formSignInPassword']", "@3roBlast")

    cy.clickElement("[data-testid='formSignInButton']", "cssSelector")

    cy.clickElement("[href='/dashboard']", "cssSelector")

    cy.url().should('include', '/dashboard')

    for (let i = 0; i < 20; i = i + 1) {
      cy.clickElementByXpath("//div[4]/div/button[@data-testid='buttonDeleteCvs']")
      cy.clickElement("[data-testid='btnConfirm']", "cssSelector")
      cy.wait(3000)
    }
  })
})