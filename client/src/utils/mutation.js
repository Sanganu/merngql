import {gql} from "@apollo/client";

export const ADD_BOOK = gql`
    mutation addBook($bookData: BookInput!){
        addBook(bookData:$bookData){
            title
            authors
            id
            description
            image
        }
    }
`


