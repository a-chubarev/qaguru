import {getRandomArticleHeader} from "../utils";

export class ContainerPage{
    constructor(page){
        this.page = page;
        this.yourFeedButtonLocator = this.page.getByRole('button', { name: "Your Feed" })
        this.globalFeedButtonLocator = this.page.getByRole('button', { name: "Global Feed" })
        this.articleHeadersLocator = this.page.locator('a.preview-link h1')
    }

    async moveToRandomArticle(){
        await this.globalFeedButtonLocator.click()
        await this.clickRandomArticleHeader()

    }

    async clickRandomArticleHeader(){
        let articleHeaders = await this.articleHeadersLocator
        let header = await getRandomArticleHeader(articleHeaders)
        await header.click();
    }
}