// Refer to the online docs for more details: https://nightwatchjs.org/gettingstarted/configuration/
const Services = {}
loadServices()

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test/e2e/specs'],

  unit_tests_mode: true,

  exclude: [],

  // See https://nightwatchjs.org/guide/working-with-page-objects/
  page_objects_path: 'test/e2e/pageObjects',

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
  custom_commands_path: '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-assertions
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/#external-globals
  globals_path: 'nightwatch_globals.js',

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://nightwatchjs.org',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true,
        firefoxOptions: {
          args: ['--headless'],
        },
      },

      webdriver: {
        start_process: true,
        server_path: require('geckodriver').path,
        cli_args: ['--log', 'debug'],
        port: 4444,
      },

      loggingPrefs: {
        driver: 'INFO',
        server: 'OFF',
        browser: 'INFO',
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          // This tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          // w3c: false,
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          args: [
            // '--no-sandbox',
            // '--ignore-certificate-errors',
            // '--allow-insecure-localhost',
            // '--headless'
          ],
        },
      },

      webdriver: {
        start_process: true,
        port: 9515,
        server_path: Services.chromedriver ? Services.chromedriver.path : '',
        cli_args: [
          // --verbose
        ],
      },
    },
  },
}

function loadServices () {
  try {
    Services.seleniumServer = require('selenium-server')
  } catch (err) {}

  try {
    Services.chromedriver = require('chromedriver')
  } catch (err) {}

  try {
    Services.geckodriver = require('geckodriver')
  } catch (err) {}
}
