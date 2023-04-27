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
      gamerTag
      name
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
        endDate
        _id
        matches {
          date
          location
          score
          stage
          teams {
            name
            captain {
              name
            }
          }
          winner {
            name
          }
        }
        startDate
        teams {
          captain {
            name
          }
          name
          players {
            gamerTag
            name
          }
        }
      }
    }
    
      `