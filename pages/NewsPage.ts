import { Locator, Page } from '@playwright/test';

export class NewsPage {
    private page: Page;
    private dropdown: Locator
    private clickDropdown: Locator
    private dropdownItems: Locator

    constructor(page:Page){
        this.page = this.page;
        this.dropdown = page.getByRole('combobox');
        this.clickDropdown = page.getByLabel('chevronDown');
        this.dropdownItems = page.locator('//div[contains(@id, "dropdown-field")]//button');
    }

    async openDropdown()
    {
        await this.dropdown.click();
    }

    async getDropdownValues() {
        await this.dropdown.waitFor();
        await this.clickDropdown.click();
        const dropdownValues = await this.dropdownItems.allTextContents();
        return dropdownValues;
      }

}