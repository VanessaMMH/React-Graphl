import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';
import { gql } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { ApolloProvider } from '@apollo/client';
import { relayStylePagination } from "@apollo/client/utilities";
import {HOSTSERVER} from '../constants/hostserver.constants'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiOTNhNTk5YTFkMmQ4IiwicHJvamVjdElkIjoiZmEyOWNmOWEtM2RlMi00MGExLTlhMjktYTA4YWM3MjcwOGNjIiwiZnVsbE5hbWUiOiJWYW5lc3NhIE1heXJhIE1hY2VkbyBIdWFtYW4iLCJlbWFpbCI6Im1haHVhLmVhQGdtYWlsLmNvbSIsImlhdCI6MTY0NzAzOTE0OX0.31uptpveYXZtIdi-9JZkX7Zt9z7t3cu-kWQahK5GJ5c'
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






export  const client = new ApolloClient({
    uri: concat(authMiddleware, httpLink),
    cache: new InMemoryCache({
       
    })
});



  

