import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'
import mochawesomePlugin from 'cypress-mochawesome-reporter/plugin'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo.applitools.com/',
    specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config)

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      ),
        mochawesomePlugin(on)

      // Make sure to return the config object as it might have been modified by the plugin.
      return config
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress 13 Demo Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 2,
  chromeWebSecurity: false,
  experimentalWebKitSupport: true,
  video: true,
  waitForAnimations: true,
  animationDistanceThreshold: 20,
  defaultCommandTimeout: 30000,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,
  projectId: 'q4reqk',
})
