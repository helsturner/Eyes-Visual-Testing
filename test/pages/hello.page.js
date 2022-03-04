class HelloPage {
    //Getters for the Applitools Hello World page
    get fancyHeader() {return $('.fancy.title.primary') };
    get numbers() {return $('span.primary')};
    get button() {return $('button')};
    get buttonSuccess() {return $('div .section.image-section')}

    // Method to Click the botton
    async clickButton() {
        await this.button.isDisplayed();
        await this.button.click();
    };
};

module.exports = new HelloPage();