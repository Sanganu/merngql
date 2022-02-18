const {Book}= require("../models");

const resolvers = {
    Query: {
        books: async() =>{
            return( Book.find())
        },
        book:async(parent,(title) => {
            return( Book.findOne(title))
        })
    },
    Mutations:{
        addBook : async(parent,args) => {
           const newBook = await   Book.insertMany(args);
           return newBook;
        }
    }
}

module.exports = resolvers;
