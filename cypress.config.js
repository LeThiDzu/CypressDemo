const { defineConfig } = require("cypress");
const fs = require('fs')
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  projectId: "21m3pm",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'BHS Test report', 
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      on('task', {
        downloads: (downloadspath) => {
          return fs.readdirSync(downloadspath)
        }
      });

      // on('task', { downloadFile })
      on('task', verifyDownloadTasks)
    },
  },
  // env: {
  //   downloadsFolder: '../Cypress/cypress/downloads/'
  // },
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 30000,
  trashAssetsBeforeRuns: true,
});
