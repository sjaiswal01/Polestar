import { test, expect, Page} from '@playwright/test';
import { GetStartedPage } from '../../pages/getStartedPage';
import{ MenuPage } from '../../pages/MenuPage';
import { NewsPage } from '../../pages/NewsPage';
import { Constants, Items, environmentConstants } from '../../test-data/environment-constant';

test.describe("Polestar Developer Get Started Page", async () => {
    let menuPage: MenuPage;
    let getStartedPage: GetStartedPage;
    let newsPage : NewsPage;
    test.beforeEach(async ({ page}) => {
        menuPage = new MenuPage(page);
        getStartedPage = new GetStartedPage(page);
        newsPage = new NewsPage(page);
        await page.goto(environmentConstants.UIBaseUrl);
        getStartedPage.handlePopup(page);
    });

    test("Verify the News Page", async ({ page }) => {
        await getStartedPage.openHamBurgerMenu();
        await menuPage.openNewsLink();
        expect(page.url()).toBe(environmentConstants.HomePageURL+"news/");
    });

    test("Verify the dropDown value",async({page})=>{
        await getStartedPage.openHamBurgerMenu();
        await menuPage.openNewsLink();
        const dropdownValues = await newsPage.getDropdownValues();
        console.log(dropdownValues);
        //expect(dropdownValues.length).toBeGreaterThan(0);
    });
    
});