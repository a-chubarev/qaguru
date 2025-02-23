export async function publishArticle(newArticlePage) {
    await newArticlePage.setTitle()
    await newArticlePage.setDescription()
    await newArticlePage.setTitleBody()
    await newArticlePage.setTags()
    await newArticlePage.clickPublishButton()
}