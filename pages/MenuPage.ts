import { Locator, Page } from '@playwright/test';

export class MenuPage {
    private page: Page;
    private newsLink: Locator

    constructor(page:Page){
        this.page = this.page;
        this.newsLink = page.locator("//span[normalize-space()='News']");
    }

    async openNewsLink()
    {
        await this.newsLink.click();
    }

}