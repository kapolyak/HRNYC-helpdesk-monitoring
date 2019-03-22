import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { VM_URL } from "./../../config.js";

const App = require('./components/app.jsx').App;

const client = new ApolloClient({
  uri: VM_URL
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