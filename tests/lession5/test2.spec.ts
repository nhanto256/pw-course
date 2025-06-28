import { test} from "@playwright/test";
const registerPageUrl = "https://material.playwrightvn.com";

test('Bài tập 2', async({page})=>
{
    await page.goto(registerPageUrl);
    await page.locator("//a[@href='02-xpath-product-page.html']").click();
   
 const addProduct = async (producid: number, quantity: number) => {
  for (let i = 0; i < quantity; i++) {
    await page.locator(`//button[@data-product-id='${producid}']`).click();
  }
};

await addProduct(1, 1); // Add 1 sp1
await addProduct(2, 3); // Add 3 sp2
await addProduct(3, 2); // Add 2 sp3


    

})