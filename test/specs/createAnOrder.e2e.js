const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();

        const cardNumber = await $(page.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(1234567812345678);
        const cardCode = await $(page.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(55);

        const cardSignatureStrip = await $(page.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();

        await browser.pause(2000);
        
        const linkCardButton = await $(page.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();


        const closePaymentMethodModalButton = await $(page.closePaymentMethodModalButton);
        await closePaymentMethodModalButton.waitForDisplayed();
        await closedPaymentMethodModalButton.click();

        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await

        
    

        
        
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
})

