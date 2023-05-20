import { gql } from '@apollo/client';

  export const UPDATE_MATCH = gql `
  mutation Mutation($updateMatchId: ID!, $input: MatchInput!) {
    updateMatch(id: $updateMatchId, input: $input) {
      _id
      score
      winner {
        _id
        name
      }
      location
      stage
    }
  }
  `