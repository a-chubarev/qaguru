import {Article} from "../mock-data-generators/text.generators";

export class NewArticlePage {
    constructor(page) {
        this.page = page;
        this.article = new Article();
        this.titleLocator = this.page.locator(`input[name="title"]`)
        this.descriptionLocator = this.page.locator(`input[name="description"]`)
        this.titleBodyLocator = this.page.locator(`textarea[name="body"]`)
        this.tagsLocator = this.page.locator(`input[name="tags"]`)
        this.publishButtonLocator = this.page.getByRole('button', { name: "Publish Article" })
    }

    async publishArticle(article = this.article) {
        await this.titleLocator.fill(article.title);
        await this.descriptionLocator.fill(article.shortDescription);
        await this.titleBodyLocator.fill(article.articleText);
        let tags = article.tagList;
        for (const tag of tags) {
            await this.tagsLocator.fill(`${tag} `);
        }
        await this.publishButtonLocator.click()

    }
}
