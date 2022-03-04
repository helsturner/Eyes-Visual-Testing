// This is required to access API Key from .env
require('dotenv').config();

// Initialize the eyes SDK
const { Eyes, Target } = require('@applitools/eyes-webdriverio');
const eyes = new Eyes();

// Access HelloPage Page Object
const helloPage = require("../pages/hello.page");

// Set Applitools API key
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);


// Tests
describe('Match Levels Example Test ', function () {
    
    it('Content Match Level', async function () {

        // Navigate to the Movie Rental Sample Site website
        browser.url('http://127.0.0.1:5500/Sample%20Site/index.html')

        try {

            // Set the Eyes match level
            eyes.setMatchLevel("Content");

            // Start the test, set viewport to iPhone12 Pro size(390 x 844)
            await eyes.open(browser, 'Content Level Example', 'Content Match level Example');

            // Visual checkpoint #1
            await eyes.check('Main Page', Target.window());

            // End the test
            await eyes.close()

        } finally {
            // If the test was aborted before eyes.close was called end the test as aborted
            await eyes.abortIfNotClosed();

        }
    })

    it.only('Content Match Level', async function () {

        // Navigate to the the Internet website
        browser.url('http://the-internet.herokuapp.com/dynamic_content')

        try {

            // Set the Eyes match level
            eyes.setMatchLevel("Layout");

            // Start the test, set viewport to iPhone12 Pro size(390 x 844)
            await eyes.open(browser, 'Layout match Example', 'Layout Match level Example');

            // Visual checkpoint #1
            await eyes.check('Main Page', Target.window());

            // End the test
            await eyes.close()

        } finally {
            // If the test was aborted before eyes.close was called end the test as aborted
            await eyes.abortIfNotClosed();

        }
    })
})