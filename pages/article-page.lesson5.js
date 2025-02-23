import {Article} from "../mock-data-generators/text.generators";


export class NewArticlePage {
    constructor(page) {
        this.page = page;
        this.article = new Article();
        this.articleTitleFieldLocator = this.page.locator(`input[name="title"]`)
        this.articleDescriptionFieldLocator = this.page.locator(`input[name="description"]`)
        this.articleBodyFieldLocator = this.page.locator(`textarea[name="body"]`)
        this.articleTagsFieldLocator = this.page.locator(`input[name="tags"]`)
        this.articlePublishButton = this.page.getByRole('button', { name: "Publish Article" })
    }

    async setTitle(title = this.article.title,
                      locator = this.articleTitleFieldLocator) {
        await locator.fill(title);
    }

    async setDescription(description = this.article.shortDescription,
                      locator = this.articleDescriptionFieldLocator) {
        await locator.fill(description);
    }

    async setTitleBody(titleBody = this.article.articleText,
                      locator = this.articleBodyFieldLocator) {
        await locator.fill(titleBody);
    }

    async setTags(tags = this.article.tagList,
                      locator = this.articleTagsFieldLocator) {
        for (const tag of tags) {
            await locator.fill(`${tag} `);
        }
    }

    async clickPublishButton(button = this.articlePublishButton) {
        await button.click();
    }
}

export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.article = new Article();
        this.articleCommentFieldLocator = this.page.locator('textarea')
        this.articlePublishButton = this.page.getByRole('button', { name: "Post Comment" })
        this.articleHeaderLocator = this.page.locator('div.container h1')
        this.publishedCommentFieldLocator = this.page.locator('p.card-text')

    }

    async setArticleComment(commentText = this.article.articleText,
                            locator = this.articleCommentFieldLocator) {
        await locator.fill(commentText);
    }

    async clickPostCommentButton(button = this.articlePublishButton) {
        await button.click();
    }
}

