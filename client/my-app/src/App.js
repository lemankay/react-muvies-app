import React, { Component } from 'react';
import Tabs from './components/Tabs/Tabs';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import {ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <Tabs />
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
