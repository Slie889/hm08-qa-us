module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber: '#number',
    cardCode: '.card-code-input #code',
    
    // Buttons
    callATaxiButton: '//button[contains(text(), "Call a taxi")]',
    phoneNumberButton: '//div[contains(text(), "Phone number")]',
    nextButton: '//button[contains(text(),"Next")]',
    confirmButton: '//button[contains(text(), "Confirm")]',
    paymentMethodButton: '.pp-text',
    addCardButton: '//div[contains(text(), "Add card")]',
    linkCardButton: '//button[contains(text(), "Link")]',
    closePaymentMethodModalButton: '.payment-picker open',
    // Modals
    phoneNumberModal: '.modal',
    cardSignatureStrip: '.plc',
    cardPaymentMethodIcon: 'img[alt="card"]',
        
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);

    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);

        // collect all responses
        const requests = await browser.getRequests();

        // use first response
        const code = await requests[0].response.body.code;
        await codeField.setValue(code);
        await $(this.confirmButton).click();
    },
    addPaymentMethodCard: async function() {
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();

        const cardNumber = await $(this.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(1234567812345678);
        const cardCode = await $(this.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(12);

        const cardSignatureStrip = await $(this.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();
             
        const linkCardButton = await $(this.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();

        const closePaymentMethodModalButton = await $(this.closePaymentMethodModalButton);
        await closePaymentMethodModalButton.waitForDisplayed();
        await closePaymentMethodModalButton.click();

        const cardPaymentMethodIcon = await $(this.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
        
    }
};