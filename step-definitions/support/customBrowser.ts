import { setWorldConstructor,IWorldOptions,World } from "@cucumber/cucumber";
import { Page, Browser, BrowserContext } from "@playwright/test";

export class CustomBrwoser extends World{
    page !: Page;
    browser!: Browser
    context!: BrowserContext

    constructor(options:IWorldOptions) {
        super(options)
    }

}
setWorldConstructor(CustomBrwoser);