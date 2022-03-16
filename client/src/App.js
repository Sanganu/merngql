import React from 'react';
import {ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink}
  from '@apollo/client';
import {onError} from "@apollo/client/link/error"
import Landing from "./pages/Landing";
;
import "./App.css";

// Error handling the simplest method suggested in the GraphQL documentation
const errorLink = onError(({graphqlErrors,networkError}) => {
  if (graphqlErrors){
    console.log(graphqlErrors)
  }
});

const link = createHttpLink({
    errorLink,
   uri : 'graphql'
  })
const client = new ApolloClient({
  cache:new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
    <Landing/>
    <Home />
        
     </div>  
     </ApolloProvider> 
  );
}

export default App;
