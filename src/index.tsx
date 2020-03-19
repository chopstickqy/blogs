import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: (operation) => {
      
      const token = localStorage.getItem('github_token') || null;
   
      // const token = '9df884b03017c0653bffd93a1255f1347d4297fd';
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      })
    }
});



ReactDOM.render(
    <ApolloProvider client={client}>
            <App />
    </ApolloProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
