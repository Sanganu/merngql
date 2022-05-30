import React,{useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
}
  from '@apollo/client';
// import {setContext} from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error"
import Landing from "./pages/Landing";
import Navigation from "./components/Navbar";
import Searchbooks from "./pages/Search";
import Savebooks from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

// Error handling the simplest method suggested in the GraphQL documentation
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    console.log(`GraphQL Errors _______${graphqlErrors}______________End GraphQL Errors`)
  }
  if(networkError){
    console.log(`Graph network error *****${networkError}*****end network error`);
  }
});

const link = from([
  errorLink,
 new HttpLink({uri:"http://localhost:3003/graphql"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


function App() {
  const [activeItem,setActiveItem]=useState("home")
  const renderPage = (activeItem) =>{
    setActiveItem(activeItem)
  }
  return (
    <ApolloProvider client={client}>
      <div className="App">
      <Navigation renderPage={renderPage} activeItem={activeItem}/>
      {activeItem==="home" && <Landing />}
      {activeItem === "signup" && <Signup/>}
      {activeItem === "login" && <Login />}
      {activeItem === "savebooks" && <Savebooks />}
      {activeItem === "searchbooks" && <Searchbooks />}
      {activeItem === "logoff" && <Landing />}
      </div>
    </ApolloProvider>
  );
}




export default App;
