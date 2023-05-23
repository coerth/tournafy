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

  export const ADD_TEAM_TO_TOURNAMENT = gql `
  mutation AddTeamToTournament($addTeamToTournamentId: ID!, $input: AddTeamInput!) {
    addTeamToTournament(id: $addTeamToTournamentId, input: $input) {
      _id
      endDate
      maxTeams
      minTeams
      name
      startDate
      teams {
        _id
        name
      }
      tournamentGame
      tournamentType
    }
  }`

  export const DELETE_TOURNAMENT = gql `
  mutation DeleteTournament($deleteTournamentId: ID!) {
    deleteTournament(id: $deleteTournamentId)
  }`