
export function locatorHelper(selector) {
    return driver.isIOS ? `id=${selector}` : `//*[@content-desc="${selector}"]`;
};
