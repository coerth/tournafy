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

  export const GET_TOURNAMENT_LIST = gql `
  query Tournaments {
    tournaments {
      _id
      name
      tournamentGame
      tournamentType
      maxTeams
      teams {
        _id
      }
      endDate
      startDate
    }
  }`

  export const GET_TOURNAMENT_DETAILED = gql `
  query Query($tournamentId: ID!) {
    tournament(id: $tournamentId) {
      _id
      endDate
      maxTeams
      minTeams
      name
      startDate
      tournamentGame
      tournamentType
      matches {
        _id
        date
        location
        score
        stage
        teams {
          _id
          captain {
            name
            _id
            email
            gamerTag
            phone
          }
          name
          players {
            _id
            email
            gamerTag
            name
            phone
          }
        }
        winner {
          _id
          name
        }
      }
      teams {
        _id
        captain {
          _id
          email
          gamerTag
          name
          phone
        }
        name
        players {
          _id
          name
        }
      }
    }
  }`