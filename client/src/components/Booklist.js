import React ,{useState} from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../utils/mutation";
import { Card, Icon, Image, Button } from 'semantic-ui-react'



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


    <Card>
      <Card.Content>
        <Image src={image} size="medium" circular verticalAlign='middle' />{' '}
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
        <p>
          <Icon name='user' />
          Author/s:{authors}
        </p>
        {status ?
          <Button onClick={saveBook} basic color='green'>
            Save Book
    </Button> : <h6>Book already Saved</h6>}
      </Card.Content>
  
    </Card>
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
