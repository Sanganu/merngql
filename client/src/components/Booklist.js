import React from "react";
import {useQuery} from "@apollo/client"
import {GETNEWBOOKS} from "../utils/queries";
import { Card, Icon } from 'semantic-ui-react'
const BookList= ({title,authors,id,description,image})=> {
  
  
    
    const extra = (
      <a>
        <Icon name='user' />
        Author:{authors}
      </a>
    )
  return(
      <Card
        image={image}
        header={title}
        meta={id}
        description={description}
        extra={extra}
      />
    )
    
   
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
