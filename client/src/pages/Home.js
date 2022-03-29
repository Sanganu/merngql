import React, { useState } from "react";

import { Form, Message } from 'semantic-ui-react';
import Booklist from "../components/Booklist";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearchBooks = () => {

        console.log(searchTerm)
        return <Booklist searchTerm={searchTerm} />

    }

    return (<>
        <Form success>
            <Form.Input type='text' onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} placeholder="Enter Search String" />
            {/* <Message
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    /> */}

            <button onClick={handleSearchBooks} >Search Books</button>
        </Form>

    </>)
}

export default Home;
