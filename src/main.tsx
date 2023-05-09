import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, concat } from '@apollo/client';
import App from './App'
import { Router } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context';
import { cache } from './client/cache';

const httpLink = new HttpLink({uri: "http://localhost:3000/graphql"})

const authLink = setContext((_, {headers, ...context}) => {
  const token = localStorage.getItem('auth:token');
  return {
    headers: {
      ...headers,
      ...(token ? {authorization:  token} : {}),
    },
    ...context,
  };
});

const client = new ApolloClient({

 link: concat(authLink, httpLink),
  cache: cache,

});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
)
