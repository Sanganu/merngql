// The CRUD 
const { gql } = require("apollo-server-express");

// a function - the definition of data is listed
// Define Query
const typeDefs = gql`
   input NewBook {
    title: String!
    authors:[String]
    id:String!
    description:String
    image:String
   }

   type Book{
       _id:ID!
       title:String
       authors:[String]
       id:String
       description:String
       image:String
   }
   type User {
       _id: ID!
       name: String!
       email:String
       bookCount: Int
       savedItems: [Book]
   }
   
   type Auth{
       token: ID!
       user: User
   }

   type ApiBook{
    title:String
    authors:[String]
    id:String
    description:String
    image:String
   }
 
   input NewUser {
            name: String!
            email:String!
             password:String!
   }

   type Query{
       getAllBooks: [Book]  
       getBook(title:String!) : Book
       getUserMe: User
       getNewBooks(searchTerm:String!): [ApiBook]
   }
   
   type Mutation{
       addBooks(newBooks: [NewBook]) : Book
       addUser(newUser: NewUser ): User
       deleteBook(bookId: ID! ):User
       login(email: String!,password:String!):Auth
       addBook(newBook: NewBook):Book
   }
`



module.exports = typeDefs;
    //    