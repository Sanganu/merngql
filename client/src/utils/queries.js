
import {gql} from "@apollo/client";
export const GET_ALL_BOOKS = gql `
query getAllBooks
{
    getAllBooks {
        books{
            _id
            title
            author
            id
            description
            publishedDate
        }
        
    }
}`
export const GETBOOK = gql`
query getBook
{  getBook{
            _id
            title
            author
            id
            description
            publsihedDate
    }
}`

export const GETUSERME = gql`
query getUserMe
{  getUserMe{
        name
        email
        bookCount
        savedBooks {
        title
        author
        id
        description
        publishDate
        }
    }
}`

export const GETNEWBOOKS = gql `
query getNewBooks($searchTerm :String!)
{   getNewBooks{
        title
        authors
        id
        description
    }
}
`

// import {gql} from "@apollo/client";
// export const QUERY_BOOKS = gql `
// {
//     getAllBooks {
//         books{
//             _id
//             title
//             author
//             id
//             description
//             publishedDate
//         }
        
//     }
//     getBook{
//             _id
//             title
//             author
//             id
//             description
//             publsihedDate
//     }
//     getUserMe{
//         name
//         email
//         bookCount
//         savedBooks {
//         title
//         author
//         id
//         description
//         publishDate
//         }
//     }
//     getNewBooks{
//         title
//         authors
//         id
//         description
//     }
// }
// `