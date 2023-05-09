import { gql } from '@apollo/client';

  export const SIGN_UP = gql `
  mutation Mutation($input: RegisterInput!) {
    register(input: $input) {
      _id
      email
      gamerTag
      name
      phone
    }
  }
  `