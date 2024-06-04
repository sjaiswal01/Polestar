import { Locator, Page } from '@playwright/test';
import { environmentConstants } from '../test-data/environment-constant';

export class GetStartedPage {

  private page: Page;
  private returnHomeButton: Locator;
  private hamburgerMenuButton: Locator;
  private polestarLink: Locator;
  private hamburgerMenuItem: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.returnHomeButton = page.getByText("Return Home");
    this.hamburgerMenuButton = page.locator("button[title='Menu']");
    this.polestarLink = page.locator("//*[name()='svg'][@aria-label='Home']");
    this.hamburgerMenuItem = page.locator("//ul[@role='menu']//following-sibling::li");
  }

  async displayReturnHomeButton() {
    return this.returnHomeButton;
  }

  async clickReturnHomeButton() {
    await this.returnHomeButton.click();
  }

  async clickPolestarLink() {
    await this.polestarLink.click();
  }

  async dispalyHamBurgerMenu() {
    return this.hamburgerMenuButton;
  }

  async openHamBurgerMenu() {
    await this.hamburgerMenuButton.click();
  }

  async getMenuItems(){
     this.page.waitForLoadState();
     const menuItems= await this.hamburgerMenuItem.allTextContents();
     return menuItems;

  }

   async handlePopup(page: Page){
    const acceptButtonSelector = '//button[@id="onetrust-accept-btn-handler"]';
    try {
        await page.waitForSelector(acceptButtonSelector, { timeout: 5000 });
        await page.click(acceptButtonSelector);
        console.log('Accepted cookies.');
    } catch (error) {
        console.log('No cookies popup found or unable to click the accept button.');
    }


};


}