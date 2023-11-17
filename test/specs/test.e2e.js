import MenuPage from "../pageobjects/menu.page.js";
import loginPage from "../pageobjects/login.page.js";


describe('My Login application', () => {
    it('End to end flow', async () => {
        await MenuPage.openMenu();
        await driver.saveScreenshot('screenshots/menuOpenOut.png')
        await loginPage.goToLoginPage();
        await loginPage.submitLogin();
    })
    it('should be able login successfully', async () => {
        await MenuPage.openMenu();
        await loginPage.goToLoginPage();
        await loginPage.checkLoginSucceessful();
        await driver.saveScreenshot('screenshots/LogedIn.png');
        await driver.quit();
    })

    it('should be able logout successfully', async () => {
        await MenuPage.openMenu();
        await loginPage.goToLogoutPage();
        await driver.saveScreenshot('screenshots/LogedIn.png');
        await driver.quit();
    })

})

