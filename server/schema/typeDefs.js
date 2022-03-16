// The CRUD 
const { gql } = require("apollo-server-express");

// a function - the definition of data is listed
// Define Query
const typeDefs = gql`
   input NewBook {
    title: String!
    author:[String]
    id:String!
    description:String
    
   }

   type Book{
       _id:ID!
       title:String
       author:[String]
       id:String
       description:String
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

 
   input NewUser {
    name: String!
    email:String
  
   }

   type Query{
       getAllBooks: [Book]  
       getBook(title:String!) : Book
       getUserMe: User
   }
   
   type Mutation{
       addBooks(newBook: NewBook) : Book
       addUser(newUser: NewUser ): User
       deleteBook(bookId: ID! ):User
       login(email: String!,password:String!):Auth
   }
`



module.exports = typeDefs;
