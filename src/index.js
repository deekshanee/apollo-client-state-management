import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, HttpLink } from 'apollo-boost';
import { resolvers, typeDefs } from "./resolvers";
import { InMemoryCache } from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import {client} from './client';
// configure the apollo client
//configure the local cache

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>,
   

  </React.StrictMode>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
