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
   type ApiBook{
    title: String!
    authors:[String]
    id:String!
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
       addToBook(newBooks: [NewBook]) : Book
       addUser(newUser: NewUser ): Auth
       deleteBook(bookId: ID! ):User
       loginUser(email: String!,password:String!):Auth
       addBook(bookApiData: NewBook!):Book
   }
`



module.exports = typeDefs;
    //    