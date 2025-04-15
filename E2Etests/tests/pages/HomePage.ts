
import { Page } from "playwright/test"
import * as HomeLocators from "../locators/HomeLocators.json"
import { basePage } from "./BasePage"
export class HomePage extends basePage
{


    
    constructor(page:Page)
    {
       super(page)
    }

    async EditAc()
    {
        console.log("3-verified edit account")
        await this.page.locator(HomeLocators.EditAc).isVisible();            
        
    }

    
}