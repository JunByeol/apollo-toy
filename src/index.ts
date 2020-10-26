import { ApolloServer } from 'apollo-server';
import typeDefs from '~/src/schema.graphql';

async function main(): Promise<void> {
  const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
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
