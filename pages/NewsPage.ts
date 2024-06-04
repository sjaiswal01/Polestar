import { Locator, Page } from '@playwright/test';

export class NewsPage {
    private page: Page;
    private dropdown: Locator

    constructor(page:Page){
        this.page = this.page;
        this.dropdown = page.locator("//div[@class='css-1kt83gu']");
    }

    async openDropdown()
    {
        await this.dropdown.click();
    }

    async getDropdownValues() {
        await this.dropdown.waitFor();
        const options = await this.dropdown.selectOption('All');
        console.log(options);

      }

}