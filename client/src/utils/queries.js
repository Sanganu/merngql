import {gql} from "@apollo/client";
export const QUERY_BOOKS = gql `
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
    getBook{
            _id
            title
            author
            id
            description
            publsihedDate
        }

    }
    ge5UserMe{
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
}
`