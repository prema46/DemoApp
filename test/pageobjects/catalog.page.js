import {locatorHelper} from "./page.js";


class CatalogPage {

    /**
     * define selectors using getter methods
     */
    get menuBar(){
        return $(locatorHelper('open menu'));
    }
    get headerText(){
        return $(locatorHelper('container header')+ '//android.widget.TextView');
    }
    get Catalog() {
        return $(locatorHelper('menu item catalog'))
    }
    get storeItem1() {
        return $(locatorHelper('store item')+ '[1]');
    }
    get storeItem2() {
        return $(locatorHelper('store item')+ '[2]');
    }
    get storeItem3() {
        return $(locatorHelper('store item')+ '[5]');
    }
    get colorSetBlue() {
        return $(locatorHelper('blue circle'))
    }
    get colorSetBlack() {
        return $(locatorHelper('black circle'))
    }
    get colorSetGray() {
        return $(locatorHelper('gray circle'))
    }
    get colorSetRed() {
        return $(locatorHelper('red circle'))
    }

    get countAdd() {
        return $(locatorHelper('counter plus button'))
    }

    get countLess() {
        return $(locatorHelper('counter minus button'))
    }
    get addToCart() {
        return $(locatorHelper('Add To Cart button'))
    }
    get cartButton() {
        return $(locatorHelper('cart badge'))
    }
    get proceedToCheckout() {
        return $(locatorHelper('Proceed To Checkout button'))
    }
    get nameField() {
        return $(locatorHelper('Full Name* input field'))
    }
    get addressField1() {
        return $(locatorHelper('Address Line 1* input field'))
    }
    get addressField() {
        return $(locatorHelper('Address Line 2* input field'))
    }
    get cityField() {
        return $(locatorHelper('City* input field'))
    }
    get stateField() {
        return $(locatorHelper('State/Region* input field'))
    }
    get zipcodeField() {
        return $(locatorHelper('Zip Code* input field'))
    }
    get countryField() {
        return $(locatorHelper('Country* input field'))
    }
    get toPayment() {
        return $(locatorHelper('To Payment button'))
    }

    get cardNumberField(){
        return $(locatorHelper('Card Number'))
    }
    get expDate(){
        return $(locatorHelper('Expiration Date'))
    }
    get secCode(){
        return $(locatorHelper('Security Code'))
    }
    get orderReview(){
        return $(locatorHelper(' Review Order button'))
    }
    get placeOrder(){
        return $(locatorHelper(' Place Order button'))
    }

    /** methods
     *
     * @returns {Promise<void>}
     */
    async openMenu(){
        await this.menuBar.click();
    }
    async goToCatalogPage(){
        await this.menuBar.click();
        await this.Catalog.click()
    }

    async addItemsInCart(){
        const pageHeader = await this.headerText.getText();
        if(pageHeader != "Products") {
            await this.goToCatalogPage();
        }
            await this.storeItem1.click();
            await this.colorSetBlue.click();
            await this.countAdd.click();
            await this.countAdd.click();
            await this.addToCart.click();
            await this.goToCatalogPage();
            await this.storeItem2.click();
            await this.countAdd.click();
            await this.addToCart.click();

        }


    async goToCheckout()
    {
         await this.cartButton.click();
        const cartPageHeader = await this.headerText.getText();
        console.log(cartPageHeader);
        await this.proceedToCheckout.click();
        await driver.saveScreenshot('screenshots/items on list.png');
    }
    async updateAddressDetails(){
        await this.nameField.addValue('Rebecca Winter');
        await this.addressField1.addValue('Mandorrley 112');
        //await this.addressField.addValue('Entrance 1');
        await this.cityField.addValue('Truro');
        await this.stateField.addValue('Cornwall');
        await  this.zipcodeField.addValue('89750');
        await  this.countryField.addValue('United Kingdom');
        await this.toPayment.click();
    }
    async updatePaymentDetails(){
        await this.nameField.sendKeys("Rebecca Winter");
        await this.cardNumberField.sendKeys("5555 5555 5555 4444");
        await this.expDate.sendKeys("03/25");
        await this.secCode.sendKeys("123");
        await this.orderReview.click();
        await this.placeOrder();
    }




}

export default new CatalogPage();