import dotenv from 'dotenv';
import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import schema from './schema';
import { connect } from 'mongoose';
dotenv.config();

const port = process.env.PORT || 4000;

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
  schema,
  cors: {
    origin: [
      `http://localhost:${process.env.PORT}`,
      `http://localhost:${process.env.CLIENT_PORT}`,
      'https://cocktail-graphql.dovanminhan.com/',
      `${process.env.CLIENT_DOMAIN}`,
    ],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Cocktail-Custom-Header'],
    methods: ['POST'],
  },
});

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

if (!process.env.MONGO_DB) {
  throw new Error('MONGO_DB enviroment variable was not setup.');
}

connect(process.env.MONGO_DB as string).then(() => {
  console.info('Connected to MongoDB.');
});

// Start the server and you're done!
server.listen(port, async () => {
  console.info(`Server is running on http://localhost:${port}/graphql`);
});
