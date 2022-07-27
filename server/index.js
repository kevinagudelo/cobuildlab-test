import express from 'express'
import { ApolloServer} from 'apollo-server-express'
import typeDefs from './typeDefs.js'
import {resolvers} from './resolves.js'
async function initServer(){
    const app = express ()
    const apolloServer = new ApolloServer({typeDefs,resolvers})
    await apolloServer.start();
    apolloServer.applyMiddleware({app})
    app.use((req,res) => {
        res.send("Server started successfully")

    })
    const PORT = process.env.PORT ||  3000
    app.listen(PORT, ()=>
    console.log('Servidor corriendo en puerto'+ PORT))
}
initServer()