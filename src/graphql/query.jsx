import { gql } from '@apollo/client';
export const GET_ALL_PEOPLE = gql`
query{
    users{
      id
      fullName
      email
      
    }
  }
  `;

  // export const useUserQuery = () => useQuery(GET_ALL_PEOPLE);