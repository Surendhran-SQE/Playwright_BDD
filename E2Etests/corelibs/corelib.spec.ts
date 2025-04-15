import {Browser,BrowserContext,Page,chromium, firefox} from "@playwright/test"
import{Given,When,Then,setDefaultTimeout, Before, After, AfterAll, BeforeAll} from "@cucumber/cucumber"



setDefaultTimeout(1000*60*2)
export let browser:Browser;
export let bcontext:BrowserContext;
export let page:Page;

BeforeAll(async function () {


    let browserType='chrome'
        switch(browserType)
    {
        case "chrome":
        browser= await chromium.launch({headless:false,channel:"chrome",args:['--start-maximized']})
        break;

        case "firefox":
            browser= await firefox.launch({headless:false,channel:"firefox",args:['--start-maximized']})
            break;
    }
    
})

Before(async function () {
              
          bcontext=await browser.newContext();
          page=await bcontext.newPage()
})






