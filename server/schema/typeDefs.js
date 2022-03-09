// The CRUD 
const {gql} = require("apollo-server-express");

// a function - the definition of data is listed
// Define Query
const typeDefs = gql`
   type Book
       _id:ID!
       title:String
       author:[String]
       id:String
       description:String
       publishedDate:Date
   }
   type User {
       _id: ID!
       name: String!
       email:String
       bookCount: Int
       savedBooks: [Book]
   }
   type Auth{
       token: ID!
       user: User
   }

   input NewBook {
    title: String!
    author:[String]
    id:String!
    description:String
    publishedDate:Date
   }

   input NewUser {
    name: String!
    email:String
    bookCount: Int
    savedBooks: [Book]
   }

   type Query{
       getAllBooks: [Book]  
       getBook(title:String!) : Book
       getUserMe: User
   }
   
   type Mutation{
       addBook(newBook: NewBook) : Book
       addUser(newUser: NewUSer ): User
       deleteBook(bookId: ID! ):User
       login(email: String!,password:String!):Auth
   }
`



module.exports = typeDefs;
