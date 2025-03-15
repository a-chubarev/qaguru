import {Article} from "../mock-data-generators/text.generators";

export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.article = new Article();
        this.articleCommentFieldLocator = this.page.locator('textarea')
        this.articlePublishButton = this.page.getByRole('button', { name: "Post Comment" })
        this.articleHeaderLocator = this.page.locator('div.container h1')
        this.publishedCommentFieldLocator = this.page.locator('p.card-text')

    }

    async publishArticleComment(article = this.article) {
        await this.articleCommentFieldLocator.fill(article.articleText)
        await this.articlePublishButton.click()
    }
}

