

const { User, Book } = require("../models");
const { signToken } = require("../Auth");
const axios = require("axios");
const { AuthenticationError } = require('apollo-server-express')

const resolvers = {
    Query: {
        getAllBooks: async (parent, args) => {
            Book.find({})
                .then(records => records)
                .catch(error => {
                    console.log("Error in getting all books", error)
                    return error
                })
        },
        getBook: async (parent, { title }) => {
            return Book.findOne({ title })
        },
        getUserMe: async (parent, args, context) => {
            if (context.user) {
                const userDashboard = User.findOne({ _id: context.user_id }).select('-__v -password');
                return userDashboard;
            }
            throw new AuthenticationError('Not logged in');
        },
        getNewBooks: async (parent, { searchTerm }) => {
            console.log("Search", searchTerm)
            const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
            axios.get(queryURL)
                .then( ({ data }) => {

                    let items = data.items
                    // console.log(queryURL,items)
                    //   let storedBooks =  Book.find({}).select('id')
                    //   return({storedBooks,items})
                    // }).then(({storedBooks,items} ) => {
                    let newSearchBooks = items.map(element => {

                        // let newBook;
                        // if (storedBooks.indexOf(element.id) === -1) {
                        let newBook = {
                            title: element.volumeInfo.title || "Unknown Title",
                            authors: element.volumeInfo.authors || ["Author info is missing"],
                            id: element.id,
                            description: element.volumeInfo.description || "Description Not Available",
                            image:"Image not available"
                        }
                        // }
                        return newBook;
                    });
                    console.log("SEARCHBOOKS", newSearchBooks)
                    return newSearchBooks;
                })
                // .then(formattedBooks => {
                //     console.log("API Books formatted", formattedBooks)
                //     return formattedBooks;
                // })

        }

    },
    Mutation: {
        addBook: async (parent, {bookApiData}, context) => {
            if (context.user) {
                console.log("addbook",bookApiData)
                const addUserBooks = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedItems: bookApiData } },
                    { new: true }
                )

                console.log("New Book", addUserBooks)
                return addUserBooks;
            }
            throw new AuthenticationError("Please Login to save book")
        },
        deleteBook: async (parent, args, context) => {
            if (context.user) {
                const addUserBooks = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedItems: args.bookId } },
                    { new: true }
                )

                console.log("New Book", addUserBooks)
                return addUserBooks;
            }
            throw new AuthenticationError("Please Login to save book")
        },
        addUser: async (parent, args) => {
            console.log("User", {name:args.newUser.name,
                email:args.newUser.email,password:args.newUser.password})
            const newUser = await User.create({name:args.newUser.name,
            email:args.newUser.email,password:args.newUser.password});
            const jwtSign = signToken(newUser)
            console.log(jwtSign,newUser)
            const myUser = {
                name: newUser.name,
                email: newUser.email,
                _id: newUser._id
            }
            return { token:jwtSign, user: myUser };
        },
        addToBook: async (parent, args, context) => {
            if (context.user) {
                console.log("ADD New Book", args)
                const newBooks = await Book.insertMany(args);
                console.log("add book", newBooks)
                return newBook;
            }
            throw new AuthenticationError("Please Login to save book")
        },
        loginUser: async (parent, { email, password }) => {
            const validUser = await User.findOne({ email })
            if (validUser) {
                const checkPassword = validUser.isCorrectPassword(password)
                if (checkPassword) {
                    const myUser = {
                        name: validUser.name,
                        email:validUser.email,
                        _id: validUser._id
                    }
                    const jwtSign = signToken(validUser)
                    return {  token:jwtSign, user: myUser }
                }
                throw new AuthenticationError("Invalid Login password mismatch")
            }
            throw new AuthenticationError("Invalid User login User doesn't exist")
        }
    }
}




module.exports = resolvers;



