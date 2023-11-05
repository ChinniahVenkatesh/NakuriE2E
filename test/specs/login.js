import {nakuriurl} from "../pageobjects/nakuriUrl.js";
import { username } from "../pageobjects/Testdata.js";
import { password } from "../pageobjects/Testdata.js";

describe("Nakuri Login page set-up",async ()=>
{
        it("Enterning the username and password field" ,async () => 
        {
             
                  await browser.url(nakuriurl);
                  await $("#login_Layer").click();
                  await browser.pause(2000);
                  await $("input[placeholder*='Enter your active Email ID']").setValue(username);
                  await $("input[placeholder*='Enter your password']").setValue(password);
                  await $("button[type='Submit']").click();
                  await browser.pause(2000);
                  let name = await $("div.info__heading").getText();
                  expect(name).toHaveTextContaining("chinniah");

                  
        })      

        it("Check the profile details" ,async ()=>
        {
                await $("div.view-profile-wrapper a").click();
                await browser.pause(8000);

                let nameField = await $("span.fullname").getText();
                console.log(nameField);

                let experience = await $("span[name='Experience']").getText();
                console.log(experience);

                let mobile = await $("span[name='Mobile']").getText();
                console.log(mobile);

                let email = await $("span[name='Email']").getText();
                console.log(email);
      
                var today = new Date();
                const currentDate = String(today.getDate());

                console.log(currentDate);
                let d = parseInt(currentDate);
                console.log(d);

                if(d % 2 == 1)
                {
                   (await $("div#lazyResumeHead div div div.widgetHead span.edit")).click();
                   await browser.pause(2000);
                   
                   var newString = "An astute Test Engineer with more than 4 years of experience in automation testing in web application and immediate joiner";
                   console.log(updatedHeadlineOdd);
                   (await $("textarea[id='resumeHeadlineTxt']")).setValue(newString);
                   await browser.pause(2000);
                   (await $("div.action button[type='Submit']")).click();
                   await browser.pause(10000);
                }
                else
                {
                (await $("div#lazyResumeHead div div div.widgetHead span.edit")).click();
                await browser.pause(2000); 
                var oldString = "Completed B.E(EEE) as an astute Test Engineer with 4 years and 2 Months of experience in Selenium Automation testing in IT Industry and immediate joiner";
                (await $("textarea[id='resumeHeadlineTxt']")).setValue(oldString);
                await browser.pause(2000);
                (await $("div.action button[type='Submit']")).click();
                await browser.pause(10000);
                }

              await $('div.row.mb0.no-pend-acts').scrollIntoView(); 
                
        })
})
