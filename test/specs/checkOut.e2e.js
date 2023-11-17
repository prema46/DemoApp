import MenuPage from "../pageobjects/menu.page.js";
import loginPage from "../pageobjects/login.page.js";
import catalogPage from "../pageobjects/catalog.page.js";


describe ('Place my order', () =>{

    it('login flow', async()=>{
        await MenuPage.openMenu();
        Timeout:200;
        await loginPage.goToLoginPage();
        await loginPage.checkForRecUser();
  })

    it('Add item in cart', async()=>{
        await catalogPage.goToCatalogPage();
        await catalogPage.addItemsInCart();
        await catalogPage.proceedToCheckout();
        await driver.quit();
    })

})