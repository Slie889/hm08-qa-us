const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should wait for the taxi driver', async () => {
        //Call the taxi to the address
        await browser.url (`https://cnt-0b6dbff6-b294-45f1-8713-bf54bbacba84.containerhub.tripleten-services.com/`);
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

        const cardSignatureStrip = await $(page.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();

        const linkCardButton = await $(page.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();

        await browser.pause(2000);       
        
    })    
        
})        

        
        
       

        
        
           
             
              
   
        
         
    

                   
                      
       
             
   
        
        
        
    
   
      
