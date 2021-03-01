import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./App.css";
import logo from "./logo.png";

import Launches from "./components/launches"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <img
        src={logo}
        alt="SpaceX"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
      <Launches />
    </div>
    </ApolloProvider>
  );
}

export default App;
