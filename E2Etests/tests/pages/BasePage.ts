import { Page } from "playwright/test";

export class basePage
{
    protected page:Page

    constructor(page:Page)
    {
        this.page=page
    }

    async clickfield(locator: string)
    {
        await this.page.locator(locator).click()
    }

    
}