const faker = require('faker')

module.exports = class User{
    
    constructor(){
        this.name = faker.name.findName(),
        this.lastName = faker.name.lastName(),
        this.email = faker.internet.email(),
        this.city = faker.address.city(),
        this.state = faker.address.state(),
        this.country = faker.address.county("Brazil"),
        this.dayLucky = faker.date.recent()
        this.card = faker.helpers.userCard()
    }

     show() {
        console.log(this,this.card.address.geo )
    }

    
}