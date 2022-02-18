const express = require("express");
const  { ApolloServer } = require("apollo-server-express");
const {typeDefs,resolvers} = require("./schema");

const db = require("./config/connection");
const PORT = process.env.PORT || 3001;
// on top of express to handle data request
async function startgraphqlServer () {
const graphqlserver = new ApolloServer({
    typeDefs, //how our data looks
    resolvers // methods to interact with api calls
})

await graphqlserver.start()
const app = express();


graphqlserver.applyMiddleware({ app });
app.use(express.urlencoded({extended:true}))
app.use(express.json())


db.once('open',()=>{
    console.log('DB initalized');
    app.listen(PORT,()=>{
        console.log('Express App is running on port');
        console.log(`graphql end point http://localhost:${PORT}.${graphqlserver.graphqlPath}`)
    })

})

}

startgraphqlServer()