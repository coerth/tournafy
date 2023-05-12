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
  }
}

  `

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