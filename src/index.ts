import { ApolloServer } from 'apollo-server';
import schema from './schema.graphql';

async function main() {
  const typeDefs = schema;

  const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopi',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  const resolvers = {
    Query: {
      books: () => books,
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
}

main().catch(e => console.error(e));
