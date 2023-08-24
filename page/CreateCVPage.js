import helpers from '../cypress/support/helpers'

var dashboardPage = require('../ui/DashboardPageUI')
var homePage = require('../ui/HomePageUI')
var createCVPage = require('../ui/CreateCVPageUI')
var info = require('../utils/Info')
const path = require('path')
const dayjs = require('dayjs')
import { faker } from '@faker-js/faker';
require('cypress-delete-downloads-folder').addCustomCommand();

export function goTo_createCV() {
    cy.clickElement(homePage.btnDashboard, "cssSelector")
    cy.clickElement(dashboardPage.btnAddNew, "cssSelector")
}

export function chooseCVTemplate() {
    cy.selectFirstItemInList("[data-testid='listTemplate'] > div")
}

export function createCV_step1() {
    cy.verifyElementExist(createCVPage.txtJobTitle)
    cy.clickElement(createCVPage.upload_imgUpload, "cssSelector")
    cy.uploadFile("input[type='file']", "bhsoft_logo.jpg", "image/jpg")
    cy.clickElement(createCVPage.upload_saveChange, "xpath")
    cy.setText(createCVPage.txtJobTitle, info.jobTitle)
    cy.setText(createCVPage.txtFirstName, info.firstName)
    cy.setText(createCVPage.txtLastName, info.lastName)
    cy.setText(createCVPage.txtPhone, info.phone)
    cy.get(createCVPage.txtEmail).should('have.value', info.loginEmail)

    cy.clickElement(createCVPage.addInfo, "xpath")

    cy.setText(createCVPage.txtCountry, info.country)
    cy.setText(createCVPage.txtCity, info.city)
    cy.setText(createCVPage.txtAddress, info.address)
    cy.setText(createCVPage.txtZipcode, info.zipcode)
    cy.setText(createCVPage.txtPlaceOfBirth, info.city)
    cy.setText(createCVPage.txtDateOfBirth, info.dob)
    cy.setText(createCVPage.txtLinkedIn, info.linkedIn)
    cy.setText(createCVPage.txtWebsite, info.website)

    cy.xpath(createCVPage.cvDT_fullName).contains(helpers.caseInsensitive(info.firstName + " " + info.lastName))
    cy.xpath(createCVPage.cvDT_jobTitle).contains(helpers.caseInsensitive(info.jobTitle))
    cy.xpath(createCVPage.cvDT_email).should('have.text', info.loginEmail)
    cy.xpath(createCVPage.cvDT_phone).should('have.text', info.phone)
    cy.xpath(createCVPage.cvDT_website).should('have.text', info.website)
    cy.xpath(createCVPage.cvDT_linkedIn).should('have.text', info.linkedIn)
    var fullAddress = info.address + ", " + info.city + ", " + info.zipcode + ", " + info.country
    cy.xpath(createCVPage.cvDT_Address).contains(helpers.caseInsensitive(fullAddress))
    cy.xpath(createCVPage.cvDT_placeOfBirth).should('have.text', info.city)
    cy.xpath(createCVPage.cvDT_dateOfBirth).should('have.text', info.dob)

    cy.clickElement(createCVPage.btnContinue, "xpath")
}

export function step2_professionalSummary() {
    var proSummary_paragraph = faker.lorem.paragraph(3)
    cy.xpath(createCVPage.txtProfessionalSummary).type(proSummary_paragraph)
    cy.xpath(createCVPage.cvDT_profile + "[2]//div").should('have.text', proSummary_paragraph)
    cy.clickElement(createCVPage.btnProfessionalSumary, "xpath")
}

export function step2_education() {
    cy.clickElement(createCVPage.btnEducation, "xpath")
    cy.setText(createCVPage.txtSchool, info.school)
    cy.setText(createCVPage.txtDegree, info.degree)
    cy.xpath(createCVPage.txtStartDate).clear().type(info.startDate)
    cy.xpath(createCVPage.txtEndDate).clear().type(info.endDate)
    cy.setText(createCVPage.txtEduCity, info.city)
    var eduDescript_paragraph = faker.lorem.paragraph(3)
    cy.xpath(createCVPage.txtEduDescript).type(eduDescript_paragraph)

    cy.xpath(createCVPage.cvDT_education + "//h5/span").should('have.text', info.degree + ", " + info.school + ", " + info.city)
    
    var currentDate = dayjs().format('MMM YYYY')
    if (currentDate == info.endDate) {
        const endDate = "Present"
        cy.xpath(createCVPage.cvDT_education + "[2]//div[@class='text timeline']/span").should('have.text', info.startDate + " - " + endDate)
    } else {
        cy.xpath(createCVPage.cvDT_education + "[2]//div[@class='text timeline']/span").should('have.text', info.startDate + " - " + info.endDate)
    }
    cy.clickElement(createCVPage.btnEducation, "xpath")
}

