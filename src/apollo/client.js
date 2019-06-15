import ApolloClient from 'apollo-boost';
// use fetch that runs on server and client
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://dog-graphql-api.glitch.me/graphql',
  fetch,
});
