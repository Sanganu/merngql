import React ,{useState} from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../utils/mutation";




const BookList = ({ title, authors, id, description, image }) => {
  const [addBook, { error }] = useMutation(ADD_BOOK);
  const [status, setStatus] = useState("false")
  const saveBook = () => {
    try {
      const savedB = addBook({
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

      console.log("Book Saved",savedB)
    } catch (err) {
      console.error("Error in saving book", err)
    }
  }

  return (<div>


    <section>
      <article>
        <img src={image} size="medium" circular verticalAlign='middle' />{' '}
        <h4>{title}</h4>
        <p>{description}</p>
        <p>
          <img name='user' />
          Author/s:{authors}
        </p>
        {status ?
          <button onClick={saveBook} basic color='green'>
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
