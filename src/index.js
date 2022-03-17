import React from "react";
import ReactDOM from "react-dom";
import App from './routes/App';
import {ApolloProvider} from '@apollo/client';
import { client } from './graphql/client';

ReactDOM.render(
 
     <ApolloProvider client={client}>
        <App />
     </ApolloProvider>,
     


  document.getElementById("root")
);
