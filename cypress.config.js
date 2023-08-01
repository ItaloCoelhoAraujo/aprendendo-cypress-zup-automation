const { defineConfig } = require("cypress")

module.exports = defineConfig({
	reporter: "cypress-mochawesome-reporter",
	reporterOptions: {
		reportDir: "cypress/reports",
		charts: true,
		embeddedScreenshots: true,
		inlineAssets: true
	},
	e2e: {
		setupNodeEvents(on, config) {
			require("cypress-mochawesome-reporter/plugin")(on)
			// implement node event listeners here
		}
	},
	video: false,
	defaultCommandTimeout: 60000,
	experimentalModifyObstructiveThirdPartyCode: true
})
