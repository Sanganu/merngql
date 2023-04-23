import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
}
  from '@apollo/client';

import { onError } from "@apollo/client/link/error"
import Landing from "./pages/Landing";
import Navigation from "./components/Navbar";
import Searchbooks from "./pages/Search";
import Savebooks from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import { setContext } from "@apollo/client/link/context";
// Error handling the simplest method suggested in the GraphQL documentation
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    console.log(`GraphQL Errors _______${graphqlErrors}______________End GraphQL Errors`)
  }
  if (networkError) {
    console.log(`Graph network error *****${networkError}*****end network error`);
  }
});

const link = createHttpLink({ uri: "/graphql" })

//Adding JWT token to all request as authorization header(meetup API - example) - constructing the request middleware
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('jwtidtoken')//Storing the web token and retrive it
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer token is ${token}` : ''  //headers are returned to context so that httpLink can read the tokens if valid
    }
  }
})
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link)
})


function App() {
  const [activeItem, setActiveItem] = useState("home")
  const renderPage = (activeItem) => {
    setActiveItem(activeItem)
  }
  
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navigation renderPage={renderPage} activeItem={activeItem} />
 
          <main className="container">
              {activeItem === "home" && <Landing />}
              {activeItem === "signup" && <Signup     />}
              {activeItem === "login" && <Login />}
              {activeItem === "savebooks" && <Savebooks />}
              {activeItem === "searchbooks" && <Searchbooks />}
              {activeItem === "logoff" && <Landing />}
          </main>
     
      </div>
    </ApolloProvider>
    );
}
      
export default App;
