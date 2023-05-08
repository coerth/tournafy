import { gql } from '@apollo/client';

  export const CREATE_TOURNAMENT = gql `
  mutation CreateTournament($input: TournamentInput!) {
    createTournament(input: $input) {
      _id
      name
      endDate
      matches {
        _id
        location
      }
      maxTeams
      minTeams
      startDate
      teams {
        _id
      }
      tournamentType
    }
  }
  `