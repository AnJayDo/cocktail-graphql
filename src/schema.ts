import fs from 'node:fs';
import path from 'node:path';
import { createSchema } from 'graphql-yoga';
import resolvers from './resolvers'

const schema = createSchema({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
  resolvers,
});

export default schema;
