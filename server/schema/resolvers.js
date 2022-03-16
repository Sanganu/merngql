const {Book}= require("../models");

const resolvers = {
    Query: {
        getAllBooks: async(parent,args) =>{
            return Book.find()  
         },
        getBook:async(parent,{title}) => {
            return Book.findOne({title})
        },
        getUserMe: async(parent,args)=> {
            return User.findOne({_id:context.user_id}).select('password')
        }
    },
    Mutation:{
        addBooks : async(parent,args) => {
           const newBook = await  Book.insertMany(args);//args are the field values
           return newBook;
        },
        addUser: async(parent,args) => {
            const newUser = await User.create(args);
            return newUser;
        }
    }
}




module.exports = resolvers;
