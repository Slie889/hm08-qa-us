const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {
    it('Should save the address', async () => {
        //Setting the address
        await browser.url ('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect($(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect($(page.toField)).toHaveValue('1300 1st St');
    })    

    it('Selecting Supportive Plan', async () => {
        //Setting the address
        await browser.url ('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        //Supportive Plan
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
        await expect(supportiveButton).toBeDisplayed();
        await browser.pause(1000);
    })   
       
    it('Writing a message for the driver', async () => {
        //Setting the address
        await browser.url ('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        //Supportive Plan
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();

        //Message to the driver
        await page.FillMessage('Be on time');
        await expect($(page.MessageField)).toHaveValue('Be on time');
        await browser.pause(1000);        
    })  
       
    it('Ordering 2 Ice creams', async () => {
        //Setting the address
        await browser.url ('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        //Supportive Plan
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();

        //Place an Order for Ice creams
        const orderIcecreamButton = await $(page.orderIcecreamButton);
        await orderIcecreamButton.click();
        await orderIcecreamButton.click();
        await expect(orderIcecreamButton).toBeDisplayed();
        await browser.pause(1000);
    })      
         
    it('Adding a credit card', async () => {
        //Setting the address
        await browser.url ('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
                
        //Adding a payment card
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
        await cardCode.setValue(12);

        const cardSignatureStrip = await $(page.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();

        const linkCardButton = await $(page.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();

        const closePaymentMethodModalButton = await $(page.closePaymentMethodModalButton);
        await closePaymentMethodModalButton.waitForDisplayed();
        await closePaymentMethodModalButton.click();

        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect($(cardPaymentMethodIcon)).toBeExisting();
        await browser.pause(1000);
    })

    it('Filling the phone number - 1', async () => {
        //Setting the address 
        await browser.url ('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    
        const phoneNumber = helper.getPhoneNumber('+1');
        await page.submitPhoneNumber(phoneNumber);
        await expect(helper.getElementByText(phoneNumber)).toBeExisting();
    })          
        
/*    it('Filing the phone number -2', async () => {
        //Setting the address
        await browser.url ('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const phoneNumber = helper.getPhoneNumber('+1');
        await phoneNumberField.setValue(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await page.fillPhoneNumber(phoneNumber);
        await browser.setupInterceptor();
        await $(page.nextButton).click();
        const codeField = await $(page.codeField);
        const requests = await browser.getRequest();
        await expect(request.length).toBe(1);
        const code = await requests[0].response.body.code;
        await codeField.setValue(code);
        await $(page.nextButton).click();
    }) */
    
    it('Order Blanket and handkerchiefs', async () => {
        //Setting the address
        await browser.url ('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    
        //Supportive Plan
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
        
        //Blanket and Handkerchiefs
        const orderBlanketandHankerchiefs = await $(page.orderBlanketandHankerchiefs);
        await orderBlanketandHankerchiefs.waitForDisplayed();

        const orderBlanketandHankerchiefsButton = await $(page.orderBlanketandHankerchiefsButton);
        await orderBlanketandHankerchiefsButton.waitForDisplayed();
        await orderBlanketandHankerchiefsButton.click();
        await expect(await $(orderBlanketandHankerchiefsButton)).toBeExisting();
        await browser.pause(1000);
    })       
})
    

        
        
       

        
        
           
             
              
   
        
         
    

                   
                      
       
             
   
        
        
        
    
   
      
