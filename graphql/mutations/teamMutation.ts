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

  export const DELETE_TEAM = gql `
  mutation Mutation($deleteTeamId: ID!) {
    deleteTeam(id: $deleteTeamId)
  }`