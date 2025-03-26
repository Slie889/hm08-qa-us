  const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('Should save the address', async () => {
       //Setting the address
       await browser.url ('/');
       await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

       await browser.pause(2000);
    })    
      
    it('Selecting Supportive Plan', async () => {
       //Setting the address
       await browser.url ('/')
       await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
            
       //Supportive Plan
       const supportiveButton = await $(page.supportiveButton);
       await supportiveButton.waitForDisplayed();
       await supportiveButton.click();
       await expect(await $(supportiveButton)).toBeExisting();

       await browser.pause(4000);
    })   

    it('Send Message', async () => {
        //Setting the address
        await browser.url ('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        //Supportive Plan
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
        
        //Message to the driver
        await page.FillMessage('Be on time');

        await browser.pause(6000);
    })
     
        
    it('Adding a credit card', async () => {
        //Setting the address
        await browser.url ('/');
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
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();

        await browser.pause(10000);
    })  
        
      
})        
    

        
        
       

        
        
           
             
              
   
        
         
    

                   
                      
       
             
   
        
        
        
    
   
      
