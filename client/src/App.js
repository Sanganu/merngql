import React from 'react';
import {ApolloClient,InMemoryCcache,ApolloProvider,createHttpLink, InMemoryCache}from '@apollo/client';
import {onError} from "@apollp/client/link.error"

import "./App.css";
const errorLink = onError(({graphqlErrors,networkError}) => {
  if (graphqlErrors){
    graphqlErrors.map(({message,location,path}) => {
      alert(`GraphQL Errors ${message} / Path -${path}/ Location =${location}`)
    })
  }
})
const link = from([
    errorLink,
  new HttpLink({url:"http://localhost:/3001/grphql"})
])
const client = new ApolloClient({
  cache:new InMemoryCache,
  link: link
})

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
        <p>Check</p>        
     </div>   
  );
}

export default App;
