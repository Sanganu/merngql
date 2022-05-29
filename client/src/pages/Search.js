import React, { useState } from "react";
import axios from "axios";
import { Card,Form } from 'semantic-ui-react';
import Booklist from "../components/Booklist";

const Home = () => {
    const [searchBooks, setSearchBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearchBooks = () => {
        setSearchBooks(true)
        console.log(searchTerm,"ST")
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
            .then(response => {

                let booksList = []
                response.data.items.forEach(element => {
                    booksList.push({
                        title: element.volumeInfo.title,
                        authors: element.volumeInfo.authors ||["Author information not available"],
                        id: element.accessInfo.id,
                        description: element.volumeInfo.description,
                        image: element.volumeInfo.imageLinks.smallThumbnail || "/images/placeholder-images.jpg"
                    })
                });
                setSearchBooks(booksList)
                console.log(searchBooks, "API data")
            })

    }

    return (
    <Card.Group centered>
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
                <button onClick={handleSearchBooks} >Search Books</button>
            </Form>
        }
    </Card.Group>
   )
}

export default Home;

