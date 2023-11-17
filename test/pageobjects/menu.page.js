import {locatorHelper} from "./page.js";


class Menu {
    /**
     * define selectors using getter methods
     */
    get menuBar(){
        return $(locatorHelper('open menu'));
    }
    get login(){
        return $(locatorHelper('menu item log in'));
    }
    get logout(){
        return $(locatorHelper('menu item log out'));
    }
    get logoutPopupButton() {
        return $('id=android:id/button1');
    }
    get Catalog() {
        return $(locatorHelper('menu item catalog'))
    }
    get webView() {
        return $(locatorHelper('menu item webview'))
    } get groLocation() {
        return $(locatorHelper('menu item geo location'))
    }
    get drawing() {
        return $(locatorHelper('menu item drawing'))
    }



    /**
     * a method to encapsule automation code to interact with the page
     *
     */
    async openMenu(){
        await this.menuBar.click();

    }
    async goToLoginPage(){

        await  this.login.click();
        await driver.pause(500);
        await driver.saveScreenshot('screenshots/LoginPage.png');

    }

    async goToLogoutPage(){

        await  this.logout.click();
        await driver.pause(500);
        await  this.logoutPopupButton.click();
        await driver.pause(500);
        await driver.saveScreenshot('screenshots/Logedout.png');

    }

    async goToCatalogPage(){
        await this.menuBar.click();
        await this.Catalog.click();
    }
}

export default new Menu();
