import {faker} from "@faker-js/faker";

export class User{
    constructor(){
        this.username = faker.person.firstName();
        this.password = faker.internet.password();
        this.email = faker.internet.email();
    }
}