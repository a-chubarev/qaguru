import {Article} from "../mock-data-generators/text.generators";


export class NewArticlePage {
    constructor(page) {
        this.page = page;
        this.article = new Article();
        this.articleTitleFieldName = 'title'
        this.articleDescriptionFieldName = 'description'
        this.articleBodyFieldName = 'body'
        this.articleTagsFieldName = 'tags'
        this.articlePublishButtonName = 'Publish Article'
    }

    async setTitle(title = this.article.title,
                      locatorName = this.articleTitleFieldName) {
        //await this.page.locator(`input[name="${locatorName}"]`).click();
        await this.page.locator(`input[name="${locatorName}"]`).fill(title);
    }

    async setDescription(description = this.article.shortDescription,
                      locatorName = this.articleDescriptionFieldName) {
        //await this.page.locator(`input[name="${locatorName}"]`).click();
        await this.page.locator(`input[name="${locatorName}"]`).fill(description);
    }

    async setTitleBody(titleBody = this.article.articleText,
                      locatorName = this.articleBodyFieldName) {
        //await this.page.locator(`input[name="${locatorName}"]`).click();
        await this.page.locator(`textarea[name="${locatorName}"]`).fill(titleBody);
    }

    async setTags(tags = this.article.tagList,
                      locatorName = this.articleTagsFieldName) {
        //await this.page.locator(`input[name="${locatorName}"]`).click();
        for (const tag of tags) {
            await this.page.locator(`input[name="${locatorName}"]`).fill(`${tag} `);
        }
    }

    async clickPublishButton(buttonName = this.articlePublishButtonName) {
        await this.page.getByRole('button', { name: buttonName }).click();
    }
}

export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.article = new Article();
        this.articlePublishButtonName = 'Post Comment'
    }

    async setArticleComment(commentText = this.article.articleText){
        await this.page.locator('textarea').fill(commentText);
    }

    async clickPostCommentButton(buttonName = this.articlePublishButtonName) {
        await this.page.getByRole('button', { name: buttonName }).click();
    }
}

