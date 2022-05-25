import {gql} from "@apollo/client";

export const ADD_BOOK = gql`
mutation AddBook($bookApiData: ApiBook!) {
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
    addUser(newUser :$NewUser){
        name
        email
        password
    }
}`