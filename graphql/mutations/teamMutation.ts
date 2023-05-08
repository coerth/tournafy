import { gql } from '@apollo/client';


  export const CREATE_TEAM = gql `
  mutation CreateTeam($input: TeamInput!) {
    createTeam(input: $input) {
      name
      captain {
        _id
        email
        name
      }
      _id
    }
  }`