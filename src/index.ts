import dotenv from 'dotenv';
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import schema from './schema'
import { connect } from 'mongoose';
dotenv.config();
 
const port = process.env.PORT || 4000

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ 
  schema,
})
 
// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

connect('mongodb://mongo:rwXH0euiYqIXeyDbyvEo@containers-us-west-174.railway.app:7627').then(() => {
  console.info('Connected to MongoDB.');
})
 
// Start the server and you're done!
server.listen(port, async () => {
  console.info(`Server is running on http://localhost:${port}/graphql`)
})