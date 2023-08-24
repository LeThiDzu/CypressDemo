const { defineConfig } = require("cypress");
const { rmdir } = require('fs')
const { removeDirectory } = require('cypress-delete-downloads-folder');

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
        deleteFolder(fileName) {
          console.log('Deleting file %s', fileName)

          return new Promise((resolve, reject) => {
            rmdir(fileName, { maxRetries: 10, recursive: true }, (err) => {
              if (err) {
                console.log('ERROR: ' + err)
                return reject(err)
              }
              resolve(null)
            })
          })
        }
      })
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
