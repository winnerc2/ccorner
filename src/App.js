import React from 'react';
import TabContainer from './components/TabContainer.js';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import NotepadTabsQuery from "./queries/NotepadTabs.js";
const endpoint = require('./graphql-interface/endpoint.js');
const client = new ApolloClient({
  uri: {endpoint}
});


function App() {

  return (
    <ApolloProvider client={client}>
    <div className="App">
      
      <header className="App-header">
        <h1>This is the banner CCorner</h1>
      </header>
      
      
      <div className="content">
        <TabContainer activeTab="Null"/>
      </div>


      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <h1>{NotepadTabsQuery()}</h1>
      </footer>
    
    </div>
    </ApolloProvider>
  );
}

export default App;
