import { Page } from "playwright/test";
import * as LoginLocators from "../locators/LoginLocators.json"
import { basePage } from "./BasePage";



export default class LoginPage extends basePage
{

    constructor(page:Page)
    {
           super(page)
    }
    async LaunchUrl()
    {         
              console.log("1-My Account");                  
              await this.page.goto("https://ecommerce-playground.lambdatest.io/");
              await this.clickfield(LoginLocators.myAccount)
    }
    async login()
    {             
                  console.log("2-logged in");       
                  await this.page.locator(LoginLocators.email_field).fill("dummy1234@gmail.com")
                  await this.page.locator(LoginLocators.pwd_field).fill("dummy1234@gmail.com")
                  await this.page.locator(LoginLocators.submit_btn).click()
    }
    async logout()
    {
             console.log("4-logout success")
             await this.page.locator(LoginLocators.Logout_link).click()
             await this.page.locator(LoginLocators.continue).click()
          
    }

    
}