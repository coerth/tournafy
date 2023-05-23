import { gql } from '@apollo/client';

  export const LOG_IN = gql `
  mutation Mutation($input: SignInInput!) {
    sign_in(input: $input) {
      player {
        _id
        email
        gamerTag
        name
        phone
      }
      token
      adminAccess
    }
  }
  `