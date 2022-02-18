// The CRUD 
const {gql} = require("apollo-server-express");

// a function - the definition of data is listed
// Define Query
const typeDefs = gql`
   type Book {
       _id:ID
       title:String
       author:[String]
       pages:Int
       additional_details:String
   }
   type Query{
       books: [Book]  
       book(title:String!) : Book
   }
   type Mutation{
       addBook(title: String!,author:[String], page:Int,additional_details:String)
   }
`



module.exports = typeDefs;
