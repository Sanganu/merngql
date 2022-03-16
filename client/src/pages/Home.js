import React,{useState} from "react";

const Home = () => {
    const [searchTerm,setSearchTerm]=useState("");

    const handleSearchBooks = () => {

    }
    return (<>
        <main>
                <div class="control">
                     <label class="label">Enter Search String:</label>
                    <input class="input" name="bookToSearch"type="text" onChange={(event)=>setSearchTerm(event.target.value)} placeholder="Enter Book details to search"/>
                    <button class="button is-link">Submit</button>
                </div>
        </main>
    </>)
}
        
export default Home;
