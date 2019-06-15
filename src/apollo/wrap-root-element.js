import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './client';

// wrapRootElement is api from Gatsby; it recieves the root element
export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
