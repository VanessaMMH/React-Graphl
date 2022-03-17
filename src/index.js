import React from "react";
import ReactDOM from "react-dom";
import App from './routes/App';
import { ApolloClient, gql, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

import { CookiesProvider } from "react-cookie";
import { ApolloProvider } from '@apollo/client';
import { useAppApolloClient } from './graphql/client';


const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiOTNhNTk5YTFkMmQ4IiwicHJvamVjdElkIjoiZmEyOWNmOWEtM2RlMi00MGExLTlhMjktYTA4YWM3MjcwOGNjIiwiZnVsbE5hbWUiOiJWYW5lc3NhIE1heXJhIE1hY2VkbyBIdWFtYW4iLCJlbWFpbCI6Im1haHVhLmVhQGdtYWlsLmNvbSIsImlhdCI6MTY0NzAzOTE0OX0.31uptpveYXZtIdi-9JZkX7Zt9z7t3cu-kWQahK5GJ5c'
const httpLink = new HttpLink({ BASE_URL: 'https://syn-api-prod.herokuapp.com/graphql'});



const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
      headers: {
        authorization: token,
      },
    });

    return forward(operation);
  });

const client = new ApolloClient({
    uri: concat(authMiddleware, httpLink),
    cache: new InMemoryCache({

    })
});


ReactDOM.render(
  <CookiesProvider>
    <ApolloProvider client={client }>

      <App />



    </ApolloProvider>
  </CookiesProvider>,





  document.getElementById("root")
);
