const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema");
const {auth} = require("./Auth");
const db = require("./config/connection");
const PORT = process.env.PORT || 3003;
// on top of express to handle data request
// getNewBooks:[NewBook]
async function startgraphqlServer() {
    const graphqlserver = new ApolloServer({
        typeDefs, //how our data looks
        resolvers,
        context:auth // methods to interact with api calls
    })

    await graphqlserver.start()
    const app = express();


    graphqlserver.applyMiddleware({ app });
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())


    db.once('open', () => {
        console.log('DB initaliz ed');
        app.listen(PORT, () => {
            console.log('Express App is running on port');
            console.log(`graphql end point http://localhost:${PORT}/${graphqlserver.graphqlPath}`)
        })

    })

}

startgraphqlServer()