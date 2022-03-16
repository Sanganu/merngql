import React,{useState} from "react";

const Home = () => {
    const [searchTerm,setSearchTerm]=useState("");

    const handleSearchBooks = () => {
        console.log(searchTerm)
    }
    return (<>
        <main>
                <div className="control">
                     <label className="label">Enter Search String:</label>
                    <input className="input" value={searchTerm} name="bookToSearch"type="text" onChange={(event)=>setSearchTerm(event.target.value)} placeholder="Enter Book details to search"/>
                    <button onClick={handleSearchBooks} className="button is-link">Submit</button>
                </div>
        </main>
    </>)
}
        
export default Home;
