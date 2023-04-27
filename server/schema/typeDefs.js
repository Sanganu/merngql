// The CRUD 
const { gql } = require("apollo-server-express");

// a function - the definition of data is listed
// Define Query
const typeDefs = gql`
   input NewItem {
    title: String!
    authors:[String]
    bookId:String!
    description:String
    image:String
    link:String
   }

   type Item{
       bookId:ID!
       title:String
       authors:[String]
       link:String
       description:String
       image:String
   }


   type User {
       _id: ID!
       name: String!
       email:String
       bookCount: Int
       savedItems: [Item]
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
       getAllBooks: [Item]  
       getBook(title:String!) : Item
       getUserMe: User
       getNewBooks(searchTerm:String!): [Item]
       getAllUsers: [User]
   }
   
   type Mutation{
       addToBook(newBooks: [NewItem]) : Item
       addUser(newUser: NewUser ): Auth
       deleteBook(bookId: ID! ):User
       loginUser(email: String!,password:String!):Auth
       addBook(bookApiData: NewItem):User
   }
`


/*

   type ApiItem{
    title: String!
    authors:[String]
    id:String!
    description:String
    image:String  
   }
*/
module.exports = typeDefs;
    //    