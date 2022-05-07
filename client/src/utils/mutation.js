import {gql} from "@apollo/client";

export const ADD_BOOK = gql`
    mutation addBook($bookData: NewBook!){
        addBook(newBook:$bookData){

            title
            authors
            id
            description
            image
            Book{
                _id
                title
                authors
                id
                description
                image
            }
        }
    }
`


export const ADD_USER = gql `
mutation  addUser($newUser : NewUser!){
    addUser(newUser :$NewUser){
        name
        email
        password
    }
}`