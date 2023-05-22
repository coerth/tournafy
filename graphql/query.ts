import { gql } from '@apollo/client';


export  const GET_PLAYERS = gql `
    
query GetPlayers {
    players {
      _id
      email
      gamerTag
      name
      phone
    }
  }

  `

  export  const GET_TEAMS = gql `
    
query GetTeams {
  teams {
    _id
    name
    captain {
      name
    }
    players {
      _id
      gamerTag
      name
      email
      phone
    }
    tournaments {
      name
      startDate
      endDate
      tournamentGame
    }
  }
}
  `

  export const GET_TEAMS_LIST = gql `
  query Teams {
    teams {
      _id
      name
      players {
        _id
      }
    }
  }`

  export const GET_TEAM_DETAILED = gql `
  query Team($teamId: ID!) {
    team(id: $teamId) {
      _id
      name
      tournaments {
        _id
        name
        endDate
        maxTeams
        minTeams
        startDate
        tournamentGame
        tournamentType
      }
      captain {
        _id
        email
        gamerTag
        name
        phone
      }
      players {
        _id
        email
        gamerTag
        name
        phone
      }
    }
  }`

  export  const GET_MATCHES = gql `
    
  query GetTeams {
    matches {
      _id
      date
      location
      score
      stage
      teams {
        name
      }
      winner {
        name
      }
    }
  }
  
    `
    export  const GET_TOURNAMENTS = gql `
    
    query GetTournaments {
      tournaments {
        _id
        endDate
        matches {
          _id
          date
          location
          score
          stage
          teams {
            _id
            name
          }
          winner {
            _id
            name
          }
        }
        maxTeams
        minTeams
        name
        startDate
        tournamentGame
        tournamentType
        teams {
          _id
          captain {
            _id
            name
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
      }
    }
    
      `

    export  const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const LOGGED_IN_PLAYER = gql `
  query LoggedInPlayer
  {
    loggedInPlayer @client
  }
`

export const GET_TOURNAMENT_MATCH = gql `
    
query Tournament($tournamentId: ID!) {
  tournament(id: $tournamentId) {
    _id
    matches {
      _id
      stage
      teams {
        _id
        name
      }
    }
  }
}

  `;

  export const GET_TOURNAMENTS_AND_TEAMS = gql `
  query TournamentsAndTeams {
    tournaments {
      _id
      name
    }
    teams {
      _id
      name
    }
  }
  `