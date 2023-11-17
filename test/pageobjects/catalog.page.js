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

    get Catalog() {
        return $(locatorHelper('menu item catalog'))
    }
    get cartButton() {
        return $(locatorHelper('cart badge'))
    }
    get proceedToCheckout() {
        return $(locatorHelper('Proceed To Checkout button'))
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
        if(pageHeader == "Products") {
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
        }

        async goToCheckout()
        {
        await this.cartButton.click();
        const cartPageHeader = await this.headerText.getText();
        await this.proceedToCheckout.click();
        await driver.saveScreenshot('screenshots/items on list.png');

        }




}

export default new CatalogPage();