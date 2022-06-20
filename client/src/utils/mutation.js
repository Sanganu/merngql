import {gql} from "@apollo/client";

export const ADD_BOOK = gql`
mutation addBook($bookApiData: NewBook!) {
    addBook(bookApiData: $bookApiData) {
      title
      authors
      id
      description
      image
    }
  }
`


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