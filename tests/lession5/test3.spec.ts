import { test} from "@playwright/test";
const registerPageUrl = "https://material.playwrightvn.com";

test("Bài tập 3", async({page})=>
{
    await page.goto(registerPageUrl);
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();


    await page.locator("//input[@id='new-task']").pressSequentially("1", {delay:100,});
    await page.locator("//button[@id='add-task']").click();

    for (let i = 1; i <= 20; i++) {

    await page.locator("//input[@id='new-task']").fill('');
     await page.locator("//input[@id='new-task']").pressSequentially(`${i}`, {delay:200,});
    await page.locator("//button[@id='add-task']").click();
  }

  for (let i =1; i<=20; i++)
    {
        if (i%2==0)
        {
        await page.locator(`//button[@id='${i}-delete']`).click();
        }
    }
  

  
})