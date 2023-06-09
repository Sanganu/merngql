import {gql} from "@apollo/client";

export const ADD_BOOK = gql
`mutation addBook($newItem: NewItem) {
    addBook(newItem: $newItem) {
      _id
      bookCount
      email
      savedItems {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }`


export const ADD_USER= gql `
mutation  addUser($newUser : NewUser!){
    addUser(newUser :$newUser){
        token
        user{
            name
            email
        }
    }
}`

export const LOGIN_USER = gql `
mutation loginUser($email: String!, $password:String!){
    loginUser(email:$email,password:$password){
        token
        user{
            name
            email
        }
    }
}
`

export const DELETE_BOOK = gql `
mutation deleteBook($bookId: String!){
    deleteBook(bookId:$bookId){
        token
        user{
            name
            email
        }   
    }
}
`


/*
mutation addBook($newItem: NewItem!) {
    addBook(newItem: $newItem) {
        email
        name
        savedItems {
          authors
          bookId
          description
          image
          link
          title
        }
    }
  }
`
*/