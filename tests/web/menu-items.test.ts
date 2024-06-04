import { test, expect, Page} from '@playwright/test';
import { GetStartedPage } from '../../pages/getStartedPage';
import { Constants, Items, environmentConstants } from '../../test-data/environment-constant';

test.describe("Polestar Developer Get Started Page", async () => {
    let getStartedPage: GetStartedPage;

    test.beforeEach(async ({ page}) => {
        getStartedPage = new GetStartedPage(page);
        await page.goto(environmentConstants.UIBaseUrl);
        getStartedPage.handlePopup(page);
    });

    test("should display menu items when hamburger menu is clicked", async ({ page }) => {
        await getStartedPage.dispalyHamBurgerMenu();
        await getStartedPage.openHamBurgerMenu();
        await page.waitForLoadState('networkidle');
        const allMenuItems = await getStartedPage.getMenuItems();
        const sortMenuItems = allMenuItems.sort((a:any, b:any) => a - b);
        console.log(sortMenuItems);
        expect(sortMenuItems).toEqual(Items);

    });
});