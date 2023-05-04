import { gql } from '@apollo/client';


export const CREATE_PLAYER = gql `
mutation CreatePlayer($input: PlayerInput!) {
    createPlayer(input: $input) {
      _id
      phone
      email
      gamerTag
      name
    }
  }`

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