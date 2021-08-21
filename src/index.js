import express from 'express'
import schema from "./schema"
const graphqlHTTP = require('express-graphql').graphqlHTTP;


const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
})


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, () => console.log('server on port 3000'));