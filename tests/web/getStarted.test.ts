import { test, expect,Page } from '@playwright/test';
import { GetStartedPage } from '../../pages/getStartedPage';
import { Constants, environmentConstants } from '../../test-data/environment-constant';

test.describe("Polestar Developer Get Started Page",async()=>{
    let getStartedPage: GetStartedPage;

   test.beforeEach(async({page})=>{
          getStartedPage = new GetStartedPage(page);
          await page.goto(environmentConstants.UIBaseUrl);
          getStartedPage.handlePopup(page);
   });

   test("Verify the title and display of Return Home button",async({page})=>{
      page.waitForLoadState();
      const actualTitle = await page.title();
      expect(actualTitle).toEqual(Constants.getStartedPageTitle);
      
      const getReturnHomeBtn = await getStartedPage.displayReturnHomeButton();
      await expect(getReturnHomeBtn).toBeVisible();
   });

   test("should navigate to the next page when Return Home button is clicked", async ({page}) => {
      await getStartedPage.clickReturnHomeButton();
      expect( page.url()).toContain(environmentConstants.HomePageURL);
    });

    test("should display hamburger menu button",async()=>{
      await expect(await getStartedPage.dispalyHamBurgerMenu()).toBeVisible();
    });

});