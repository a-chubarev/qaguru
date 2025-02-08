import {faker} from "@faker-js/faker";

export class Article{
    constructor(){
        this.title = faker.lorem.sentence({min:1, max:3});
        this.shortDescription = faker.lorem.sentence({min:1, max:10});
        this.articleText = faker.lorem.sentence({min:1, max:100});
        this.tagList = this.generateTagList()
    }

    generateTagList(){
        let tagList = []
        let tagsCount = Math.random(15)
        for(let i = 0; i < tagsCount; i++){
            let tag = faker.lorem.word()
            tagList.push(tag);
        }
        return tagList
    }
}