var homePageUI = require('../ui/HomePageUI')
var loginPageUI = require('../ui/LoginPageUI')
var info = require('../utils/Info')

export function login() {
    cy.visit(info.url)
    cy.get(loginPageUI.txtEmail).should('be.visible').clickElement(homePageUI.btnLogin, "cssSelector")
    // cy.clickElement(homePageUI.btnLogin, "cssSelector")
    cy.setText(loginPageUI.txtEmail, info.loginEmail)
    cy.setText(loginPageUI.txtPassword, info.loginPassword)
    cy.clickElement(loginPageUI.btnLogin, "cssSelector")
}