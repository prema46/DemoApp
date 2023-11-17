import {locatorHelper} from "./page.js";
let username = "bob@example.com"
let password = "10203040"

class login{
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
    get userName(){
        return $(locatorHelper('Username input field'));
    }
    get password(){
        return $(locatorHelper('Password input field'));
    }
    get submitButton(){
        return $(locatorHelper('Login button'));
    }
    get nocart_shoppingButton(){
        return $(locatorHelper('Go Shopping button'))
    }
    get headerText(){
        return $(locatorHelper('container header')+ '//android.widget.TextView');
    }
    get Catalog() {
        return $(locatorHelper('menu item catalog'))
    }

    /**
     * a method to encapsule automation code to interact with the page
     */
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
    async submitLogin (){
        await this.userName.addValue(username);
        await this.password.addValue('10203040');
        await this.submitButton.click();
        await driver.pause(500);
    }

    async checkLoginSucceessful(){
      await this.nocart_shoppingButton.waitForDisplayed();
      console.log("User successfully loged in ");
    }


    async checkForRecUser(){
        await this.headerText.getText();
        const name = await this.headerText.getText();
        //console.log("---Name---:" + name);
        if (name == 'Login'){
        await this.submitLogin();
        }
        else {
        await driver.saveScreenshot('screenshots/guess.png');
        }
    }


}
export default new login();