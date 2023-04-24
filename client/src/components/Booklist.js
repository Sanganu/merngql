import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../utils/mutation";
import Auth from "../utils/auth";
import { savedBooksList, getSavedBooksList } from "../utils/localStorage"



const BookList = ({ title, authors, id, description, image }) => {
  const [savedBooks, setSavedBooks] = useState(getSavedBooksList())
  const [AddBook, { error }] = useMutation(ADD_BOOK);
  const [status, setStatus] = useState("false")

  const addBookToDB = () =>{
    console.log("Add to db ")
  }

  const saveBook = async (event) => {
        event.preventDefault()
        const userToken = Auth.loggedIn() ? Auth.getToken() : null;
        // if (!userToken) {
        //   return false;
        // }
        console.log("BooksAPI", title, authors, id, userToken )
        try {
          const { data } = await AddBook({
            variables: {
              bookApiData: {
                title: title,
                authors: authors,
                id: id,
                description: description,
                image: image
              }
            }
          })

          console.log("Book Saved", data)
          setSavedBooks([...savedBooks, data._id])
        } catch (err) {
          console.error("Error in saving book", err)
        }
  }

  return (
      <article className="card-project m-5 p-5">    
           <h3 className="font-extrabold">Title: {title}</h3> 
           <img src={image} alt={title} className="img-project" />
           <h4 className="font-normal">Book Description: {description}</h4>
           <p className="font-bold">Author/s:{authors}</p>
                {status ?
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={saveBook} color='green'>
                    Save Book
                </button> : <h6>Book already Saved</h6>}
      </article>
  )


}

export default BookList;
