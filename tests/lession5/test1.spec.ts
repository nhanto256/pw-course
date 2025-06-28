import { test} from "@playwright/test";
const registerPageUrl = "https://material.playwrightvn.com";

test ('Bài tập 1', async({page})=>
{
    await page.goto(registerPageUrl);
    await page.locator("//a[@href='01-xpath-register-page.html']").click();

    //Điền Username
    await page.locator("//input[@id='username']").pressSequentially("Kami", {delay:100,});

    //Điền Passwork
    await page.locator("//input[@id='email']").pressSequentially("nhant@joblogic.com",{delay:100,});

    //Chọn Male
    await page.locator("//input[@id='male']").check();

    //Chọn Travel và Reading: dùng check
    await page.locator("//input[@id='reading']").check();
    await page.locator("//input[@id='traveling']").check();

    //Chọn Art và Sport: dùng Select Option
    await page.locator("//select[@id='interests']").selectOption(["Music","Sports"]);

    //Chọn Austraulia
    await page.locator("//select[@id='country']").selectOption("Canada");

    //Điền nằm sinh
    await page.locator("//input[@id='dob']").fill("1990-06-25");

    //Chọn file
    await page.locator("//input[@id='profile']").setInputFiles("tests-examples/demo-todo-app.spec.ts")

    //Chọn mức 6
    await page.locator("//input[@id='rating']").fill("6");

    //Chọn màu
     await page.locator("//input[@id='favcolor']").evaluate((el) => {
  el.value = "#3D525A";
  el.dispatchEvent(new Event('input', { bubbles: true }));

    
});
    //Click Submit
    await page.locator("//button[@type='submit']").click();

})