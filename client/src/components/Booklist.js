import React ,{useState} from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../utils/mutation";
import Auth from "../utils/auth";
import {savedBooksList,getSavedBooksList} from "../utils/localStorage"



const BookList = ({ title, authors, id, description, image }) => {
  const [savedBooks,setSavedBooks] = useState(getSavedBooksList())
  const [addBook, { error }] = useMutation(ADD_BOOK);
  const [status, setStatus] = useState("false")
  const saveBook = async () => {
    const userToken = Auth.loggedIn() ? Auth.getToken() : null;
    if(!userToken){
      return false;
    }
    try {
      const {data} = await addBook({
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

      console.log("Book Saved",data)
      setSavedBooks([...savedBooks,data._id])
    } catch (err) {
      console.error("Error in saving book", err)
    }
  }

  return (<div>


    <section>
      <article>
        <img src={image} size="medium"  />
        <h4>{title}</h4>
        <p>{description}</p>
        <p>
          <img name='user' />
          Author/s:{authors}
        </p>
        {status ?
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={saveBook}  color='green'>
            Save Book
    </button> : <h6>Book already Saved</h6>}
      </article>
  
    </section>
  </div>)
  
  
  }
  
// const BookList= ({searchTerm})=> {
//     const{loading,error,data} = useQuery(GETNEWBOOKS,{variables:{searchTerm}});
//     if(loading) {return "Please wait";}
//     if (error) {return `Error ${error}`}
//     if(data) {console.log(data);}

//     // console.log(userData)

//     return(<>
//     <h1>Book List</h1>
//     </>)
// }
export default BookList;
