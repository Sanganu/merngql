const {Book}= require("../models");

const resolvers = {
    Query: {
        getAllBooks: async() =>{
            return Book.find()  
         },
        getBook:async(parent,{title}) => {
            return Book.findOne({title})
        }
    },
    Mutation:{
        addBook : async(parent,args) => {
           const newBook = await  Book.insertMany(args);//args are the field values
           return newBook;
        }
    }
}




module.exports = resolvers;
