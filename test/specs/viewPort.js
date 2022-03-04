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
describe('Viewport Test ', function () {
    
    it('Page should look ok', async function () {

        // Navigate to the "hello world Example" website
        browser.url('https://applitools.com/helloworld')

        try {
            // Start the test, set viewport to iPhone12 Pro size(390 x 844)
            await eyes.open(browser, 'Viewport Example', 'Mobile', { width: 390, height: 844});

            // Visual checkpoint #1
            await eyes.check('Main Page', Target.window());

            // Click the "Click me!" button
            await helloPage.clickButton()


            // Visual checkpoint #2
            await eyes.check('Click!', Target.window())

            // End the test
            await eyes.close()

        } finally {
            // If the test was aborted before eyes.close was called end the test as aborted
            await eyes.abortIfNotClosed();

        }
    })
})