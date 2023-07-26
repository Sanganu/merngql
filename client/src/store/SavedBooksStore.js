import { createContext, useContext, useState,useEffect} from "react";
import GetBooksStored from "./GetBooksStored";
import { GETUSERME } from "../utils/queries";
import {useQuery, useMutation } from "@apollo/client";

export const BooksSavedByUser = createContext(null);
const SavedBookStore = () => {
    const [bookList, setBookList] = useState([])
    const {loading, data} = useQuery(GETUSERME)
    const userBook = data?.getUserMe|| {}
    
   
        console.log("USER BOOK",userBook)
   
    return(<div className ="container">
        <BooksSavedByUser.Provider value={{bookList,setBookList}}>
            <GetBooksStored />
          
        </BooksSavedByUser.Provider>
    </div>)
}


export default SavedBookStore;