import React from 'react';
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
import Search from "./pages/Search";
// import Navigation from "./components/Navbar";
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
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Landing />
        <Search />
      </div>
    </ApolloProvider>
  );
}

export default App;
