import {Article} from "../mock-data-generators/text.generators";

export class NewArticlePage {
    constructor(page) {
        this.page = page;
        this.article = new Article();
    }

    async setTitle(title = this.article.title) {
        await this.page.locator(`input[name="title"]`).fill(title);
    }

    async setDescription(description = this.article.shortDescription) {
        await this.page.locator(`input[name="description"]`).fill(description);
    }

    async setTitleBody(titleBody = this.article.articleText) {
        await this.page.locator(`textarea[name="body"]`).fill(titleBody);
    }

    async setTags(tags = this.article.tagList) {
        for (const tag of tags) {
            await this.page.locator(`input[name="tags"]`).fill(`${tag} `);
        }
    }

    async clickPublishButton() {
        await this.page.getByRole('button', { name: "Publish Article" }).click();
    }
}

export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.article = new Article();this.articleHeaderLocator = this.page.locator('div.container h1')
        this.publishedCommentFieldLocator = this.page.locator('p.card-text')

    }

    async setArticleComment(commentText = this.article.articleText) {
        await this.page.locator('textarea').fill(commentText);
    }

    async clickPostCommentButton() {
        await this.page.getByRole('button', { name: "Post Comment" }).click();
    }
}