export function step2_experience() {
    var chosenCompany
    cy.clickElement(createCVPage.btnExperience, "xpath")
    cy.xpath(createCVPage.txtExpCompanyName).type("bhs")
    cy.wait(5000)
    const items = []
    cy.xpath("//p[text()='Company name']/following-sibling::div//div[@class='w-full']/div//p[1]")
    .each(($childElement) => items.push($childElement.text()))
    .then(() => {
        var chosenItem = getRandomInArray(items)
        chosenCompany = chosenItem
        cy.log("Hmm: " + chosenItem)
        cy.log("chosen company: " + chosenCompany)
        cy.clickElement("//*[text()='" + chosenItem + "']", "xpath")
    })
    
    var currentDate = dayjs().format('MMM YYYY')
    cy.log("Current date: " + currentDate)

    cy.xpath(createCVPage.txtExpStartDate).clear().type(info.startDate)
    cy.xpath(createCVPage.txtExpEndDate).clear().type(currentDate)

    var expDescript_paragraph = faker.lorem.paragraph(3)
    cy.xpath(createCVPage.txtExpDescript).type(expDescript_paragraph)

    cy.clickElement(createCVPage.btnExpSendVerify, "xpath")
    cy.clickElement(createCVPage.btnExpSendConfirm, "xpath")
    checkToastMessageContent(createCVPage.toast_errorMessage, '"Job Title" is not allowed to be empty')

    var oldJobTitle = helpers.generateRandomValue("Job")
    cy.xpath(createCVPage.txtExpJobTitle).type(oldJobTitle)

    var actualEndDate = cy.xpath(createCVPage.txtExpEndDate).invoke('val')
    
    if (currentDate.match(actualEndDate)) {
        const endDate = "Present"
        cy.xpath(createCVPage.cvDT_experience + "[2]//div[@class='text timeline']/span").should('have.text', info.startDate + " - " + endDate)
    } else {
        cy.xpath(createCVPage.cvDT_experience + "[2]//div[@class='text timeline']/span").should('have.text', info.startDate + " - " + info.endDate)
    }

    cy.xpath(createCVPage.cvDT_experience + "[2]//div[contains(@class, 'wrap-title')]/h5/span").contains(oldJobTitle)
    cy.xpath(createCVPage.cvDT_experience + "[2]//div[contains(@class, 'text description')]//div").should('have.text', expDescript_paragraph)
    cy.clickElement(createCVPage.btnExperience, "xpath")
}

export function step2_skills() { 
    cy.clickElement(createCVPage.btnSkills, "xpath")
    var skillsList = []
    cy.xpath("//div[contains(@class, 'rc-dropdown')]//span")
    .each(($li) => skillsList.push($li.text()))
    .then(() => {
        var chosenSkill = getRandomInArray(skillsList)
        cy.log("Chosen skill: " + chosenSkill)
        cy.clickElement("//button[@id='" + chosenSkill +"']", "xpath")
    });

    cy.clickElement(createCVPage.btnDownload, "xpath")
    cy.clickElement(createCVPage.btnDownloadPDF, "xpath")
    var currentDate = dayjs().format('DD.MM.YYYY')
    checkFileDownload("UNTITLED_" + currentDate + ".pdf")

}

export function checkPublish() {
    cy.clickElement(createCVPage.btnPublish, "xpath")
    cy.xpath(createCVPage.btnPublishNow).should('be.visible')
    cy.clickElement(createCVPage.btnPublishNow, "xpath")
}

function getRandomInArray(arr) {
    const arrayLenght = arr.length;
    cy.log("List lenght: " + arrayLenght)
    var indexValue = Math.floor(Math.random() * (arrayLenght - 0) + 0)
    return arr[indexValue];
}

function checkToastMessageContent(toastXpath, expectedContent) {
    cy.xpath(toastXpath).contains(expectedContent)
}

function checkFileDownload(expectedFileName) {
    // const downloadFolder = Cypress.config("C:/Users/Dule/Downloads/");
    if(cy.readFile(path.join(Cypress.env('downloadsFolder'), expectedFileName)).should("exist")) {
        cy.log("File exist")
    }
}