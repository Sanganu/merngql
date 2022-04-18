import React, { useState } from "react";
import axios from "axios";
import { Form, Message } from 'semantic-ui-react';
import Booklist from "../components/Booklist";

const Home = () => {
    const [searchBooks, setSearchBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearchBooks = () => {
        setSearchBooks(true)
        console.log(searchTerm)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
            .then(response => {
              
                let booksList = []
                response.data.items.forEach(element => {
                    booksList.push({
                        title: element.volumeInfo.title,
                        authors: element.volumeInfo.authors,
                        id: element.accessInfo.id,
                        description: element.volumeInfo.description,
                        image: element.volumeInfo.imageLinks.thumbnail
                    })
                });
                setSearchBooks(booksList)
                console.log(searchBooks, "API data")
            })

    }

    return (<>
        {searchBooks.length > 0 ? <>
            {searchBooks.map((book, key) =>
                <Booklist
                    title={book.key}
                    authors={book.authors}
                    id={book.id}
                    description={book.description}
                    image={book.image}
                    key={key} />)}

        </>
            :
            <Form success>
                <Form.Input type='text' onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} placeholder="Enter Search String" />
                {/* <Message
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    /> */}

                <button onClick={handleSearchBooks} >Search Books</button>
            </Form>
        }
    </>)
}

export default Home;
