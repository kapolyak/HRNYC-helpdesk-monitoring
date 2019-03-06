import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const App = require('./components/app.jsx').App;

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <div>
      <App />
    </div>
  </ApolloProvider>
);

ReactDOM.render(
  <ApolloApp />,
  document.getElementById("app")
);