const faker = require("faker");
const db = require("../config/connection");
const {Book}=require("../models");

db.once('open',async () => {
    await Book.deleteMany();
    const dbList = [];
    for(let i=0;i<30;i++){
        const title = faker .company.catchPhrase();
        const author = faker.name.findName()
        const pages = faker.dataType.number();
        dbList.push({title,author,pages})
    }
    let insertedData = await Book.collection.insertMany(dbList);
    console.log("Data seeded in the table");
    console.log("======================");
    console.table(dbList);
    console.table(insertedData);
    process.exit(0)
});
