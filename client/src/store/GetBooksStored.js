import React,{useContext} from "react";
import { useQuery } from "@apollo/client";
import {BooksSavedByUser} from "./SavedBooksStore";
import {GETUSERME} from "../utils/queries";


const GetBookStored = async () =>{
    const {setBookList} = useContext(BooksSavedByUser)
    const[getuserme, {error}] = useQuery(GETUSERME)
    try {
        const { data } = await getuserme()
        console.log(data)
        setBookList()
    }
    catch(err){
        console.error(err)
    }
    return(<main>
        {getuserme}
        </main>)
}

export default GetBookStored;
