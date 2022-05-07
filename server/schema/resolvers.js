const  Book  = require("../models/Item");
const { signToken } = require("../Auth");
const axios = require("axios");

const resolvers = {
    Query: {
        getAllBooks: async (parent, args) => {
             Book.find({})
             .then(records => records)
             .catch(error => {
                 console.log("Error in getting all books",error)
                 return error
             })
        },
        getBook: async (parent, { title }) => {
            return Book.findOne({ title })
        },
        getUserMe: async (parent, args) => {
            return User.findOne({ _id: context.user_id }).select('password')
        },
        getNewBooks: async (parent, { searchTerm }) => {
            console.log("Search", searchTerm)
            const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
            axios.get(queryURL)
               .then( async ({data}) => {
             
                let items = data.items
                // console.log(queryURL,items)
                //   let storedBooks =  Book.find({}).select('id')
                //   return({storedBooks,items})
                // }).then(({storedBooks,items} ) => {
                let newSearchBooks =  items.map(element => {
                 
                    // let newBook;
                    // if (storedBooks.indexOf(element.id) === -1) {
                        let newBook = {
                            title: element.volumeInfo.title ||"Unknown Title",
                            authors: element.volumeInfo.authors ||["Author info is missing"],
                            id: element.id,
                            description: element.volumeInfo.description || "Description Not Available"
                        }
                    // }
                    return newBook;
                });
                console.log("SEARCHBOOKS",newSearchBooks)
                return newSearchBooks;
            }).then(formattedBooks =>{ 
                console.log("API Books formatted",formattedBooks)
                return  formattedBooks;
            })

        }

    },
    Mutation: {
        addBooks: async (parent, args) => {
            const newBooks = await Book.insertMany(args);//args are the field values
           console.log("New Book",newBooks)
            return newBooks;
        },
        addUser: async (parent, args) => {
            console.log("User",args)
            const newUser = await User.create(args);
            const jwtSign = signToken(newUser)
            return { jwtSign, newUser };
        },
        addBook: async(parent,args) =>{
            console.log("ADD New Book",args)
            const newBook = await Book.create(args);
            console.log("add book",newBook)
            return newBook;
        }
    }
}




module.exports = resolvers;



