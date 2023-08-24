var loginPage = require('../../page/LoginPage')
var createCVPage = require('../../page/CreateCVPage')
import 'cypress-mochawesome-reporter/register';
import { deleteDownloadsFile } from '../support/helpers';

describe('example test', () => {

  beforeEach(deleteDownloadsFile)

  it('example test', () => {

    loginPage.login()

    createCVPage.goTo_createCV()

    createCVPage.chooseCVTemplate()

    createCVPage.createCV_step1()

    createCVPage.step2_professionalSummary()

    createCVPage.step2_education()

    createCVPage.step2_experience()

    createCVPage.step2_skills()

    createCVPage.checkPublish()
  })
});