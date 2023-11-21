import MenuPage from "../pageobjects/menu.page.js";
import loginPage from "../pageobjects/login.page.js";
import catalogPage from "../pageobjects/catalog.page.js";


describe ('Place my order', () =>{

    it('login flow', async()=>{
        await MenuPage.openMenu();
        await loginPage.goToLoginPage();
        await loginPage.checkForRecUser();
  })

    it('Add item in cart', async()=>{
        await catalogPage.goToCatalogPage();
        await catalogPage.addItemsInCart();
        await catalogPage.goToCheckout();
        await driver.saveScreenshot('screenshots/Cart.png');
    })

    it('Proceed to checkout', async()=>{
        await catalogPage.updateAddressDetails();
        await  catalogPage.updatePaymentDetails();
        const pageHeader = await this.headerText.getText();
        console.log(pageHeader);
        await driver.saveScreenshot('screenshots/checkout.png');
    })
    it('Sign out', async()=>{

       await  driver.deleteSession();
        await driver.terminateApp('app/android/Android.MyDemoAppRN.apk');
    })

})