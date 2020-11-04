import path from 'path';
import createInstance from 'fastify';
import { ApolloServer } from 'apollo-server-fastify';
import schema from './schema.graphql';

async function main() {
  const app = createInstance();
  const typeDefs = schema;
  const resolvers = {};
  const server = new ApolloServer({ typeDefs, resolvers });
  app.register(server.createHandler());
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
  });
  const url = await app.listen(8000);
  console.log(`🚀  Server ready at ${url}`);
}

main().catch(console.error);
