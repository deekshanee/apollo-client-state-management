
import { ApolloClient, HttpLink } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, typeDefs } from "./resolvers";
export const cache = new InMemoryCache();
export const  client = new ApolloClient({
    cache,
    link: new HttpLink({
      uri: "http://localhost:4000/graphql"
    }),
    typeDefs,
    resolvers

  });
  cache.writeData({
    data: {
      users: [
       ],
       step:0
    }
  });