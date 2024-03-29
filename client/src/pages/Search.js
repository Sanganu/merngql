import React, { useState } from "react";
import axios from "axios";

import Booklist from "../components/Booklist";

const Home = () => {
    const [searchBooks, setSearchBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchBooks = (event) => {
        event.preventDefault()
        setSearchBooks(true)
        console.log(searchTerm, "ST")
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
            .then(response => {

                let booksList = []
                console.log(response)
                response.data.items.forEach(element => {
                    try {
                        booksList.push({
                            title: element.volumeInfo.title,
                            authors: element.volumeInfo.authors || ["Author information not available"],
                            bookId: element.id,
                            description: element.searchInfo.textSnippet,
                            image: element.volumeInfo.imageLinks.smallThumbnail || element.volumeInfo.imageLinks.thumbnail
                             || "/images/placeholder-images.jpg",
                             link: element.volumeInfo.imageLinks.smallThumbnail
                        })
                    } catch (err) {
                        console.warn("unable to retrive", element, err)
                    }
                });
                setSearchBooks(booksList)
                console.log(searchBooks, "API data",booksList)
            })

    }

    return (<main className="container mx-auto centered ">
        <h3 className="text-3xl font-bold underline">Search Books</h3>
        <section className="container centered flex flex-wrap justify-evenly gap-x-2.5">
            {searchBooks.length > 0 ?
       
                searchBooks.map((book, key) =>
                    <Booklist
                        title={book.title} 
                        authors={book.authors}
                        bookId={book.bookId}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        key={key} />)
                    

                :
                <div className="page-container ml-0 bg-white rounded-xl shadow-md overflow-hidden ">
                <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                   <h3>Search Books</h3>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} placeholder="Enter Search String" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
                    onClick={handleSearchBooks} >Search Books</button>
                </form>
                </div>
            }
        </section>
    </main>)
}

export default Home;

