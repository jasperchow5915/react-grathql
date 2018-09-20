import * as React from 'react';
import Courses from './components/Courses';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Programming Booking List</h2>
      <Courses/>
    </div>
  </ApolloProvider>
);

export default App;
