import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../utils/mutation";
import { Card, Icon, Image, Button } from 'semantic-ui-react'



const BookList = ({ title, authors, id, description, image }) => {
  const [addBook, { error }] = useMutation(ADD_BOOK);

  const saveBook = () => {

      addBook({
        variables: {
          title: title,
          authors: authors,
          id: id,
          description: description,
          image: image
        }
      })
      if(error){
        alert(error)
      }
      console.log("Book Saved")
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
        <Button onClick={saveBook} basic color='green'>
          Save Book
    </Button>
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
