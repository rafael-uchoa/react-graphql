import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}
