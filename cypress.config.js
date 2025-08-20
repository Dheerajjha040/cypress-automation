import { defineConfig } from "cypress";
import { readExcel } from "./cypress/support/readExcel.js";
import Mochawesome from "mochawesome";


export default defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    baseUrl: "https://parabank.parasoft.com/parabank",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    on("task", {
      readExcelData({filepath,sheetName})
      {
        return readExcel(filepath,sheetName);
      }
    })
  
    },
    reporter: 'mochawesome',
    reporterOptions: 
    {
      reportDir: 'cypress/reports',
      overwrite: false,
      json: false,
      html: true,


    }
  },
});
