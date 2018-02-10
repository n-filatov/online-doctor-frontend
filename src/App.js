import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Router from './routes';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8081/graphql' }),
  cache: new InMemoryCache(),
});

export default () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);